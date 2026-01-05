import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import lifestyleSabah from "@/assets/lifestyle-sabah.jpg";

const SanctuarySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      id="universo"
      ref={containerRef}
      className="relative min-h-screen py-32 lg:py-48 overflow-hidden"
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <span className="section-title text-xs md:text-sm tracking-[0.4em] block mb-8">
              Capítulo II
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.06em] text-primary mb-8 leading-tight">
              El desierto como
              <span className="block text-gradient-sand">santuario olfativo</span>
            </h2>

            <div className="divider-line mb-10" />

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Donde la tradición se encuentra con la vanguardia. MATAI nace de 
                la fusión entre el conocimiento ancestral de la perfumería oriental 
                y una visión contemporánea del lujo.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                El desierto no es vacío. Es un lugar de fuerza, introspección 
                y transformación. Un santuario donde el silencio habla y el 
                viento escribe historias en la arena.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-poetic text-sand/70 text-lg"
              >
                "La perfumería es identidad líquida"
              </motion.p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden glow-amber">
              <motion.img
                style={{ y: imageY }}
                src={desertAbstract}
                alt="Desert sanctuary"
                className="absolute inset-0 w-full h-[120%] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />
            </div>
            
            {/* Floating accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-8 -left-8 w-32 h-32 border border-amber/30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SanctuarySection;
