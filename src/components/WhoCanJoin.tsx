import { motion } from "framer-motion";
import { Sparkles, Rocket, HandHeart } from "lucide-react";

const WhoCanJoin = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const audiences = [
        {
            icon: Sparkles,
            title: "KuttyMakers",
            subtitle: "Ages 10-17",
            what: "Curiosity & foundational AI concepts",
            why: "Build early understanding of AI and develop critical thinking skills for the future",
            how: "Interactive workshops, fun projects, and hands-on experiments designed for young minds",
            color: "purple",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: Rocket,
            title: "Young Makers",
            subtitle: "College Students",
            what: "Problem-solving & building solutions",
            why: "Career readiness, innovation skills, and the ability to create AI-powered solutions",
            how: "Hackathons, mentorship programs, real-world projects, and industry connections",
            color: "sky",
            gradient: "from-sky-500 to-blue-500"
        },
        {
            icon: HandHeart,
            title: "Friends of the Movement",
            subtitle: "Educators, Professionals, Parents",
            what: "Understanding AI's impact",
            why: "Guide the next generation and make informed decisions about AI in your field",
            how: "Workshops, resources, community support, and opportunities to mentor others",
            color: "teal",
            gradient: "from-teal-500 to-green-500"
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
            purple: {
                bg: "bg-purple-50 dark:bg-purple-950/30",
                icon: "text-purple-600 dark:text-purple-400",
                border: "border-purple-200 dark:border-purple-800",
                badge: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
            },
            sky: {
                bg: "bg-sky-50 dark:bg-sky-950/30",
                icon: "text-sky-600 dark:text-sky-400",
                border: "border-sky-200 dark:border-sky-800",
                badge: "bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300"
            },
            teal: {
                bg: "bg-teal-50 dark:bg-teal-950/30",
                icon: "text-teal-600 dark:text-teal-400",
                border: "border-teal-200 dark:border-teal-800",
                badge: "bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300"
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
                    Join the Movement
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                    Who's Part of the Movement?
                </h3>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    AI for Everyone welcomes learners of all ages and backgrounds. Find your place in Kerala's AI literacy revolution.
                </p>
            </motion.div>

            {/* Audience Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {audiences.map((audience, index) => {
                    const Icon = audience.icon;
                    const colorClasses = getColorClasses(audience.color);

                    return (
                        <motion.div
                            key={audience.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            variants={fadeInVariants}
                            className={`${colorClasses.bg} rounded-2xl p-8 border-2 ${colorClasses.border} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                        >
                            {/* Icon and Title */}
                            <div className="mb-6">
                                <div className={`${colorClasses.icon} mb-4`}>
                                    <Icon className="w-12 h-12" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                    {audience.title}
                                </h4>
                                <p className={`text-sm font-semibold ${colorClasses.badge} inline-block px-3 py-1 rounded-full`}>
                                    {audience.subtitle}
                                </p>
                            </div>

                            {/* What */}
                            <div className="mb-6">
                                <h5 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                    What
                                </h5>
                                <p className="text-base text-slate-700 dark:text-slate-300 font-semibold">
                                    {audience.what}
                                </p>
                            </div>

                            {/* Why */}
                            <div className="mb-6">
                                <h5 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                    Why
                                </h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {audience.why}
                                </p>
                            </div>

                            {/* How */}
                            <div>
                                <h5 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                    How
                                </h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {audience.how}
                                </p>
                            </div>

                            {/* Gradient Accent */}
                            <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${audience.gradient}`} />
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
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-semibold mb-6">
                    No matter your age or background, there's a place for you in this movement.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 dark:from-teal-500 dark:to-green-500 dark:hover:from-teal-600 dark:hover:to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Get Started Today
                </button>
            </motion.div>
        </section>
    );
};

export default WhoCanJoin;
