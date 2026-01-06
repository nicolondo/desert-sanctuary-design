import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import mataiLogo from "@/assets/matai-logo.png";

const navItems = [
  { label: "Universe", href: "/#universo" },
  { label: "Fragrances", href: "/#fragrances" },
  { label: "Syras", href: "/#syras" },
  { label: "Ritual", href: "/#ritual" },
  { label: "Contact", href: "/#contacto" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== "/" && href.startsWith("/#")) {
      return;
    }
    
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? "bg-background/90 backdrop-blur-md border-b border-border/30" 
            : "bg-background/50 backdrop-blur-sm"
        }`}
      >
        <nav className="container mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative z-10"
            >
              <Link to="/">
                <img 
                  src={mataiLogo} 
                  alt="MATAI" 
                  className="h-6 lg:h-8 w-auto invert opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation Items */}
            <motion.ul 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:flex items-center gap-10 xl:gap-14"
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <Link 
                    to={item.href} 
                    className="nav-link"
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden relative z-10 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Link 
                      to={item.href} 
                      className="font-serif text-3xl font-light tracking-[0.1em] text-primary hover:text-sand-light transition-colors duration-300"
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              {/* Contact info in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute bottom-16 text-center"
              >
                <a 
                  href="mailto:info@mataiperfumes.com"
                  className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
                >
                  info@mataiperfumes.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
