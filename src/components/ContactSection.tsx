import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";
import coverBanner from "@/assets/contact-banner.png";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Let's</span> <span className="text-gradient-blue">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Open to exciting opportunities in Product, Program & Project Management leadership roles.
          </p>
        </div>

        {/* Cover banner */}
        <div data-aos="zoom-in" data-aos-delay="100" className="mb-12">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl" />
            <img
              src={coverBanner}
              alt="Aravind Chandramohan — Product & Project Leadership"
              className="relative rounded-2xl w-full object-cover"
            />
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          <a
            href="mailto:mail.aravind.c@gmail.com"
            className="glass-card rounded-xl p-5 hover:border-primary/40 transition-all group"
          >
            <Mail size={24} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-body text-foreground">Email</p>
            <p className="text-xs text-muted-foreground mt-1">mail.aravind.c@gmail.com</p>
          </a>

          <a
            href="tel:+917010967137"
            className="glass-card rounded-xl p-5 hover:border-primary/40 transition-all group"
          >
            <Phone size={24} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-body text-foreground">Phone</p>
            <p className="text-xs text-muted-foreground mt-1">+91-7010967137</p>
          </a>

          <a
            href="https://www.linkedin.com/in/aravindchandramohan/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-5 hover:border-primary/40 transition-all group"
          >
            <Linkedin size={24} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-body text-foreground">LinkedIn</p>
            <p className="text-xs text-muted-foreground mt-1">aravindchandramohan</p>
          </a>

          <div className="glass-card rounded-xl p-5">
            <MapPin size={24} className="text-accent mx-auto mb-3" />
            <p className="text-sm font-body text-foreground">Location</p>
            <p className="text-xs text-muted-foreground mt-1">Chennai, India</p>
          </div>
        </div>

        {/* Industry badges */}
        <div data-aos="fade-up" data-aos-delay="300" className="mb-8">
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Industry Experience</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Telecom", "Banking & Financial Services", "Conversational AI", "Analytics", "Insurance"].map((ind) => (
              <span key={ind} className="px-4 py-1.5 rounded-full text-xs border border-border text-muted-foreground">
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* Certification badges bottom */}
        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap justify-center gap-3">
          {["PMP®", "CBAP®", "PSPO II", "PMI-ACP®", "SAFe® 6 POPM", "LSS Green Belt"].map((cert) => (
            <span key={cert} className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
