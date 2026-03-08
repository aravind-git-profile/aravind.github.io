import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import certsCollage from "@/assets/certifications-collage.jpg";
import { ExternalLink } from "lucide-react";

const certifications = [
  { name: "PMP®", issuer: "PMI", desc: "Project Management Professional", color: "from-primary to-electric-glow" },
  { name: "CBAP®", issuer: "IIBA", desc: "Certified Business Analysis Professional", color: "from-accent to-gold-dim" },
  { name: "PSPO II", issuer: "Scrum.org", desc: "Professional Scrum Product Owner II", color: "from-teal to-primary" },
  { name: "PMI-ACP®", issuer: "PMI", desc: "Agile Certified Practitioner", color: "from-primary to-electric-glow" },
  { name: "SAFe® POPM", issuer: "SAFe 6", desc: "Product Owner / Product Manager", color: "from-accent to-gold-dim" },
  { name: "LSS Green Belt", issuer: "Verizon", desc: "Lean Six Sigma Green Belt", color: "from-teal to-primary" },
];

const additionalSkills = [
  "Smartsheet Core Product",
  "Tableau Advanced",
  "Quantum Metric Business Analysis",
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Credentials & <span className="text-gradient-blue">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuously advancing through industry-recognized professional development
          </p>
        </motion.div>

        {/* Certification badges grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:glow-blue transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-xs font-bold font-mono text-primary-foreground text-center leading-tight">
                  {cert.name.split(" ")[0]}
                </span>
              </div>
              <h3 className="font-body font-bold text-foreground text-lg">{cert.name}</h3>
              <p className="text-sm text-primary font-body">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mt-1">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {additionalSkills.map((skill) => (
            <span key={skill} className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-primary/40 transition-colors">
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Collage image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl" />
          <img
            src={certsCollage}
            alt="Certifications and Awards Collage"
            className="relative rounded-2xl w-full object-cover max-h-[400px]"
          />
        </motion.div>

        {/* Verify link */}
        <div className="text-center mt-6">
          <a
            href="https://www.kickresume.com/cv/aravind/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-electric-glow transition-colors"
          >
            <ExternalLink size={14} /> View KickResume Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
