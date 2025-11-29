import { motion } from "framer-motion";

const PartnerLogos = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    // Placeholder logos - can be replaced with actual partner logos
    const partners = [
        { name: "Partner 1", placeholder: true },
        { name: "Partner 2", placeholder: true },
        { name: "Partner 3", placeholder: true },
        { name: "Partner 4", placeholder: true },
        { name: "Partner 5", placeholder: true },
        { name: "Partner 6", placeholder: true },
    ];

    return (
        <section className="w-full bg-slate-50 dark:bg-slate-950/50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    variants={fadeInVariants}
                    className="text-center mb-12"
                >
                    <h2 className="text-sm font-bold tracking-wider text-teal-600 dark:text-teal-400 uppercase mb-3">
                        Trusted By
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                        Our Partners
                    </h3>
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Working together with organizations and communities across Kerala to democratize AI education
                    </p>
                </motion.div>

                {/* Logos Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    variants={fadeInVariants}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
                >
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-6 bg-white dark:bg-slate-900 rounded-xl border-2 border-slate-200 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-700 transition-all duration-300 group"
                        >
                            {/* Placeholder Logo */}
                            <div className="w-full h-16 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 group-hover:from-teal-100 group-hover:to-green-100 dark:group-hover:from-teal-900 dark:group-hover:to-green-900 transition-all duration-300 flex items-center justify-center">
                                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                                        {partner.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Become a Partner CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    variants={fadeInVariants}
                    className="text-center mt-12"
                >
                    <p className="text-base text-slate-600 dark:text-slate-400 mb-4">
                        Want to see your organization here?
                    </p>
                    <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Become a Partner
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnerLogos;
