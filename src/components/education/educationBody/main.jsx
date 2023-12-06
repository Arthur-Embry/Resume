import React from 'react';

export default function EducationBody({ degree, fieldOfStudy, institution, dateRange, border=true }) {
    return (
        <div>
            <p className="text-sm font-semibold text-gray-700">{degree || "Degree Name"}, {fieldOfStudy || "Field of Study"}</p>
            <p className="text-sm text-gray-700">{institution || "Institution Name"}</p>
            <p className="text-sm text-gray-500 mt-1">{dateRange || "Start Date - End Date"}</p>
            {border && <div className="border-t border-dashed border-gray-400 my-2"></div>}
        </div>
    );
}
