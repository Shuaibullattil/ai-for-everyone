import React from "react";
import { motion } from "framer-motion";

const Pill = ({ title, emoji, children, delay = 0 }: { title: string; emoji: string; children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay * 0.001, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-2xl p-8 flex-1 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-700 p-3 rounded-xl shadow-inner">{emoji}</div>
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">{title}</h3>
      </div>
      <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{children}</p>
    </motion.div>
  );
};

const OurApproach = () => {
  return (
    <section id="approach" className="w-full max-w-7xl mx-auto px-4 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-30 dark:opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white"
          >
            Our Learning Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            True learning engages the Head, Hand, and Heart.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <Pill title="Head — Understand" emoji="🧠" delay={0}>
            Learn how AI works and why it matters in everyday life.
          </Pill>

          <Pill title="Hand — Build" emoji="✋" delay={200}>
            Experiment with AI tools, create projects, and solve local problems through hands-on learning.
          </Pill>

          <Pill title="Heart — Create & Share" emoji="❤️" delay={400}>
            Share knowledge, mentor others, and help build an inclusive AI-powered future for Kerala.
          </Pill>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
