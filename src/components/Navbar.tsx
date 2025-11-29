import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Approach", href: "#approach" },
    { label: "Join", href: "#join" },
    { label: "Partner", href: "#partnership" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 dark:bg-[#030F0F]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className={`text-xl md:text-2xl font-bold transition-colors ${isScrolled
                ? "text-[#030F0F] dark:text-white"
                : "text-white drop-shadow-lg"
              }`}>
              AI for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DF82] to-[#03624C]">
                Everyone
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${isScrolled
                    ? "text-[#030F0F]/70 hover:text-[#00DF82] dark:text-gray-300 dark:hover:text-[#00DF82]"
                    : "text-white/90 hover:text-[#00DF82] drop-shadow"
                  }`}
              >
                {item.label}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-[#00DF82] hover:bg-[#00DF82]/90 text-[#030F0F] border-0 font-bold shadow-lg hover:shadow-xl hover:shadow-[#00DF82]/30 transition-all"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? "text-[#030F0F] dark:text-white" : "text-white hover:bg-white/20"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 bg-white/95 dark:bg-[#030F0F]/95 backdrop-blur-md rounded-lg px-4 mb-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-sm font-medium text-[#030F0F]/70 hover:text-[#00DF82] dark:text-gray-300 dark:hover:text-[#00DF82] transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button
                  size="sm"
                  className="w-full mt-4 bg-[#00DF82] hover:bg-[#00DF82]/90 text-[#030F0F] font-bold"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
