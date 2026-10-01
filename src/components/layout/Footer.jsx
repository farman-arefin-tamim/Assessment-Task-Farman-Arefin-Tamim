import Image from "next/image";
import Link from "next/link";


const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

const footerColumns = [
  {
    "title": null,
    "links": ["Featured Courses", "Featured Categories", "Business", "IT", "Design"]
  },
  {
    "title": null,
    "links": ["Development", "Marketing", "Photography", "Finance", "Sport"]
  },
  {
    "title": null,
    "links": ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"]
  }
];

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 px-6 lg:px-16 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_repeat(3,1fr)] gap-12">

              
                <div>
                    <div className="flex items-center gap-2">
                        <Image src="/images/hero/logo.png" alt="ByteSpace" width={28} height={28} />
                        <span className="font-bold text-xl font-clash-display">ByteSpace</span>
                    </div>

                    <p className="text-gray-500 text-sm mt-4 font-satoshi">
                        Stay Up to date with our latest features and releases by joining our newsletter.
                    </p>

                    <form className="mt-6 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input rounded-full border border-gray-200 w-full sm:max-w-[300px]"
                        />
                        <button type="submit" className="btn rounded-full bg-[#D4FB20] text-black border-none">
                            Search
                        </button>
                    </form>

                    <p className="text-gray-400 text-xs mt-4 max-w-[320px] font-satoshi">
                        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                    </p>
                </div>

            
                {footerColumns.map((col, i) => (
                    <ul key={i} className="flex flex-col gap-4">
                        {col.links.map((link) => (
                            <li key={link}>
                                <Link href="#" className="text-gray-600 text-sm hover:text-primary">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>

    
            <div className="border-t border-gray-100 mt-14 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">@ 2026 ByteSpace. All rights reserved.</p>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {legalLinks.map((link) => (
                        <Link key={link} href="#" className="text-gray-500 text-sm hover:text-primary">
                            {link}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;