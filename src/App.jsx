import Header from './components/header/main'
import Experience from './components/experience/main'
import Projects from './components/projects/main'
import Languages from './components/languages/main'
import ProgrammingLanguages from './components/programmingLanguages/main'
import ProgrammingLanguageBody from './components/programmingLanguages/programmingLanguageBody/main'
import Skills from './components/skills/main'
import Education from './components/education/main'
import ExperienceBody from './components/experience/experienceBody/main'
import ProjectBody from './components/projects/projectBody/main'
import ATSOptimizer from './components/atsOptimizer/main'
import Volunteering from './components/volunteering/main'
import VolunteeringBody from './components/volunteering/volunteeringBody/main'
import References from './components/references/main'
import EducationBody from './components/education/educationBody/main'

export default function App() {
  return (
    <div className="bg-gray-100 h-full" id="content">
      <ATSOptimizer />
      <div className="flex flex-wrap h-full">
          <Header />
        <div className="w-3/5 p-2">
          <Experience>
            <ExperienceBody title="Lead Full-Stack Developer" company="Syrahealth" date="01/2023 - Present" location="Carmel, Indiana, United States - Remote" description="Drove innovation and efficiency in machine learning applications.">
              <li className="text-sm"><strong>Innovation in Machine Learning:</strong> Pioneered the company's use of ggml format for background transformer inference jobs on serverless container nodes, <span className="bg-yellow-200">boosting inference efficiency by 30%</span>.</li>
              <li className="text-sm"><strong>Enhanced Data Privacy Compliance:</strong> Improved redaction rate from previous SOTA 70% with spaCy NER CRF to 90% with transformer QLora, achieving <span className="bg-yellow-200">higher HIPAA & GDPR</span> compliance in data management.</li>
              <li className="text-sm"><strong>Healthcare Tech Development:</strong> Contributed to the creation of user-friendly tools for patient engagement and health outcomes, integrating transformers for behavioral analysis over <span className="bg-yellow-200">GAD7 and PHQ-9</span>.</li>
              <li className="text-sm"><strong>UI/UX and System Architecture:</strong> Developed intuitive interfaces using HTMX and React with Vite, and managed REST connections with <span className="bg-yellow-200">FastAPI, Celery, and RabbitMQ in an MVC</span> architecture.</li>
              <li className="text-sm"><strong>Cloud and Scalability Expertise:</strong> Orchestrated a <span className="bg-yellow-200">multi-cloud architecture across GCP & AWS</span>, focusing on serverless containers and horizontally distributed databases with sharding.</li>
              <li className="text-sm"><strong>DevOps and Telehealth Innovation:</strong> Optimized workflows with Docker, Terraform, and GitHub Actions in an Agile environment, and integrated telehealth features with advanced NLP tools in <span className="bg-yellow-200">VLLM and Exllama frameworks</span>.</li>
            </ExperienceBody>
            <ExperienceBody title="Full Stack Developer" company="Radcube" date="01/2023 - 06/2023" location="Fully remote" description="Accelerated AI adoption and enhanced SaaS cloud services.">
              <li className="text-sm"><strong>Innovation in AI and ML:</strong> Pioneered the adoption of Exllama transformers pipeline in RadCube, significantly increasing transformer <span className="bg-yellow-200">inference speed by x</span>, and integrated advanced ML models including zero-shot MNLIs, GPTs, and seq2seq models.</li>
              <li className="text-sm"><strong>SaaS and Cloud Services Development:</strong> Customized a chatbot in partnership with syrahealth, involving a search engine combined with cloud services, and <span className="bg-yellow-200">RAG operations over 50 summarized webpages PDFs, images</span>, and other file formats with an average content length of over 600 words.</li>
              <li className="text-sm"><strong>DevOps and Agile Project Management:</strong> Managed serverless container provisioning for efficient deployment, implemented <span className="bg-yellow-200">custom build packs for FastAPI</span>, and collaborated with executives on agile task scoping and timing, ensuring optimal project execution.</li>
              <li className="text-sm"><strong>Full-Stack Development and Security:</strong> Built a secure authentication system with bidirectional encryption, developed UI/UX templates, including <span className="bg-yellow-200">rapid prototyping for pitch decks</span>, and maintained both staging and production environments.</li>
            </ExperienceBody>
            <ExperienceBody title="CTO & Co-Founder" company="OperatorAI" date="02/2022 - Present" location="San Marcos, Texas" description="Optimized global deployment and spearheaded ML automation initiatives.">
              <li className="text-sm"><strong>Global Load Balancing and Deployment Expertise:</strong> Demonstrated proficiency in deploying backend <span className="bg-yellow-200">services across all 109 GCP zones</span>, leveraging an integrated global load balancer for optimal performance.</li>
              <li className="text-sm"><strong>Advanced DevOps and CI/CD Skills:</strong> Engineered a custom GitHub Actions distribution pipeline with efficient <span className="bg-yellow-200">container build times of under 2 minutes</span>, and established robust DevOps workflows including <span className="bg-yellow-200">self-documenting APIs</span> and automated traffic management.</li>
              <li className="text-sm"><strong>Machine Learning and Automation Innovation:</strong> Integrated key machine learning libraries (Tesseract, Diffusers, Transformers) for advanced text and image processing, and spearheaded the development of a Robotic Process Automation SDK.</li>
              <li className="text-sm"><strong>Full-Stack Development and Management:</strong> Designed, built and maintained a react-vite site, <span className="bg-yellow-200">optimized UX flow</span>, and managed a comprehensive software stack, including serverless backend architecture and Git integration.</li>
              <li className="text-sm"><strong>Security and Authorization Systems:</strong> Implemented <span className="bg-yellow-200">OAuth 2 for secure user authorization</span> and managed encrypted key systems, ensuring robust data protection and privacy standards.</li>
              <li className="text-sm"><strong>Leadership and Strategic Planning:</strong> Founded the company as a <span className="bg-yellow-200">40% shareholder</span>, contributed to corporate strategy and legal compliance, and allocated tasks for SaaS workload management.</li>
            </ExperienceBody>
            <ExperienceBody title="Web Developer" company="shopknights" date="05/2020 - 02/2021" location="Austin, Texas" description="Enhanced e-commerce capabilities and contributed to open-source projects.">
              <li className="text-sm"><strong>CodePen Portfolio & Open-Source Contributions:</strong> Enhanced my CodePen account, now containing over <span className="bg-yellow-200">300 MIT-licensed pages and website components</span>, showcasing a diverse range of coding skills and a commitment to open-source development.</li>
              <li className="text-sm"><strong>E-commerce and Web Design Expertise:</strong> Specialized in e-commerce and web design, focusing on cross-device internet transactions, AI integration, and graphic design.</li>
              <li className="text-sm"><strong>Project Management & Development:</strong> Utilized Git for version control in software development and effectively <span className="bg-yellow-200">coordinated with management on project timelines and scopes</span>.</li>
              <li className="text-sm"><strong>Team Collaboration & Documentation Skills:</strong> Actively participated in team meetings with valuable contributions, authored code enhancements for future releases, and <span className="bg-yellow-200">established comprehensive guidelines</span> for organizational efficiency, onboarding, and development processes.</li>
            </ExperienceBody>
            <ExperienceBody title="Assistant to Financial Manager" company="Keller Williams" date="06/2019 - 11/2019" location="Austin, Texas" description="Streamlined data management for the accounting team.">
              <li className="text-sm"><strong>Managed accounting-team data:</strong> Entered and organized payroll, adjustments, and monthly accrual information.</li>
              <li className="text-sm"><strong>Reported financial discrepancies to management.</strong></li>
              <li className="text-sm"><strong>Edited account spreadsheets, and assigned entries.</strong></li>
            </ExperienceBody>
          </Experience>
        </div>
        <div className="w-2/5 p-2">
          <Projects>
              <ProjectBody  className="pl-5" title="Syrenity - AI Telehealth Platform" date="01/2023 - 09/2023" description="Spearheaded the Syrenity project to build AI-first telehealth platform as a progressive web app." company="Syrahealth">
                <p className="text-sm mb-4">
                  See <a className="text-blue-300 hover:text-blue-200" href="https://www.syrahealth.com/behavioral-and-mental-health/syrenity" target="_blank">www.syrahealth.com/behavioral-and-mental-health/syrenity</a> for more details.
                </p>
                <p className="text-sm mb-4">
                  As a result of this project, Syra Health was able to represent themselves as a tech-forward company. This enhancement raised the value of the company for an eventual <span className="bg-yellow-200">IPO market cap of $26.01M</span>.
                </p>
              </ProjectBody>
              <ProjectBody  className="pl-5" title="BlogMonster" date="03/2022 - Present" description="A comprehensive blogging platform with advanced content management features, designed for OperatorAI." company="OperatorAI">
                <p className="text-sm mb-4">
                  For more details, visit <a className="text-blue-300 hover:text-blue-200" href="https://operatorai.com" target="_blank">operatorai.com</a>.
                </p>
                <p className="text-sm mb-4">
                  This allows the creation of an <span className="bg-yellow-200">SEO optimized article in under 60 seconds</span>, complete with 4-6 paragraphs, a diffusion powered image and link placeholders and can be used to generate content for any niche.
                  It is designed to be used under a kron job, and on an hourly schedule we estimate that it <span className="bg-yellow-200">saves over $14k monthly</span>, based on the 20$ per article cost of a outsourced writer.
                </p>
              </ProjectBody>
          </Projects>
          <Skills skillList={[
              'Agile','Business Development','ScrumBan','Leadership',
              'React','HTML','HTMX','JQuery','JS','CSS','React-Router','React-DOM',
              'Transformers','Diffusors','GANs','Quantization','Python','C++','PyTorch','TensorFlow',
              'Docker','Github Actions','Terraform','CI/CD',
              'IndexedDB','PostgreSQL','SupaBase','FireStore','Redis',
              'MVC','FastAPI','Celery','RabbitMQ','Flower','REST APIs'
          ]}/>
          <ProgrammingLanguages>
            <ProgrammingLanguageBody title="Frontend Languages">React, Typescript, Javascript, Angular, HTML, HTMX, CSS, Sass, Pug, Bootstrap</ProgrammingLanguageBody>
            <ProgrammingLanguageBody title="Backend Languages">Python, C++, C, Node.js, Docker, Bash, Github actions, Docker-Compose, SQL, Java, Terraform</ProgrammingLanguageBody>
          </ProgrammingLanguages>
          <Languages languageDict = {{
              English: "Fluent",
              Spanish: "Conversational",
          }}/>
          <Education>
            <EducationBody 
                degree="Studied Full Stack Development, College of Computer Science" 
                fieldOfStudy="Computer Science" 
                institution="Texas State University"
                dateRange="08/2021 - 12/2022"
            />
            <EducationBody 
                degree="Magnet Academy endorsed Diploma" 
                fieldOfStudy="STEM track" 
                institution="Liberal Arts & Science Academy"
                dateRange="08/2021 - 12/2022"
            />
          </Education>
          <Volunteering>
              <VolunteeringBody 
                  title="Community Outreach Volunteer" 
                  organization="Central Texas Childrens home"
                  date="Dec 2013 - Present"
                  location="Austin, Texas"
                  description="Planned and assisted in the annual Christmas party."
              />
          </Volunteering>
          <References referencesDict = {{
              'Aaron Smothers': 'CTO, Lobby Studios',
              'Srikant Devaraj': 'VP of Health Analytics',
              'Travis Somerville': 'Business Development Leader',
          }}/>
        </div>
      </div>
    </div>

    
  )
}
