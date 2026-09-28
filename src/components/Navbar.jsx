import Image from "next/image";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between mx-w-7xl mx-auto py-4 px-8 items-center">
                <div className="logo flex gap-2 items-center">
                    <Image
                       src="/images/hero/logo.png"
                       alt="Logo"
                       width={50}
                       height={50}
                    />
                    <h1 className="font-clash-display text-xl font-bold">ByteSpace</h1>
                </div>
                <ul className="nav-links flex gap-8 items-center font-satoshi">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Courses</a>
                    </li>
                    <li>
                        <a href="#">Creators</a>
                    </li>
                </ul>

                <div className="auth-buttons flex gap-4 items-center">
                    <ul className="flex gap-4 items-center">
                        <li>
                            <a href="#">Login</a>
                        </li>
                        <li>
                            <a href="#">Join Us</a>
                        </li>
                    </ul>
                    <AiOutlineShopping className="text-2xl"/>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;