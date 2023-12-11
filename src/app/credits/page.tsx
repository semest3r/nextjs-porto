import Header from "@components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Credits",
};

export default function CreditsPage() {
    return (
        <div>
            <Header />
            <h1 className="mt-4 text-2xl">Credits</h1>
            <div className="mt-4 p-4 rounded-md border-2 border-red-400">
                <p>Background : Hero Pattern</p>
                <p>Icon : Iconify</p>
                <p>Framework : Nextjs</p>
                <p>Style : TailwindCSS</p>
            </div>
        </div>
    );
}
