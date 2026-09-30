import Image from "next/image";

const partners = [
    { id: 1, src: "/images/featuredLogo/Frame1.png" },
    { id: 2, src: "/images/featuredLogo/Frame2.png" },
    { id: 3, src: "/images/featuredLogo/Frame3.png" },
    { id: 4, src: "/images/featuredLogo/Frame4.png" },
    { id: 5, src: "/images/featuredLogo/Frame5.png" },
];

const PartnersStrip = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="flex flex-wrap justify-center items-center gap-10">
                {partners.map((p) => (
                    <Image key={p.id} src={p.src} alt="Partner logo" width={140} height={32} />
                ))}
            </div>
        </div>
    );
};

export default PartnersStrip;