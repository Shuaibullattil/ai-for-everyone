import { motion } from "framer-motion";
import { BookOpen, Users, Heart } from "lucide-react";

const About = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const cards = [
        {
            icon: BookOpen,
            title: "Literacy for All",
            description: "AI literacy isn't just for tech professionals—it's for students, workers, elders, and everyone in between. We're making AI knowledge accessible to all Keralites.",
            color: "teal"
        },
        {
            icon: Users,
            title: "Creators Not Consumers",
            description: "Kerala shouldn't just use AI—we should build it. We're empowering learners to create AI solutions for local challenges, not just consume global products.",
            color: "green"
        },
        {
            icon: Heart,
            title: "Knowledge as Public Good",
            description: "AI education should be free, open, and community-driven. We're building a movement where knowledge is shared freely and benefits everyone.",
            color: "orange"
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; icon: string; border: string }> = {
            teal: {
                bg: "bg-teal-50 dark:bg-teal-950/30",
                icon: "text-teal-600 dark:text-teal-400",
                border: "border-teal-200 dark:border-teal-800"
            },
            green: {
                bg: "bg-green-50 dark:bg-green-950/30",
                icon: "text-green-600 dark:text-green-400",
                border: "border-green-200 dark:border-green-800"
            },
            orange: {
                bg: "bg-orange-50 dark:bg-orange-950/30",
                icon: "text-orange-600 dark:text-orange-400",
                border: "border-orange-200 dark:border-orange-800"
            }
        };
        return colors[color];
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
                <h2 className="text-sm font-bold tracking-wider text-teal-600 dark:text-teal-400 uppercase mb-3">
                    Our Mission
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                    Why AI Literacy Matters for Kerala
                </h3>

                {/* Quote */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    variants={fadeInVariants}
                    className="max-w-4xl mx-auto mt-8 mb-12"
                >
                    <div className="relative">
                        <div className="absolute -top-4 -left-2 text-6xl text-teal-200 dark:text-teal-800 font-serif">"</div>
                        <blockquote className="text-lg md:text-xl text-slate-700 dark:text-slate-300 italic leading-relaxed px-8">
                            We have a historical opportunity and responsibility to establish a human-centred framework for AI research, education, practice and policy.
                        </blockquote>
                        <div className="absolute -bottom-4 -right-2 text-6xl text-teal-200 dark:text-teal-800 font-serif">"</div>
                    </div>
                    <p className="text-base text-slate-600 dark:text-slate-400 mt-6 font-semibold">
                        — Fei-Fei Li, AI Researcher & Educator
                    </p>
                </motion.div>
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
                {cards.map((card, index) => {
                    const Icon = card.icon;
                    const colorClasses = getColorClasses(card.color);

                    return (
                        <motion.div
                            key={card.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            variants={fadeInVariants}
                            className={`${colorClasses.bg} rounded-2xl p-8 border-2 ${colorClasses.border} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                        >
                            <div className={`${colorClasses.icon} mb-4`}>
                                <Icon className="w-12 h-12" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                                {card.title}
                            </h4>
                            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
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
                className="text-center bg-gradient-to-r from-teal-50 via-green-50 to-orange-50 dark:from-teal-950/20 dark:via-green-950/20 dark:to-orange-950/20 rounded-2xl p-8 md:p-12 border-2 border-teal-200 dark:border-teal-800"
            >
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-4">
                    Our ambitious goal:
                </p>
                <div className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-green-600 to-orange-600 dark:from-teal-400 dark:via-green-400 dark:to-orange-400 mb-4">
                    1,00,000+
                </div>
                <p className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200">
                    Keralites empowered with AI literacy
                </p>
            </motion.div>
        </section>
    );
};

export default About;
