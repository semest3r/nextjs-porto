import Header from "@components/header";
import ProfileComponent from "./profile";
import Project1Component from "./project1";
import Project2Component from "./project2";
import { useRef } from "react";
import SkillsComponent from "./skills";

export default function HomePage() {
    return (
        <div>
            <Header />
            <ProfileComponent />
            <section id="My-Project" className="py-4 min-h-screen">
                <h1 className="text-4xl text-gray-200 font-medium text-center">
                    My Project
                </h1>
                <div className="mt-4 space-y-4">
                    <Project1Component />
                    <Project2Component />
                </div>
                <div className="mt-8 text-center">
                    <a
                        href="#Experience"
                        className="inline-block animate-bounce"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
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
                    </a>
                </div>
            </section>
            <SkillsComponent />
            <div className="fixed bottom-10 right-10">
                <a href="#home">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                    >
                        <g transform="rotate(180 24 24)">
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
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    );
}
