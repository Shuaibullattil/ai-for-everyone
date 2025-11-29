import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Users, Heart } from "lucide-react";
import feiFeiLi from "../assets/fei_fei_li.png";

const AnimatedNumber = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    useEffect(() => {
        if (!isInView) return;

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = value / steps;
        const stepDuration = duration / steps;

        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isInView, value]);

    const formatted = count.toLocaleString("en-IN");

    return (
        <motion.div
            ref={ref}
            className="inline-block"
            animate={isInView ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
        >
            {formatted}+
        </motion.div>
    );
};

const About = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const cards = [
        {
            icon: BookOpen,
            title: "Literacy for All",
            description: "AI literacy isn't just for tech professionals—it's for students, workers, elders, and everyone in between. We're making AI knowledge accessible to all Keralites."
        },
        {
            icon: Users,
            title: "Creators Not Consumers",
            description: "Kerala shouldn't just use AI—we should build it. We're empowering learners to create AI solutions for local challenges, not just consume global products."
        },
        {
            icon: Heart,
            title: "Knowledge as Public Good",
            description: "AI education should be free, open, and community-driven. We're building a movement where knowledge is shared freely and benefits everyone."
        }
    ];

    return (
        <section id="about" className="w-full max-w-7xl mx-auto px-4 py-20 md:py-32">
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
                    Our Mission
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#030F0F] dark:text-white mb-6">
                    Why AI Literacy Matters for Kerala
                </h3>



                {/* Quote */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    variants={fadeInVariants}
                    className="max-w-5xl mx-auto mt-12 mb-16"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                        <div className="flex-1 relative order-2 md:order-1">
                            <div className="absolute -top-2 -left-1 md:-top-4 md:-left-2 text-4xl md:text-6xl text-[#00DF82]/30 font-serif">"</div>
                            <blockquote className="text-sm md:text-base text-[#030F0F]/80 dark:text-gray-300 italic leading-relaxed px-4 md:px-8 text-center md:text-left">
                                We have a historical opportunity and responsibility to establish a human-centred framework for AI research, education, practice and policy.
                            </blockquote>
                            <div className="absolute -bottom-2 right-2 md:-bottom-4 md:right-4 text-4xl md:text-6xl text-[#00DF82]/30 font-serif">"</div>
                            <p className="text-xs md:text-sm text-[#030F0F]/70 dark:text-gray-400 mt-3 md:mt-4 font-semibold text-center md:text-left px-4 md:px-8">
                                — Fei-Fei Li, AI Researcher & Educator
                            </p>
                        </div>

                        {/* Image - Responsive positioning */}
                        <div className="shrink-0 order-1 md:order-2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#00DF82]/20 rounded-full blur-xl transform translate-x-2 translate-y-2"></div>
                                <img
                                    src={feiFeiLi}
                                    alt="Fei-Fei Li"
                                    className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#00DF82]/30 shadow-2xl mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                {cards.map((card, index) => {
                    const Icon = card.icon;

                    return (
                        <motion.div
                            key={card.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            variants={fadeInVariants}
                            className="bg-white dark:bg-[#030F0F]/50 rounded-2xl p-8 border-2 border-[#03624C]/20 hover:border-[#00DF82] shadow-lg hover:shadow-xl hover:shadow-[#00DF82]/20 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="text-[#00DF82] mb-4">
                                <Icon className="w-12 h-12" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#030F0F] dark:text-white">
                                {card.title}
                            </h4>
                            <p className="text-sm md:text-base text-[#030F0F]/70 dark:text-gray-400 leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Target Stat */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                variants={fadeInVariants}
                className="text-center bg-gradient-to-r from-[#03624C]/10 to-[#00DF82]/10 rounded-2xl p-8 md:p-12 border-2 border-[#03624C]/30"
            >
                <p className="text-lg md:text-xl text-[#030F0F]/80 dark:text-gray-300 mb-4">
                    Our ambitious goal:
                </p>
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="text-5xl md:text-7xl font-bold text-[#00DF82] mb-4"
                >
                    <AnimatedNumber value={100000} />
                </motion.div>
                <p className="text-xl md:text-2xl font-semibold text-[#030F0F] dark:text-white">
                    Keralites empowered with AI literacy
                </p>
            </motion.div>
        </section>
    );
};

export default About;
