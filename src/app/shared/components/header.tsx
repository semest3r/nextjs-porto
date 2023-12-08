import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-between">
            <div className="flex gap-4">
                <div>
                    <Link href="/" className="hover:border-b-2 hover:border-b-blue-400 duration-100">
                        <span>Home</span>

                    </Link>
                </div>
                <div>
                    <Link href="/about-me" className="hover:border-b-2 hover:border-b-blue-400 duration-100">
                        <span>About Me</span>
                    </Link>
                </div>
            </div>
            <div>
                <Link href="/credits" className="hover:border-b-2 hover:border-b-blue-400 duration-100">
                    <span>Credits</span>
                </Link>
            </div>
        </div>
    );
}
