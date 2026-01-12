import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <ScrollReveal as="h1" className="mb-4 text-4xl font-bold" variant="up">
          404
        </ScrollReveal>
        <ScrollReveal as="p" className="mb-4 text-xl text-muted-foreground" variant="up" delayMs={80}>
          Oops! Page not found
        </ScrollReveal>
        <ScrollReveal as="div" variant="up" delayMs={140}>
          <Link to="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default NotFound;
