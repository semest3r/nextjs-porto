import { CatelogImg, DankosExpdtnImg, DankosIdpImg, JaringHelpImg } from "@/SharedComponents/Images"

export default function ExperienceSection() {
    const projects = [
        {
            year: 2023,
            project_list: [
                {
                    id: 1,
                    title: "Individual Development Plan",
                    description: "This project was created while participating in the Kampus Merdeka MSIB Batch 4 and 5. This website was created using Laravel, IntertiaJs, and Vue3.",
                    image: <DankosIdpImg className="rounded" />,
                    tech_stacks: ['laravel', 'IntertiaJs', 'Vue3', 'TailwindCSS', 'HeadlessUI', 'Mysql']
                },
                {
                    id: 2,
                    title: "Dankos Expedition",
                    description: "This project was created while participating in the Kampus Merdeka MSIB Batch 5. This website was created using Laravel, Blade, Select2, and Jquery.",
                    image: <DankosExpdtnImg className="rounded" />,
                    tech_stacks: ['laravel', 'Jquery', 'Blade Template', 'TailwindCSS', 'Mysql']
                },

            ]
        },
        {
            year: 2024,
            project_list: [
                {
                    id: 1,
                    title: "Catalog Product",
                    description: "This project was created while participating in the Kampus Merdeka MSIB Batch 4 and 5. This website was created using Laravel, IntertiaJs, and Vue3.",
                    image: <CatelogImg className="rounded" />,
                    tech_stacks: ['laravel', 'RestAPI', 'NextJS', 'TailwindCSS', 'Mysql']
                },
                {
                    id: 2,
                    title: "Jaring Help",
                    description: "This project was created while participating in the Kampus Merdeka MSIB Batch 5. This website was created using Laravel, Blade, Select2, and Jquery.",
                    image: <JaringHelpImg className="rounded" />,
                    tech_stacks: ['laravel', 'AlpineJS', 'Blade Template', 'TailwindCSS', 'Mysql']
                },
            ]
        },
    ]
    return (
        <section id="experience" className="pl-8 pr-4 sm:pl-16 sm:pr-8 bg-white">
            <div className="py-12 ">
                <h1 className="text-center text-3xl text-[#414141]">What I Do</h1>
                <div className="mt-2 h-[4px] w-[200px] bg-[#9057EA] mx-auto rounded-2xl"></div>
                <div className="mt-16">
                    {projects.map((project) => (
                        <div className="pb-8 flex gap-8 w-full" key={project.year}>
                            <div className="py-12 space-y-4">
                                {project.project_list.map((pl) => (
                                    <div className="grid grid-flow-row-dense sm:grid-cols-2 gap-8" key={pl.id}>
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
                                        {pl.image}
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
        </section>
    )
}