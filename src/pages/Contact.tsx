import { motion } from "framer-motion";
import PageSection from "@/components/PageSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <PageSection className="bg-obsidian">
      <div className="container mx-auto px-4 py-32">
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-extreme text-center text-foreground mb-4">
          Contact
        </h1>
        <p className="text-center text-muted-foreground mb-16 font-body tracking-widest uppercase text-sm">
          We'd love to hear from you
        </p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {[
              { icon: MapPin, label: "Location", value: "123 Elite Avenue, Downtown" },
              { icon: Phone, label: "Phone", value: "+1 (555) 000-1234" },
              { icon: Mail, label: "Email", value: "hello@energym.com" },
              { icon: Clock, label: "Hours", value: "Mon-Sun: 5AM - 11PM" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <item.icon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-display text-sm uppercase tracking-wider text-muted-foreground">{item.label}</p>
                  <p className="text-foreground font-body">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-card border border-border rounded-xl px-5 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-card border border-border rounded-xl px-5 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-card border border-border rounded-xl px-5 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition resize-none"
            />
            <button
              type="submit"
              className="w-full gold-gradient text-primary-foreground font-display font-bold uppercase tracking-widest text-xs py-4 rounded-full hover:opacity-90 transition-opacity gold-glow"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;
