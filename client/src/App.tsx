import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useEffect } from "react";

function Router() {
  useEffect(() => {
    // Handle the base URL for GitHub Pages in production only
    if (process.env.NODE_ENV === 'production') {
      const path = window.location.pathname;
      const baseUrl = '/PersonalPortfolio';
      
      if (path === baseUrl || path === baseUrl + '/') {
        window.history.replaceState(null, '', baseUrl + '/');
      }
    }
  }, []);

  return (
    <Switch>
      <Route path={process.env.NODE_ENV === 'production' ? "/PersonalPortfolio/" : "/"} component={Home} />
      <Route component={NotFound} />
    </Switch>
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
