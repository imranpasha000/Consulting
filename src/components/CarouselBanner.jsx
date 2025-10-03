"use client";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "./ui/button";

const bannerSlides = [
  {
    title: "",
    description: "",
    image: "/banner/New1.webp",
    cta: { label: "Get Started", href: "/company-registration" }
  },
  {
    title: "Expert GST Services",
    description: "From registration to return filing, we handle all your GST needs.",
    image: "/banner/tax-1.png",
    cta: { label: "Explore GST", href: "/gst" }
  },
  {
    title: "ITR Filing Simplified",
    description: "File your income tax returns quickly and accurately with our experts.",
    image: "/banner/tax1.png",
    cta: { label: "File ITR", href: "/itr" }
  },
  {
    title: "Trademark & IP Protection",
    description: "Safeguard your brand with our trademark and copyright services.",
    image: "/banner/tax-2.png",
    cta: { label: "Protect Your Brand", href: "/other/trademark" }
  },
  {
    title: "",
    description: "",
    image: "/banner/tax.png",
    cta: { label: "Book Consultation", href: "/contact" }
  }
];

const CarouselBanner = () => {
  const [emblaApi, setEmblaApi] = React.useState(null);

  // Autoplay logic using Embla's API
  React.useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <Carousel 
      className="w-full overflow-hidden" 
      setApi={setEmblaApi}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="h-screen">
        {bannerSlides.map((slide, index) => (
          <CarouselItem
            key={index}
            className="h-screen w-full relative"
          >
            {/* Background Image - Using img for better responsive control */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={slide.image}
                alt={slide.title || `Banner ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Content Container - Responsive positioning */}
            <div className="relative h-full w-full flex items-end justify-center pb-8 sm:pb-12 md:pb-16 lg:pb-20">
              <div className="z-10 w-full max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
                {/* Only show text if title or description exists */}
                {(slide.title || slide.description) && (
                  <>
                    {slide.title && (
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-2xl leading-tight">
                        {slide.title}
                      </h2>
                    )}
                    {slide.description && (
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
                        {slide.description}
                      </p>
                    )}
                  </>
                )}
                
                {/* CTA Button - Always visible, responsive sizing */}
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base md:text-lg"
                >
                  <a href={slide.cta.href}>{slide.cta.label}</a>
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Buttons - Responsive positioning and sizing */}
      <CarouselPrevious className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 transition-all hover:scale-110" />
      <CarouselNext className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 transition-all hover:scale-110" />

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              emblaApi?.selectedScrollSnap() === index
                ? 'bg-white w-8 sm:w-10'
                : 'bg-white/50 hover:bg-white/75 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default CarouselBanner;