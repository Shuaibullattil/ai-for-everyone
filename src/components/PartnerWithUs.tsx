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
            items: ["Technical know-how", "Industry mentorship", "Curriculum design"],
            color: "teal"
        },
        {
            icon: DollarSign,
            title: "Financial Partners",
            description: "Program & resource funding to scale our impact",
            items: ["Program funding", "Resource support", "Scaling initiatives"],
            color: "green"
        },
        {
            icon: Megaphone,
            title: "Media Partners",
            description: "Amplify our reach through various channels",
            items: ["Media coverage", "Social partnerships", "Content creation"],
            color: "purple"
        },
        {
            icon: Package,
            title: "Resource Partners",
            description: "Tools & materials for effective learning",
            items: ["Hardware & software", "Learning materials", "Technical support"],
            color: "orange"
        },
        {
            icon: Users,
            title: "Community Partners",
            description: "Host & facilitate on the ground",
            items: ["Venue hosting", "Community engagement", "Local facilitation"],
            color: "sky"
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; icon: string; iconBg: string; border: string }> = {
            teal: {
                bg: "bg-teal-50 dark:bg-teal-950/30",
                icon: "text-teal-600 dark:text-teal-400",
                iconBg: "bg-teal-100 dark:bg-teal-900/50",
                border: "border-teal-200 dark:border-teal-800"
            },
            green: {
                bg: "bg-green-50 dark:bg-green-950/30",
                icon: "text-green-600 dark:text-green-400",
                iconBg: "bg-green-100 dark:bg-green-900/50",
                border: "border-green-200 dark:border-green-800"
            },
            purple: {
                bg: "bg-purple-50 dark:bg-purple-950/30",
                icon: "text-purple-600 dark:text-purple-400",
                iconBg: "bg-purple-100 dark:bg-purple-900/50",
                border: "border-purple-200 dark:border-purple-800"
            },
            orange: {
                bg: "bg-orange-50 dark:bg-orange-950/30",
                icon: "text-orange-600 dark:text-orange-400",
                iconBg: "bg-orange-100 dark:bg-orange-900/50",
                border: "border-orange-200 dark:border-orange-800"
            },
            sky: {
                bg: "bg-sky-50 dark:bg-sky-950/30",
                icon: "text-sky-600 dark:text-sky-400",
                iconBg: "bg-sky-100 dark:bg-sky-900/50",
                border: "border-sky-200 dark:border-sky-800"
            }
        };
        return colors[color];
    };

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
                <h2 className="text-sm font-bold tracking-wider text-teal-600 dark:text-teal-400 uppercase mb-3">
                    Collaborate With Us
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                    Partner With Us
                </h3>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    This campaign is built on collaboration. Organizations, companies, and community groups can partner in multiple ways.
                </p>
            </motion.div>

            {/* Partner Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                {partnerTypes.map((partner, index) => {
                    const Icon = partner.icon;
                    const colorClasses = getColorClasses(partner.color);

                    return (
                        <motion.div
                            key={partner.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            variants={fadeInVariants}
                            className={`${colorClasses.bg} rounded-2xl p-6 md:p-8 border-2 ${colorClasses.border} shadow-lg hover:shadow-xl transition-all duration-300 group`}
                        >
                            <div className={`${colorClasses.iconBg} ${colorClasses.icon} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                                {partner.title}
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                {partner.description}
                            </p>
                            <ul className="space-y-2">
                                {partner.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <span className={`${colorClasses.icon} mt-0.5`}>•</span>
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
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 dark:from-teal-500 dark:to-green-500 dark:hover:from-teal-600 dark:hover:to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                    <span className="text-lg">Explore Partnership Opportunities</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </motion.div>
        </section>
    );
};

export default PartnerWithUs;
