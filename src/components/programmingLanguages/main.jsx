
import ProgrammingLanguageBody from "./programmingLanguageBody/main";
export default function ProgrammingLanguages({title,children}) {
    return (
        <div className="p-2 pt-2">
            <div className="border-b-2 border-black pb-2">
                <h2 className="text-2xl font-semibold">{title || "PROGRAMMING LANGUAGES"}</h2>
            </div>
            <div className="">
                { children || <ProgrammingLanguageBody/>}
            </div>
            
        </div>
    );
}
