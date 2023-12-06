import React from 'react';

export default function VolunteeringBody({ title, organization, date, location, description, children, descriptionExists = false }) {
    return (
        <div className="text-gray-600">
            <h3 className="font-semibold mb-2 text-black">{title || "Volunteer Work"}</h3>
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm  text-black">{organization || "Organization Name"}</span>
                <span className="text-sm  text-black">{date || "Date Range"}</span>
            </div>
            {descriptionExists && (
                <p className="text-sm mb-2 black">{description || "Brief description of your role and responsibilities."}</p>
            )}
            <ul className="list-disc pl-5 space-y-2">
                {children || ""}
            </ul>
        </div>
    );
}
