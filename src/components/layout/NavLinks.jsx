"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ links }) => {
    const pathname = usePathname();
    const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

    return (
        <ul className="nav-links order-3 flex w-full justify-center gap-5 items-center font-satoshi text-sm md:order-none md:w-auto md:gap-8 md:text-base">
            {links.map((link) => (
                <li key={link.href}>
                    <Link href={link.href} className={isActive(link.href) ? "font-bold" : "opacity-90 hover:opacity-100"}>
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
