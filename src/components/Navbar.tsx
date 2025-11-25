import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["About", "Partner with us"];

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (roughly 100vh)
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Desktop Navigation - hide when scrolled */}
          {!isScrolled && (
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
              <Button size="sm" className="ml-4">
                Join
              </Button>
            </div>
          )}

          {/* Hamburger menu button - always visible on mobile, visible on desktop when scrolled */}
          <div className={`${isScrolled ? 'ml-auto' : 'md:hidden'}`}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="py-4 space-y-3 animate-fade-in bg-background/95 backdrop-blur-md rounded-lg px-4 mt-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button size="sm" className="w-full mt-4">
              Join
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
