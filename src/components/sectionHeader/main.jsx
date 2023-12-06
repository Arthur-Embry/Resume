import React from 'react';

export default function SectionHeader(props) {
    return (
        <div className="border-b-2 border-black pb-2">
            <h2 className="text-2xl font-semibold">
                {props.children || 'Hello'}
            </h2>
        </div>
    );
}
