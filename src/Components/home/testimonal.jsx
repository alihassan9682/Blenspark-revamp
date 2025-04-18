import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonials = [
    {
        id: 1,
        name: "John Anderson",
        role: "Creative Director",
        company: "DesignCraft Studios",
        content:
            "BlenSpark delivered exceptional 3D models for our gaming project. Their attention to detail and quick turnaround time exceeded our expectations.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 2,
        name: "Sarah Mitchell",
        role: "Project Manager",
        company: "TechVision Inc",
        content:
            "The website they built for us perfectly captures our brand identity. Their team's expertise in both design and development is impressive.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 3,
        name: "David Chen",
        role: "Animation Director",
        company: "MotionWorks",
        content:
            "Working with BlenSpark on our animation project was seamless. They brought our vision to life with stunning detail and creativity.",
        image: "/placeholder.svg?height=100&width=100",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-[#54cdd1] text-center mb-12">Client Testimonials</h2>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button
                            onClick={prev}
                            className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 -translate-x-12 bg-gradient-to-r from-[#0086a4] to-[#5ce1e6] p-3 rounded-full shadow-lg text-white hover:bg-[#249f98] transition-transform transform hover:scale-105"
                            aria-label="Previous testimonial"
                        >
                            <IoIosArrowBack size={24} />
                        </button>

                        <button
                            onClick={next}
                            className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 translate-x-12 bg-gradient-to-r from-[#0086a4] to-[#5ce1e6] p-3 rounded-full shadow-lg text-white hover:bg-[#249f98] transition-transform transform hover:scale-105"
                            aria-label="Next testimonial"
                        >
                            <IoIosArrowForward size={24} />
                        </button>

                        {/* Testimonial Card */}
                        <div className="rounded-lg p-10 shadow-xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-r from-[#0086a4] to-[#5ce1e6]">
                            <div className="flex flex-col items-center text-center relative">
                                <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-white absolute -top-20 flex items-center justify-center">
                                    <img
                                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                                        alt={testimonials[currentIndex].name}
                                        className="w-28 h-28 rounded-full"
                                    />
                                </div>
                                <div className="mt-28">
                                    <blockquote className="text-white text-lg italic leading-relaxed mb-6">"{testimonials[currentIndex].content}"</blockquote>
                                    <div className="text-white font-semibold text-xl">{testimonials[currentIndex].name}</div>
                                    <div className="text-gray-200 font-medium">{testimonials[currentIndex].role}</div>
                                    <div className="text-gray-300 text-sm">{testimonials[currentIndex].company}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-3 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex
                                    ? "bg-[#2EBAB0] shadow-lg scale-110"
                                    : "bg-[#2EBAB0]/50"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
