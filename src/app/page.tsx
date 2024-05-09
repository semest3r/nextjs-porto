import Header from "@/SharedComponents/header";
import Profile from "./components/profile";
import SkillsComponent from "./components/skills";
import { Metadata } from "next";
import ProjectList from "./components/ProjectList";
import Projects from "./components/Projects";

export const metadata: Metadata = {
    title: "Portofolio",
};

export default function HomePage() {
    return (
        <div className="space-y-24">
            <Header />
            <Profile />
            <Projects />
            <SkillsComponent />
        </div>
    );
}


function ArrowDown({ className }: { className: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={className}
        >
            <g
                fill="none"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="4"
            >
                <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                <path
                    strokeLinecap="round"
                    d="m33 21l-9 9l-9-9"
                />
            </g>
        </svg>
    )
}