import { motion } from "framer-motion";

interface FragranceCardProps {
  image: string;
  name: string;
  family: string;
  notes: string[];
  delay?: number;
}

const FragranceCard = ({ image, name, family, notes, delay = 0 }: FragranceCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      {/* Image container - optimized for transparent PNGs */}
      <div className="relative aspect-square mb-6 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Notes reveal on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-background/90 to-transparent">
          <div className="flex flex-wrap gap-1">
            {notes.map((note, index) => (
              <span
                key={index}
                className="text-sand-light/80 text-[10px] tracking-[0.1em] uppercase"
              >
                {note}{index < notes.length - 1 ? " •" : ""}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="text-center space-y-1">
        <h3 className="font-serif text-lg md:text-xl font-light tracking-[0.08em] text-primary group-hover:text-sand-light transition-colors duration-500">
          {name}
        </h3>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {family}
        </p>
      </div>

      {/* Decorative line */}
      <div className="mt-4 mx-auto h-px w-0 bg-gradient-to-r from-transparent via-amber to-transparent group-hover:w-full transition-all duration-700" />
    </motion.article>
  );
};

export default FragranceCard;
