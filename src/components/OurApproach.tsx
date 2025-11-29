import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  {
    number: "01",
    title: "Head — Understand",
    description: "Learn how AI works and why it matters in everyday life.",
  },
  {
    number: "02",
    title: "Hand — Build",
    description: "Experiment with AI tools, create projects, and solve local problems through hands-on learning.",
  },
  {
    number: "03",
    title: "Heart — Create & Share",
    description: "Share knowledge, mentor others, and help build an inclusive AI-powered future for Kerala.",
  }
];

const TimelineMilestone = ({
  milestone,
  index,
  isActive
}: {
  milestone: typeof milestones[0];
  index: number;
  isActive: boolean;
}) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center gap-8 md:gap-12">
      {/* Content card - alternating sides on desktop, centered on mobile */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`flex-1 bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border-2 border-slate-200 dark:border-slate-700 shadow-lg max-w-md ${isLeft ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8 md:order-2'
          }`}
      >
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white">
          {milestone.title}
        </h3>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          {milestone.description}
        </p>
      </motion.div>

      {/* Milestone circle - on the timeline */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute left-1/2 -translate-x-1/2 z-10"
      >
        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-slate-950 transition-colors duration-500 ${isActive
          ? 'bg-teal-600 dark:bg-teal-500'
          : 'bg-slate-300 dark:bg-slate-600'
          }`}>
          <span className="text-white font-bold text-lg md:text-xl">{milestone.number}</span>
        </div>
      </motion.div>

      {/* Spacer for desktop layout */}
      <div className={`flex-1 hidden md:block ${isLeft ? '' : 'md:order-1'}`} />
    </div>
  );
};

const OurApproach = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress to height percentage for the blue line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [milestone1Active, setMilestone1Active] = React.useState(true);
  const [milestone2Active, setMilestone2Active] = React.useState(false);
  const [milestone3Active, setMilestone3Active] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setMilestone1Active(true);
      setMilestone2Active(latest >= 0.33);
      setMilestone3Active(latest >= 0.66);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} id="approach" className="w-full max-w-7xl mx-auto px-4 py-20 md:py-32 relative">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
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

        {/* Timeline Container */}
        <div className="relative">
          {/* Continuous background line - light grey */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-slate-200 dark:bg-slate-700 -translate-x-1/2" />

          {/* Progress line - teal/green (fills as you scroll) */}
          <motion.div
            className="absolute left-1/2 top-0 w-0.5 md:w-1 bg-gradient-to-b from-teal-600 to-green-600 dark:from-teal-500 dark:to-green-500 -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          {/* Milestones - Increased spacing */}
          <div className="space-y-32 md:space-y-48 relative">
            <TimelineMilestone milestone={milestones[0]} index={0} isActive={milestone1Active} />
            <TimelineMilestone milestone={milestones[1]} index={1} isActive={milestone2Active} />
            <TimelineMilestone milestone={milestones[2]} index={2} isActive={milestone3Active} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
