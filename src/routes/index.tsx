import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/sections/hero-section";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return <HeroSection />;
}
