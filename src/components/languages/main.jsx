export default function Languages({ languageDict = {
     English: "Fluent",
     Spanish: "Conversational",
} }) {
     return (
          <div className="p-2">
               <div className="border-b-2 border-black pb-2">
                    <h2 className="text-2xl font-semibold">LANGUAGES</h2>
               </div>
               <div className="p-4">
                    {Object.entries(languageDict).map(([language, skillLevel], index, entries) => (
                    <>
                         <div className="flex justify-between items-center mb-2 mt-4">
                              <h3 className="font-semibold">{language}</h3>
                              <span className="text-sm">{skillLevel}</span>
                         </div>
                         {index !== entries.length - 1 && <div className="border-t border-dashed border-gray-400 my-2"></div>}
                    </>
               ))}
               </div>
               
          </div>
     );
}
