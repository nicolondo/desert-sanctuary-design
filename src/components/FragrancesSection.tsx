import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FragranceCard from "./FragranceCard";
import fragranceSahara from "@/assets/fragrance-sahara-detail.jpg";
import fragranceLunar from "@/assets/fragrance-lunar.jpg";
import fragranceNasim from "@/assets/fragrance-nasim.jpg";
import fragranceAdhara from "@/assets/fragrance-adhara.jpg";
import fragranceKaif from "@/assets/fragrance-kaif.jpg";
import fragranceNoor from "@/assets/fragrance-noor.jpg";
import fragranceSabah from "@/assets/fragrance-sabah.jpg";
import fragranceAura from "@/assets/fragrance-aura.jpg";

const fragrances = [
  {
    image: fragranceSahara,
    name: "Sahara",
    family: "Oriental Amaderado",
    notes: ["Orquídea", "Madera", "Ámbar Dorado"],
    volume: "Volumen I",
  },
  {
    image: fragranceLunar,
    name: "Lunar",
    family: "Terroso Mineral",
    notes: ["Piedra Volcánica", "Vetiver", "Cuero"],
    volume: "Volumen II",
  },
  {
    image: fragranceNasim,
    name: "Nasim",
    family: "Oriental Especiado",
    notes: ["Sándalo", "Madera Antigua", "Ámbar"],
    volume: "Volumen III",
  },
  {
    image: fragranceAdhara,
    name: "Adhara",
    family: "Mineral Equilibrado",
    notes: ["Roca Negra", "Incienso", "Cedro"],
    volume: "Volumen IV",
  },
  {
    image: fragranceKaif,
    name: "Kaif",
    family: "Cálido Intenso",
    notes: ["Azafrán", "Rosa Roja", "Oud"],
    volume: "Volumen V",
  },
  {
    image: fragranceNoor,
    name: "Noor",
    family: "Luminoso Vibrante",
    notes: ["Limón", "Jazmín", "Almizcle"],
    volume: "Volumen VI",
  },
  {
    image: fragranceSabah,
    name: "Sabah",
    family: "Amanecer Suave",
    notes: ["Arena", "Flor Blanca", "Vainilla"],
    volume: "Volumen VII",
  },
  {
    image: fragranceAura,
    name: "Aura",
    family: "Dulce Etéreo",
    notes: ["Rosa", "Bergamota", "Musk"],
    volume: "Volumen VIII",
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
            Ocho Volúmenes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Cada fragancia es un artefacto. Una pieza aislada del tiempo, 
            tratada con la reverencia de un objeto ancestral.
          </p>
        </motion.div>

        {/* Fragrances Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {fragrances.map((fragrance, index) => (
            <FragranceCard
              key={fragrance.name}
              {...fragrance}
              delay={index * 0.1}
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
