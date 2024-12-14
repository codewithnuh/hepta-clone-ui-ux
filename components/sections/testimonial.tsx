import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonial() {
  const testimonials = [
    {
      quote: `“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`,
      name: "Clare Gupta",
      designation: "Product Manager at TechFlow",
      src: "/assets/images/person_1.jpg.webp",
    },
    {
      quote: `“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.rdquo”`,
      name: "Rogie Slater",
      designation: "Product Manager at TechFlow",
      src: "/assets/images/person_2.jpg.webp",
    },
    {
      quote: `“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”`,
      name: "John Doe",
      designation: "Product Manager at TechFlow",
      src: "/assets/images/person_3.jpg.webp",
    },
  ];
  return (
    <div className="py-10 mt-14 ">
      <section>
        <h2 className="text-6xl font-semibold text-center">Happy Clients</h2>
        <AnimatedTestimonials testimonials={testimonials} />;
      </section>
    </div>
  );
}
