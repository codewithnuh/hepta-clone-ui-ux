import About from "@/components/sections/about";
import { CarouselSection } from "@/components/sections/corousel";
import Destination from "@/components/sections/destination";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import RecentBlogPosts from "@/components/sections/recent-blogposts";
import { Testimonial } from "@/components/sections/testimonial";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <CarouselSection />
      <RecentBlogPosts />
      <Testimonial />
      <Destination />
    </div>
  );
};

export default HomePage;
