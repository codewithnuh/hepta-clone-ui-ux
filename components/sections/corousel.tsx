"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SLIDER_IMAGES } from "@/constants";
import Image from "next/image";

export function CarouselSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section ref={ref} className="top-40 sm:top-60 relative z-20">
      <div className="container flex items-center flex-col justify-center overflow-clip">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center flex items-center flex-col justify-center max-w-[700px] space-y-4"
        >
          <h2 className="text-4xl font-bold md:text-6xl">
            International Tour Management.
          </h2>
          <p className="text-muted-foreground text-lg tracking-wider">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </motion.div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-4xl my-12"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {SLIDER_IMAGES.map((img, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={img.imgUrl}
                    alt="slider"
                    width={1000}
                    height={1000}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
