"use client";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const bannerSlides = [
  {
    title: "Start Your Business Effortlessly",
    description: "Company registration, GST, and compliance made easy with CharteredHelp.",
    image: "/banner/1.png",
    cta: { label: "Get Started", href: "/company-registration" }
  },
  {
    title: "Expert GST Services",
    description: "From registration to return filing, we handle all your GST needs.",
    image: "/banner/2.png",
    cta: { label: "Explore GST", href: "/gst" }
  },
  {
    title: "ITR Filing Simplified",
    description: "File your income tax returns quickly and accurately with our experts.",
    image: "/banner/3.png",
    cta: { label: "File ITR", href: "/itr" }
  },
  {
    title: "Trademark & IP Protection",
    description: "Safeguard your brand with our trademark and copyright services.",
    image: "/banner/4.png",
    cta: { label: "Protect Your Brand", href: "/other/trademark" }
  },
  {
    title: "Business Consultation",
    description: "Get strategic advice for your business growth and compliance.",
    image: "/banner/5.png",
    cta: { label: "Book Consultation", href: "/contact" }
  }
];

const CarouselBanner = () => {
  return (
    <Carousel className="w-full overflow-hidden h-[100vh]">
      <CarouselContent className="h-full">
        {bannerSlides.map((slide, index) => (
          <CarouselItem key={index} className="h-full w-full">
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{
                backgroundImage: `url(${encodeURI(slide.image)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh"
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">{slide.title}</h2>
                <p className="text-lg md:text-2xl text-blue-100 mb-6 drop-shadow">{slide.description}</p>
                <a
                  href={slide.cta.href}
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow"
                >
                  {slide.cta.label}
                </a>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow rounded-full" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow rounded-full" />
    </Carousel>
  );
};

export default CarouselBanner;
