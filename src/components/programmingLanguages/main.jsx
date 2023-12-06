
import ProgrammingLanguageBody from "./programmingLanguageBody/main";
export default function ProgrammingLanguages({title,children}) {
    return (
        <div className="p-2">
            <div className="border-b-2 border-black pb-2">
                <h2 className="text-2xl font-semibold">{title || "PROGRAMMING LANGUAGES"}</h2>
            </div>
            <div className="p-4">
                { children || <ProgrammingLanguageBody/>}
            </div>
            
        </div>
    );
}
