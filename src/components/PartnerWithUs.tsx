import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lightbulb, DollarSign, Megaphone, Package, Users, ArrowRight } from "lucide-react";

const PartnerWithUs = () => {
    const navigate = useNavigate();

    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const partnerTypes = [
        {
            icon: Lightbulb,
            title: "Knowledge Partners",
            description: "Tech & Education experts sharing expertise and mentorship",
            items: ["Technical know-how", "Industry mentorship", "Curriculum design"]
        },
        {
            icon: DollarSign,
            title: "Financial Partners",
            description: "Program & resource funding to scale our impact",
            items: ["Program funding", "Resource support", "Scaling initiatives"]
        },
        {
            icon: Megaphone,
            title: "Media Partners",
            description: "Amplify our reach through various channels",
            items: ["Media coverage", "Social partnerships", "Content creation"]
        },
        {
            icon: Package,
            title: "Resource Partners",
            description: "Tools & materials for effective learning",
            items: ["Hardware & software", "Learning materials", "Technical support"]
        },
        {
            icon: Users,
            title: "Community Partners",
            description: "Host & facilitate on the ground",
            items: ["Venue hosting", "Community engagement", "Local facilitation"]
        }
    ];

    return (
        <section id="partnership" className="w-full max-w-7xl mx-auto px-4 py-20 md:py-32">
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
                    Collaborate With Us
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#030F0F] dark:text-white mb-6">
                    Partner With Us
                </h3>
                <p className="text-lg md:text-xl text-[#030F0F]/70 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    This campaign is built on collaboration. Organizations, companies, and community groups can partner in multiple ways.
                </p>
            </motion.div>

            {/* Partner Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                {partnerTypes.map((partner, index) => {
                    const Icon = partner.icon;

                    return (
                        <motion.div
                            key={partner.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            variants={fadeInVariants}
                            className="bg-white dark:bg-[#030F0F]/50 rounded-2xl p-6 md:p-8 border-2 border-[#03624C]/20 hover:border-[#00DF82] shadow-lg hover:shadow-xl hover:shadow-[#00DF82]/20 transition-all duration-300 group"
                        >
                            <div className="bg-[#03624C]/10 text-[#00DF82] w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00DF82]/10 transition-all duration-300">
                                <Icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-bold mb-2 text-[#030F0F] dark:text-white">
                                {partner.title}
                            </h4>
                            <p className="text-sm text-[#030F0F]/70 dark:text-gray-400 mb-4">
                                {partner.description}
                            </p>
                            <ul className="space-y-2">
                                {partner.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-[#030F0F]/70 dark:text-gray-400">
                                        <span className="text-[#00DF82] mt-0.5">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>

            {/* CTA */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                variants={fadeInVariants}
                className="text-center"
            >
                <button
                    onClick={() => navigate('/partners')}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00DF82] hover:bg-[#00DF82]/90 text-[#030F0F] font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-[#00DF82]/50 transition-all duration-300 transform hover:scale-105"
                >
                    <span className="text-lg">Explore Partnership Opportunities</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </motion.div>
        </section>
    );
};

export default PartnerWithUs;
