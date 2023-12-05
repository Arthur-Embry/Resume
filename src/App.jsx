import Header from './components/header/main'
import Experience from './components/experience/main'
import Projects from './components/projects/main'
import Languages from './components/languages/main'
import ProgrammingLanguages from './components/programmingLanguages/main'
import Skills from './components/skills/main'
import Education from './components/education/main'
import Volunteering from './components/volunteering/main'
import ExperienceBody from './components/experience/experienceBody/main'
import ProjectBody from './components/projects/projectBody/main'

export default function App() {
  return (
    <div className="bg-gray-100 h-full">
      <div className="flex flex-wrap h-full">
          <Header />
        {/* Column 1 */}
        <div className="w-3/5 p-2">
          <Experience>
            {/* Business impact: Drove innovation and efficiency in machine learning applications. */}
            <ExperienceBody title="Lead AI Developer" company="Syrahealth" date="Jan 2021 - Present" location="Carmel, Indiana, United States - Remote" description="Drove innovation and efficiency in machine learning applications.">
              <li className="text-sm">Innovation in Machine Learning: Pioneered the company's use of ggml format for background transformer inference jobs on serverless container nodes, boosting inference efficiency by 30%.</li>
              <li className="text-sm">Enhanced Data Privacy Compliance: Improved redaction rate from previous SOTA 70% with spaCy NER CRF to 90% with transformer QLora, achieving higher HIPAA compliance in data management.</li>
              <li className="text-sm">Healthcare Tech Development: Contributed to the creation of user-friendly tools for patient engagement and health outcomes, integrating transformers for behavioral analysis over GAD7 and PHQ-9.</li>
              <li className="text-sm">UI/UX and System Architecture: Developed intuitive interfaces using HTMX and React with Vite, and managed REST connections with FastAPI, Celery, and RabbitMQ in an MVC architecture.</li>
              <li className="text-sm">Cloud and Scalability Expertise: Orchestrated a multi-cloud architecture across GCP & AWS, focusing on serverless containers and horizontally distributed databases with sharding.</li>
              <li className="text-sm">DevOps and Telehealth Innovation: Optimized workflows with Docker, Terraform, and GitHub Actions in an Agile environment, and integrated telehealth features with advanced NLP tools in VLLM and Exllama frameworks.</li>
            </ExperienceBody>
            {/* Business impact: Accelerated AI adoption and enhanced SaaS cloud services. */}
            <ExperienceBody title="Senior Software Engineer" company="Radcube" date="May 2019 - Dec 2020" location="Fully remote" description="Accelerated AI adoption and enhanced SaaS cloud services.">
              <li className="text-sm">Innovation in AI and ML: Pioneered the adoption of Exllama transformers pipeline in RadCube, significantly increasing transformer inference speed, and integrated advanced ML models including zero-shot MNLIs, GPTs, and seq2seq models.</li>
              <li className="text-sm">SaaS and Cloud Services Development: Customized a chatbot in partnership with syrahealth, involving a search engine combined with RAG operations over 50 summarized webpages with an average content length of 1500 words and cloud services.</li>
              <li className="text-sm">DevOps and Agile Project Management: Managed serverless container provisioning for efficient deployment, implemented custom build packs for FastAPI, and collaborated with executives on agile task scoping and timing, ensuring optimal project execution.</li>
              <li className="text-sm">Full-Stack Development and Security: Built a secure authentication system with bidirectional encryption, developed UI/UX templates, including rapid prototyping for pitch decks, and maintained both staging and production environments.</li>
            </ExperienceBody>
            {/* Business impact: Optimized global deployment and spearheaded ML automation initiatives. */}
            <ExperienceBody title="CTO & Co-Founder" company="OperatorAI" date="Jan 2018 - Apr 2019" location="San Marcos, Texas" description="Optimized global deployment and spearheaded ML automation initiatives.">
              <li className="text-sm">Global Load Balancing and Deployment Expertise: Demonstrated proficiency in deploying backend services across all 109 GCP zones, leveraging an integrated global load balancer for optimal performance.</li>
              <li className="text-sm">Advanced DevOps and CI/CD Skills: Engineered a custom GitHub Actions distribution pipeline with efficient container build times of 45 seconds, and established robust DevOps workflows including self-documenting APIs and automated traffic management.</li>
              <li className="text-sm">Machine Learning and Automation Innovation: Integrated key machine learning libraries (Tesseract, Diffusers, Transformers) for advanced text and image processing, and spearheaded the development of a Robotic Process Automation SDK.</li>
              <li className="text-sm">Full-Stack Development and Management: Designed, built and maintained a react-vite site, optimized UX flow, and managed a comprehensive software stack, including serverless backend architecture and Git integration.</li>
              <li className="text-sm">Security and Authorization Systems: Implemented OAuth 2 for secure user authorization and managed encrypted key systems, ensuring robust data protection and privacy standards.</li>
              <li className="text-sm">Leadership and Strategic Planning: Founded the company as a 40% shareholder, contributed to corporate strategy and legal compliance, and allocated tasks for SaaS workload management.</li>
            </ExperienceBody>
            {/* Business impact: Enhanced e-commerce capabilities and contributed to open-source projects. */}
            <ExperienceBody title="Full Stack Developer" company="shopknights" date="Jun 2016 - Dec 2017" location="Austin, Texas" description="Enhanced e-commerce capabilities and contributed to open-source projects.">
              <li className="text-sm">CodePen Portfolio & Open-Source Contributions: Enhanced my CodePen account, now containing over 300 MIT-licensed pages and website components, showcasing a diverse range of coding skills and a commitment to open-source development.</li>
              <li className="text-sm">E-commerce and Web Design Expertise: Specialized in e-commerce and web design, focusing on cross-device internet transactions, AI integration, and graphic design.</li>
              <li className="text-sm">Project Management & Development: Utilized Git for version control in software development and effectively coordinated with management on project timelines and scopes.</li>
              <li className="text-sm">Team Collaboration & Documentation Skills: Actively participated in team meetings with valuable contributions, authored code enhancements for future releases, and established comprehensive guidelines for organizational efficiency, onboarding, and development processes.</li>
            </ExperienceBody>
            {/* Business impact: Streamlined data management for the accounting team. */}
            <ExperienceBody title="Data Analyst Intern" company="Keller Williams" date="Jan 2015 - May 2016" location="Austin, Texas" description="Streamlined data management for the accounting team.">
              <li className="text-sm">Managed accounting-team data, entered and organized payroll, adjustments, and monthly accrual information.</li>
              <li className="text-sm">Reported financial discrepancies to management.</li>
              <li className="text-sm">Edited account spreadsheets, and assigned entries.</li>
            </ExperienceBody>
          </Experience>
        </div>
        {/* Column 2 */}
        <div className="w-2/5 p-2">
          <Projects>
            {/* Example Project: */}
            <ProjectBody title="Project Title" date="Project Date" description="Project Description">
              {/* Project details can be added here as children */}
            </ProjectBody>
          </Projects>
          <Skills />
          <ProgrammingLanguages />
          <Languages />
          <Education />
          <Volunteering />

        </div>
      </div>
    </div>
  )
}
