import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import avatar1 from '../assets/avatar/1.svg';
import avatar2 from '../assets/avatar/2.svg';
import avatar3 from '../assets/avatar/3.svg';
import avatar4 from '../assets/avatar/4.svg';

const WhyAILiteracy = () => {
  const reasons = [
    {
      title: "Students are graduating without essential AI understanding.",
      description: "Many young people leave school without skills that will become foundational in future careers.",
      avatar: avatar1,
      color: "from-blue-500/20 to-cyan-500/20",
      gradient: "from-blue-600 to-cyan-600",
      bg: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Automation is transforming jobs.",
      description: "Rapid workplace changes are putting young professionals and entry-level roles at risk.",
      avatar: avatar2,
      color: "from-purple-500/20 to-pink-500/20",
      gradient: "from-purple-600 to-pink-600",
      bg: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      title: "Deepfakes, scams, and misinformation are rising.",
      description: "These disproportionately affect elders and vulnerable communities who need awareness and protection.",
      avatar: avatar3,
      color: "from-orange-500/20 to-red-500/20",
      gradient: "from-orange-600 to-red-600",
      bg: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      title: "Cultural identities can be misrepresented by biased AI.",
      description: "Without local datasets and creators, AI risks overlooking local languages, contexts, and values.",
      avatar: avatar4,
      color: "from-green-500/20 to-emerald-500/20",
      gradient: "from-green-600 to-emerald-600",
      bg: "bg-green-50 dark:bg-green-900/20"
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardLength = reasons.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = reasons.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Header Section - Static */}
      <div className="pt-20 pb-10 px-4 text-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-3">
            The Urgency
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
            Why Kerala Needs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              AI Literacy Now
            </span>
          </h1>
        </motion.div>
      </div>

      {/* Sticky Scroll Section */}
      <div
        ref={containerRef}
        className="relative w-full hidden md:block"
        style={{ height: `${reasons.length * 80}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-2 gap-12 items-center h-full">

            {/* Left Column: Text Content */}
            <div className="relative h-96 flex items-center">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0,
                    x: activeCard === index ? 0 : -50,
                    filter: activeCard === index ? "blur(0px)" : "blur(10px)",
                    pointerEvents: activeCard === index ? "auto" : "none",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-full"
                >
                  <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 ${reason.bg} text-slate-800 dark:text-slate-200`}>
                    Reason 0{index + 1}
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Avatar */}
            <div className="relative h-[500px] w-full flex items-center justify-center">
              {/* Background Blob */}
              <motion.div
                animate={{
                  background: `linear-gradient(135deg, ${reasons[activeCard].color.split(' ')[0].replace('from-', '')} 0%, ${reasons[activeCard].color.split(' ')[1].replace('to-', '')} 100%)`,
                }}
                className="absolute inset-0 rounded-full blur-3xl opacity-30 transition-colors duration-500"
              />

              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0,
                    scale: activeCard === index ? 1 : 0.8,
                    rotate: activeCard === index ? 0 : 10,
                    zIndex: activeCard === index ? 10 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src={reason.avatar}
                    alt={reason.title}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fallback (Standard Stacked Layout) */}
      <div className="md:hidden px-4 pb-20 flex flex-col gap-12">
        {reasons.map((reason, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
            <div className="mb-6 flex justify-center">
              <img
                src={reason.avatar}
                alt={reason.title}
                className="w-48 h-48 object-contain drop-shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              {reason.title}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyAILiteracy;