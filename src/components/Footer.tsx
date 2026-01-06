import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Instagram } from "lucide-react";
import mataiLogo from "@/assets/matai-logo.png";

const footerLinks = [
  { label: "Universe", href: "/#universo" },
  { label: "Fragrances", href: "/#fragrances" },
  { label: "Contact", href: "/#contacto" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    
    if (location.pathname !== "/") {
      navigate(href);
    } else if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer id="contacto" className="relative py-24 lg:py-32 border-t border-border/30">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24 items-start">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/">
              <img 
                src={mataiLogo} 
                alt="MATAI" 
                className="h-6 w-auto invert opacity-70 mb-6"
              />
            </Link>
            <p className="text-poetic text-muted-foreground text-sm max-w-xs">
              Niche perfumery born from the enigma of the desert.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:justify-self-center"
          >
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="nav-link text-xs cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:justify-self-end lg:text-right"
          >
            <h4 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Contact
            </h4>
            <a 
              href="mailto:info@mataiperfumes.com"
              className="text-primary hover:text-sand-light transition-colors duration-300 text-sm font-serif tracking-wide"
            >
              info@mataiperfumes.com
            </a>
            <a 
              href="https://www.instagram.com/matai.perfumes"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 hidden lg:block text-muted-foreground hover:text-primary transition-colors duration-300 lg:text-right"
            >
              <Instagram size={20} className="lg:ml-auto" />
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-muted-foreground/60 tracking-wide">
            © 2025 MATAI. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40 tracking-wider">
            Created in the silence of the desert
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
