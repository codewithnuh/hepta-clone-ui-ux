import React from "react";
import DestinationCard from "../shared/destination-card";
import { DESTINATIONS } from "@/constants";

const Destination = () => {
  return (
    <section>
      <div className="container flex items-center flex-col justify-center ">
        <div className="text-center flex items-center flex-col justify-center max-w-[700px] space-y-4">
          <h2 className="text-3xl md:text-4xl ">Top Destination</h2>
          <p className="text-muted-foreground text-lg tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
            iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
            laborum voluptate id porro, culpa maiores quis, blanditiis
            laboriosam alias. Sed.
          </p>
        </div>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-8 items-baseline">
          {DESTINATIONS.map(({ imgUrl, reviews, stars, title }, index) => (
            <DestinationCard
              imgUrl={imgUrl}
              reviews={reviews}
              stars={stars}
              title={title}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destination;
