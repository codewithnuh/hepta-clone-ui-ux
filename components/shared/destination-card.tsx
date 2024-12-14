"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
const DestinationCard = ({
  imgUrl,
  title,
  stars,
  reviews,
}: DestinationCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="p-0">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <Image
              src={imgUrl}
              alt={title}
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </motion.div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Star
                      size={20}
                      className={`${
                        index < stars
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      } mr-0.5`}
                    />
                  </motion.div>
                ))}
            </div>
            <p className="text-sm text-gray-600">{reviews} Reviews</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DestinationCard;
