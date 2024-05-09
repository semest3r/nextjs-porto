import { JavaScriptIcon, LaravelIcon, MariadbIcon, NextJSIcon, PhpIcon, PostgreIcon, PythonIcon, ReactIcon, VueIcon } from "@/SharedComponents/Icons"

export default function SkillsComponent() {
    return (
        <section id="Experience" className=" mt-4 py-4">
            <h1 className="text-4xl text-gray-200 font-medium text-center">
                Skills
            </h1>   
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-3 justify-items-center items-center">
                <div className="bg-gray-200/10 w-full border-2 border-teal-400 shadow h-[8rem] p-4 rounded-md">
                    <PhpIcon />
                    <div className="mt-2 text-center">PHP</div>
                </div>
                <div className="bg-gray-200/10 w-full border-2 border-teal-400 shadow h-[8rem] p-4 rounded-md">
                    <JavaScriptIcon />
                    <div className="mt-2 text-center">JavaScript</div>
                </div>
                <div className="bg-gray-200/10 w-full border-2 border-teal-400 shadow h-[8rem] p-4 rounded-md">
                    <PythonIcon />
                    <div className="mt-2 text-center">Python</div>
                </div>
                <div className="bg-gray-200/10 w-full border-2 border-teal-400 shadow h-[8rem] p-4 rounded-md">
                    <LaravelIcon />
                    <div className="mt-2 text-center">Laravel</div>
                </div>
                <div className="bg-gray-200/10 w-full border-2 border-teal-400 shadow h-[8rem] p-4 rounded-md">
                    <VueIcon />
                    <div className="mt-2 text-center">Vue</div>
                </div>
                <div className="bg-gray-200/10 w-full border-2 border-teal-400 shadow h-[8rem] p-4 rounded-md">
                    <ReactIcon />
                    <div className="mt-2 text-center">React</div>
                </div>
                <div className="bg-gray-200/10 w-full border-2 border-teal-400 shadow h-[8rem] p-4 rounded-md">
                    <NextJSIcon />
                    <div className="mt-2 text-center">NextJS</div>
                </div>
                <div className="bg-gray-200/10 w-full border-2 border-teal-400 shadow h-[8rem] p-4 rounded-md">
                    <MariadbIcon />
                    <div className="mt-2 text-center">MariaDB</div>
                </div>
                <div className="bg-gray-200/10 w-full border-2 border-teal-400 shadow h-[8rem] p-4 rounded-md">
                    <PostgreIcon />
                    <div className="mt-2 text-center">PostgreSql</div>
                </div>
            </div>
        </section>
    );
}
