import { JavaScriptIcon, LaravelIcon, MariadbIcon, NextJSIcon, PhpIcon, PostgreIcon, PythonIcon, ReactIcon, VueIcon } from "@/SharedComponents/Icons"

export default function SkillSection() {
    return (
        <section id="skills" className="bg-white py-12">
            <h1 className=" text-[#414141] text-4xl  font-medium text-center">
                What I Learn
            </h1>
            <div className="mt-2 h-[4px] w-[300px] bg-[#9057EA] mx-auto rounded-2xl"></div>
            <div className="px-12 py-8 grid grid-cols-7 place-content-center gap-8">
                <div className="p-4 border-2 self-center border-[#414141] bg-white drop-shadow-[8px_8px_0px_rgba(65,65,65,1)] rounded-2xl">
                    <PhpIcon />
                </div>
                <div className="p-4 border-2 self-center border-[#414141] bg-white drop-shadow-[8px_8px_0px_rgba(65,65,65,1)] rounded-2xl">
                    <LaravelIcon />
                </div>
                <div className="p-4 border-2 self-center border-[#414141] bg-white drop-shadow-[8px_8px_0px_rgba(65,65,65,1)] rounded-2xl">
                    <JavaScriptIcon />
                </div>
                <div className="p-4 border-2 self-center border-[#414141] bg-white drop-shadow-[8px_8px_0px_rgba(65,65,65,1)] rounded-2xl">
                    <PythonIcon />
                </div>
                <div className="p-4 border-2 self-center border-[#414141] bg-white drop-shadow-[8px_8px_0px_rgba(65,65,65,1)] rounded-2xl">
                    <NextJSIcon />
                </div>
                <div className="p-4 border-2 self-center border-[#414141] bg-white drop-shadow-[8px_8px_0px_rgba(65,65,65,1)] rounded-2xl">
                    <PostgreIcon />
                </div>
                <div className="p-4 border-2 self-center border-[#414141] bg-white drop-shadow-[8px_8px_0px_rgba(65,65,65,1)] rounded-2xl">
                    <MariadbIcon />
                </div>
            </div>
        </section>
    );
}
