import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import Baptism from "@/pages/baptism";
import Communion from "@/pages/communion";
import Store from "@/pages/store";
import Search from "@/pages/search";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsConditions from "@/pages/terms-conditions";
import RefundPolicy from "@/pages/refund-policy";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/baptism" component={Baptism} />
          <Route path="/communion" component={Communion} />
          <Route path="/store" component={Store} />
          <Route path="/search" component={Search} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route path="/refund-policy" component={RefundPolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
