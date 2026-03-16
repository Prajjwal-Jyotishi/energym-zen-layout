import { motion } from "framer-motion";
import PageSection from "@/components/PageSection";
import facilitiesImage from "@/assets/facilities-gym.jpg";
import { Dumbbell, Waves, Users, Heart, Zap, Shield } from "lucide-react";

const facilities = [
  { icon: Dumbbell, title: "Elite Weight Room", desc: "10,000 sq ft of premium free weights and machines" },
  { icon: Waves, title: "Infinity Pool", desc: "25m heated pool with underwater lighting" },
  { icon: Users, title: "Group Studios", desc: "Three dedicated studios for yoga, HIIT and boxing" },
  { icon: Heart, title: "Recovery Suite", desc: "Cryotherapy, sauna, and cold plunge pools" },
  { icon: Zap, title: "Performance Lab", desc: "VO2 max testing and body composition analysis" },
  { icon: Shield, title: "Private Training", desc: "Soundproofed 1-on-1 training suites" },
];

const Facilities = () => {
  return (
    <PageSection backgroundImage={facilitiesImage}>
      <div className="container mx-auto px-4 py-32">
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-extreme text-center text-foreground mb-4">
          Facilities
        </h1>
        <p className="text-center text-muted-foreground mb-16 font-body tracking-widest uppercase text-sm">
          World-class equipment, unmatched environment
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-card/60 border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <f.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-bold text-lg uppercase tracking-wider text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default Facilities;
