import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getFragranceById, fragrances } from "@/data/fragrances";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const fragrance = getFragranceById(id || "");

  if (!fragrance) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Fragrance not found</h1>
          <Link to="/" className="text-sand hover:text-sand-light transition-colors">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  // Get adjacent fragrances for navigation
  const currentIndex = fragrances.findIndex(f => f.id === id);
  const prevFragrance = currentIndex > 0 ? fragrances[currentIndex - 1] : null;
  const nextFragrance = currentIndex < fragrances.length - 1 ? fragrances[currentIndex + 1] : null;

  return (
    <main className="relative overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-8 lg:px-16">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              to="/#fragrances" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 text-sm tracking-wide"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collection
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-square flex items-center justify-center">
                <img
                  src={fragrance.image}
                  alt={fragrance.name}
                  className="w-full h-full object-contain max-w-md mx-auto"
                />
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Name & Family */}
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                  {fragrance.family}
                </p>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.08em] text-primary">
                  {fragrance.name}
                </h1>
              </div>

              <div className="divider-line" />

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-lg">
                {fragrance.description}
              </p>

              {/* Olfactive Notes */}
              <div className="space-y-6">
                <h3 className="text-xs uppercase tracking-[0.3em] text-sand">
                  Olfactive Pyramid
                </h3>
                
                {/* Top Notes */}
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Top Notes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {fragrance.topNotes.map((note, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-secondary/50 text-primary text-sm tracking-wide"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Middle Notes */}
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Heart Notes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {fragrance.middleNotes.map((note, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-secondary/50 text-primary text-sm tracking-wide"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Base Notes */}
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Base Notes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {fragrance.baseNotes.map((note, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-secondary/50 text-primary text-sm tracking-wide"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation between products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-24 pt-12 border-t border-border/30 flex justify-between items-center"
          >
            {prevFragrance ? (
              <Link 
                to={`/fragrance/${prevFragrance.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm tracking-wide">{prevFragrance.name}</span>
              </Link>
            ) : <div />}
            
            {nextFragrance ? (
              <Link 
                to={`/fragrance/${nextFragrance.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-sm tracking-wide">{nextFragrance.name}</span>
                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductPage;
