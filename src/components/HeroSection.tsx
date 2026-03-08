import { motion } from "framer-motion";
import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import coverImg from "@/assets/cover.png";

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-body mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to Opportunities
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="text-foreground">Aravind</span>
              <br />
              <span className="text-gradient-blue">Chandramohan</span>
            </h1>

            <p className="text-lg md:text-xl text-accent font-display italic mb-4">
              Product · Program · Project Leadership
            </p>

            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Transforming business challenges into clear, actionable solutions and executing them with excellence. 
              11+ years driving AI-enabled digital transformation, analytics-led strategy & operational excellence 
              across Telecom, Banking & Technology.
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5"><Mail size={14} className="text-primary" /> mail.aravind.c@gmail.com</span>
              <span className="flex items-center gap-1.5"><Phone size={14} className="text-primary" /> +91-7010967137</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> Chennai, India</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/aravindchandramohan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-electric-glow transition-colors glow-blue"
              >
                <Linkedin size={18} /> Connect on LinkedIn
              </a>
              {/* TODO: Replace # with your actual CV download link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent/50 text-accent font-body font-semibold text-sm hover:bg-accent/10 transition-colors"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </motion.div>

          {/* Cover image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/30 to-accent/30 blur-xl" />
              <img
                src={coverImg}
                alt="Aravind Chandramohan - Product & Project Leadership"
                className="relative rounded-2xl shadow-2xl max-w-md w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
