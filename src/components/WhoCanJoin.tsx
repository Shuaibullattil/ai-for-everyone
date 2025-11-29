import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Rocket, HandHeart, RotateCcw } from "lucide-react";
import avatar1 from "../assets/avatar/kuttimakers.png";
import avatar2 from "../assets/avatar/college students.png";
import avatar3 from "../assets/avatar/professionals.png";

const WhoCanJoin = () => {
    const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const audiences = [
        {
            icon: Sparkles,
            avatar: avatar1,
            title: "KuttyMakers",
            subtitle: "Ages 10-17",
            what: "Curiosity & foundational AI concepts",
            why: "Build early understanding of AI and develop critical thinking skills for the future",
            how: "Interactive workshops, fun projects, and hands-on experiments designed for young minds"
        },
        {
            icon: Rocket,
            avatar: avatar2,
            title: "Young Makers",
            subtitle: "College Students",
            what: "Problem-solving & building solutions",
            why: "Career readiness, innovation skills, and the ability to create AI-powered solutions",
            how: "Hackathons, mentorship programs, real-world projects, and industry connections"
        },
        {
            icon: HandHeart,
            avatar: avatar3,
            title: "Friends of the Movement",
            subtitle: "Educators, Professionals, Parents",
            what: "Understanding AI's impact",
            why: "Guide the next generation and make informed decisions about AI in your field",
            how: "Workshops, resources, community support, and opportunities to mentor others"
        }
    ];

    const toggleFlip = (index: number) => {
        setFlippedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-20 md:py-32">
            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                variants={fadeInVariants}
                className="text-center mb-12 md:mb-16"
            >
                <h2 className="text-sm font-bold tracking-wider text-[#03624C] uppercase mb-3">
                    Join the Movement
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#030F0F] dark:text-white mb-6">
                    Who's Part of the Movement?
                </h3>
                <p className="text-lg md:text-xl text-[#030F0F]/70 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    AI for Everyone welcomes learners of all ages and backgrounds. Find your place in Kerala's AI literacy revolution.
                </p>
            </motion.div>

            {/* Flip Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {audiences.map((audience, index) => {
                    const Icon = audience.icon;
                    const isFlipped = flippedCards.has(index);

                    return (
                        <motion.div
                            key={audience.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            variants={fadeInVariants}
                            className="h-[400px] md:h-[450px] perspective-1000"
                        >
                            <div
                                onClick={() => toggleFlip(index)}
                                className="relative w-full h-full cursor-pointer preserve-3d transition-transform duration-700"
                                style={{
                                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                                }}
                            >
                                {/* Front of Card */}
                                <div
                                    className="absolute inset-0 w-full h-full backface-hidden bg-white dark:bg-[#030F0F]/50 rounded-2xl p-6 md:p-8 border-2 border-[#03624C]/20 hover:border-[#00DF82] shadow-lg flex flex-col items-center justify-center"
                                >
                                    {/* Avatar Image */}
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.5 }}
                                        className="mb-6"
                                    >
                                        <img
                                            src={audience.avatar}
                                            alt={audience.title}
                                            className="w-32 h-32 md:w-40 md:h-40"
                                        />
                                    </motion.div>

                                    {/* Title */}
                                    <h4 className="text-2xl md:text-3xl font-bold text-[#030F0F] dark:text-white mb-3 text-center">
                                        {audience.title}
                                    </h4>

                                    {/* Subtitle Badge */}
                                    <p className="text-sm font-semibold bg-[#03624C]/10 text-[#03624C] dark:bg-[#00DF82]/10 dark:text-[#00DF82] inline-block px-4 py-2 rounded-full mb-4">
                                        {audience.subtitle}
                                    </p>

                                    {/* What - Brief */}
                                    <div className="text-center mb-4">
                                        <p className="text-base text-[#030F0F] dark:text-white font-semibold">
                                            {audience.what}
                                        </p>
                                    </div>

                                    {/* Tap to Flip Hint */}
                                    <motion.div
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="mt-auto flex items-center gap-2 text-xs text-[#030F0F]/60 dark:text-gray-400"
                                    >
                                        <RotateCcw className="w-4 h-4" />
                                        <span>Tap to see more</span>
                                    </motion.div>
                                </div>

                                {/* Back of Card */}
                                <div
                                    className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-[#03624C]/10 to-[#00DF82]/10 dark:from-[#03624C]/20 dark:to-[#00DF82]/20 rounded-2xl p-6 md:p-8 border-2 border-[#00DF82] shadow-xl flex flex-col"
                                    style={{
                                        transform: "rotateY(180deg)",
                                    }}
                                >
                                    {/* Icon */}
                                    <div className="text-[#00DF82] mb-4">
                                        <Icon className="w-10 h-10" />
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-xl md:text-2xl font-bold text-[#030F0F] dark:text-white mb-2">
                                        {audience.title}
                                    </h4>

                                    {/* Why */}
                                    <div className="mb-4 flex-1">
                                        <h5 className="text-xs font-bold uppercase tracking-wider text-[#030F0F]/60 dark:text-gray-500 mb-2">
                                            Why Join?
                                        </h5>
                                        <p className="text-sm text-[#030F0F]/80 dark:text-gray-300 leading-relaxed">
                                            {audience.why}
                                        </p>
                                    </div>

                                    {/* How */}
                                    <div className="mb-4">
                                        <h5 className="text-xs font-bold uppercase tracking-wider text-[#030F0F]/60 dark:text-gray-500 mb-2">
                                            How We Support You
                                        </h5>
                                        <p className="text-sm text-[#030F0F]/80 dark:text-gray-300 leading-relaxed">
                                            {audience.how}
                                        </p>
                                    </div>

                                    {/* Tap to Flip Back Hint */}
                                    <motion.div
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="flex items-center gap-2 text-xs text-[#030F0F]/60 dark:text-gray-400 mt-auto"
                                    >
                                        <RotateCcw className="w-4 h-4" />
                                        <span>Tap to flip back</span>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                variants={fadeInVariants}
                className="text-center mt-12 md:mt-16"
            >
                <p className="text-lg md:text-xl text-[#030F0F] dark:text-gray-300 font-semibold mb-6">
                    No matter your age or background, there's a place for you in this movement.
                </p>
                <button className="px-8 py-4 bg-[#00DF82] hover:bg-[#00DF82]/90 text-[#030F0F] font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-[#00DF82]/50 transition-all duration-300 transform hover:scale-105">
                    Get Started Today
                </button>
            </motion.div>
        </section>
    );
};

export default WhoCanJoin;
