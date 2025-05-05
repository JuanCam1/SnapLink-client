import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import HeroSection from "@/sections/hero-section";
import GitHub from "@/components/icon/github-logo";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link to="/" className="text-primary text-2xl">
              SnapLink
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Button asChild variant="outline">
              <Link to="/login" className="text-sm font-medium">
                <GitHub />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/register">Registrarse</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="h-[80%]">
        <HeroSection />
      </main>
    </>
  );
}
