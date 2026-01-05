import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import mataiLogo from "@/assets/matai-logo.png";

const navItems = [
  { label: "Universo", href: "#universo" },
  { label: "Fragancias", href: "#fragancias" },
  { label: "Syras", href: "#syras" },
  { label: "Ritual", href: "#ritual" },
  { label: "Journal", href: "#journal" },
  { label: "Contacto", href: "#contacto" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 100);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -20 
      }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/30" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative z-10"
          >
            <img 
              src={mataiLogo} 
              alt="MATAI" 
              className="h-6 lg:h-8 w-auto invert opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </motion.a>

          {/* Navigation Items */}
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
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Menu Button */}
          <button className="lg:hidden flex flex-col gap-1.5 p-2">
            <span className="w-6 h-px bg-primary/70" />
            <span className="w-4 h-px bg-primary/70" />
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;
