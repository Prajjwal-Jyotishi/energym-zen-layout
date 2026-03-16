import { motion } from "framer-motion";
import PageSection from "@/components/PageSection";
import aboutImage from "@/assets/about-bodybuilder.jpg";

const About = () => {
  return (
    <PageSection backgroundImage={aboutImage}>
      <div className="container mx-auto px-4 py-32">
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-extreme text-center text-foreground mb-4">
          About Us
        </h1>
        <p className="text-center text-muted-foreground mb-16 font-body tracking-widest uppercase text-sm">
          Built for those who demand more
        </p>

        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card/70 border border-border rounded-2xl p-10"
          >
            <p className="text-foreground/90 font-body text-lg leading-relaxed mb-6">
              ENERGYM was born from a singular vision: to create an athletic sanctuary where discipline meets luxury. We don't believe in compromise—every piece of equipment, every square foot of space, and every service has been curated for those who take their craft seriously.
            </p>
            <p className="text-foreground/90 font-body text-lg leading-relaxed mb-6">
              Founded in 2020, we've grown from a single premium facility to an icon of elite fitness. Our members aren't just gym-goers—they're architects of their own transformation.
            </p>
            <p className="text-foreground/90 font-body text-lg leading-relaxed">
              With world-class coaches, cutting-edge recovery technology, and an atmosphere that refuses to be ordinary, ENERGYM is where legacies are forged.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-6"
          >
            {[
              { number: "2,500+", label: "Members" },
              { number: "50+", label: "Coaches" },
              { number: "24/7", label: "Access" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-card/50 border border-border rounded-2xl p-6">
                <p className="font-display font-black text-3xl text-gold">{stat.number}</p>
                <p className="font-body text-muted-foreground text-sm uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageSection>
  );
};

export default About;
