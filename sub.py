import argparse
import os
import subprocess
import datetime
# Create an ArgumentParser object
parser = argparse.ArgumentParser()

# Add a positional argument for the subdomain
parser.add_argument("subdomain", help="The subdomain")

# Parse the command-line arguments
args = parser.parse_args()

# Access the value of the subdomain argument
subdomain = args.subdomain

# validate the subdomain as all lowercase letters
if subdomain.islower() == False:
    print("Error: Subdomain must be all lowercase letters")
    exit()

# Use the subdomain variable in your code
print(subdomain)

# Run an os command to echo the subdomain
os.system("echo " + subdomain)

gcloud_network_commands=f"""
gcloud compute network-endpoint-groups create {subdomain}-operatorai-lb-neg --region=us-central1 --network-endpoint-type=serverless --cloud-run-service={subdomain}-actions-workflow-manager
gcloud compute backend-services create {subdomain}-operatorai-lb-backend-service --global --load-balancing-scheme=EXTERNAL --protocol=HTTP
gcloud compute backend-services add-backend {subdomain}-operatorai-lb-backend-service --global --network-endpoint-group={subdomain}-operatorai-lb-neg --network-endpoint-group-region=us-central1
gcloud compute addresses create {subdomain}-operatorai-lb-ip --global
gcloud compute url-maps create {subdomain}-operatorai-lb-domain-map --default-service {subdomain}-operatorai-lb-backend-service
gcloud compute target-http-proxies create {subdomain}-operatorai-lb-http-proxy --url-map={subdomain}-operatorai-lb-domain-map
gcloud compute forwarding-rules create {subdomain}-operatorai-lb-forwarding-rule --global --target-http-proxy={subdomain}-operatorai-lb-http-proxy --ports=80 --address={subdomain}-operatorai-lb-ip
gcloud compute addresses describe {subdomain}-operatorai-lb-ip --global --format="get(address)"
#yields the right ip address (very important, point an A record to this ip address)
gcloud compute ssl-certificates create operatorai-lb-certs-{subdomain} --domains={subdomain}.operatorai.com
gcloud compute target-https-proxies create {subdomain}-operatorai-lb-https-proxy --url-map={subdomain}-operatorai-lb-domain-map --ssl-certificates=operatorai-lb-certs-{subdomain}
gcloud compute forwarding-rules create {subdomain}-operatorai-lb-https-forwarding-rule --global --target-https-proxy={subdomain}-operatorai-lb-https-proxy --ports=443 --address={subdomain}-operatorai-lb-ip
gcloud compute target-https-proxies update {subdomain}-operatorai-lb-https-proxy --ssl-certificates=operatorai-lb-certs-{subdomain}
gcloud compute backend-services update {subdomain}-operatorai-lb-backend-service --global --enable-cdn
"""
split_commands=gcloud_network_commands.split("\n")
#filter out empty strings and lines that start with #
split_commands=[x for x in split_commands if x and not x.startswith("#")]

# Run the gcloud commands
for command in split_commands:
    os.system(command)

github_actions=f"""name: cloudrun-deploy
on:
  push:
    branches:
      - main
jobs:
  setup-build-publish-deploy:
    name: Setup, Build, Publish, and Deploy
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v2

    # Setup gcloud CLI
    - uses: google-github-actions/setup-gcloud@v0
      with:
        service_account_email: ${{{{ secrets.GCP_EMAIL }}}}
        service_account_key: ${{{{ secrets.GCP_CREDENTIALS }}}}
        export_default_credentials: true
    
    # Configure Docker with Credentials
    - name: Configure Docker
      run: |
        gcloud auth configure-docker
      
    # Build the Docker image
    - name: Build & Publish
      run: |
        gcloud config set project awali-beta-393801
        # Use a different variable for the image name
        gcloud builds submit --tag gcr.io/awali-beta-393801/{subdomain}-awali-image
        gcloud config set run/region us-central1
      
    # Deploy the Docker image to the GKE cluster
    - name: Deploy
      run: |
        gcloud run deploy {subdomain}-actions-workflow-manager --image gcr.io/awali-beta-393801/{subdomain}-awali-image \\
        --platform managed \\
        --allow-unauthenticated \\
        --memory 2G"""

# write the word test to .github/workflows/resume-deploy-{subdomain}.yml
with open(".github/workflows/resume-deploy-" + subdomain + ".yml", "w") as f:
    f.write(github_actions)
