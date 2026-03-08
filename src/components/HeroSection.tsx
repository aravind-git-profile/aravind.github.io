import { motion } from "framer-motion";
import { Download, Linkedin, Mail, MapPin, Phone, Briefcase, Award, Zap, Globe, CalendarCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 w-full py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {[
            { icon: <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-ping" /><span className="relative inline-flex rounded-full h-2 w-2 bg-primary" /></span>, label: "Open to Opportunities" },
            { icon: <Globe size={14} className="text-primary" />, label: "Global Mobility — Ready to Relocate" },
            { icon: <CalendarCheck size={14} className="text-primary" />, label: "Available for Immediate Joining" },
          ].map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-body"
            >
              {badge.icon}
              <motion.span
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              >
                {badge.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-gradient-gold">Aravind</span>{" "}
          <span className="text-gradient-blue">Chandramohan</span>
        </motion.h1>

        {/* Subtitle with animated underline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-accent font-display italic mb-6"
        >
          Product · Program · Project Leadership
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto"
        >
          Transforming business challenges into clear, actionable solutions and executing them with excellence.
          11+ years driving AI-enabled digital transformation, analytics-led strategy & operational excellence
          across Telecom, Banking & Technology.
        </motion.p>

        {/* Quick stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10"
        >
          {[
            { icon: Briefcase, label: "11+ Years", sub: "Experience" },
            { icon: Award, label: "6+ Certs", sub: "PMP, CBAP, PSPO..." },
            { icon: Zap, label: "$380M+", sub: "Revenue Impact" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon size={18} className="text-primary" />
              </div>
              <div className="text-left">
                <p className="text-foreground font-body font-bold text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-10"
        >
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-xs">
            <Mail size={12} className="text-primary" /> mail.aravind.c@gmail.com
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-xs">
            <Phone size={12} className="text-primary" /> +91-7010967137
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-xs">
            <MapPin size={12} className="text-primary" /> Chennai, India
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/aravindchandramohan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-electric-glow transition-colors glow-blue"
          >
            <Linkedin size={18} /> Connect on LinkedIn
          </a>
          {/* TODO: Replace # with your actual CV download link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-accent/50 text-accent font-body font-semibold text-sm hover:bg-accent/10 transition-colors"
          >
            <Download size={18} /> Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
