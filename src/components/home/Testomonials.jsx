import TestimonialCard from "./TestimonialCard";


const Testimonials = () => {

    const testimonials = [
            {
                "id": 1,
                "name": "Sarah M.",
                "role": "Enthusiastic Learner",
                "avatar": "/images/avatars/reviewer1.png",
                "quote": "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."
            },
            {
                "id": 2,
                "name": "James L.",
                "role": "Lifelong Learner",
                "avatar": "/images/avatars/reviewer2.png",
                "quote": "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
            },
            {
                "id": 3,
                "name": "Alex B.",
                "role": "Inspired Creator",
                "avatar": "/images/avatars/reviewer3.png",
                "quote": "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
            }
    ];

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-6xl mx-auto ">
                
                <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                    <h2 className="font-semibold text-3xl max-w-sm">
                        Discover What Our Community Is Saying
                    </h2>
                    <p className="text-gray-600 text-sm max-w-md text-justify">
                        At ByteSpace, our vibrant community of learners and creators is at the heart
                        of what we do. Hear directly from those who have experienced the transformative
                        journey of learning and creating on our platform. Explore testimonials that
                        reflect the diverse perspectives of enthusiastic learners and accomplished
                        creators.
                    </p>
                </div>

              
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.id} testimonial={t} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;