import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";
import GitHub from "../icon/github-logo";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur border-b supports-[backdrop-filter]:bg-background/60">
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
  );
};

export default Header;
