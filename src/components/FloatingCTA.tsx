import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, X } from "lucide-react";

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 500px
            if (window.scrollY > 500 && !isDismissed) {
                setIsVisible(true);
            } else if (window.scrollY <= 500) {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isDismissed]);

    const handleDismiss = () => {
        setIsDismissed(true);
        setIsVisible(false);
    };

    const scrollToPartnership = () => {
        const partnerSection = document.getElementById("partnership");
        if (partnerSection) {
            partnerSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
                >
                    {/* Dismiss Button */}
                    <button
                        onClick={handleDismiss}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110"
                        aria-label="Dismiss"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    {/* Main Button */}
                    <button
                        onClick={scrollToPartnership}
                        className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 dark:from-teal-500 dark:to-green-500 dark:hover:from-teal-600 dark:hover:to-green-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                    >
                        <Handshake className="w-5 h-5" />
                        <span className="hidden sm:inline">Become a Partner</span>
                        <span className="sm:hidden">Partner</span>
                    </button>

                    {/* Pulse Animation */}
                    <div className="absolute inset-0 rounded-full bg-teal-500 opacity-20 animate-ping pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
