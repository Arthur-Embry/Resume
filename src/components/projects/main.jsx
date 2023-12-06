import React from "react";

export default function Projects({ children }) {
    return (
        <div className="p-2">
            <div className="max-w-2xl mx-auto mb-2">
                <div className="border-b-2 border-black pb-2 mb-6">
                    <h2 className="text-2xl font-semibold">PROJECTS</h2>
                </div>
                {React.Children.map(children, (child, index) => {
                    console.log("found child", child);
                    // Perform any desired operations on each child element
                    return (
                        <>
                            {child}
                            {index !== children.length - 1 && (
                                <div className="border-t border-dashed border-gray-400 my-8"></div>
                            )}
                        </>
                    );
                })}
            </div>
        </div>
    );
}
