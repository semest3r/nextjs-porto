import Header from "@/SharedComponents/header";
import Introduction from "./introduction";
import Information from "./information";
import { Metadata } from "next";
import { GitHubIcon, LinkInIcon } from "@/SharedComponents/Icons";
import { ProfileImg } from "@/SharedComponents/Images";

export const metadata: Metadata = {
    title: "About Me",
};

export default function AboutMePage() {
    return (
        <div className="min-h-screen space-y-8 sm:space-y-24">
            <Header />
            <div className="mt-4 pb-4 sm:flex gap-4">
                <ProfileImg className="rounded-md sm:w-[17rem] object-none object-top"/>
                <div className=" col-span-3">
                    <h1 className="mt-4 sm:mt-0 text-lg font-medium">About Me</h1>
                    <div className="w-[5rem] border-b-2 border-teal-500"></div>
                    <Introduction />
                    <Information />
                    <div className="flex gap-4">
                        <LinkdInButton />
                        <GitHubButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

function LinkdInButton() {
    return (
        <a
            href="https://www.linkedin.com/in/nfaizy/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-end gap-2 "
        >
            <LinkInIcon />
            <span className="text-white text-lg font-medium hover:text-teal-400">LinkedIn</span>
        </a>
    )
}

function GitHubButton() {
    return (
        <a
            href="https://github.com/semest3r"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-end gap-2"
        >
            <GitHubIcon />
            <span className="text-white text-lg font-medium hover:text-teal-400">GitHub</span>
        </a>
    )
}