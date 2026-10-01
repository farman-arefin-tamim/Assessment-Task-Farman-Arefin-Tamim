"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ links }) => {
    const pathname = usePathname();
    const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

    return (
        <ul className="nav-links flex gap-8 items-center font-satoshi">
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
