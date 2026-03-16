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
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-background ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-background" />
          <img
            src={backgroundImage}
            alt=""
            loading="eager"
            decoding="async"
            draggable={false}
            className="w-full h-full object-cover animate-ken-burns-smooth"
          />
          {overlay && <div className="absolute inset-0 bg-background/45" />}
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        className="relative z-10 w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default PageSection;
