import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="card bg-base-100 shadow-sm p-6">
            <div className="self-start w-full flex flex-col items-start text-left gap-3">
               <div>
                   <div className="avatar">
                    <div className="w-10 rounded-full">
                        <Image src={testimonial.avatar} alt={testimonial.name} width={40} height={40} />
                    </div>
                </div>
                <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-primary text-sm">{testimonial.role}</p>
                </div>
               </div>
            </div>
            <p className="text-gray-600 text-sm mt-4 font-satoshi">"{testimonial.quote}"</p>
        </div>
    );
};

export default TestimonialCard;