import About from "@/components/sections/about";
import Destination from "@/components/sections/destination";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import { Testimonial } from "@/components/sections/testimonial";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Testimonial />
      <Destination />
    </div>
  );
};

export default HomePage;
