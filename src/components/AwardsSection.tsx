import { Award, Star, Trophy } from "lucide-react";
import collage from "@/assets/collage-09.jpg";
import verizonLogo from "@/assets/logos/verizon-wordmark.svg";
import uniphoreLogo from "@/assets/logos/uniphore-white.png";
import bnpLogo from "@/assets/logos/bnp-paribas-logo.png";

const awards = [
  {
    company: "Verizon",
    logo: verizonLogo,
    logoBg: "bg-white",
    logoClass: "max-h-14 max-w-[180px]",
    icon: Star,
    accolades: [
      { label: "8 Spotlight Awards", desc: "Customer Excellence recognitions from CX Leadership & Senior Management" },
      { label: "4 Simple Thanks", desc: "Peer-nominated awards for collaboration and going above & beyond" },
    ],
    accent: "from-[hsl(var(--destructive))] to-[hsl(var(--accent))]",
    border: "border-destructive/30",
  },
  {
    company: "Uniphore",
    logo: uniphoreLogo,
    logoBg: "bg-slate-800",
    logoClass: "max-h-14 max-w-[180px]",
    icon: Trophy,
    accolades: [
      { label: "Award of Excellence ×3", desc: "Exceptional contributions in product innovation and collaborative cross-functional leadership" },
    ],
    accent: "from-[hsl(var(--teal))] to-[hsl(var(--primary))]",
    border: "border-teal/30",
  },
  {
    company: "BNP Paribas",
    logo: bnpLogo,
    logoBg: "bg-white",
    logoClass: "max-h-20 max-w-[240px]",
    icon: Award,
    accolades: [
      { label: "Golden Star · Rising Star", desc: "Prestigious recognition for outstanding individual performance" },
      { label: "Kaizen Awards ×8", desc: "Process innovation and automation excellence across multiple initiatives" },
      { label: "Multiple Awards of Excellence", desc: "Innovation, automation, and exemplary team performance" },
    ],
    accent: "from-[hsl(var(--accent))] to-[hsl(var(--gold-dim))]",
    border: "border-accent/30",
  },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Awards &</span>{" "}
            <span className="text-gradient-blue">Honours</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognized across organizations for leadership, innovation, and delivering excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, i) => {
            const Icon = award.icon;
            return (
              <div
                key={award.company}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className={`glass-card rounded-2xl p-6 border ${award.border} hover:glow-blue transition-all duration-300 flex flex-col`}
              >
                {/* Company logo */}
                <div className={`w-full h-20 ${award.logoBg} rounded-lg flex items-center justify-center mb-5 px-4`}>
                  <img
                    src={award.logo}
                    alt={award.company}
                    className={`${award.logoClass} object-contain`}
                  />
                </div>

                {/* Icon accent */}
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${award.accent} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Accolades */}
                <div className="space-y-4 flex-1">
                  {award.accolades.map((a, j) => (
                    <div key={j}>
                      <h4 className="font-body font-bold text-foreground text-sm">{a.label}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{a.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Collage image */}
        <div data-aos="zoom-in" data-aos-delay="300" className="relative rounded-2xl overflow-hidden mt-12">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl" />
          <img
            src={collage}
            alt="Certifications and Awards Collage"
            className="relative rounded-2xl w-full object-cover max-h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
