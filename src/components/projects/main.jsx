export default function Projects({ children }) {
    return (
        <div className="p-2">
            <div className="max-w-2xl mx-auto my-8">
                <div className="max-w-2xl mx-auto p-6">
                    <h2 className="text-xl font-semibold mb-4">PROJECTS</h2>
                </div>
                {children}
            </div>
        </div>
    );
}
