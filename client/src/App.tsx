import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Payments from "@/pages/Payments";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Developers from "@/pages/Developers";
import Subscriptions from "@/pages/Subscriptions";
import ZtakeX from "@/pages/ZtakeX";
import About from "@/pages/About";
import Security from "@/pages/Security";
import Resources from "@/pages/Resources";
import Support from "@/pages/Support";
import Capital from "@/pages/Capital";
import Solutions from "@/pages/Solutions";
import Partners from "@/pages/Partners";
import Careers from "@/pages/Careers";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/payments" component={Payments} />
      <Route path="/subscriptions" component={Subscriptions} />
      <Route path="/ztakex" component={ZtakeX} />
      <Route path="/docs" component={Developers} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/security" component={Security} />
      <Route path="/resources" component={Resources} />
      <Route path="/support" component={Support} />
      <Route path="/capital" component={Capital} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/partners" component={Partners} />
      <Route path="/careers" component={Careers} />
      
      {/* Legal Pages */}
      <Route path="/privacy" component={Security} />
      <Route path="/terms" component={Security} />
      
      {/* Additional Routes */}
      <Route path="/case-studies" component={Resources} />
      <Route path="/docs/:slug" component={Developers} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
