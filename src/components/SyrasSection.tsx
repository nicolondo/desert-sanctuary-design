import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const floatingTexts = [
  { text: "Las Syras", delay: 0, x: "-10%", y: "0%" },
  { text: "son presencias", delay: 0.2, x: "15%", y: "20%" },
  { text: "invisibles", delay: 0.4, x: "-5%", y: "40%" },
  { text: "que habitan", delay: 0.6, x: "20%", y: "55%" },
  { text: "el desierto", delay: 0.8, x: "-15%", y: "70%" },
];

const SyrasSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section
      id="syras"
      ref={containerRef}
      className="relative min-h-screen py-32 lg:py-48 overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber/5 rounded-full blur-3xl animate-wind-drift" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sand/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-24 lg:mb-32"
        >
          <span className="section-title text-xs md:text-sm tracking-[0.4em]">
            Capítulo I
          </span>
        </motion.div>

        {/* Floating Typography Grid */}
        <div className="relative min-h-[70vh]">
          {/* Main floating texts */}
          {floatingTexts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 1.2, 
                delay: item.delay,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative"
              style={{ 
                marginLeft: item.x,
                marginTop: index === 0 ? 0 : "3rem"
              }}
            >
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[0.08em] text-primary/90">
                {item.text}
              </h2>
            </motion.div>
          ))}

          {/* Poetic fragments - scattered */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute top-[15%] right-[5%] lg:right-[15%] text-poetic text-sand/60 text-lg md:text-xl max-w-xs text-right"
          >
            El viento como guía
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute top-[45%] right-[10%] text-poetic text-sand/50 text-base md:text-lg max-w-xs text-right"
          >
            una fuerza
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute bottom-[20%] right-[5%] lg:right-[20%] text-poetic text-sand/40 text-base md:text-lg max-w-xs text-right"
          >
            y una memoria
          </motion.p>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-24 lg:mt-32 max-w-2xl ml-auto text-right"
        >
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed tracking-wide">
            Cada fragancia MATAI captura la esencia de estas presencias 
            etéreas, traduciendo el lenguaje del desierto en un alfabeto olfativo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SyrasSection;
