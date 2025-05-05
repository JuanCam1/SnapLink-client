import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypographyH1 from "@/components/shared/typography-h1";
import TypographyP from "@/components/shared/typography-p";

const HeroSection = () => {
  return (
    <section className="h-[90%] w-full py-12 md:py-24 lg:py-32 bg-muted/50 flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="space-y-2">
          <TypographyH1
            text="Acorta tus enlaces,"
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl/none"
          />
          <TypographyH1
            text="Amplía tu alcance."
            className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl/none"
          />
          <TypographyP className="max-w-[600px] text-center dark:text-muted-foreground md:text-xl mt-6">
            La plataforma profesional para acortar, personalizar y analizar tus
            enlaces. Simple, rápido y seguro.
          </TypographyP>
        </div>
        <Button asChild size="lg" variant="outline" className="mt-6">
          <Link to="/login">
            Comenzar
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
