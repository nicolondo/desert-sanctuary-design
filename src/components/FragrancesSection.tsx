import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FragranceCard from "./FragranceCard";

// Large bottle images from public folder
const fragrances = [
  {
    image: "/ADHARA (Large).png",
    name: "Adhara",
    family: "Mineral Equilibrado",
    notes: ["Roca", "Incienso", "Cedro"],
  },
  {
    image: "/AURA.png",
    name: "Aura",
    family: "Dulce Etéreo",
    notes: ["Rosa", "Bergamota", "Musk"],
  },
  {
    image: "/CELESTE.png",
    name: "Celeste",
    family: "Fresco Acuático",
    notes: ["Ozono", "Menta", "Té Verde"],
  },
  {
    image: "/KAIF.png",
    name: "Kaif",
    family: "Cálido Intenso",
    notes: ["Azafrán", "Rosa Roja", "Oud"],
  },
  {
    image: "/LUNAR.png",
    name: "Lunar",
    family: "Nocturno Profundo",
    notes: ["Oud Negro", "Cuero", "Vetiver"],
  },
  {
    image: "/MIRZA.png",
    name: "Mirza",
    family: "Especiado Cálido",
    notes: ["Canela", "Cardamomo", "Ámbar"],
  },
  {
    image: "/NASIM.png",
    name: "Nasim",
    family: "Oriental Dorado",
    notes: ["Sándalo", "Ámbar", "Madera Antigua"],
  },
  {
    image: "/NOOR.png",
    name: "Noor",
    family: "Luminoso Vibrante",
    notes: ["Limón", "Jazmín", "Almizcle"],
  },
  {
    image: "/ORYX.png",
    name: "Oryx",
    family: "Amaderado Noble",
    notes: ["Cuero", "Tabaco", "Sándalo"],
  },
  {
    image: "/SABAH.png",
    name: "Sabah",
    family: "Amanecer Puro",
    notes: ["Flor Blanca", "Algodón", "Vainilla"],
  },
  {
    image: "/SAHARA.png",
    name: "Sahara",
    family: "Desértico Dorado",
    notes: ["Arena", "Ámbar", "Sol"],
  },
  {
    image: "/ZENITH.png",
    name: "Zenith",
    family: "Celestial Místico",
    notes: ["Incienso", "Mirra", "Oud Blanco"],
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
            La Colección
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Cada fragancia es un artefacto. Una pieza aislada del tiempo, 
            tratada con la reverencia de un objeto ancestral.
          </p>
        </motion.div>

        {/* Fragrances Grid - 6 columns on large screens for 12 fragrances */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 lg:gap-8 max-w-[1600px] mx-auto">
          {fragrances.map((fragrance, index) => (
            <FragranceCard
              key={fragrance.name}
              {...fragrance}
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
