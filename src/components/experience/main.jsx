import React from "react";
import SectionHeader from "../sectionHeader/main";
import ExperienceBody from "./experienceBody/main";

export default function Experience({ title, children }) {
    return (
        <div className="max-w-2xl mx-auto my-8 mt-10">
            {<SectionHeader>{title || "Experience"}</SectionHeader>}
            {
                React.Children.map(children, (child, index, array) => {
                    const title = child.props.title || "Software Development Contractor";
                    const isLast = index === array.length - 1;
                    return (
                        <>
                            <div className="max-w-2xl mx-auto p-6">
                                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                                {child}
                            </div>
                            {!isLast && <div className="border-t border-dashed border-gray-400 my-8"></div>}
                        </>
                    );
                })
                || 
                <>
                    <div className="max-w-2xl mx-auto p-6">
                        <h2 className="text-xl font-semibold mb-4">Software Development Contractor</h2>
                        <ExperienceBody>
                            <li className="text-sm">Integration of transformers for Behavioral Analysis over GAD7 and PHQ-9.</li>
                            <li className="text-sm">Secure Data Handling and Privacy with GDPR and HIPAA compliance.</li>
                            <li className="text-sm">Development of Intuitive UI/UX with HTMLX and React, running on vite.</li>
                            <li className="text-sm">Documentation and REST connections with FastAPI, Celery and RabbitMQ in a MVC architecture.</li>
                        </ExperienceBody>
                    </div>
                    <div className="border-t border-dashed border-gray-400 my-8"></div>
                </>
            }
        </div>
    );
}
