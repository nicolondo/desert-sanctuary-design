import { motion } from "framer-motion";

interface FragranceCardProps {
  image: string;
  name: string;
  family: string;
  notes: string[];
  volume: string;
  delay?: number;
}

const FragranceCard = ({ image, name, family, notes, volume, delay = 0 }: FragranceCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      {/* Volume indicator */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.3 }}
        className="absolute -top-6 left-0 text-xs uppercase tracking-[0.4em] text-amber/60"
      >
        {volume}
      </motion.span>

      {/* Image container */}
      <div className="relative aspect-[3/4] mb-10 overflow-hidden bg-card">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Notes reveal on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
          <div className="space-y-2">
            {notes.map((note, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -10 }}
                className="block text-sand-light/80 text-sm tracking-[0.15em] uppercase"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {note}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="space-y-3">
        <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.08em] text-primary group-hover:text-sand-light transition-colors duration-500">
          {name}
        </h3>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {family}
        </p>
      </div>

      {/* Decorative line */}
      <div className="mt-6 h-px w-0 bg-gradient-to-r from-amber to-transparent group-hover:w-full transition-all duration-700" />
    </motion.article>
  );
};

export default FragranceCard;
