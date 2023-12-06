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
import SectionHeader from './components/sectionHeader/main'

function Objectives({ title, objectives }) {
  return (
    <div className="p-4 pt-2 mb-4" style={{background:"whitesmoke"}}>
      <SectionHeader>{title || "EXPERIENCE"}</SectionHeader>
      <ul className="list-disc pl-6 pt-4 text-gray-600">
        {objectives.map((objective, index) => (
          <li key={index} className="text-sm">{objective}</li>
        ))}
      </ul>
    </div>
  );
}


export default function App() {
  return (
    <div className="bg-white h-full" id="content">
      <ATSOptimizer />
      <div className="flex flex-wrap h-full">
          <Header />
        <div className="w-3/5 p-2">
          <Experience>
            <ExperienceBody title="Lead Full-Stack Developer" company="Syrahealth" date="01/2023 - Present" location="Carmel, Indiana, United States - Remote" description="Drove innovation and efficiency in machine learning for healthcare applications.">
                <li className="text-sm">Reduced annual machine learning infrastructure costs from $73k to zero by replacing an EC2 p3.8xl with cloud-run and GGML.</li>
              <li className="text-sm">Increased data redaction for HIPAA & GDPR compliance from 73% to 97% with transformer QLora for healthcare applications.</li>
              <li className="text-sm">Developed patient engagement tools using HTMX, React, and FastAPI in an MVC architecture.</li>
              <li className="text-sm">Implemented multi-cloud architecture with GCP & AWS for scalability and efficiency.</li>
            </ExperienceBody>
            <ExperienceBody title="CTO & Co-Founder" company="OperatorAI" date="02/2022 - Present" location="San Marcos, Texas" description="Optimized global deployment and spearheaded ML automation initiatives.">
              <li className="text-sm">Deployed services capable of accessing all 109 GCP zones with global load balancing for performance optimization.</li>
              <li className="text-sm">Engineered a GitHub Actions pipeline for efficient CI/CD and robust DevOps workflows.</li>
              <li className="text-sm">Led ML and RPA SDK development, integrating advanced text and image processing libraries.</li>
            </ExperienceBody>
            <ExperienceBody title="Full Stack Developer" company="Radcube" date="01/2023 - 06/2023" location="Fully remote" description="Accelerated AI adoption and enhanced SaaS cloud services.">
              <li className="text-sm">Integrated Exllama transformers in place of HF transformers, enhancing inference speed from under 60 t/s to over 90 t/s, reducing GPU server cost by over 50%.</li>
              <li className="text-sm">Developed a chatbot with comprehensive cloud-based search and RAG operations.</li>
              <li className="text-sm">Managed serverless containers and custom FastAPI build packs in Agile projects.</li>
            </ExperienceBody>
            <ExperienceBody title="Web Developer" company="shopknights" date="05/2020 - 02/2021" location="Austin, Texas" description="Enhanced e-commerce capabilities and contributed to open-source projects.">
              <li className="text-sm">Created 300+ MIT-licensed CodePen pages and components, showcasing diverse coding skills.</li>
              <li className="text-sm">Specialized in e-commerce web design with AI integration and graphic design skills.</li>
            </ExperienceBody>
            <ExperienceBody title="Assistant to Financial Manager" company="Keller Williams" date="06/2019 - 11/2019" location="Austin, Texas" description="Streamlined data management for the accounting team.">
              <li className="text-sm">Entered and organized payroll, adjustments, and monthly accrual information.</li>
              <li className="text-sm">Reported financial discrepancies to management.</li>
              <li className="text-sm">Edited account spreadsheets, and assigned entries.</li>
            </ExperienceBody>
          </Experience>
        </div>
        <div className="w-2/5 p-2">
        <Objectives title="CAREER OBJECTIVES"
          objectives={[
            "Gain expertise in machine learning and artificial intelligence.",
            "Contribute to innovative projects that solve real-world problems.",
            "Collaborate with talented individuals in a dynamic team environment.",
          ]} />
          <Projects>
              <ProjectBody  className="pl-5" title="AI telehealth" date="01/2023 - 09/2023" description="Spearheaded the Syrenity project to build AI-first telehealth platform as a progressive web app." company="Syrahealth">
                <p className="text-sm mb-4">
                  See <a className="text-blue-300 hover:text-blue-200" href="https://www.syrahealth.com/behavioral-and-mental-health/syrenity" target="_blank">www.syrahealth.com/behavioral-and-mental-health/syrenity</a> for more details.
                </p>
                <p className="text-sm mb-4">
                  This project positioned Syra Health as a tech-forward company, boosting its IPO value to $26.01M.
                </p>
              </ProjectBody>
              <ProjectBody  className="pl-5" title="Generative Blogs" date="03/2022 - Present" description="Comprehensive blogging platform with advanced content management features." company="OperatorAI">
                <p className="text-sm mb-4">
                  For more details, upon email request I can give access to the <a className="text-blue-300 hover:text-blue-200" href="https://github.com/Operator-AI/nexus.git" target="_blank">blog monster github</a>.
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
          <ProgrammingLanguages title="PROGRAMMING LANGUAGES">
            <ProgrammingLanguageBody title="Frontend Languages">React, Typescript, Javascript, Angular, HTML, HTMX, CSS, Sass, Pug, Bootstrap</ProgrammingLanguageBody>
            <ProgrammingLanguageBody title="Backend Languages">Python, C++, C, Node.js, Docker, Bash, Github actions, Docker-Compose, SQL, Java, Terraform</ProgrammingLanguageBody>
          </ProgrammingLanguages>
          {/*<Languages languageDict = {{
              English: "Fluent",
              Spanish: "Conversational",
          }}/>*/}
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
                dateRange="08/2016 - 05/2020"
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
          {/*<References referencesDict = {{
              'Aaron Smothers': 'CTO, Lobby Studios',
              'Srikant Devaraj': 'VP, Syrahealth',
              'Travis Somerville': 'Director of AI/ML',
          }}/>*/}
        </div>
      </div>
    </div>

    
  )
}
