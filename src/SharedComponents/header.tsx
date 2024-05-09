'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (
        <div className="flex justify-between">
            <div className="flex gap-4">
                <div>
                    <Link
                        href="/"
                        className={`hover:border-b-2 hover:border-b-teal-400 duration-100 ${pathname == '/' ? 'border-b-2 border-b-teal-400' : ''}`}
                    >
                        <span className="text-lg font-medium">Home</span>
                    </Link>
                </div>
                <div>
                    <Link
                        href="/about-me"
                        className={`hover:border-b-2 hover:border-b-teal-400 duration-100 ${pathname == '/about-me' ? 'border-b-2 border-b-teal-400' : ''}`}
                    >
                        <span className="text-lg font-medium">About Me</span>
                    </Link>
                </div>
            </div>
            <div>
                <Link
                    href="/credits"
                    className={`hover:border-b-2 hover:border-b-teal-400 duration-100 ${pathname == '/credits' ? 'border-b-2 border-b-teal-400' : ''}`}
                >
                    <span className="text-lg font-medium">Credits</span>
                </Link>
            </div>
        </div>
    );
}
