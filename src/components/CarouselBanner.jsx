"use client";
import { useEffect, useState } from "react";

const bannerSlides = [
  {
    image: "/Images/banner/tax1.png",
    title: "Company Registration Services",
    description:
      "Start your business journey with our expert company registration services. We handle all the paperwork so you can focus on your business.",
    buttonText: "Get Started",
    buttonLink: "/company-registration",
  },
  {
    image: "/Images/banner/tax2.png",
    title: "Expert GST Services",
    description:
      "From registration to return filing, we handle all your GST needs with precision and expertise.",
    buttonText: "Explore GST",
    buttonLink: "/gst",
  },
  {
    image: "/Images/banner/tax3.png",
    title: "ITR Filing Simplified",
    description:
      "File your income tax returns quickly and accurately with our experienced professionals.",
    buttonText: "File ITR",
    buttonLink: "/itr",
  },
];

export default function CarouselHero({
  slides = bannerSlides,
  interval = 5000,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(autoSlide);
  }, [slides.length, interval]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI3MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDcwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjMTE0MTVGIi8+CjxwYXRoIGQ9Ik0wIDM1MEgxMjAwTTYwMCA3MDBWMFoiIHN0cm9rZT0iIzAwN0JGMSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjYwMCIgY3k9IjM1MCIgcj0iODAiIGZpbGw9IiMwMDdCRjEiIG9wYWNpdHk9IjAuMyIvPgo8L3N2Zz4K";
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-30 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={slide.buttonLink}
                  className="inline-block bg-blue-900 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  {slide.buttonText}
                </a>
                <a
                  href="/contact"
                  className="inline-block border-2 border-white hover:bg-white hover:text-gray-900 text-white px-4 py-3 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full z-40 transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full z-40 transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-blue-900 scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 z-40 bg-white/20">
        <div
          className="h-full bg-blue-900 transition-all duration-1000 ease-linear"
          style={{
            width: `${(currentSlide + 1) * (100 / slides.length)}%`,
          }}
        />
      </div>
    </div>
  );
}
