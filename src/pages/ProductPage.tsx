import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { getFragranceById, fragrances } from "@/data/fragrances";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const fragrance = getFragranceById(id || "");

  // Scroll to top when page loads or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

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
      
      {/* Hero Section with Lifestyle Image */}
      {fragrance.lifestyleImage && (
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img 
              src={fragrance.lifestyleImage} 
              alt={`${fragrance.name} lifestyle`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
          </motion.div>
          
          {/* Back button overlay */}
          <div className="absolute top-24 left-8 lg:left-16 z-10">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={handleBackClick}
              className="inline-flex items-center gap-2 text-sand-light/80 hover:text-sand-light transition-colors duration-300 text-sm tracking-wide bg-background/30 backdrop-blur-sm px-4 py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Collection
            </motion.button>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-16 left-8 lg:left-16 z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs uppercase tracking-[0.3em] text-sand-light/70 mb-3"
            >
              {fragrance.family}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-serif text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.08em] text-sand-light"
            >
              {fragrance.name}
            </motion.h1>
          </div>
        </section>
      )}

      {/* Product Details Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-32"
            >
              <div className="aspect-square flex items-center justify-center p-4">
                <img
                  src={fragrance.image}
                  alt={fragrance.name}
                  className="w-full h-full object-contain max-w-lg mx-auto scale-125"
                />
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Description */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.06em] text-primary mb-6">
                  The Fragrance
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {fragrance.description}
                </p>
              </div>

              <div className="divider-line" />

              {/* Olfactive Notes */}
              <div className="space-y-8">
                <h3 className="text-xs uppercase tracking-[0.3em] text-sand">
                  Olfactive Pyramid
                </h3>
                
                {/* Top Notes */}
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Top Notes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {fragrance.topNotes.map((note, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 border border-border/50 text-primary text-sm tracking-wide hover:border-amber/50 transition-colors"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Middle Notes */}
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Heart Notes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {fragrance.middleNotes.map((note, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 border border-border/50 text-primary text-sm tracking-wide hover:border-amber/50 transition-colors"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Base Notes */}
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Base Notes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {fragrance.baseNotes.map((note, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 border border-border/50 text-primary text-sm tracking-wide hover:border-amber/50 transition-colors"
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
