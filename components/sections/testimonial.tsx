"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export function Testimonial() {
  const testimonials = [
    {
      quote: `“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`,
      name: "Clare Gupta",
      designation: "Product Manager at TechFlow",
      src: "/assets/images/person_1.jpg.webp",
    },
    {
      quote: `“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.rdquo”`,
      name: "Rogie Slater",
      designation: "Product Manager at TechFlow",
      src: "/assets/images/person_2.jpg.webp",
    },
    {
      quote: `“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`,
      name: "John Doe",
      designation: "Product Manager at TechFlow",
      src: "/assets/images/person_3.jpg.webp",
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="py-10 mt-14" ref={ref}>
      <section>
        <motion.h2
          className="text-6xl font-semibold text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Happy Clients
        </motion.h2>
        <AnimatedTestimonials testimonials={testimonials} />;
      </section>
    </div>
  );
}
