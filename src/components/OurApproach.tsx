import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    number: "01",
    title: "Head",
    description: "Learn how AI works and why it matters in everyday life.",
  },
  {
    number: "02",
    title: "Hand",
    description: "Experiment with AI tools, create projects, and solve local problems through hands-on learning.",
  },
  {
    number: "03",
    title: "Heart",
    description: "Share knowledge, mentor others, and help build an inclusive AI-powered future for Kerala.",
  }
];

const OurApproach = () => {
  return (
    <section id="approach" className="w-full max-w-7xl mx-auto px-4 py-20 md:py-32 relative">
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#030F0F] dark:text-white mb-4">
            Our Learning Approach
          </h2>
          <p className="text-lg text-[#030F0F]/70 dark:text-gray-400 max-w-2xl mx-auto">
            True learning engages the Head, Hand, and Heart.
          </p>
        </motion.div>

        {/* Cards Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {milestones.map((milestone, index) => {
            return (
              <motion.div
                key={milestone.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-[#03624C] rounded-2xl p-8 border-2 border-[#03624C] shadow-lg hover:shadow-2xl hover:border-[#00DF82] transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Connecting Arrow (only on desktop, between cards) */}
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      className="w-8 h-8"
                    >
                      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                        <motion.path
                          d="M 8 16 L 24 16 M 20 12 L 24 16 L 20 20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#00DF82]"
                        />
                      </svg>
                    </motion.div>
                  </div>
                )}

                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#00DF82] flex items-center justify-center shadow-xl border-4 border-white dark:border-[#030F0F] z-20">
                  <span className="text-[#030F0F] font-bold text-xl">{milestone.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#00DF82] group-hover:text-[#00DF82] transition-colors">
                  {milestone.title}
                </h3>
                <p className="text-sm md:text-base text-[#00DF82]/80 leading-relaxed">
                  {milestone.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00DF82] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Connecting Line (Mobile) */}
        <div className="md:hidden flex items-center justify-center gap-4 mt-8">
          {milestones.map((_, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-3 h-3 rounded-full bg-[#00DF82]"
              />
              {index < milestones.length - 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  className="h-0.5 bg-[#00DF82]"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
