import { ProfileImg } from "@/SharedComponents/Images";
import Link from "next/link";

export default function Profile() {
    return (
        <section id="home">
            <div className="mt-4">
                <div className="h-[17rem] w-[17rem] mx-auto overflow-hidden rounded-full">
                     <ProfileImg className="" />
                </div>
                <div className="mt-4 p-4">
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
                        className="p-2 bg-teal-500 hover:bg-teal-600 text-teal-50 font-medium rounded-md"
                    >
                        About Me
                    </Link>
                </div> 
            </div>
        </section>
    );
}
