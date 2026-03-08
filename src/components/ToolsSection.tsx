import logoAdobe from "@/assets/tools/adobe-analytics.png";
import logoTableau from "@/assets/tools/tableau.svg";
import logoQuantum from "@/assets/tools/quantum-metric.png";
import logoSmartsheet from "@/assets/tools/smartsheet.png";
import logoEvolv from "@/assets/tools/evolv.png";
import logoPega from "@/assets/tools/pega.png";
import logoJira from "@/assets/tools/jira.svg";
import logoConfluence from "@/assets/tools/confluence.svg";
import logoPython from "@/assets/tools/python.svg";
import logoSql from "@/assets/tools/sql.svg";
import logoR from "@/assets/tools/r-lang.svg";
import logoExcel from "@/assets/tools/excel.svg";
import logoConvoiq from "@/assets/tools/convoiq.png";

const tools = [
  { name: "Adobe Analytics", logo: logoAdobe, category: "Analytics, AI & Visualization" },
  { name: "Tableau", logo: logoTableau, category: "Analytics, AI & Visualization" },
  { name: "Quantum Metric", logo: logoQuantum, category: "Analytics, AI & Visualization" },
  { name: "Evolv AI", logo: logoEvolv, category: "Analytics, AI & Visualization" },
  { name: "ConvoIQ", logo: logoConvoiq, category: "Analytics, AI & Visualization" },
  { name: "Pega", logo: logoPega, category: "Analytics, AI & Visualization" },
  { name: "Advanced Excel", logo: logoExcel, category: "Analytics, AI & Visualization" },
  { name: "Smartsheet", logo: logoSmartsheet, category: "Collaboration" },
  { name: "Jira", logo: logoJira, category: "Collaboration" },
  { name: "Confluence", logo: logoConfluence, category: "Collaboration" },
  { name: "Python", logo: logoPython, category: "Programming" },
  { name: "SQL", logo: logoSql, category: "Programming" },
  { name: "R Programming", logo: logoR, category: "Programming" },
];

const categories = ["Analytics, AI & Visualization", "Collaboration", "Programming"];

const categoryColors: Record<string, string> = {
  "Analytics, AI & Visualization": "from-primary/20 to-accent/5",
  "Collaboration": "from-primary/20 to-electric-glow/5",
  "Programming": "from-accent/20 to-primary/5",
};

const ToolsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Tools &</span>{" "}
            <span className="text-gradient-blue">Technologies</span>
          </h2>
          <p className="text-muted-foreground italic font-display text-lg">
            Where creativity meets strategy...
          </p>
        </div>

        {categories.map((category, catIdx) => {
          const categoryTools = tools.filter((t) => t.category === category);
          return (
            <div
              key={category}
              data-aos="fade-up"
              data-aos-delay={catIdx * 100}
              className="mb-8"
            >
              <h3 className="text-sm font-body uppercase tracking-widest text-muted-foreground mb-4 pl-1">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categoryTools.map((tool) => (
                  <div
                    key={tool.name}
                    className={`glass-card rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3 group cursor-default
                      bg-gradient-to-br ${categoryColors[category]} hover:border-primary/30 hover:-translate-y-1 hover:scale-[1.04] transition-all duration-300`}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-body font-medium text-foreground leading-tight">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ToolsSection;
