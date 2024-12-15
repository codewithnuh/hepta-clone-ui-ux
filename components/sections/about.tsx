"use client";

import React from "react";
import Image from "next/image";
import { PlayCircleIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "../ui/dialog";

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container py-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={imageVariants}
            className="relative h-[400px] md:h-[500px]"
          >
            <Image
              src="/assets/images/img_1_long.jpg.webp"
              layout="fill"
              objectFit="cover"
              alt="About us"
              className="rounded-sm"
            />
          </motion.div>
          <div className="flex flex-col space-y-4">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-semibold"
            >
              Welcome To Our Website
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-sm md:text-base"
            >
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-2"
            >
              <PlayCircleIcon className="w-8 h-8 text-teal-400" />
              <Dialog>
                <DialogTrigger>Watch Video</DialogTrigger>
                <DialogTitle className="sr-only">Video</DialogTitle>
                <DialogContent>
                  <div className="aspect-video mt-4 ">
                    <iframe
                      src="https://www.youtube.com/embed/Sklc_fQBmcs?si=NHmaUgoacw5QOPkn"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <hr />
    </>
  );
};

export default About;
