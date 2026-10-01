import Image from "next/image";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import NavLinks from "./NavLinks";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Creators", href: "/creators" },
];

const Navbar = () => {
    return (
        <div>
            <nav className="grid-background flex flex-wrap justify-between gap-x-4 gap-y-3 mx-auto py-3 px-4 md:py-4 md:px-8 items-center bg-[#003BE2] text-white">
                <Link href="/" className="logo flex gap-2 items-center">
                    <Image
                        src="/images/hero/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                    <h1 className="font-clash-display text-xl font-bold">ByteSpace</h1>
                </Link>

                <NavLinks links={navLinks} />

                <div className="auth-buttons flex gap-3 md:gap-4 items-center font-satoshi text-sm md:text-base">
                    <ul className="flex gap-4 items-center">
                        <li>
                            <Link href="/signin">Sign In</Link>
                        </li>
                        <li>
                            <Link href="/join">Join Us</Link>
                        </li>
                    </ul>
                    <Link href="/cart">
                        <AiOutlineShopping className="text-2xl" />
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;