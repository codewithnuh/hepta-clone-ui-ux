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
    <section ref={ref} className="relative  pb-20 pt-48 -z-20 bg-teal-600 ">
      {/* Wavy Background */}
      {/* <svg
        className="absolute top-0 fill-white"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        ></path>
      </svg> */}
      <svg
        className="absolute top-0 fill-white"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        ></path>
      </svg>
      {/* Content */}
      <div className="relative container flex items-center flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center flex items-center flex-col justify-center max-w-[700px] space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-8">
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
