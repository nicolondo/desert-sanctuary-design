import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FragranceCard from "./FragranceCard";
import { fragrances } from "@/data/fragrances";

const FragrancesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      id="fragrances"
      ref={containerRef}
      className="relative min-h-screen py-32 lg:py-48"
    >
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24 lg:mb-32"
        >
          <span className="section-title text-xs md:text-sm tracking-[0.4em] block mb-6">
            The Fragrances
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.1em] text-primary mb-8">
            The Collection
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Each fragrance is an artifact. An isolated piece of time, 
            treated with the reverence of an ancestral object.
          </p>
        </motion.div>

        {/* Fragrances Grid - 6 columns on large screens for 12 fragrances */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-8 max-w-[1600px] mx-auto">
          {fragrances.map((fragrance, index) => (
            <FragranceCard
              key={fragrance.name}
              id={fragrance.id}
              image={fragrance.image}
              name={fragrance.name}
              family={fragrance.family}
              notes={[...fragrance.topNotes.slice(0, 2), ...fragrance.middleNotes.slice(0, 1)]}
              delay={index * 0.08}
            />
          ))}
        </div>

        {/* Closing element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mt-24 lg:mt-32"
        >
          <div className="divider-line" />
        </motion.div>
      </div>
    </section>
  );
};

export default FragrancesSection;
