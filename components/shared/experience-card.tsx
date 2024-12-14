import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

const ExperienceCard = ({
  iconUrl,
  title,
  description,
}: ExperienceCardProps) => {
  return (
    <Card className="bg-transparent shadow-none border-2 p-4 flex flex-col items-center justify-center text-center">
      <CardHeader>
        <Image src={iconUrl} alt={title} width={80} height={80} />
      </CardHeader>
      <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
      <CardDescription className="text-xl">{description}</CardDescription>
    </Card>
  );
};

export default ExperienceCard;
