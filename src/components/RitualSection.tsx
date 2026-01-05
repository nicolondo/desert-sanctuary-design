import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ritualSteps = [
  {
    number: "01",
    title: "Silencio",
    description: "Encuentra un momento de quietud. El ritual comienza con la ausencia de ruido.",
  },
  {
    number: "02",
    title: "Intención",
    description: "Sostén el frasco. Siente su peso. La fragancia es una extensión de tu presencia.",
  },
  {
    number: "03",
    title: "Aplicación",
    description: "Puntos de pulso. Muñecas, cuello, detrás de las orejas. Donde la sangre canta.",
  },
  {
    number: "04",
    title: "Espera",
    description: "Deja que la fragancia se funda contigo. No la persigas. Ella te encontrará.",
  },
];

const RitualSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section
      id="ritual"
      ref={containerRef}
      className="relative min-h-screen py-32 lg:py-48 bg-secondary/30"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--sand)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-8 lg:px-16 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-24 lg:mb-32"
        >
          <span className="section-title text-xs md:text-sm tracking-[0.4em] block mb-6">
            Capítulo III
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.08em] text-primary max-w-2xl">
            El Ritual de la
            <span className="block text-gradient-gold glow-gold">Aplicación</span>
          </h2>
        </motion.div>

        {/* Ritual Steps */}
        <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16">
          {ritualSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative pl-16"
            >
              {/* Number */}
              <span className="absolute left-0 top-0 font-serif text-4xl md:text-5xl font-light text-amber/30 group-hover:text-amber/60 transition-colors duration-500">
                {step.number}
              </span>
              
              {/* Content */}
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-light tracking-[0.1em] text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting line */}
              <div className="absolute left-8 top-14 bottom-0 w-px bg-gradient-to-b from-amber/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Closing quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 lg:mt-32 max-w-xl mx-auto text-center"
        >
          <p className="text-poetic text-xl md:text-2xl text-sand/80">
            "La fragancia perfecta es aquella que se vuelve invisible, 
            fundiéndose con tu propia esencia hasta que nadie sabe 
            dónde terminas tú y dónde comienza ella."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default RitualSection;
