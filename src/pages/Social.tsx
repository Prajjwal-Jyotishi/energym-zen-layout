import { motion } from "framer-motion";
import PageSection from "@/components/PageSection";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", handle: "@energym", url: "#", color: "from-pink-500 to-purple-600" },
  { icon: Twitter, label: "X (Twitter)", handle: "@energym", url: "#", color: "from-blue-400 to-blue-600" },
  { icon: Youtube, label: "YouTube", handle: "ENERGYM Official", url: "#", color: "from-red-500 to-red-700" },
  { icon: Facebook, label: "Facebook", handle: "ENERGYM", url: "#", color: "from-blue-600 to-blue-800" },
];

const Social = () => {
  return (
    <PageSection className="bg-obsidian">
      <div className="container mx-auto px-4 py-32">
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-extreme text-center text-foreground mb-4">
          Connect
        </h1>
        <p className="text-center text-muted-foreground mb-16 font-body tracking-widest uppercase text-sm">
          Follow the movement
        </p>

        <div className="max-w-2xl mx-auto space-y-5">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-6 bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <s.icon className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg uppercase tracking-wider text-foreground">{s.label}</h3>
                <p className="text-muted-foreground font-body text-sm">{s.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-muted-foreground/50 font-body text-xs mt-16 uppercase tracking-widest"
        >
          © 2024 ENERGYM. All rights reserved.
        </motion.p>
      </div>
    </PageSection>
  );
};

export default Social;
