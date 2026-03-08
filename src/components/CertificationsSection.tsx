import { ExternalLink } from "lucide-react";

import badgePmp from "@/assets/badges/pmp.png";
import badgeCbap from "@/assets/badges/cbap.png";
import badgePspo from "@/assets/badges/pspo2.png";
import badgePmiAcp from "@/assets/badges/pmi-acp.png";
import badgePopm from "@/assets/badges/safe-popm.png";
import badgeGreenbelt from "@/assets/badges/greenbelt.png";
import badgeSmartsheet from "@/assets/badges/smartsheet.jpeg";
import badgeTableau from "@/assets/badges/tableau.jpg";
import badgeQuantum from "@/assets/badges/quantum-metric.png";

const certifications = [
  { name: "PMP®", issuer: "PMI", desc: "Project Management Professional", badge: badgePmp, url: "https://www.credly.com/badges/8ff28b2a-e0ab-4e38-9c23-f4e96fdc00f5/public_url" },
  { name: "CBAP®", issuer: "IIBA", desc: "Certified Business Analysis Professional", badge: badgeCbap, url: "https://badges.iiba.org/c1054397-635d-4315-a742-a7fa296a463f#acc.4u8EaRNP" },
  { name: "PSPO II", issuer: "Scrum.org", desc: "Professional Scrum Product Owner II", badge: badgePspo, url: "https://www.credly.com/badges/7f336eb4-5d07-4602-899b-beb33057e5b1/public_url" },
  { name: "PMI-ACP®", issuer: "PMI", desc: "Agile Certified Practitioner", badge: badgePmiAcp, url: "https://www.credly.com/badges/c1c55d04-c7ce-47ef-aaee-538e8bdb8090/public_url" },
  { name: "SAFe® POPM", issuer: "SAFe 6", desc: "Product Owner / Product Manager", badge: badgePopm, removeBg: true, url: "https://www.credly.com/badges/03ca94c5-4ef5-4015-b0e0-14b6b43b70d2/public_url" },
  { name: "LSS Green Belt", issuer: "Verizon", desc: "Lean Six Sigma Green Belt", badge: badgeGreenbelt, url: "https://www.linkedin.com/learning/certificates/748dd3afb570ce49f6a19bb27d25182afea4b347f0221c9207ca846716cc95ea" },
];

const additionalSkills = [
  { name: "Smartsheet", issuer: "Smartsheet", desc: "Core Product Certified", badge: badgeSmartsheet, url: "https://www.credly.com/badges/03ca94c5-4ef5-4015-b0e0-14b6b43b70d2/public_url" },
  { name: "Tableau Advanced", issuer: "Tableau", desc: "Advanced Analytics", badge: badgeTableau, removeBg: true, url: "https://www.udemy.com/certificate/UC-FK3TKVXM/" },
  { name: "Quantum Metric", issuer: "Quantum Metric", desc: "Business Analysis Certified", badge: badgeQuantum, url: "https://learn.quantummetric.com/certificate/lNkMjdrSzQ" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Credentials &</span> <span className="text-gradient-blue">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuously advancing through industry-recognized professional development
          </p>
        </div>

        {/* Certification badges grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {certifications.map((cert, i) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay={i * 80}
              className="glass-card rounded-xl p-6 hover:glow-blue transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 group-hover:scale-110 transition-transform flex items-center justify-center">
                <img
                  src={cert.badge}
                  alt={cert.name}
                  className={`w-full h-full object-contain ${cert.removeBg ? 'mix-blend-multiply dark:mix-blend-screen dark:invert' : ''}`}
                />
              </div>
              <h3 className="font-body font-bold text-foreground text-lg">{cert.name}</h3>
              <p className="text-sm text-primary font-body">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mt-1">{cert.desc}</p>
            </a>
          ))}
        </div>

        {/* Additional skills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {additionalSkills.map((skill, i) => (
            <a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in"
              data-aos-delay={600 + i * 80}
              className="glass-card rounded-xl p-6 hover:glow-blue transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 group-hover:scale-110 transition-transform flex items-center justify-center">
                <img
                  src={skill.badge}
                  alt={skill.name}
                  className={`w-full h-full object-contain ${skill.removeBg ? 'mix-blend-multiply dark:mix-blend-screen dark:invert' : ''}`}
                />
              </div>
              <h3 className="font-body font-bold text-foreground text-lg">{skill.name}</h3>
              <p className="text-sm text-primary font-body">{skill.issuer}</p>
              <p className="text-xs text-muted-foreground mt-1">{skill.desc}</p>
            </a>
          ))}
        </div>

        {/* Verify link */}
        <div data-aos="fade-up" className="text-center mt-6">
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
