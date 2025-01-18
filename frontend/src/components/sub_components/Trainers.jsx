import React, { useRef } from "react";
import Slider from "react-slick";
// import Image from "next/image";
// import { Button } from "@/components/ui/button"; // assuming Button is defined correctly
import { ChevronLeft, ChevronRight } from "lucide-react";

const Trainers = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto relative">
            <Slider ref={sliderRef} {...settings}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div key={num} className="px-2">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="w-full h-48 relative">
                                <Image
                                    src={`/placeholder.svg?height=200&width=300&text=Card ${num}`}
                                    alt={`Card ${num}`}
                                    width={300}
                                    height={200}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">Card {num}</h3>
                                <p className="text-sm text-gray-600">
                                    This is the description for Card {num}
                                </p>
                                <Button className="mt-2" variant="outline" size="sm">
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="flex justify-center mt-4 space-x-4">
                <Button onClick={goToPrev} variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button onClick={goToNext} variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
};

export default Trainers;
