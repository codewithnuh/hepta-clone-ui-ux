import React from "react";
import { CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

const DestinationCard = ({
  imgUrl,
  title,
  stars,
  reviews,
}: DestinationCardProps) => {
  return (
    <div>
      <CardHeader>
        <Image
          src={imgUrl}
          alt="destination"
          width={400}
          height={300}
          className="w-full h-auto"
        />
      </CardHeader>
      <CardContent className="flex space-x-3 items-end justify-center">
        <div>
          <p className="font-semibold tracking-tighter">{title}</p>
          <div className="flex space-x-3">
            {Array(stars)
              .fill(5)
              .map((_, index) => (
                <Star
                  height={20}
                  width={20}
                  fill="orange"
                  className="border-none"
                  key={index}
                />
              ))}
          </div>
        </div>
        <p>{reviews} Reviews</p>
      </CardContent>
    </div>
  );
};

export default DestinationCard;
