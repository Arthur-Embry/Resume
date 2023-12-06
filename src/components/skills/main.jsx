import React from 'react';

export default function Skills({ skillList }) {
    const skills = skillList || ['Hello','World','!'];

    return (
        <div className="p-2 mt-2 pb-8">
            <div className="border-b-2 border-black pb-2">
                <h2 className="text-2xl font-semibold">SKILLS</h2>
            </div>
            <div className="skill-container ">
                {skills.map((skill, index) => (
                    <p key={index} className="skill-underline text-xs">{skill}</p>
                ))}
            </div>
        </div>
    );
}
