"use client";

import React, { useRef } from "react";
import DestinationCard from "../shared/destination-card";
import { DESTINATIONS } from "@/constants";
import { motion, useInView } from "framer-motion";

const Destination = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section ref={ref} className="py-20">
      <div className="container flex items-center flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center flex items-center flex-col justify-center max-w-[700px] space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Top Destination</h2>
          <p className="text-muted-foreground text-lg tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
            iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
            laborum voluptate id porro, culpa maiores quis, blanditiis
            laboriosam alias. Sed.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-12 gap-8"
        >
          {DESTINATIONS.map(({ imgUrl, reviews, stars, title }, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DestinationCard
                imgUrl={imgUrl}
                reviews={reviews}
                stars={stars}
                title={title}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Destination;
