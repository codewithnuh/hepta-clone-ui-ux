"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import BlogCard from "../shared/blog-card";

const RecentBlogPosts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section ref={ref} className="relative my-10 pb-10 pt-40 bg-teal-600 ">
      {/* Wavy Background */}
      <div className="absolute inset-0 -z-10 -top-[55rem]">
        <svg
          className="w-full h-full  text-teal-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path
            fillOpacity="1"
            d="M0,96L60,128C120,160,240,224,360,245.3C480,267,600,245,720,240C840,235,960,245,1080,234.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative container flex items-center flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center flex items-center flex-col justify-center max-w-[700px] space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Recent Blog Post
          </h2>
          <p className="text-white text-lg tracking-wider">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full grid grid-cols-1 gap-6 sm:grid-cols-3 mt-8"
        >
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </motion.div>
      </div>
    </section>
  );
};

export default RecentBlogPosts;
