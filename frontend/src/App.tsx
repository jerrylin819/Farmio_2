import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Forum from "./pages/Forum";
import ForumPost from "./pages/ForumPost";
import Knowledge from "./pages/Knowledge";
import KnowledgeDetail from "./pages/KnowledgeDetail";
import Member from "./pages/Member";
import Farmland from "./pages/Farmland";
import FarmlandDetail from "./pages/FarmlandDetail";
import AIAssistant from "./pages/AIAssistant";
import Training from "./pages/Training";
import Enterprise from "./pages/Enterprise";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/:id" element={<ForumPost />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/knowledge/:id" element={<KnowledgeDetail />} />
          <Route path="/member" element={<Member />} />
          <Route path="/farmland" element={<Farmland />} />
          <Route path="/farmland/:id" element={<FarmlandDetail />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/training" element={<Training />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;