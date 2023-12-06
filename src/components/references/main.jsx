export default function References({ referencesDict = {
    'John Doe': 'CEO at Company',
    'Jane Smith': 'Professor at University',
} }) {
    return (
        <div className="p-2">
            <div className="border-b-2 border-black pb-2">
                <h2 className="text-2xl font-semibold">REFERENCES</h2>
            </div>
            
            <div className="">
                {Object.entries(referencesDict).map(([name, title], index, entries) => (
                <>
                    <div className="flex justify-between items-center mb-2 mt-4">
                        <h3 className="font-semibold">{name}</h3>
                        <span className="text-sm">{title}</span>
                    </div>
                    {index !== entries.length - 1 && <div className="border-t border-dashed border-gray-400 my-2"></div>}
                </>
            ))}
            <div className="p-2"></div>
            <p className="text-sm">References available on request. Please send an email to arthur@operatorai.com</p>
            </div>
        </div>
    );
}
