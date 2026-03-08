import { Camera, Heart, Plane } from "lucide-react";
import dronePhoto from "@/assets/drone-photo.jpg";

const BeyondSection = () => {
  return (
    <section id="beyond" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-gold">Beyond the</span> <span className="text-gradient-blue">Boardroom</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Life beyond the professional arena — passions that fuel creativity and perspective
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Drone Photography */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="glass-card rounded-2xl overflow-hidden group"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={dronePhoto}
                alt="Aerial drone photography of nature landscape"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Camera size={18} className="text-primary" />
                </div>
                <span className="text-foreground font-body font-semibold text-sm">Licensed Drone Pilot</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
                <Plane size={20} className="text-primary" /> Drone Photography
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As a licensed drone pilot and nature & wildlife explorer, I capture breathtaking 
                aerial perspectives of landscapes. This passion for seeing the bigger picture from 
                above directly translates into how I approach complex business challenges — 
                always seeking the strategic, bird's-eye view before diving into execution.
              </p>
            </div>
          </div>

          {/* Civic Advocacy */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="glass-card rounded-2xl overflow-hidden group"
          >
            <div className="relative h-56 bg-gradient-to-br from-primary/20 via-accent/10 to-teal/20 flex items-center justify-center">
              <div className="text-center">
                <Heart size={64} className="text-accent mx-auto mb-4 opacity-60" />
                <p className="text-lg font-display italic text-foreground/80">
                  "Where creativity<br />meets empathy"
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold mb-2 flex items-center gap-2">
                <Heart size={20} className="text-accent" /> Civic Advocacy & Social Action
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Actively volunteering in civil rights and social action initiatives. 
                Committed to driving meaningful change beyond the corporate world — 
                applying the same rigor, empathy, and leadership skills to advocate 
                for community welfare, social justice, and sustainable development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondSection;
