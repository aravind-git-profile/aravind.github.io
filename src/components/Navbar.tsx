import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Home, BarChart3, Layers, Award, Route, FolderKanban, Wrench, Trophy, Heart, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const navItems = [
  { label: "Home", href: "#hero", icon: Home },
  { label: "Impact", href: "#impact", icon: BarChart3 },
  { label: "Competencies", href: "#competencies", icon: Layers },
  { label: "Credentials", href: "#certifications", icon: Award },
  { label: "Journey", href: "#journey", icon: Route },
  { label: "Projects", href: "#key-projects", icon: FolderKanban },
  { label: "Tools", href: "#tools", icon: Wrench },
  { label: "Awards", href: "#awards", icon: Trophy },
  { label: "Beyond", href: "#beyond", icon: Heart },
  { label: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollY } = useScroll();
  const imageSize = useTransform(scrollY, [0, 300], [56, 32]);
  const borderWidth = useTransform(scrollY, [0, 300], [2, 2]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <motion.img
            src={profilePhoto}
            alt="Aravind Chandramohan"
            className="rounded-full object-cover border-primary"
            style={{
              width: imageSize,
              height: imageSize,
              borderWidth: borderWidth,
              borderStyle: "solid",
              borderColor: "hsl(210 100% 56%)",
            }}
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-colors duration-200 group"
            >
              <item.icon size={14} className="opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200" />
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  <item.icon size={16} className="opacity-70" />
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
