import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScrollToTop from "@/components/RouteScrollToTop";
import { ScrollToTop } from "@/components/ScrollToTop";
import RouteTransition from "@/components/RouteTransition";
import Index from "./pages/Index.tsx";
import Register from "./pages/Register.tsx";
import Candidate from "./pages/Candidate.tsx";
import About from "./pages/AboutPageFull.tsx";
import Agenda from "./pages/Agenda.tsx";
import Events from "./pages/Events.tsx";
import Leadership from "./pages/LeadershipTeam.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteScrollToTop />
        <RouteTransition>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/about" element={<About />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/events" element={<Events />} />
          <Route path="/leadership" element={<Leadership />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </RouteTransition>
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
