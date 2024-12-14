"use client";
import React, { useRef } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
const BlogCard = () => {
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
      <Card className="p-2 border-0 shadow-md">
        <CardHeader className="p-0 shadow-none">
          <Image
            src={"/assets/images/slider-1.jpg.webp"}
            className="rounded-md"
            width={500}
            height={500}
            alt="Blog POSt"
          />
        </CardHeader>
        <CardContent className="p-0 flex flex-col justify-center space-y-1">
          <p className="text-muted-foreground mt-2">February 26, 2018</p>
          <Link href={"/#"} className="text-xl font-bold">
            45 Best Places To Unwind
          </Link>
          <p className="text-muted-foreground">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
