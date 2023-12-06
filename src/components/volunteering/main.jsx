import React from "react";
import SectionHeader from "../sectionHeader/main";
import VolunteeringBody from "./volunteeringBody/main";

export default function Volunteering({ title, children }) {
    return (
        <div className="p-2">
            {<SectionHeader>{title || "VOLUNTEERING"}</SectionHeader>}
            {React.Children.map(children, (child, index) => (
                <div key={index} className="max-w-2xl mx-auto pt-4">
                    {child}
                </div>
            ))}
        </div>
    );
}
