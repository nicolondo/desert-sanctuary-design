import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ritualSteps = [
  {
    number: "01",
    title: "Silence",
    description: "Find a moment of stillness. The ritual begins with the absence of noise.",
  },
  {
    number: "02",
    title: "Intention",
    description: "Hold the bottle. Feel its weight. The fragrance is an extension of your presence.",
  },
  {
    number: "03",
    title: "Application",
    description: "Pulse points. Wrists, neck, behind the ears. Where the blood sings.",
  },
  {
    number: "04",
    title: "Wait",
    description: "Let the fragrance merge with you. Don't chase it. It will find you.",
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
            The Experience
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.08em] text-primary max-w-2xl">
            The Ritual of
            <span className="block text-gradient-gold glow-gold">Application</span>
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
            "The perfect fragrance is one that becomes invisible, 
            merging with your own essence until no one knows 
            where you end and where it begins."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default RitualSection;
