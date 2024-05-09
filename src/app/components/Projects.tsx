import ProjectList from "./ProjectList";

export default function Projects() {
    return (
        <section id="My-Project">
            <h1 className="text-4xl text-gray-200 font-medium text-center">
                Projects
            </h1>
            <div className="mt-8">
                <ProjectList />
            </div>
        </section>
    )
}