import React from 'react';

export default function ExperienceBody({ company, date, location, description, children }) {
    return (
        <div className="text-gray-600">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{company || "Syra Health"}</h3>
                <span className="text-sm">{date || "01/2023 - Present"}</span>
            </div>
            <p className="text-sm mb-1">{location || "Carmel, Indiana, United States - Remote"}</p>
            <p className="text-sm mb-4">{description || "Healthcare company actively creating tools designed to enhance patient engagement and improve health outcomes, with a focus on user-friendly, intuitive, and cross-platform support."}</p>
            <ul className="list-disc pl-5 space-y-2">
                {children || [
                    <li key="1" className="text-sm">Integration of transformers for Behavioral Analysis over GAD7 and PHQ-9.</li>,
                    <li key="2" className="text-sm">Secure Data Handling and Privacy with GDPR and HIPAA compliance.</li>,
                    <li key="3" className="text-sm">Development of Intuitive UI/UX with HTMLX and React, running on vite.</li>,
                    <li key="4" className="text-sm">Documentation and REST connections with FastAPI, Celery and RabbitMQ in a MVC architecture.</li>,
                    <li key="5" className="text-sm">Scalability and Cloud Integration with multi-cloud architecture spanning GCP & AWS, Serverless Containers and horizontally distributed DBs (with sharding).</li>,
                    <li key="6" className="text-sm">DevOps and Workflow Optimization with Docker, Terraform, Github Actions in an Agile methodology.</li>,
                    <li key="7" className="text-sm">Telehealth Integration with scheduling links, and a search engine over the existing website using cosine similarity over quantized page embeddings.</li>,
                    <li key="8" className="text-sm">Custom Tools for NLP utilizing the LLVM shared attention framework, and modified Exllma kernels with logit bias and stop sequence in the generators.</li>
                ]}
            </ul>
        </div>
    );
}