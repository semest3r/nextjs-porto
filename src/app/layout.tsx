import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Roboto_Mono({ weight: ["400"], subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen bg-background font-sans antialiased text-white", inter.className)}>
                <div>{children}</div>
            </body>
        </html>
    );
}
