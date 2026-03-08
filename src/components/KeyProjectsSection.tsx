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
    title: "Omnichannel Program Management & AI Governance (NBX)",
    icon: <Rocket size={18} />,
    summary: "Led end-to-end program management for the NBX initiative — an AI and predictive modeling platform designed to anticipate customers' next probable actions and proactively equip internal systems with the right solutions. The program spanned 12+ individual projects, requiring cross-functional coordination to prevent slippage and ensure each project delivered maximum value. Applied Lean Six Sigma methodologies to overhaul program governance, migrating from manual spreadsheet-based tracking to an enterprise-grade Smartsheet platform with automated workflows.",
    wins: ["−25% tracking effort", "12+ workstreams standardized", "Automated workflow triggers"],
    tools: ["Smartsheet", "Jira", "Confluence", "Lean Six Sigma", "Pega", "AI Models"],
  },
  {
    title: "Hyper-Personalized AI Chatbot",
    icon: <Bot size={18} />,
    summary: "Delivering the right personalized product to prospective customers in the US telecom space is complex — with numerous product bundles and intricate legal disclosures. Led the integration of an external hyper-personalization AI platform into Verizon's digital ecosystem, and drove fine-tuning of personalization models across the entire product portfolio. The initiative delivered measurable improvements across the digital sales funnel — boosting conversion rates, reducing drop-offs, and improving NPS and CSAT scores.",
    wins: ["↑ Digital conversions", "↓ Drop-offs", "↑ NPS & CSAT"],
    tools: ["AI/ML", "Personalization Engine", "Adobe Analytics", "A/B Testing"],
  },
  {
    title: "AI-Led Digital Content Creation & Governance",
    icon: <FileText size={18} />,
    summary: "Verizon's traditional content publishing pipeline required sequential approvals across UI/UX, communications, and legal teams — creating significant delays. Introduced an AI-powered in-house content generation framework that produces digital assets in pre-approved formats, streamlining the pathway from ideation to deployment. Established a governance framework enabling AI-generated content to be routed directly for UI/UX and legal approval — eliminating manual coding and iterative design revisions.",
    wins: ["~50% faster publishing", "Eliminated manual coding", "Automated deployment queuing"],
    tools: ["Generative AI", "Adobe Analytics", "Process Automation"],
  },
  {
    title: "AI-Based Customer Journey Summarization & Automation",
    icon: <Brain size={18} />,
    summary: "Customers interact with Verizon across multiple touchpoints — digital channels, physical stores, and inbound calls. A persistent pain point was the lack of cross-channel visibility when customers escalated issues. Led deployment of an AI-based solution that aggregates interactions across all channels and generates a consolidated journey summary surfaced in real time to the representative — enabling faster and more accurate issue resolution.",
    wins: ["−10% resolution time", "−3–5% negative NPS", "Eliminated information silos"],
    tools: ["ConvoIQ", "Quantum Metric", "Adobe Analytics", "Tableau", "Smartsheet"],
  },
  {
    title: "Digital Experience Optimization – Checkout Flow",
    icon: <ShoppingCart size={18} />,
    summary: "Redesigned the end-to-end cart purchase journey, compressing the checkout flow from 9 pages to 4 streamlined steps. The redesign significantly reduced friction in the purchase experience through iterative user behavior analysis and A/B testing, resulting in measurable improvements across conversion and efficiency metrics.",
    wins: ["−10% cart abandonment", "+40% checkout speed", "9 → 4 steps"],
    tools: ["Evolv AI", "Adobe Analytics", "Quantum Metric", "A/B Testing", "Tableau"],
  },
  {
    title: "Bundled Products Market Research & Optimization",
    icon: <Package size={18} />,
    summary: "Traditional shopping flows required customers to add products individually using market basket analysis-based recommendations. Identified an opportunity to shift toward curated product bundles — offering a cohesive set of complementary products as a single purchase unit. Conducted market research to identify the most commercially viable bundle combinations, leveraging AI models to determine product pairings most likely to resonate with specific customer segments.",
    wins: ["↑ Average order value", "↑ Targeting precision", "AI-assisted bundle analysis"],
    tools: ["Market Analysis", "Evolv AI", "A/B Testing", "Multivariate Testing"],
  },
];

const uniphoreProjects: Project[] = [
  {
    title: "Conversational Analytics for Public Policy & Sentiment (COVID-19)",
    icon: <Shield size={18} />,
    summary: "Led an end-to-end conversational analytics initiative to evaluate public sentiment, behavioral trends, and emerging concerns during the COVID-19 crisis. Analyzed large-scale speech and text interaction data to surface actionable insights that directly informed policy direction for a quasi-governmental organization. The findings shaped the redesign of citizen relief measures, strengthened communication frameworks for vulnerable communities, and guided evidence-based policy updates.",
    wins: ["Informed pandemic policy", "Redesigned relief measures", "Protected vulnerable communities"],
    tools: ["Speech Analytics", "NLP", "Sentiment Analysis", "Conversational AI", "Text Analytics"],
  },
  {
    title: "Real-Time After-Call Work (ACW) Automation",
    icon: <Headphones size={18} />,
    summary: "Spearheaded deployment of a real-time ACW automation solution for a large BPO contact center, leveraging Large Language Models and advanced Conversational Analytics. Designed an AI workflow that automatically summarized full agent–customer conversations into concise, structured notes and auto-populated ticket fields — eliminating manual data entry entirely. Agents were freed from administrative overhead, enabling them to focus on customer interactions.",
    wins: ["−70–80% ACW time", "+25% agent productivity", "Eliminated manual ticketing"],
    tools: ["LLMs", "Conversational AI", "NLP", "AI Workflow Automation", "CRM Integration"],
  },
  {
    title: "Automated Speech-Based Agent Performance Evaluation",
    icon: <Globe size={18} />,
    summary: "Led deployment of automated, speech-driven agent performance evaluation systems across contact centers for multiple multinational organizations spanning India, the U.S., Europe, and Asia-Pacific. Designed analytics workflows that assessed conversational interactions at scale — delivering unbiased, consistent, and real-time evaluations of agent behavior, compliance, empathy, and communication quality. Organizations leveraged outputs to implement personalized coaching plans and drive measurable improvements in satisfaction metrics.",
    wins: ["4 global regions deployed", "↑ CSAT & NPS", "Scalable automated QA"],
    tools: ["Speech Analytics", "Conversational AI", "Automated QA", "NLP", "Compliance Monitoring"],
  },
  {
    title: "Renewal Probability Prediction – Leading Indian Insurer",
    icon: <TrendingUp size={18} />,
    summary: "Spearheaded a predictive analytics initiative leveraging large-scale conversational data to forecast customer renewal probability and detect early intent signals for policy continuation or lapse. Built a data-driven segmentation model enabling the insurer to identify at-risk customers well ahead of renewal windows and deploy targeted, personalized outreach strategies. The initiative transformed renewal management from reactive follow-ups to proactive, intelligence-driven engagement.",
    wins: ["+8–10% renewal lift", "Proactive retention", "Beat industry benchmarks"],
    tools: ["Predictive Analytics", "Conversational Data Mining", "ML", "Customer Segmentation"],
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
