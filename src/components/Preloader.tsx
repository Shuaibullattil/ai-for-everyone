import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "AI for Everyone";

    useEffect(() => {
        let index = 0;
        const typingTimer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(typingTimer);
                // Wait 500ms after typing completes, then trigger fade out
                setTimeout(() => {
                    onComplete();
                }, 500);
            }
        }, 80); // 80ms per character for smooth typing

        return () => clearInterval(typingTimer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                </h1>
            </div>
        </motion.div>
    );
};

export default Preloader;
