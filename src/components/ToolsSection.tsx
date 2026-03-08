import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import toolsBadges from "@/assets/tools-badges.png";

const tools = [
  "Adobe Analytics", "Tableau", "Quantum Metric", "Smartsheet",
  "Evolv AI", "Pega", "Jira / Confluence", "Python",
  "SQL", "R Programming", "Advanced Excel", "ConvoIQ",
];

const ToolsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Tools &</span> <span className="text-gradient-blue">Technologies</span>
          </h2>
          <p className="text-muted-foreground italic font-display text-lg">
            Where creativity meets strategy...
          </p>
        </motion.div>

        {/* Tools grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tools.map((tool, i) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="px-5 py-2.5 rounded-lg glass-card text-sm font-body text-foreground hover:border-primary/40 hover:text-primary transition-all cursor-default"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>

        {/* Badge image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 blur-lg" />
            <img
              src={toolsBadges}
              alt="Tools and certification badges"
              className="relative rounded-2xl w-full bg-card p-4"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
