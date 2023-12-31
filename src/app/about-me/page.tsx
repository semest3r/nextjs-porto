import Header from "@components/header";
import Introduction from "./introduction";
import Information from "./information";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me",
};

export default function AboutMePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <div className="mt-4 sm:flex gap-4">
                <img
                    className="rounded-md sm:w-[17rem] object-none object-top"
                    src="profile.png"
                    alt="MyProfile"
                />
                <div className=" col-span-3">
                    <h1 className="text-red-400 font-medium">Discover</h1>
                    <h1 className="text-2xl">About Me</h1>
                    <div className="w-[4rem] border-b-2 border-red-500"></div>
                    <Introduction />
                    <Information />
                    <a
                        href="https://www.linkedin.com/in/nfaizy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/semest3r"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 mt-4 inline-block p-2  hover:bg-gray-700 text-white font-bold rounded-md"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
