"use client";
import { FEATURES } from "@/constants";
import React, { useRef, useEffect, useState } from "react";
import ExperienceCard from "../shared/experience-card";
import { motion } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section ref={ref} className="py-28 bg-gray-50">
      <div className="container px-4 flex items-center flex-col justify-center">
        <motion.div className="text-center flex items-center flex-col justify-center max-w-[700px] space-y-4">
          <h2 className="text-3xl md:text-4xl">
            Experience Once In Your Life Time
          </h2>
          <p className="text-muted-foreground text-lg tracking-wider">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </motion.div>
        <motion.div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {FEATURES.map(({ title, description, icon }, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ExperienceCard
                description={description}
                title={title}
                iconUrl={icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
