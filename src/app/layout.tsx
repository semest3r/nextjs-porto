import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth text-white">
            <Head>
                <title>Test</title>
            </Head>
            <body className={inter.className}>
                <div
                    className="bg-[#152B3D] min-h-screen max-h-full shadow"
                    style={{ backgroundImage: `url('/endless-clouds.svg')` }}
                >
                    <div className="container max-w-4xl p-4 mx-auto h-full bg-slate-900/70">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
