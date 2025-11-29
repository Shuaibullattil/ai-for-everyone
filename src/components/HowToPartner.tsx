import { motion } from "framer-motion";
import { Presentation, Users, Gift, FileCode, DoorOpen, Mail } from "lucide-react";

const HowToPartner = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const actions = [
        {
            icon: Presentation,
            title: "Host Programs",
            description: "Facilitate workshops, study circles, or demo days in your community or organization",
            color: "teal"
        },
        {
            icon: Users,
            title: "Volunteer & Mentor",
            description: "Share your expertise, guide learners, or support grassroots facilitators",
            color: "green"
        },
        {
            icon: Gift,
            title: "Sponsor Toolkits",
            description: "Help us distribute learning kits and resources widely. Support program sustainability and scale",
            color: "orange"
        },
        {
            icon: FileCode,
            title: "Contribute Challenges",
            description: "Add real-world challenges related to livelihoods for learners to solve",
            color: "purple"
        },
        {
            icon: DoorOpen,
            title: "Open Doors",
            description: "Invite children, youth, or elders from your network to participate in AI literacy activities",
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
            orange: {
                bg: "bg-orange-50 dark:bg-orange-950/30",
                icon: "text-orange-600 dark:text-orange-400",
                iconBg: "bg-orange-100 dark:bg-orange-900/50",
                border: "border-orange-200 dark:border-orange-800"
            },
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
                    <h2 className="text-sm font-bold tracking-wider text-green-600 dark:text-green-400 uppercase mb-3">
                        Take Action
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                        How to Partner
                    </h3>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        There are many ways to contribute to this movement. Choose what works best for you and make an impact.
                    </p>
                </motion.div>

                {/* Action Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {actions.map((action, index) => {
                        const Icon = action.icon;
                        const colorClasses = getColorClasses(action.color);

                        return (
                            <motion.div
                                key={action.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                variants={fadeInVariants}
                                className={`${colorClasses.bg} rounded-2xl p-6 md:p-8 border-2 ${colorClasses.border} shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                            >
                                <div className={`${colorClasses.iconBg} ${colorClasses.icon} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                                    {action.title}
                                </h4>
                                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {action.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    variants={fadeInVariants}
                    className="text-center bg-gradient-to-br from-teal-50 via-green-50 to-orange-50 dark:from-teal-950/30 dark:via-green-950/30 dark:to-orange-950/30 rounded-2xl p-8 md:p-12 border-2 border-teal-200 dark:border-teal-800"
                >
                    <h4 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Ready to Make a Difference?
                    </h4>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                        Get in touch with us to discuss partnership opportunities and start making an impact today.
                    </p>
                    <a
                        href="mailto:hello@tinkerhub.org"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Contact Us</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default HowToPartner;
