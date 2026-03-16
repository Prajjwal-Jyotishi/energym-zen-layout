import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingNav from "@/components/FloatingNav";
import Index from "./pages/Index";
import SubscriptionPlans from "./pages/SubscriptionPlans";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Membership from "./pages/Membership";
import About from "./pages/About";
import Social from "./pages/Social";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingNav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/subscription-plans" element={<SubscriptionPlans />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/about" element={<About />} />
          <Route path="/social" element={<Social />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
