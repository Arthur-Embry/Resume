export default function ProgrammingLanguageBody({ title, children }) {
    return (
        <div className="mt-4">
            <p className="font-bold mb-2">{title || "Frontend Languages"}</p>
            <p className="text-gray-700 text-sm">{children || "React, Typescript, Javascript, Angular, HTML, HTMX, CSS, Sass, Pug, Bootstrap"}</p>
        </div>
    );
}
