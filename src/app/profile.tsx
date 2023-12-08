import Link from "next/link";

export default function ProfileComponent() {
    return (
        <section id="home">
            <div className="mt-4 p-4 min-h-screen">
                <div className="h-[17rem] w-[17rem] mx-auto overflow-hidden rounded-full">
                    <img src="/profile.png" alt="My Profile" />
                </div>
                <div className="p-4">
                    <h4 className="text-center text-2xl text-gray-200">
                        <span className="text-teal-400">Hello!</span> My Name Is
                    </h4>
                    <h1 className="text-center text-4xl">
                        Achmad Nur<span className="text-teal-400">Faizy</span>
                    </h1>
                </div>
                <div className="text-center mt-4">
                    <Link
                        href="/about-me"
                        className="p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
                    >
                        About Me
                    </Link>
                </div>
                <div className="mt-16 text-center">
                    <a
                        href="#My-Project"
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
            </div>
        </section>
    );
}
