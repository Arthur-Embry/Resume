#hacky terraform modules

#get her up and running

gcloud compute network-endpoint-groups create {subdomain}-operatorai-lb-neg --region=us-central1 --network-endpoint-type=serverless --cloud-run-service={subdomain}-actions-workflow-manager
gcloud compute backend-services create {subdomain}-operatorai-lb-backend-service --global --load-balancing-scheme=EXTERNAL --protocol=HTTP
gcloud compute backend-services add-backend {subdomain}-operatorai-lb-backend-service --global --network-endpoint-group={subdomain}-operatorai-lb-neg --network-endpoint-group-region=us-central1
gcloud compute addresses create {subdomain}-operatorai-lb-ip --global
gcloud compute url-maps create {subdomain}-operatorai-lb-domain-map --default-service {subdomain}-operatorai-lb-backend-service
gcloud compute target-http-proxies create {subdomain}-operatorai-lb-http-proxy --url-map={subdomain}-operatorai-lb-domain-map
gcloud compute forwarding-rules create {subdomain}-operatorai-lb-forwarding-rule --global --target-http-proxy={subdomain}-operatorai-lb-http-proxy --ports=80 --address={subdomain}-operatorai-lb-ip
gcloud compute ssl-certificates create operatorai-lb-certs-{subdomain} --domains={subdomain}.operatorai.com
gcloud compute target-https-proxies create {subdomain}-operatorai-lb-https-proxy --url-map={subdomain}-operatorai-lb-domain-map --ssl-certificates=operatorai-lb-certs-{subdomain}
gcloud compute forwarding-rules create {subdomain}-operatorai-lb-https-forwarding-rule --global --target-https-proxy={subdomain}-operatorai-lb-https-proxy --ports=443 --address={subdomain}-operatorai-lb-ip
gcloud compute target-https-proxies update {subdomain}-operatorai-lb-https-proxy --ssl-certificates=operatorai-lb-certs-{subdomain}
gcloud compute backend-services update {subdomain}-operatorai-lb-backend-service --global --enable-cdn

#nuke that bitch

gcloud compute backend-services update {subdomain}-operatorai-lb-backend-service --global --no-enable-cdn --quiet
gcloud compute forwarding-rules delete {subdomain}-operatorai-lb-https-forwarding-rule --global --quiet
gcloud compute target-https-proxies delete {subdomain}-operatorai-lb-https-proxy --quiet
gcloud compute ssl-certificates delete operatorai-lb-certs-{subdomain} --quiet
gcloud compute forwarding-rules delete {subdomain}-operatorai-lb-forwarding-rule --global --quiet
gcloud compute target-http-proxies delete {subdomain}-operatorai-lb-http-proxy --quiet
gcloud compute url-maps delete {subdomain}-operatorai-lb-domain-map --quiet
gcloud compute addresses delete {subdomain}-operatorai-lb-ip --global --quiet
gcloud compute backend-services remove-backend {subdomain}-operatorai-lb-backend-service --global --network-endpoint-group={subdomain}-operatorai-lb-neg --network-endpoint-group-region=us-central1 --quiet
gcloud compute backend-services delete {subdomain}-operatorai-lb-backend-service --global --quiet
gcloud compute network-endpoint-groups delete {subdomain}-operatorai-lb-neg --region=us-central1 --quiet

#figure out wtf is going on

gcloud compute network-endpoint-groups list --filter="name:{subdomain}-operatorai-lb-neg"
gcloud compute backend-services describe {subdomain}-operatorai-lb-backend-service --global
gcloud compute addresses describe {subdomain}-operatorai-lb-ip --global
gcloud compute url-maps describe {subdomain}-operatorai-lb-domain-map
gcloud compute target-http-proxies describe {subdomain}-operatorai-lb-http-proxy
gcloud compute forwarding-rules describe {subdomain}-operatorai-lb-forwarding-rule --global
gcloud compute ssl-certificates list --filter="name:operatorai-lb-certs-{subdomain}"
gcloud compute target-https-proxies describe {subdomain}-operatorai-lb-https-proxy
gcloud compute forwarding-rules describe {subdomain}-operatorai-lb-https-forwarding-rule --global
gcloud compute backend-services describe {subdomain}-operatorai-lb-backend-service --global --format="get(enableCDN)"