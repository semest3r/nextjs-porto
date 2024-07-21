import { CatelogImg, DankosExpdtnImg, DankosIdpImg, JaringHelpImg } from "@/SharedComponents/Images"
import patternSVG from "@/assets/pattern/pattern.png";
import { SwiperComponent } from "./SwiperComponent";

export default function ExperienceSection() {
    const projects = [
        {
            year: 2023,
            project_list: [
                {
                    id: 1,
                    title: "Individual Development Plan",
                    description: "This project was created while participating in the Kampus Merdeka MSIB Batch 4 and 5. Used for administration and monitoring each individual development progress ",
                    image: [<DankosIdpImg className="rounded row-start-1 sm:row-start-auto" />, <DankosIdpImg className="rounded row-start-1 sm:row-start-auto" />, <DankosIdpImg className="rounded row-start-1 sm:row-start-auto" />,],

                    tech_stacks: ['Laravel', 'IntertiaJs', 'Vue3', 'TailwindCSS', 'HeadlessUI', 'MySql']
                },
                {
                    id: 2,
                    title: "Dankos Expedition",
                    description: "This project was created while participating in the Kampus Merdeka MSIB Batch 5. Used for request delivery document or something to another department in pharmacy manufacture industry, tracking and monitoring delivery. ",
                    image: [
                        <DankosExpdtnImg className="rounded row-start-1 sm:row-start-auto" />,
                        <DankosExpdtnImg className="rounded row-start-1 sm:row-start-auto" />,
                        <DankosExpdtnImg className="rounded row-start-1 sm:row-start-auto" />,
                    ],

                    tech_stacks: ['Laravel', 'Jquery', 'Blade Template', 'TailwindCSS', 'MySql']
                },

            ]
        },
        {
            year: 2024,
            project_list: [
                {
                    id: 1,
                    title: "Catalog Product",
                    description: "This Project was created while i learn javascript, reactjs, nextjs. dynamic category menu and list product",
                    image: [
                        <CatelogImg className="rounded row-start-1 sm:row-start-auto" />, <CatelogImg className="rounded row-start-1 sm:row-start-auto" />, <CatelogImg className="rounded row-start-1 sm:row-start-auto" />,
                    ],

                    tech_stacks: ['Laravel', 'RestAPI', 'NextJS', 'TailwindCSS', 'MySql']
                },
                {
                    id: 2,
                    title: "Jaring Help",
                    description: "This project was created while finishing my thesis in Information Systems Studies. Management Helpdesk for easy management of data, information to the client and work evaluation",
                    image: [
                        <JaringHelpImg className="rounded row-start-1 sm:row-start-auto" />,
                        <JaringHelpImg className="rounded row-start-1 sm:row-start-auto" />,
                        <JaringHelpImg className="rounded row-start-1 sm:row-start-auto" />,
                    ],
                    tech_stacks: ['Laravel', 'AlpineJS', 'Blade Template', 'TailwindCSS', 'PostgreSQL']
                },
            ]
        },
    ]
    return (
        <section id="experience" className="pattern">
            <div className="pl-6 pr-2 sm:pl-16 sm:pr-8 bg-white/80">
                <div className="py-12 ">
                    <h1 className="text-center text-3xl text-[#414141]">What I Do</h1>
                    <div className="mt-2 h-[4px] w-[200px] bg-[#9057EA] mx-auto rounded-2xl"></div>
                    <div className="mt-16">
                        {projects.map((project) => (
                            <div className="pb-8 flex gap-4 sm:gap-8 w-full" key={project.year}>
                                <div className="py-12 space-y-12 sm:space-y-4">
                                    {project.project_list.map((pl) => (
                                        <div className="grid grid-flow-row-dense sm:grid-cols-2 gap-4 sm:gap-8" key={pl.id}>
                                            <div>
                                                <h1 className="font-medium text-xl text-[#414141]">
                                                    {pl.title}
                                                </h1>
                                                <p className="mt-2 text-base text-[#414141]/80">
                                                    {pl.description}
                                                </p>
                                                <ul className="mt-4 flex flex-wrap gap-2 sm:gap-4">{pl.tech_stacks.map((ts, index) => (
                                                    <li className="bg-[#414141] px-2 py-1 text-sm sm:text-base rounded-lg" key={index}>{ts}</li>
                                                ))}
                                                </ul>
                                            </div>
                                            <div className="row-start-1 sm:row-start-auto"><SwiperComponent data={pl.image} /></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="text-[#414141]">{project.year}</div>
                                    <div className="bg-[#00B3C6] w-[4px] sm:w-[8px] mx-auto rounded-2xl h-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}