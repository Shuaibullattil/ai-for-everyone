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
            description: "Facilitate workshops, study circles, or demo days in your community or organization"
        },
        {
            icon: Users,
            title: "Volunteer & Mentor",
            description: "Share your expertise, guide learners, or support grassroots facilitators"
        },
        {
            icon: Gift,
            title: "Sponsor Toolkits",
            description: "Help us distribute learning kits and resources widely. Support program sustainability and scale"
        },
        {
            icon: FileCode,
            title: "Contribute Challenges",
            description: "Add real-world challenges related to livelihoods for learners to solve"
        },
        {
            icon: DoorOpen,
            title: "Open Doors",
            description: "Invite children, youth, or elders from your network to participate in AI literacy activities"
        }
    ];

    return (
        <section className="w-full bg-[#03624C]/5 dark:bg-[#030F0F]/50 py-20 md:py-32">
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
                    <h2 className="text-sm font-bold tracking-wider text-[#03624C] uppercase mb-3">
                        Take Action
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#030F0F] dark:text-white mb-6">
                        How to Partner
                    </h3>
                    <p className="text-lg md:text-xl text-[#030F0F]/70 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        There are many ways to contribute to this movement. Choose what works best for you and make an impact.
                    </p>
                </motion.div>

                {/* Action Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {actions.map((action, index) => {
                        const Icon = action.icon;

                        return (
                            <motion.div
                                key={action.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                variants={fadeInVariants}
                                className="bg-white dark:bg-[#030F0F]/50 rounded-2xl p-6 md:p-8 border-2 border-[#03624C]/20 hover:border-[#00DF82] shadow-lg hover:shadow-xl hover:shadow-[#00DF82]/20 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="bg-[#03624C]/10 text-[#00DF82] w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#00DF82]/10 transition-all duration-300">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#030F0F] dark:text-white">
                                    {action.title}
                                </h4>
                                <p className="text-sm md:text-base text-[#030F0F]/70 dark:text-gray-400 leading-relaxed">
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
                    className="text-center bg-gradient-to-br from-[#03624C]/10 to-[#00DF82]/10 rounded-2xl p-8 md:p-12 border-2 border-[#03624C]/30"
                >
                    <h4 className="text-2xl md:text-3xl font-bold text-[#030F0F] dark:text-white mb-4">
                        Ready to Make a Difference?
                    </h4>
                    <p className="text-lg text-[#030F0F]/70 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        Get in touch with us to discuss partnership opportunities and start making an impact today.
                    </p>
                    <a
                        href="mailto:hello@tinkerhub.org"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#00DF82] hover:bg-[#00DF82]/90 text-[#030F0F] font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-[#00DF82]/50 transition-all duration-300 transform hover:scale-105"
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
