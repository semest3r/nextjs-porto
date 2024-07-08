import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Roboto_Mono({ weight: ["400"], subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="antialiased scroll-smooth bg-white">
            <body className={inter.className}>
                <div>{children}</div>
            </body>
        </html>
    );
}
