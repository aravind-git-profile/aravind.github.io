import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Award, DollarSign, Users } from "lucide-react";

const counters = [
  { icon: Briefcase, value: 11, suffix: "+", label: "Years Experience", color: "text-primary" },
  { icon: Award, value: 6, suffix: "+", label: "Global Certifications", color: "text-accent" },
  { icon: DollarSign, value: 380, suffix: "M+", label: "Revenue Impact", color: "text-primary" },
  { icon: Users, value: 20, suffix: "+", label: "Team Members Led", color: "text-accent" },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 30));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="font-display text-4xl md:text-5xl font-bold">
      {target >= 100 ? "$" : ""}{count}{suffix}
    </span>
  );
};

const ImpactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">The Impact</span> <span className="text-gradient-blue">Numbers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Driving measurable outcomes from agile startups to Fortune 500 enterprises — spanning IT, Banking, Analytics & Telecommunications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {counters.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 md:p-8 text-center hover:border-primary/40 transition-all duration-300 group"
            >
              <item.icon className={`mx-auto mb-4 ${item.color} group-hover:scale-110 transition-transform`} size={32} />
              <div className={item.color}>
                <AnimatedCounter target={item.value} suffix={item.suffix} inView={inView} />
              </div>
              <p className="text-muted-foreground text-sm mt-2 font-body">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional impact highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid md:grid-cols-3 gap-4 mt-8"
        >
          {[
            { stat: "50%", desc: "Efficiency gain via Lean Six Sigma automation" },
            { stat: "70-80%", desc: "Reduction in After-Call Work" },
            { stat: "25%", desc: "Project tracking effort saved" },
          ].map((item) => (
            <div key={item.stat} className="glass-card rounded-lg p-5 flex items-center gap-4">
              <span className="text-2xl font-display font-bold text-primary">{item.stat}</span>
              <span className="text-sm text-muted-foreground">{item.desc}</span>
            </div>
          ))}
        </motion.div>

        {/* Impact pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {[
            { label: "Strategic Planning", icon: "🎯" },
            { label: "Innovation", icon: "💡" },
            { label: "Process Efficiency", icon: "⚡" },
            { label: "Change Leadership", icon: "🚀" },
            { label: "Digital Transformation", icon: "🔄" },
          ].map((item, i) => (
            <motion.span
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
              className="glass-card rounded-full px-6 py-3 text-sm font-semibold tracking-wide text-primary border border-primary/30 hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 cursor-default flex items-center gap-2"
            >
              <span>{item.icon}</span>
              {item.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
