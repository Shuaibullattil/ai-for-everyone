import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    problem: "AI is often seen as complex, magical, or only for experts.",
    solution: "We demystify AI, making it accessible, understandable, and usable for everyone."
  },
  {
    problem: "Traditional education lags behind rapid technological changes.",
    solution: "We provide hands-on, project-based learning that is relevant to today's world."
  },
  {
    problem: "Local problems are often ignored by global tech solutions.",
    solution: "We empower students to use AI to solve real challenges in their own communities."
  },
  {
    problem: "Access to high-quality tech mentorship is limited in many areas.",
    solution: "We connect learners with industry experts and a supportive community of peers."
  }
];

const ProblemSolution = ({
  problem,
  solution,
}: {
  problem: string;
  solution: string;
}) => {
  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-800 h-full flex flex-col justify-center">
      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4 text-red-500/80 dark:text-red-400/80">
          <XCircle className="w-8 h-8 shrink-0 mt-0.5" />
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{problem}</p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent w-full" />

        <div className="flex items-start gap-4 text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="w-8 h-8 shrink-0 mt-0.5" />
          <p className="text-xl text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">{solution}</p>
        </div>
      </div>

      {/* Hover effect gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95,
    zIndex: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.95
  })
};

const WhatWeResolving = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // We only have 4 items, but page can increase indefinitely
  const imageIndex = Math.abs(page % items.length);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [paginate, isAutoPlaying]);

  return (
    <section className="w-full py-24 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-3">
                The Challenge & The Solution
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Bridging the gap between <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  curiosity and capability
                </span>
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                We identified key barriers preventing widespread AI adoption and created a curriculum designed to break them down, one by one.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                Join the Mission <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          <div
            className="flex-1 w-full max-w-lg"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="relative h-[400px] w-full perspective-1000">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0 w-full h-full"
                >
                  <ProblemSolution
                    problem={items[imageIndex].problem}
                    solution={items[imageIndex].solution}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const newDirection = idx > imageIndex ? 1 : -1;
                      setPage([page + (idx - imageIndex), newDirection]);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === imageIndex ? "w-8 bg-blue-600" : "w-2 bg-slate-300 dark:bg-slate-700"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => paginate(-1)}
                  className="p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeResolving;
