import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Brain, Zap } from "lucide-react";

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [showIcons, setShowIcons] = useState(false);
    const fullText = "AI for Everyone";

    useEffect(() => {
        let index = 0;
        const typingTimer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(typingTimer);
                setShowIcons(true);
                // Wait 1.5s after typing completes, then trigger fade out
                setTimeout(() => {
                    onComplete();
                }, 1500);
            }
        }, 80); // 80ms per character for smooth typing

        return () => clearInterval(typingTimer);
    }, [onComplete]);

    // Floating particles
    const particles = Array.from({ length: 20 }, (_, i) => i);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#030F0F] via-[#03624C] to-[#030F0F] overflow-hidden"
        >
            {/* Animated Background Gradient */}
            <motion.div
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute inset-0 bg-gradient-to-br from-[#00DF82]/20 via-[#03624C]/30 to-[#00DF82]/20 bg-[length:200%_200%]"
            />

            {/* Floating Particles */}
            {particles.map((i) => {
                const randomX = Math.random() * 100;
                const randomY = Math.random() * 100;
                const randomDelay = Math.random() * 2;
                const randomDuration = 3 + Math.random() * 2;
                
                return (
                    <motion.div
                        key={i}
                        initial={{
                            x: `${randomX}%`,
                            y: `${randomY}%`,
                            opacity: 0,
                        }}
                        animate={{
                            y: [`${randomY}%`, `${(randomY + 30) % 100}%`, `${randomY}%`],
                            x: [`${randomX}%`, `${(randomX + 20) % 100}%`, `${randomX}%`],
                            opacity: [0, 0.6, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: randomDuration,
                            repeat: Infinity,
                            delay: randomDelay,
                            ease: "easeInOut",
                        }}
                        className="absolute w-2 h-2 bg-[#00DF82] rounded-full blur-sm"
                    />
                );
            })}

            {/* Main Content */}
            <div className="relative z-10 text-center">
                {/* Animated Icons */}
                <AnimatePresence>
                    {showIcons && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center justify-center gap-4 mb-8"
                        >
                            {[Brain, Sparkles, Zap].map((Icon, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: -20, rotate: -180 }}
                                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.2,
                                        type: "spring",
                                        stiffness: 200,
                                    }}
                                >
                                    <motion.div
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: index * 0.3,
                                        }}
                                    >
                                        <Icon className="w-8 h-8 md:w-12 md:h-12 text-[#00DF82]" />
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Typing Text */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-4"
                >
                    {displayedText}
                    <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="ml-2 text-[#00DF82]"
                    >
                        |
                    </motion.span>
                </motion.h1>

                {/* Subtitle */}
                {displayedText.length === fullText.length && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-sm md:text-base text-[#00DF82]/80 mt-4"
                    >
                        Building Kerala's AI-Literate Future
                    </motion.p>
                )}

                {/* Loading Bar */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: displayedText.length === fullText.length ? "100%" : "0%" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-8 h-1 bg-[#00DF82]/30 rounded-full overflow-hidden max-w-xs mx-auto"
                >
                    <motion.div
                        animate={{
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#00DF82] to-transparent"
                    />
                </motion.div>
            </div>

            {/* Corner Accents */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 left-10 w-32 h-32 border-2 border-[#00DF82]/20 rounded-full"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-10 right-10 w-24 h-24 border-2 border-[#00DF82]/20 rounded-full"
            />
        </motion.div>
    );
};

export default Preloader;
