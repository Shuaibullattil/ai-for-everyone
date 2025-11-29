import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Lightbulb, DollarSign, Megaphone, Package, Users, ArrowRight } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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

            {/* Collapsible Accordion */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                variants={fadeInVariants}
                className="max-w-4xl mx-auto mb-12"
            >
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {partnerTypes.map((partner, index) => {
                        const Icon = partner.icon;
                        const value = `item-${index}`;

                        return (
                            <AccordionItem
                                key={partner.title}
                                value={value}
                                className="bg-white dark:bg-[#030F0F]/50 rounded-2xl border-2 border-[#03624C]/20 hover:border-[#00DF82] shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline">
                                    <div className="flex items-center gap-4 md:gap-6 w-full">
                                        <div className="bg-[#03624C]/10 text-[#00DF82] w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-data-[state=open]:bg-[#00DF82]/10 group-data-[state=open]:scale-110">
                                            <Icon className="w-6 h-6 md:w-7 md:h-7" />
                                        </div>
                                        <div className="flex-1 text-left">
                                            <h4 className="text-lg md:text-xl font-bold text-[#030F0F] dark:text-white mb-1">
                                                {partner.title}
                                            </h4>
                                            <p className="text-sm text-[#030F0F]/70 dark:text-gray-400">
                                                {partner.description}
                                            </p>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 md:px-8 pb-6 md:pb-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="pt-4 border-t border-[#03624C]/20"
                                    >
                                        <p className="text-sm font-semibold text-[#030F0F] dark:text-white mb-4">
                                            What we're looking for:
                                        </p>
                                        <ul className="space-y-3">
                                            {partner.items.map((item, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                                    className="flex items-start gap-3 text-sm md:text-base text-[#030F0F]/70 dark:text-gray-400"
                                                >
                                                    <span className="text-[#00DF82] mt-1 shrink-0">•</span>
                                                    <span>{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </motion.div>

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
