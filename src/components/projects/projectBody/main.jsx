import React from 'react';

export default function ProjectBody({ title, date, description, company, children }) {
    return (
        <div className="text-gray-600">
            <div className="mb-2">
                {company && <h2 className="text-xl font-semibold mb-4">{company}</h2>}
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{title}</h3>
                    <span className="text-sm">{date}</span>
                </div>
                <p className="text-sm mb-4">{description}</p>
                <div className="pl-5 space-y-2">
                    {children}
                </div>
            </div>
        </div>
    );
}
