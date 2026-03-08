import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, GraduationCap } from "lucide-react";

import verizonLogo from "@/assets/logos/verizon.png";
import uniphoreLogo from "@/assets/logos/uniphore.png";
import bnpLogo from "@/assets/logos/bnp-paribas.png";
import greatlakesLogo from "@/assets/logos/greatlakes.png";
import itmLogo from "@/assets/logos/itm.jpg";

const timelineItems = [
  {
    type: "work" as const,
    company: "Verizon",
    role: "Consultant – Project & Product Management",
    period: "Feb 2022 – Present",
    location: "Chennai, India",
    logo: verizonLogo,
    logoBg: "bg-white",
    highlights: [
      "$380M+ cumulative revenue impact through AI-enabled digital personalization",
      "AI/ML bundled product recommendation engine: +8-10% home internet sales",
      "Checkout flow redesign: 9 pages → 4 steps, -10% cart abandonment",
      "Six Sigma PMO governance: -25% project tracking effort via Smartsheet",
      "12 internal awards: 8 Spotlight + 4 Simple Thanks",
    ],
  },
  {
    type: "work" as const,
    company: "Uniphore Software Systems",
    role: "Senior Business Analyst & Project Manager",
    period: "Sep 2018 – Feb 2022",
    location: "Chennai, India",
    logo: uniphoreLogo,
    logoBg: "bg-[hsl(var(--navy))]",
    highlights: [
      "70-80% reduction in After-Call Work via LLM-driven automation",
      "Managed 20+ resources with 100% SLA adherence across parallel workstreams",
      "8-10% lift in insurance policy renewals via predictive analytics",
      "Deployed automated QA across 4 global regions",
      "3× Award of Excellence for innovation & cross-functional leadership",
    ],
  },
  {
    type: "education" as const,
    company: "Great Lakes Institute of Management",
    role: "PGP – Business Analytics & Business Intelligence",
    period: "2017 – 2018",
    location: "Chennai, India",
    logo: greatlakesLogo,
    logoBg: "bg-white",
    highlights: [
      "Advanced analytics, BI tools & data-driven decision making",
    ],
  },
  {
    type: "work" as const,
    company: "BNP Paribas",
    role: "Associate → Senior Associate",
    period: "Dec 2014 – Sep 2018",
    location: "Chennai, India",
    logo: bnpLogo,
    logoBg: "bg-transparent",
    highlights: [
      "Derivatives Middle Office automation: +50% efficiency",
      "Championed automation elevating data accuracy to 100%",
      "Golden Star, Rising Star & 8 Kaizen Awards",
      "3 promotions in 4 years",
    ],
  },
  {
    type: "education" as const,
    company: "ITM – Institute for Technology & Management",
    role: "PGDM – Finance",
    period: "2013 – 2015",
    location: "Chennai, India",
    logo: itmLogo,
    logoBg: "bg-white rounded-full",
    highlights: [
      "Foundation in financial analysis, derivatives & portfolio management",
    ],
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Professional</span>{" "}
            <span className="text-gradient-blue">Journey</span>
          </h2>
          <p className="text-muted-foreground">
            A decade of impact across global enterprises
          </p>
          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <Building2 size={14} className="text-primary" />
              <span className="text-primary font-medium">Work Experience</span>
              <span className="text-muted-foreground">← Left</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Right →</span>
              <GraduationCap size={14} className="text-accent" />
              <span className="text-accent font-medium">Education</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timelineItems.map((exp, i) => {
            const isWork = exp.type === "work";
            const borderColor = isWork ? "border-primary" : "border-accent";
            const dotColor = isWork ? "bg-primary" : "bg-accent";
            const bulletColor = isWork ? "bg-primary" : "bg-accent";
            const roleColor = isWork ? "text-primary" : "text-accent";
            const hoverShadow = isWork
              ? "hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
              : "hover:shadow-[0_0_20px_hsl(var(--accent)/0.15)]";

            return (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, x: isWork ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative mb-12 md:mb-16 ${
                  isWork ? "md:pr-[52%]" : "md:pl-[52%]"
                } pl-16 md:pl-0`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-4 md:left-1/2 top-2 w-5 h-5 rounded-full ${dotColor} border-4 border-background md:-translate-x-1/2 z-10`}
                />

                {/* Card */}
                <div
                  className={`glass-card rounded-xl p-6 border-l-4 ${borderColor} ${hoverShadow} transition-shadow duration-300`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg ${exp.logoBg} flex items-center justify-center overflow-hidden shrink-0 p-1`}
                    >
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        {isWork ? (
                          <Building2 size={14} className="text-primary" />
                        ) : (
                          <GraduationCap size={14} className="text-accent" />
                        )}
                        <span className="text-xs font-mono text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {exp.company}
                      </h3>
                    </div>
                  </div>
                  <p className={`text-sm ${roleColor} font-body font-medium mb-2`}>
                    {exp.role}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-secondary-foreground"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${bulletColor} mt-1.5 shrink-0`}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
