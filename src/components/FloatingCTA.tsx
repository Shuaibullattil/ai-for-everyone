import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500 && !isDismissed) {
                setIsVisible(true);
            } else if (window.scrollY <= 500) {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isDismissed]);

    const scrollToPartnership = () => {
        const partnershipSection = document.getElementById("partnership");
        if (partnershipSection) {
            partnershipSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleDismiss = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsDismissed(true);
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && !isDismissed && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 group"
                >
                    <div className="relative">
                        {/* Dismiss Button */}
                        <button
                            onClick={handleDismiss}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-[#030F0F] rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
                            aria-label="Dismiss"
                        >
                            <X className="w-4 h-4 text-[#030F0F] dark:text-white" />
                        </button>

                        {/* Main CTA Button */}
                        <motion.button
                            onClick={scrollToPartnership}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative px-6 py-4 bg-[#00DF82] hover:bg-[#00DF82]/90 text-[#030F0F] font-bold rounded-full shadow-2xl hover:shadow-[#00DF82]/50 transition-all duration-300"
                        >
                            {/* Pulse Animation */}
                            <span className="absolute inset-0 rounded-full bg-[#00DF82] animate-ping opacity-20" />

                            <span className="relative flex items-center gap-2">
                                <span className="text-sm md:text-base">Become a Partner</span>
                            </span>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
