export default function Projects({ children }) {
    return (
        <div className="p-2">
            <div className="max-w-2xl mx-auto my-4">
                <div className="border-b-2 border-black pb-2">
                    <h2 className="text-2xl font-semibold">PROJECTS</h2>
                </div>
                {children}
            </div>
        </div>
    );
}
