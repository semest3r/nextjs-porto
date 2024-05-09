import { CatelogImg, DankosExpdtnImg, DankosIdpImg } from "@/SharedComponents/Images";

export default function ProjectList() {
    const projects = [
        {
            id: 1,
            title: "Individual Development Plan",
            description: "This project was created while participating in the Kampus Merdeka MSIB Batch 4 and 5. This website was created using Laravel, IntertiaJs, and Vue3.",
            image: <DankosIdpImg className="rounded"/>
        },
        {
            id: 2,
            title: "Dankos Expedition",
            description: "This project was created while participating in the Kampus Merdeka MSIB Batch 5. This website was created using Laravel, Blade, Select2, and Jquery.",
            image: <DankosExpdtnImg className="rounded" />
        },
        {
            id: 2,
            title: "Catalog Product",
            description: "This project was created when i learn javascript, react and nextjs. This website was created using Laravel and NextJS.",
            image: <CatelogImg className="rounded" />
        },
    ]
    return (
        <div className="bg-gray-500/10 rounded">
            {projects.map(project => (
                <div className="mt-4 md:grid md:grid-cols-2 gap-2" key={project.id}>
                   {project.image} 
                    <div className="flex-1 p-2">
                        <h1 className="font-medium text-xl">
                            {project.title}
                        </h1>
                        <p className="mt-2 text-base">
                            {project.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
