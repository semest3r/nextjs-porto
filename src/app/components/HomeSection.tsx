import { AppDevelopmentImg, PencilImg } from "@/SharedComponents/Images";
import Link from "next/link";

export default function HomeSection() {
    return (
        <section id="home" className="px-16 bg-[#9057EA] min-h-screen max-h-full w-full flex gap-8 items-center">
            <div className="pl-32 pr-16 flex-1 space-y-8">
                <AppDevelopmentImg className="mx-auto" />
                <h1 className="text-center text-4xl">From Ideas to Innovation</h1>
                <p className="text-center text-lg">FullStack Dev | Focused on delivering impactful solutions through internal projects.</p>
                <div className="flex gap-4 justify-center">
                    <Link href="#experience" className="px-6 py-4 bg-[#FFA124] drop-shadow-[8px_8px_0px_rgba(65,65,65,1)] rounded-2xl">Experience</Link>
                    <Link href="#about-me" className="px-6 py-4 bg-[#00B3C6] drop-shadow-[8px_8px_0px_rgba(65,65,65,1)] rounded-2xl">About Me</Link>
                    <Link href="#skills" className="px-6 py-4 bg-[#9057EA] ring-inset ring-2 ring-[#414141] drop-shadow-[8px_8px_0px_rgba(65,65,65,1)] rounded-2xl">Skills</Link>
                </div>
            </div>
            <PencilImg className="" />
        </section>
    )
}