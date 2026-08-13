import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { SiteShell } from "./components/SiteShell";
import Home from "./pages/Home";
import { LocationPage, OrderPage, ReviewsPage, StoryPage } from "./pages/StaticPages";

/**
 * The Tamarind House: sitewide routing keeps a single, consistent dining-house shell around each editorial page.
 * The default light environment is rice-paper ivory, with maroon reserved for immersive moments and clear action.
 */
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <SiteShell>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/order" component={OrderPage} />
        <Route path="/location" component={LocationPage} />
        <Route path="/story" component={StoryPage} />
        <Route path="/reviews" component={ReviewsPage} />
        <Route component={NotFound} />
      </Switch>
    </SiteShell>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
