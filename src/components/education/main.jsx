import React from 'react';
import EducationBody from './educationBody/main';

export default function Education({ children }) {
    const totalChildren = React.Children.count(children);
    
    return (
        <div className="p-2">
            <div className="border-b-2 border-black pb-2">
                <h2 className="text-2xl font-semibold">EDUCATION</h2>
            </div>
            <div className="mt-4">
                {React.Children.map(children, (child, index) => (
                    React.cloneElement(child, {
                        key: index,
                        border: index !== totalChildren - 1 // Only the last child gets border=false
                    })
                ))}
            </div>
        </div>
    );
}
