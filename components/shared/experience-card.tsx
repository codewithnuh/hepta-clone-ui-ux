"use client";

import React, { useRef } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const ExperienceCard = ({
  iconUrl,
  title,
  description,
}: ExperienceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.05,
        borderRadius: "10px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      }}
    >
      <Card className="bg-transparent shadow-none border-2 p-4 flex flex-col items-center justify-center text-center h-full">
        <CardHeader>
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
          >
            <Image src={iconUrl} alt={title} width={80} height={80} />
          </motion.div>
        </CardHeader>
        <CardTitle className="text-2xl font-semibold mt-4">{title}</CardTitle>
        <CardDescription className="text-xl mt-2">
          {description}
        </CardDescription>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
