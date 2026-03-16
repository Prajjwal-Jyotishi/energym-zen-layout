import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Subscription Plans", path: "/subscription-plans" },
  { label: "Facilities", path: "/facilities" },
  { label: "Contact Us", path: "/contact" },
  { label: "Membership", path: "/membership" },
  { label: "About Us", path: "/about" },
  { label: "Social", path: "/social" },
];

const FloatingNav = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-nav rounded-full px-2 py-2 flex items-center gap-1 max-w-[92vw] overflow-x-auto scrollbar-hide"
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`relative px-4 py-2 rounded-full text-xs font-display uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
              isActive
                ? "text-primary-foreground bg-primary"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </motion.nav>
  );
};

export default FloatingNav;
