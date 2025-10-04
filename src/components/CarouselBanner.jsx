"use client";
import { useEffect, useState } from "react";

const bannerSlides = [
  {
    image: "/Images/banner/New1.webp",
    title: "Company Registration Services",
    description: "Start your business journey with our expert company registration services. We handle all the paperwork so you can focus on your business.",
    buttonText: "Get Started",
    buttonLink: "/company-registration"
  },
  {
    image: "/Images/banner/New1.webp",
    title: "Expert GST Services",
    description: "From registration to return filing, we handle all your GST needs with precision and expertise.",
    buttonText: "Explore GST",
    buttonLink: "/gst"
  },
  {
    image: "/Images/banner/New1.webp",
    title: "ITR Filing Simplified",
    description: "File your income tax returns quickly and accurately with our experienced professionals.",
    buttonText: "File ITR",
    buttonLink: "/itr"
  },
  {
    image: "/Images/banner/New1.webp",
    title: "Tax Compliance Solutions",
    description: "Stay compliant with all tax regulations with our comprehensive tax solutions and expert guidance.",
    buttonText: "Learn More",
    buttonLink: "/tax-services"
  },
  {
    image: "/Images/banner/New1.webp",
    title: "Business Growth Partner",
    description: "Your trusted partner for all business needs. From registration to ongoing compliance, we've got you covered.",
    buttonText: "Book Consultation",
    buttonLink: "/contact"
  },
  {
    image: "/Images/banner/New1.webp",
    title: "Professional Tax Services",
    description: "Comprehensive tax services tailored to your business needs with expert guidance and support.",
    buttonText: "Get Quote",
    buttonLink: "/quote"
  },
  {
    image: "/Images/banner/New1.webp",
    title: "Business Solutions",
    description: "Complete business solutions under one roof. From registration to compliance, we provide end-to-end support.",
    buttonText: "Explore Services",
    buttonLink: "/services"
  }
];

export default function CarouselHero({ slides = bannerSlides, interval = 5000 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(autoSlide);
  }, [slides.length, interval]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[700px] overflow-hidden text-white">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-3000 ${index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl mb-6 drop-shadow-md">{slide.description}</p>
            <a
              href={slide.buttonLink}
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-colors"
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white px-3 py-2 text-3xl rounded-full z-40"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white px-3 py-2 text-3xl rounded-full z-40"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer w-4 h-4 rounded-full transition-colors ${index === currentSlide ? "bg-red-500" : "bg-white/50 hover:bg-red-400"
              }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
