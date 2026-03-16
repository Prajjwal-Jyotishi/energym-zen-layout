import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

const PageSection = ({ children, className = "", backgroundImage, overlay = true }: PageSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
              imageLoaded ? "opacity-100 animate-ken-burns" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {overlay && (
            <div className="absolute inset-0 bg-background/45" />
          )}
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        className="relative z-10 w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default PageSection;
