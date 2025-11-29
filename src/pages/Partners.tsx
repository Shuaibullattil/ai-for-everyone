import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Lightbulb, DollarSign, Megaphone, Package, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Partners = () => {
    const navigate = useNavigate();

    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const partnerTypes = [
        {
            icon: Lightbulb,
            title: "Knowledge Partners",
            subtitle: "You have expertise to share",
            items: [
                {
                    category: "Tech & Industry",
                    description: "AI companies contributing technical know-how, mentorship, product demos, and subject experts connecting AI to specific fields"
                },
                {
                    category: "Education & Content",
                    description: "Educators, professionals designing curriculum, leading workshops, and creating learning materials"
                }
            ],
            color: "teal"
        },
        {
            icon: DollarSign,
            title: "Financial Partners",
            subtitle: "You provide funding",
            items: [
                {
                    category: "Program Funding",
                    description: "Sponsor facilitator training, venue costs, program operations, and scaling to new districts"
                },
                {
                    category: "Resource Funding",
                    description: "Pay for learning materials, hardware, printed resources, and kit distribution"
                }
            ],
            color: "green"
        },
        {
            icon: Megaphone,
            title: "Media & Outreach Partners",
            subtitle: "You amplify our reach",
            items: [
                {
                    category: "Traditional & Digital Media",
                    description: "Newspapers, TV, radio coverage, social media partnerships, and influencer collaborations"
                },
                {
                    category: "Content & Stories",
                    description: "Videos, articles, podcasts, and local language content documenting the journey"
                }
            ],
            color: "purple"
        },
        {
            icon: Package,
            title: "Resource Partners",
            subtitle: "You provide tools and materials",
            items: [
                {
                    category: "Hardware & Software",
                    description: "Laptops, tablets, demo devices, free/discounted AI tools and platforms"
                },
                {
                    category: "Materials & Support",
                    description: "Learning resources, books, course licenses, distribution, and technical maintenance"
                }
            ],
            color: "orange"
        },
        {
            icon: Users,
            title: "Community Partners",
            subtitle: "You host and facilitate on the ground",
            items: [
                {
                    category: "Institutions & Organisations",
                    description: "Schools, libraries, NGOs, Kudumbashree, and workplaces providing space and bringing communities together"
                },
                {
                    category: "Individual Hosts",
                    description: "Anyone willing to organise small learning circles in their neighbourhood or mentor others"
                }
            ],
            color: "sky"
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; border: string; icon: string }> = {
            teal: {
                bg: "bg-teal-50 dark:bg-teal-950/30",
                border: "border-teal-200 dark:border-teal-800",
                icon: "text-teal-600 dark:text-teal-400"
            },
            green: {
                bg: "bg-green-50 dark:bg-green-950/30",
                border: "border-green-200 dark:border-green-800",
                icon: "text-green-600 dark:text-green-400"
            },
            purple: {
                bg: "bg-purple-50 dark:bg-purple-950/30",
                border: "border-purple-200 dark:border-purple-800",
                icon: "text-purple-600 dark:text-purple-400"
            },
            orange: {
                bg: "bg-orange-50 dark:bg-orange-950/30",
                border: "border-orange-200 dark:border-orange-800",
                icon: "text-orange-600 dark:text-orange-400"
            },
            sky: {
                bg: "bg-sky-50 dark:bg-sky-950/30",
                border: "border-sky-200 dark:border-sky-800",
                icon: "text-sky-600 dark:text-sky-400"
            }
        };
        return colors[color];
    };

    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="w-full max-w-7xl mx-auto px-4 py-20 md:py-32">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => navigate('/')}
                    className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home</span>
                </motion.button>

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    variants={fadeInVariants}
                    className="text-center mb-12 md:mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                        Partnership Opportunities
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                        AI for Everyone is designed to be collaborative and inclusive. TinkerHub acts as the enabler and host of this campaign, holding space for partners and communities to lead, learn, and build together. We invite:
                    </p>
                </motion.div>

                {/* Partner Types Grid */}
                <div className="space-y-8 md:space-y-12">
                    {partnerTypes.map((partner, index) => {
                        const Icon = partner.icon;
                        const colorClasses = getColorClasses(partner.color);

                        return (
                            <motion.div
                                key={partner.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                variants={fadeInVariants}
                                className={`${colorClasses.bg} rounded-2xl p-6 md:p-10 border-2 ${colorClasses.border} shadow-lg hover:shadow-xl transition-shadow`}
                            >
                                {/* Partner Type Header */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`${colorClasses.icon} p-3 rounded-xl bg-white dark:bg-slate-900`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                                            {index + 1}. {partner.title}
                                        </h2>
                                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 italic">
                                            {partner.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Partner Categories */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {partner.items.map((item, itemIndex) => (
                                        <div
                                            key={itemIndex}
                                            className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-700"
                                        >
                                            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3">
                                                {item.category}
                                            </h3>
                                            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
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
                    className="mt-16 md:mt-24 text-center bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-950/30 dark:to-green-950/30 rounded-2xl p-8 md:p-12 border-2 border-teal-200 dark:border-teal-800"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Ready to Partner with Us?
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                        Join us in building Kerala's AI-literate future. Together, we can ensure every Keralite learns, builds, and creates responsibly with AI.
                    </p>
                    <a
                        href="mailto:hello@tinkerhub.org"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 dark:from-teal-500 dark:to-green-500 dark:hover:from-teal-600 dark:hover:to-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <span className="text-lg">Get in Touch</span>
                    </a>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default Partners;
