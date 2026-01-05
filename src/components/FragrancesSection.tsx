import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FragranceCard from "./FragranceCard";
import fragranceVol1 from "@/assets/fragrance-vol1.jpg";
import fragranceVol2 from "@/assets/fragrance-vol2.jpg";

const fragrances = [
  {
    image: fragranceVol1,
    name: "Syra del Alba",
    family: "Oriental Amaderado",
    notes: ["Ámbar", "Sándalo", "Rosa del Desierto"],
    volume: "Volumen I",
  },
  {
    image: fragranceVol2,
    name: "Viento de Medianoche",
    family: "Oriental Especiado",
    notes: ["Incienso", "Oud", "Azafrán"],
    volume: "Volumen II",
  },
];

const FragrancesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section
      id="fragancias"
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
            Las Fragancias
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.1em] text-primary mb-8">
            Dos Volúmenes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Cada fragancia es un artefacto. Una pieza aislada del tiempo, 
            tratada con la reverencia de un objeto ancestral.
          </p>
        </motion.div>

        {/* Fragrances Grid */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
          {fragrances.map((fragrance, index) => (
            <FragranceCard
              key={fragrance.name}
              {...fragrance}
              delay={index * 0.2}
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
