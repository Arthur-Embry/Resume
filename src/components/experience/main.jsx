import React from "react";
import SectionHeader from "../sectionHeader/main";
import ExperienceBody from "./experienceBody/main";

export default function Experience({ title, children }) {
    return (
        <div className="max-w-2xl mx-auto my-8 mt-10">
            {<SectionHeader>{title || "Experience"}</SectionHeader>}
            {
                React.Children.map(children || [], (child, index, array) => {
                    const title = child.props.title || "Software Development Contractor";
                    const isLast = index === array.length - 1;
                    return (
                        <React.Fragment key={index}>
                            <div className="max-w-2xl mx-auto p-6">
                                <h2 className="text-xl font-semibold mb-4">{title}</h2>
                                {child}
                            </div>
                            {!isLast && <div className="border-t border-dashed border-gray-400 my-8"></div>}
                        </React.Fragment>
                    );
                })
            }
        </div>
    );
}
