import { motion } from "framer-motion";
import { ExternalLink, Users, Code, Heart } from "lucide-react";

const AboutTinkerHub = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-20 md:py-32">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                variants={fadeInVariants}
                className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="tinkerhub-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                                <circle cx="15" cy="15" r="1" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#tinkerhub-grid)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-400/30 mb-6">
                        <Heart className="w-4 h-4 text-teal-400" />
                        <span className="text-sm font-semibold text-teal-300">
                            Powered By
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Enabled by{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
                            TinkerHub
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                        TinkerHub is Kerala's largest community of makers and learners, connecting thousands of students, professionals, and innovators across the state. We create spaces for collaboration, learning, and building the future together.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-1">50K+</div>
                            <div className="text-sm text-slate-400">Community Members</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-1">100+</div>
                            <div className="text-sm text-slate-400">Campus Chapters</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-1">500+</div>
                            <div className="text-sm text-slate-400">Events Annually</div>
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href="https://tinkerhub.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <span>Visit TinkerHub.org</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutTinkerHub;
