import { FEATURES } from "@/constants";
import React from "react";
import ExperienceCard from "../shared/experience-card";

const Experience = () => {
  return (
    <section className="py-28 bg-gray-50">
      <div className="container flex items-center flex-col justify-center ">
        <div className="text-center flex items-center flex-col justify-center max-w-[700px] space-y-4">
          <h2 className="text-3xl md:text-4xl ">
            Experience Once In Your Life Time
          </h2>
          <p className="text-muted-foreground text-lg tracking-wider">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {FEATURES.map(({ title, description, icon }, index) => (
            <ExperienceCard
              key={index}
              description={description}
              title={title}
              iconUrl={icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
