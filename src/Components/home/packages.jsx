import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PricingCard = ({ price, features }) => (
  <div className="bg-[#4a4a4a] text-white p-12 rounded-3xl shadow-lg flex flex-col justify-center items-center transform transition duration-500 hover:scale-105">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">${price}</h2>
    <ul className="text-left space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-base sm:text-lg md:text-xl">{feature}</li>
      ))}
    </ul>
  </div>
);


const Packages = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const features = [
    "Feature 1 lorem ipsum",
    "Feature 2 lorem ipsum",
    "Feature 3 lorem ipsum",
    "Feature 4 lorem ipsum",
    "Feature 5 lorem ipsum",
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-[#359dad] flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#359dad] text-center mb-4">Prices</h1>
      <p className="text-base sm:text-lg md:text-xl text-[#359dad] text-center mb-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
      </p>
      <div className="hidden md:flex justify-center items-center space-x-6 w-full px-6 gap-14">
        <PricingCard price="30" features={features} />
        <PricingCard price="30" features={features} />
        <PricingCard price="30" features={features} />
      </div>
      <div className="md:hidden w-full px-6">
        <Slider {...settings}>
          <div className="flex justify-center">
            <PricingCard price="30" features={features} />
          </div>
          <div className="flex justify-center">
            <PricingCard price="30" features={features} />
          </div>
          <div className="flex justify-center">
            <PricingCard price="30" features={features} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Packages;
