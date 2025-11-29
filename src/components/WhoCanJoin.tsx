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
            how: "Interactive workshops, fun projects, and hands-on experiments designed for young minds"
        },
        {
            icon: Rocket,
            title: "Young Makers",
            subtitle: "College Students",
            what: "Problem-solving & building solutions",
            why: "Career readiness, innovation skills, and the ability to create AI-powered solutions",
            how: "Hackathons, mentorship programs, real-world projects, and industry connections"
        },
        {
            icon: HandHeart,
            title: "Friends of the Movement",
            subtitle: "Educators, Professionals, Parents",
            what: "Understanding AI's impact",
            why: "Guide the next generation and make informed decisions about AI in your field",
            how: "Workshops, resources, community support, and opportunities to mentor others"
        }
    ];

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

            {/* Audience Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {audiences.map((audience, index) => {
                    const Icon = audience.icon;

                    return (
                        <motion.div
                            key={audience.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            variants={fadeInVariants}
                            className="bg-white dark:bg-[#030F0F]/50 rounded-2xl p-8 border-2 border-[#03624C]/20 hover:border-[#00DF82] shadow-lg hover:shadow-2xl hover:shadow-[#00DF82]/20 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Icon and Title */}
                            <div className="mb-6">
                                <div className="text-[#00DF82] mb-4">
                                    <Icon className="w-12 h-12" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold text-[#030F0F] dark:text-white mb-2">
                                    {audience.title}
                                </h4>
                                <p className="text-sm font-semibold bg-[#03624C]/10 text-[#03624C] dark:bg-[#00DF82]/10 dark:text-[#00DF82] inline-block px-3 py-1 rounded-full">
                                    {audience.subtitle}
                                </p>
                            </div>

                            {/* What */}
                            <div className="mb-6">
                                <h5 className="text-sm font-bold uppercase tracking-wider text-[#030F0F]/60 dark:text-gray-500 mb-2">
                                    What
                                </h5>
                                <p className="text-base text-[#030F0F] dark:text-white font-semibold">
                                    {audience.what}
                                </p>
                            </div>

                            {/* Why */}
                            <div className="mb-6">
                                <h5 className="text-sm font-bold uppercase tracking-wider text-[#030F0F]/60 dark:text-gray-500 mb-2">
                                    Why
                                </h5>
                                <p className="text-sm text-[#030F0F]/70 dark:text-gray-400 leading-relaxed">
                                    {audience.why}
                                </p>
                            </div>

                            {/* How */}
                            <div>
                                <h5 className="text-sm font-bold uppercase tracking-wider text-[#030F0F]/60 dark:text-gray-500 mb-2">
                                    How
                                </h5>
                                <p className="text-sm text-[#030F0F]/70 dark:text-gray-400 leading-relaxed">
                                    {audience.how}
                                </p>
                            </div>

                            {/* Gradient Accent */}
                            <div className="mt-6 h-1 rounded-full bg-[#00DF82]" />
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
