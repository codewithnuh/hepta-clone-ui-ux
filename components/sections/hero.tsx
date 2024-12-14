import React from "react";
import Link from "next/link";
import Navigation from "../globals/navigation";

const Hero = () => {
  return (
    <div className="bg-[url('/assets/images/hero_1.jpg.webp')] h-[600px] bg-cover bg-center bg-black/50 bg-blend-overlay ">
      {" "}
      {/* <Header /> */}
      <Navigation />
      <section className="mt-36 text-white">
        <div className="flex flex-col items-center text-center space-y-6 py-8">
          <h1 className="text-5xl sm:text-7xl md:8xl font-bold   ">
            Travel & Tours
          </h1>
          <p className="text-2xl">
            A free template by Colorlib. Download and share!
          </p>
          <Link
            className="uppercase py-2 px-6 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out font-semibold"
            href={"/"}
          >
            Visit Colorlib
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
