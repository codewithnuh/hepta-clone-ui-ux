"use client";

import { FEATURES } from "@/constants";
import React, { useRef } from "react";
import ExperienceCard from "../shared/experience-card";
import { motion, useInView } from "framer-motion";

const Experience = () => {
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
    <section ref={ref} className="py-28 bg-gray-50">
      <div className="container flex items-center flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center flex items-center flex-col justify-center max-w-[700px] space-y-4"
        >
          <h2 className="text-3xl md:text-4xl">
            Experience Once In Your Life Time
          </h2>
          <p className="text-muted-foreground text-lg tracking-wider">
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
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {FEATURES.map(({ title, description, icon }, index) => (
            <ExperienceCard
              key={index}
              description={description}
              title={title}
              iconUrl={icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
