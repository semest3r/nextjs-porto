import { Metadata } from "next";
import HomeSection from "./components/HomeSection";
import ExperienceSection from "./components/ExperienceSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Hi!!!",
};

export default function HomePage() {
    return (
        <div className="container mx-auto">
            <HomeSection />
            <ExperienceSection />
            <AboutSection />
            <SkillSection />
            <Link href="#home" className="fixed bottom-4 right-4 text-white drop-shadow-[4px_4px_0px_rgba(65,65,65,1)] rounded-full bg-[#00B3C6]">
                <ArrowDown className="" />
            </Link>
        </div>
    );
}


function ArrowDown({ className }: { className: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z" /></svg>
    )
}