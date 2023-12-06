import React from 'react';
import EducationBody from './educationBody/main';

export default function Education({ children }) {
    return (
        <div className="p-2">
            <div className="border-b-2 border-black pb-2">
                <h2 className="text-2xl font-semibold">EDUCATION</h2>
            </div>
            <div className="p-4">
                {React.Children.map(children, (child, index) => (
                    <div key={index}>{child}</div>
                ))}
            </div>
        </div>
    );
}
