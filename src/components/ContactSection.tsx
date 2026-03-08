import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient-blue">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Open to exciting opportunities in Product, Program & Project Management leadership roles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
        >
          <a
            href="mailto:mail.aravind.c@gmail.com"
            className="glass-card rounded-xl p-5 hover:border-primary/40 transition-all group"
          >
            <Mail size={24} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-body text-foreground">Email</p>
            <p className="text-xs text-muted-foreground mt-1">mail.aravind.c@gmail.com</p>
          </a>

          <a
            href="tel:+917010967137"
            className="glass-card rounded-xl p-5 hover:border-primary/40 transition-all group"
          >
            <Phone size={24} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-body text-foreground">Phone</p>
            <p className="text-xs text-muted-foreground mt-1">+91-7010967137</p>
          </a>

          <a
            href="https://www.linkedin.com/in/aravindchandramohan/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-5 hover:border-primary/40 transition-all group"
          >
            <Linkedin size={24} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-body text-foreground">LinkedIn</p>
            <p className="text-xs text-muted-foreground mt-1">aravindchandramohan</p>
          </a>

          <div className="glass-card rounded-xl p-5">
            <MapPin size={24} className="text-accent mx-auto mb-3" />
            <p className="text-sm font-body text-foreground">Location</p>
            <p className="text-xs text-muted-foreground mt-1">Chennai, India</p>
          </div>
        </motion.div>

        {/* Industry badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Industry Experience</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Telecom", "Banking & Financial Services", "Conversational AI", "Analytics", "Insurance"].map((ind) => (
              <span key={ind} className="px-4 py-1.5 rounded-full text-xs border border-border text-muted-foreground">
                {ind}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Certification badges bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {["PMP®", "CBAP®", "PSPO II", "PMI-ACP®", "SAFe® 6 POPM", "LSS Green Belt"].map((cert) => (
            <span key={cert} className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
              {cert}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
