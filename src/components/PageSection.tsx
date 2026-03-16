import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const PageSection = ({ children, className = "", backgroundImage, overlay = true }: PageSectionProps) => {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover animate-ken-burns"
          />
          {overlay && (
            <div className="absolute inset-0 bg-obsidian/70" />
          )}
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default PageSection;
