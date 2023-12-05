import React from 'react';

export default function ProjectBody({ title, date, description, company, children }) {
    return (
        <div className="text-gray-600">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{company || "Company Name"}</h3>
                <span className="text-sm">{date || "MM/YYYY - Present"}</span>
            </div>
            <p className="text-sm mb-1">{title || "Project Title"}</p>
            <p className="text-sm mb-4">{description || "Project description goes here."}</p>
            <ul className="list-disc pl-5 space-y-2">
                {children}
            </ul>
        </div>
    );
}
