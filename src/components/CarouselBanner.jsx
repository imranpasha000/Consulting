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
    image: "/banner/2.png",
    cta: { label: "Explore GST", href: "/gst" }
  },
  {
    title: "ITR Filing Simplified",
    description: "File your income tax returns quickly and accurately with our experts.",
    image: "/banner/4.png",
    cta: { label: "File ITR", href: "/itr" }
  },
  {
    title: "Trademark & IP Protection",
    description: "Safeguard your brand with our trademark and copyright services.",
    image: "/banner/accounting.png",
    cta: { label: "Protect Your Brand", href: "/other/trademark" }
  },
  {
    title: "Business Consultation",
    description: "Get strategic advice for your business growth and compliance.",
    image: "/banner/Registration.png",
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
    <Carousel className="w-full overflow-hidden h-[100vh]" setApi={setEmblaApi}>
      <CarouselContent className="h-full">
        {bannerSlides.map((slide, index) => (
          <CarouselItem
            key={index}
            className="h-full w-full"
          >
            <div
              className="relative w-full h-full flex items-end justify-center pb-16"
              style={{
                backgroundImage: `url(${encodeURI(slide.image)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Text + Button */}
              <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl text-blue-100 mb-6 drop-shadow">
                  {slide.description}
                </p>
                <Button
                  asChild
                  className="bg-blue-900 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow"
                >
                  <a href={slide.cta.href}>{slide.cta.label}</a>
                </Button>
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
