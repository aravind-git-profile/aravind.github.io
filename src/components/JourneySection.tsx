import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    company: "Verizon",
    role: "Consultant – Project & Product Management",
    period: "Feb 2022 – Present",
    location: "Chennai, India",
    highlights: [
      "$380M+ cumulative revenue impact through AI-enabled digital personalization",
      "AI/ML bundled product recommendation engine: +8-10% home internet sales",
      "Checkout flow redesign: 9 pages → 4 steps, -10% cart abandonment",
      "Six Sigma PMO governance: -25% project tracking effort via Smartsheet",
      "12 internal awards: 8 Spotlight + 4 Simple Thanks",
    ],
    color: "border-primary",
    dotColor: "bg-primary",
  },
  {
    type: "education",
    company: "Great Lakes Institute of Management",
    role: "PGP – Business Analytics & Business Intelligence",
    period: "2017 – 2018",
    location: "Chennai, India",
    highlights: [
      "Advanced analytics, BI tools & data-driven decision making",
    ],
    color: "border-accent",
    dotColor: "bg-accent",
  },
  {
    type: "work",
    company: "Uniphore Software Systems",
    role: "Senior Business Analyst & Project Manager",
    period: "Sep 2018 – Feb 2022",
    location: "Chennai, India",
    highlights: [
      "70-80% reduction in After-Call Work via LLM-driven automation",
      "Managed 20+ resources with 100% SLA adherence across parallel workstreams",
      "8-10% lift in insurance policy renewals via predictive analytics",
      "Deployed automated QA across 4 global regions",
      "3× Award of Excellence for innovation & cross-functional leadership",
    ],
    color: "border-primary",
    dotColor: "bg-primary",
  },
  {
    type: "work",
    company: "BNP Paribas",
    role: "Associate → Senior Associate",
    period: "Dec 2014 – Sep 2018",
    location: "Chennai, India",
    highlights: [
      "Derivatives Middle Office automation: +50% efficiency",
      "Championed automation elevating data accuracy to 100%",
      "Golden Star, Rising Star & 8 Kaizen Awards",
      "3 promotions in 4 years",
    ],
    color: "border-accent",
    dotColor: "bg-accent",
  },
  {
    type: "education",
    company: "ITM – Institute for Technology & Management",
    role: "PGDM – Finance",
    period: "2013 – 2015",
    location: "Chennai, India",
    highlights: [
      "Foundation in financial analysis, derivatives & portfolio management",
    ],
    color: "border-accent",
    dotColor: "bg-accent",
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Professional</span> <span className="text-gradient-blue">Journey</span>
          </h2>
          <p className="text-muted-foreground">A decade of impact across global enterprises</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-12 md:mb-16 ${
                i % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"
              } pl-16 md:pl-0`}
            >
              {/* Dot */}
              <div className={`absolute left-4 md:left-1/2 top-2 w-5 h-5 rounded-full ${exp.dotColor} border-4 border-background md:-translate-x-1/2 z-10`} />

              {/* Card */}
              <div className={`glass-card rounded-xl p-6 border-l-4 ${exp.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  {exp.type === "work" ? (
                    <Building2 size={16} className="text-primary" />
                  ) : (
                    <GraduationCap size={16} className="text-accent" />
                  )}
                  <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{exp.company}</h3>
                <p className="text-sm text-primary font-body font-medium mb-3">{exp.role}</p>
                <p className="text-xs text-muted-foreground mb-3">{exp.location}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-secondary-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
