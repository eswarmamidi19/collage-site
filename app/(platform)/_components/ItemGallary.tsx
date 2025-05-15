"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { colleges } from "@/lib/data";
import Image from "next/image";

const unsplashImages = [
  colleges[0].gallery[0].image,
  colleges[0].gallery[1].image,
  colleges[0].gallery[0].image,
  colleges[0].gallery[1].image,
];

export default function CollegeImageCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto  mt-6 ">
      <Carousel className="relative w-full">
        <CarouselContent>
          {unsplashImages.map((url, index) => (
            <CarouselItem key={index} className="basis-full px-1">
              <div className="relative w-full h-[190px] sm:h-[200px] md:h-[400px]  overflow-hidden">
                <Image
                  src={url}
                  alt={`Campus ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute top-1/2 left-3 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full w-8 h-8 p-1" />
        <CarouselNext className="absolute top-1/2 right-3 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full w-8 h-8 p-1" />
      </Carousel>
    </div>
  );
}
