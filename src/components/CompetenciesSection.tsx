import {
  Target, Brain, BarChart3, Settings, Users, Megaphone,
  Database, LineChart, Lightbulb, Shield, Workflow, MessageSquare
} from "lucide-react";

const competencies = [
  { icon: Target, title: "Product Governance & Strategy", desc: "End-to-end lifecycle ownership, roadmap discipline & enterprise alignment" },
  { icon: Brain, title: "AI-Enabled Transformation", desc: "Orchestrating AI-driven personalization & scalable digital solutions" },
  { icon: BarChart3, title: "Analytics & Revenue Growth", desc: "Data-driven decision frameworks converting insights into revenue impact" },
  { icon: Settings, title: "Operational Excellence", desc: "Six Sigma workflows reducing friction & improving delivery predictability" },
  { icon: Users, title: "Cross-Functional Leadership", desc: "Guiding 20+ interdisciplinary team members across functions" },
  { icon: Megaphone, title: "Change Leadership", desc: "Enterprise change initiatives & mentoring high-performing teams" },
  { icon: Database, title: "Business Intelligence", desc: "Data visualization, generative AI & market research insights" },
  { icon: LineChart, title: "Program Execution", desc: "Portfolio prioritization & decision frameworks at scale" },
  { icon: Lightbulb, title: "Product Innovation", desc: "AI/ML recommendation engines & hyper-personalization platforms" },
  { icon: Shield, title: "Stakeholder Arbitration", desc: "C-level engagement, expectation management & transparent communication" },
  { icon: Workflow, title: "Agile & SAFe", desc: "Scrum, SAFe 6 POPM, iterative delivery & sprint governance" },
  { icon: MessageSquare, title: "Conversational AI", desc: "Speech analytics, NLP & sentiment analysis solutions" },
];

const CompetenciesSection = () => {
  return (
    <section id="competencies" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Core</span> <span className="text-gradient-blue">Competencies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Where creativity meets strategy — bridging technical excellence with business impact
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {competencies.map((item, i) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className="glass-card rounded-xl p-5 hover:border-primary/40 hover:glow-blue transition-all duration-300 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto group-hover:bg-primary/20 transition-colors">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-body font-semibold text-sm text-foreground mb-1 text-center">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;
