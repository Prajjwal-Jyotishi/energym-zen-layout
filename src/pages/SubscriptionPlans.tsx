import { motion } from "framer-motion";
import PageSection from "@/components/PageSection";
import subscriptionImage from "@/assets/subscription-bodybuilder.jpg";

const plans = [
  {
    name: "BRONZE",
    price: "29",
    features: ["Access to gym floor", "Locker room access", "2 group classes/week", "Basic fitness assessment"],
  },
  {
    name: "SILVER",
    price: "59",
    features: ["All Bronze benefits", "Unlimited group classes", "Sauna & steam room", "1 PT session/month", "Nutrition guidance"],
    featured: true,
  },
  {
    name: "GOLD",
    price: "99",
    features: ["All Silver benefits", "4 PT sessions/month", "Priority booking", "Recovery suite access", "Exclusive member events"],
  },
];

const SubscriptionPlans = () => {
  return (
    <PageSection backgroundImage={subscriptionImage}>
      <div className="container mx-auto px-4 py-32">
        <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-extreme text-center text-foreground mb-4">
          Plans
        </h1>
        <p className="text-center text-muted-foreground mb-16 font-body tracking-widest uppercase text-sm">
          Choose your path to greatness
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              className={`rounded-2xl p-8 border transition-all duration-300 ${
                plan.featured
                  ? "bg-card border-primary gold-glow scale-105"
                  : "bg-card/50 border-border hover:border-primary/50"
              }`}
            >
              <h3 className="font-display font-bold text-xl tracking-extreme text-gold mb-2">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display font-black text-5xl text-foreground">${plan.price}</span>
                <span className="text-muted-foreground font-body text-sm">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="text-foreground/80 font-body text-sm flex items-center gap-2">
                    <span className="text-gold text-xs">◆</span> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full font-display font-bold uppercase tracking-widest text-xs transition-all duration-300 ${
                  plan.featured
                    ? "gold-gradient text-primary-foreground gold-glow"
                    : "border border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default SubscriptionPlans;
