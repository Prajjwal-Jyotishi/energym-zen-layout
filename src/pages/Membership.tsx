import { motion } from "framer-motion";
import PageSection from "@/components/PageSection";
import { User, CreditCard, Calendar, TrendingUp } from "lucide-react";
import membershipBg from "@/assets/membership-bg.jpg";

const Membership = () => {
  return (
    <PageSection backgroundImage={membershipBg}>
      <div className="container mx-auto px-4 py-32">
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-extreme text-center text-foreground mb-4">
          Membership
        </h1>
        <p className="text-center text-muted-foreground mb-16 font-body tracking-widest uppercase text-sm">
          Your exclusive member dashboard
        </p>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-10"
          >
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
              <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center">
                <User className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground uppercase tracking-wider">Member Portal</h3>
                <p className="text-muted-foreground font-body text-sm">Sign in to view your membership details</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: CreditCard, label: "Plan", value: "Silver" },
                { icon: Calendar, label: "Member Since", value: "Jan 2024" },
                { icon: TrendingUp, label: "Sessions", value: "47" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-secondary rounded-xl p-5 text-center"
                >
                  <stat.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                  <p className="text-muted-foreground font-body text-xs uppercase tracking-wider">{stat.label}</p>
                  <p className="text-foreground font-display font-bold text-lg mt-1">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            <button className="w-full border border-primary/50 text-foreground font-display font-bold uppercase tracking-widest text-xs py-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Sign In to Your Account
            </button>
          </motion.div>
        </div>
      </div>
    </PageSection>
  );
};

export default Membership;
