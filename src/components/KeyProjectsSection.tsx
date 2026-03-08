import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Rocket, Brain, Bot, FileText, ShoppingCart, Package, Shield, Headphones, Globe, TrendingUp } from "lucide-react";
import verizonLogo from "@/assets/logos/verizon.svg";
import uniphoreLogo from "@/assets/logos/uniphore.png";

interface Project {
  title: string;
  icon: React.ReactNode;
  summary: string;
  wins: string[];
  tools: string[];
}

const verizonProjects: Project[] = [
  {
    title: "Omnichannel AI Governance (NBX)",
    icon: <Rocket size={18} />,
    summary: "Led 12+ project AI platform predicting customer next-best actions with Six Sigma PMO governance.",
    wins: ["−25% tracking effort", "12+ workstreams standardized"],
    tools: ["Smartsheet", "Jira", "Lean Six Sigma", "Pega"],
  },
  {
    title: "Hyper-Personalized AI Chatbot",
    icon: <Bot size={18} />,
    summary: "Integrated external AI personalization platform into Verizon's digital ecosystem for real-time product recommendations.",
    wins: ["↑ Digital conversions", "↑ NPS & CSAT"],
    tools: ["AI/ML", "Personalization Engine"],
  },
  {
    title: "AI-Led Content Creation & Governance",
    icon: <FileText size={18} />,
    summary: "Introduced AI-powered content generation framework with automated legal approval routing.",
    wins: ["~50% faster publishing", "Eliminated manual coding"],
    tools: ["Generative AI", "Adobe Analytics"],
  },
  {
    title: "Customer Journey Summarization",
    icon: <Brain size={18} />,
    summary: "Deployed AI aggregating cross-channel interactions into real-time journey summaries for agents.",
    wins: ["−10% resolution time", "−3–5% negative NPS"],
    tools: ["ConvoIQ", "Quantum Metric", "Tableau"],
  },
  {
    title: "Checkout Flow Optimization",
    icon: <ShoppingCart size={18} />,
    summary: "Redesigned cart journey from 9 pages to 4 streamlined steps via iterative A/B testing.",
    wins: ["−10% cart abandonment", "+40% checkout speed"],
    tools: ["Evolv AI", "Adobe Analytics", "A/B Testing"],
  },
  {
    title: "Bundled Products Optimization",
    icon: <Package size={18} />,
    summary: "Shifted from individual product selection to AI-curated bundles using market basket analysis.",
    wins: ["↑ Average order value", "↑ Targeting precision"],
    tools: ["Market Analysis", "Evolv AI", "MVT"],
  },
];

const uniphoreProjects: Project[] = [
  {
    title: "COVID-19 Public Policy Analytics",
    icon: <Shield size={18} />,
    summary: "Analyzed large-scale speech & text data to surface public sentiment and behavioral trends during the pandemic.",
    wins: ["Informed policy decisions", "Redesigned relief measures"],
    tools: ["Speech Analytics", "NLP", "Sentiment Analysis"],
  },
  {
    title: "Real-Time ACW Automation",
    icon: <Headphones size={18} />,
    summary: "Deployed LLM-driven automation replacing manual after-call work with real-time conversation summarization.",
    wins: ["−70–80% ACW time", "+25% agent productivity"],
    tools: ["LLMs", "Conversational AI", "NLP"],
  },
  {
    title: "Global Agent Performance Evaluation",
    icon: <Globe size={18} />,
    summary: "Automated speech-driven QA evaluation across multinational contact centers spanning 4 regions.",
    wins: ["4 global regions deployed", "↑ CSAT & NPS"],
    tools: ["Speech Analytics", "Automated QA", "NLP"],
  },
  {
    title: "Insurance Renewal Prediction",
    icon: <TrendingUp size={18} />,
    summary: "Built predictive models on conversational data to forecast renewal probability and detect at-risk customers.",
    wins: ["+8–10% renewal lift", "Proactive retention"],
    tools: ["Predictive Analytics", "ML", "Customer Segmentation"],
  },
];

const ProjectCard = ({ project, index, inView }: { project: Project; index: number; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
    className="group relative rounded-xl border border-border/60 bg-card/50 p-5 hover:border-primary/40 hover:bg-primary/[0.04] transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
  >
    <div className="flex items-start gap-3 mb-3">
      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        {project.icon}
      </div>
      <h4 className="font-display text-sm font-bold text-foreground leading-tight pt-1">
        {project.title}
      </h4>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
      {project.summary}
    </p>
    <div className="flex flex-wrap gap-1.5 mb-3">
      {project.wins.map((win, i) => (
        <span
          key={i}
          className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-accent/15 text-accent border border-accent/20"
        >
          {win}
        </span>
      ))}
    </div>
    <div className="flex flex-wrap gap-1">
      {project.tools.map((tool, i) => (
        <span
          key={i}
          className="text-[10px] text-muted-foreground/70 bg-muted/50 px-1.5 py-0.5 rounded"
        >
          {tool}
        </span>
      ))}
    </div>
  </motion.div>
);

const CompanyProjectBlock = ({
  company,
  logo,
  logoBg,
  accentClass,
  projects,
  inView,
}: {
  company: string;
  logo: string;
  logoBg: string;
  accentClass: string;
  projects: Project[];
  inView: boolean;
}) => (
  <div className="mb-16 last:mb-0">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-8"
    >
      <div className={`w-10 h-10 rounded-lg ${logoBg} flex items-center justify-center overflow-hidden shrink-0 p-1`}>
        <img src={logo} alt={company} className="w-full h-full object-contain" />
      </div>
      <div>
        <h3 className="font-display text-xl font-bold text-foreground">{company}</h3>
        <p className="text-xs text-muted-foreground">Key Projects</p>
      </div>
      <div className={`flex-1 h-px ${accentClass} ml-4`} />
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} index={i} inView={inView} />
      ))}
    </div>
  </div>
);

const KeyProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="key-projects" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Key</span>{" "}
            <span className="text-gradient-blue">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flagship initiatives driving measurable business outcomes through AI, analytics, and digital transformation
          </p>
        </motion.div>

        <CompanyProjectBlock
          company="Verizon"
          logo={verizonLogo}
          logoBg="bg-background"
          accentClass="bg-gradient-to-r from-primary/40 to-transparent"
          projects={verizonProjects}
          inView={inView}
        />

        <CompanyProjectBlock
          company="Uniphore Software Systems"
          logo={uniphoreLogo}
          logoBg="bg-transparent"
          accentClass="bg-gradient-to-r from-accent/40 to-transparent"
          projects={uniphoreProjects}
          inView={inView}
        />
      </div>
    </section>
  );
};

export default KeyProjectsSection;
