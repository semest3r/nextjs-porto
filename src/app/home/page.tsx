import Header from "@components/header";
import ProfileComponent from "./profile";
import Project1 from "./project1";
import Project2 from "./project2";

export default function HomePage() {
    return (
        <div>
            <Header />
            <ProfileComponent />
            <section id="My-Project" className="py-4 min-h-screen space-y-4">
              <h1 className="text-4xl text-gray-200 font-medium text-center">My Project</h1>
                <Project1 />
                <Project2 />
            </section>
        </div>
    );
}
