import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/30 to-green-50/30 dark:from-slate-950 dark:via-teal-950/20 dark:to-green-950/20">
      {/* Subtle Tech Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-green-400/20 dark:bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-orange-400/20 dark:bg-orange-500/10 rounded-full blur-2xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800"
          >
            <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span className="text-sm font-semibold text-teal-700 dark:text-teal-300">
              A Statewide AI Literacy Initiative
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight"
          >
            AI for Everyone:
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-green-600 to-teal-600 dark:from-teal-400 dark:via-green-400 dark:to-teal-400">
              Building Kerala's
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-green-600 dark:from-green-400 dark:via-teal-400 dark:to-green-400">
              AI-Literate Future
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed"
          >
            A statewide initiative to democratize AI knowledge and empower{" "}
            <span className="font-bold text-teal-600 dark:text-teal-400">1 lakh+ learners</span>{" "}
            to become creators, not just consumers
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              size="lg"
              className="group px-8 py-6 text-base sm:text-lg rounded-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Become a Partner
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base sm:text-lg rounded-full border-2 border-slate-300 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-all duration-300"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-teal-600 dark:text-teal-400">1L+</div>
              <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">Target Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400">14</div>
              <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">Districts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-orange-600 dark:text-orange-400">∞</div>
              <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">Possibilities</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;