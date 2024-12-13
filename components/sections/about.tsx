import React from "react";
import Image from "next/image";
import { PlayCircleIcon } from "lucide-react";
import { Button } from "../ui/button";

const About = () => {
  return (
    <section className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/assets/images/img_1_long.jpg.webp"
            layout="fill"
            objectFit="cover"
            alt="About us"
            className="rounded-sm"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Welcome To Our Website
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="text-muted-foreground">
            {" "}
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="flex items-center space-x-2 ">
            <PlayCircleIcon className="w-8 h-8 text-teal-400" />
            <Button
              className="text-2xl font-bold text-teal-400 hover:text-teal-600 hover:bg-transparent"
              variant={"ghost"}
            >
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
