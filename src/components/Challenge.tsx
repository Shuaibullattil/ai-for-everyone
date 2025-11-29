import { motion } from "framer-motion";
import { GraduationCap, Briefcase, AlertTriangle } from "lucide-react";

const Challenge = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const challenges = [
        {
            icon: GraduationCap,
            title: "Student Skill Gaps",
            description: "Many students are graduating without essential AI understanding—skills that will become foundational in future careers and daily life.",
            color: "purple"
        },
        {
            icon: Briefcase,
            title: "Workforce Transformation",
            description: "Automation and AI are rapidly transforming jobs. Young professionals and entry-level workers need AI literacy to stay relevant and competitive.",
            color: "sky"
        },
        {
            icon: AlertTriangle,
            title: "Misinformation & Deepfakes",
            description: "Deepfakes, AI-powered scams, and misinformation disproportionately affect vulnerable communities. Awareness and critical thinking are essential.",
            color: "orange"
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; icon: string; iconBg: string; border: string }> = {
            purple: {
                bg: "bg-purple-50 dark:bg-purple-950/30",
                icon: "text-purple-600 dark:text-purple-400",
                iconBg: "bg-purple-100 dark:bg-purple-900/50",
                border: "border-purple-200 dark:border-purple-800"
            },
            sky: {
                bg: "bg-sky-50 dark:bg-sky-950/30",
                icon: "text-sky-600 dark:text-sky-400",
                iconBg: "bg-sky-100 dark:bg-sky-900/50",
                border: "border-sky-200 dark:border-sky-800"
            },
            orange: {
                bg: "bg-orange-50 dark:bg-orange-950/30",
                icon: "text-orange-600 dark:text-orange-400",
                iconBg: "bg-orange-100 dark:bg-orange-900/50",
                border: "border-orange-200 dark:border-orange-800"
            }
        };
        return colors[color];
    };

    return (
        <section className="w-full bg-slate-50 dark:bg-slate-950/50 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    variants={fadeInVariants}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-sm font-bold tracking-wider text-orange-600 dark:text-orange-400 uppercase mb-3">
                        The Urgency
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                        The Challenges We're Addressing
                    </h3>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Kerala faces critical challenges that AI literacy can help solve. Understanding these problems is the first step toward creating solutions.
                    </p>
                </motion.div>

                {/* Challenges Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {challenges.map((challenge, index) => {
                        const Icon = challenge.icon;
                        const colorClasses = getColorClasses(challenge.color);

                        return (
                            <motion.div
                                key={challenge.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                variants={fadeInVariants}
                                className={`${colorClasses.bg} rounded-2xl p-8 border-2 ${colorClasses.border} shadow-lg hover:shadow-xl transition-all duration-300 group`}
                            >
                                <div className={`${colorClasses.iconBg} ${colorClasses.icon} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                                    {challenge.title}
                                </h4>
                                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {challenge.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    variants={fadeInVariants}
                    className="text-center mt-12 md:mt-16"
                >
                    <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-semibold">
                        Together, we can turn these challenges into opportunities for growth and innovation.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Challenge;
