import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bodybuilder.jpg";

const Index = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="ENERGYM bodybuilder"
          className="w-full h-full object-cover animate-bicep-curl"
        />
        <div className="absolute inset-0 bg-obsidian/40" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display font-black text-7xl md:text-9xl uppercase tracking-extreme text-foreground"
        >
          ENERGYM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 text-muted-foreground font-body text-lg md:text-xl tracking-widest uppercase"
        >
          Forge Your Legacy
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-10"
        >
          <Link
            to="/subscription-plans"
            className="inline-block gold-gradient text-primary-foreground font-display font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-full hover:opacity-90 transition-opacity gold-glow"
          >
            Begin Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Index;
