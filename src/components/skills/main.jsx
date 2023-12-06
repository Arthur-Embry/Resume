import React from 'react';

export default function Skills({ skillList }) {
    const skills = skillList || ['Hello','World','!'];

    return (
        <div className="p-2 mt-2">
            <div className="border-b-2 border-black pb-2">
                <h2 className="text-2xl font-semibold">SKILLS</h2>
            </div>
            <div className="skill-container p-6">
                {skills.map((skill, index) => (
                    <p key={index} className="skill-underline">{skill}</p>
                ))}
            </div>
        </div>
    );
}
