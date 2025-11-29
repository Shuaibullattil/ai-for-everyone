import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, MapPin, Calendar, ExternalLink } from "lucide-react";

const AnimatedStatNumber = ({ value }: { value: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    useEffect(() => {
        if (!isInView) return;

        // Parse the value string (e.g., "50K+", "100+", "500+")
        const hasK = value.includes("K");
        const numericValue = parseInt(value.replace(/[K+]/g, ""));

        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = numericValue / steps;
        const stepDuration = duration / steps;

        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                setCount(numericValue);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isInView, value]);

    // Format the number with K notation if needed
    const formatNumber = (num: number) => {
        if (value.includes("K")) {
            return `${num}K+`;
        }
        return `${num.toLocaleString("en-IN")}+`;
    };

    return (
        <motion.div
            ref={ref}
            className="inline-block"
            animate={isInView ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
        >
            {formatNumber(count)}
        </motion.div>
    );
};

const AboutTinkerHub = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const stats = [
        { icon: Users, value: "50K+", label: "Community Members" },
        { icon: MapPin, value: "100+", label: "Campus Chapters" },
        { icon: Calendar, value: "500+", label: "Events Annually" }
    ];

    return (
        <section className="w-full bg-[#030F0F] py-20 md:py-32 relative overflow-hidden">
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, #00DF82 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    variants={fadeInVariants}
                    className="text-center mb-12"
                >
                    <h2 className="text-sm font-bold tracking-wider text-[#00DF82] uppercase mb-3">
                        Powered By
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Enabled by{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DF82] to-[#03624C]">
                            TinkerHub
                        </span>
                    </h3>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        TinkerHub is Kerala's largest community of tinkerers, makers, and innovators. We're a peer-learning community that brings together students, professionals, and enthusiasts to learn, build, and share.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <motion.div
                                key={stat.label}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                variants={fadeInVariants}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00DF82]/10 text-[#00DF82] mb-4">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                                    className="text-4xl md:text-5xl font-bold text-[#00DF82] mb-2"
                                >
                                    <AnimatedStatNumber value={stat.value} />
                                </motion.div>
                                <div className="text-base md:text-lg text-gray-400">
                                    {stat.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    variants={fadeInVariants}
                    className="text-center"
                >
                    <a
                        href="https://tinkerhub.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#00DF82] hover:bg-[#00DF82]/90 text-[#030F0F] font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-[#00DF82]/50 transition-all duration-300 transform hover:scale-105"
                    >
                        <span>Learn More About TinkerHub</span>
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutTinkerHub;
