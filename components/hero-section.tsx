"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  const nameFirst = "OSAMA";
  const nameLast = "ALSHAMMARI";

  const charVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.04,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative h-screen w-full bg-white flex items-center justify-center overflow-hidden">
      {/* Corner labels */}
      <div className="absolute top-24 left-6 md:left-12">
      <span className="text-[11px] tracking-[0.3em] text-[#222] block font-mono"
      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
  {"10111100101 01001001 01001010 01000111 01011100 01011101".split("").map((c, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0.3, 1] }}
      transition={{ delay: 0.5 + i * 0.04, duration: 0.7 }}
    >{c}</motion.span>
  ))}
</span>
      </div>

      <div className="absolute top-24 right-6 md:right-12">
      <span className="text-[11px] tracking-[0.3em] text-[#222] block font-mono"
      style={{ writingMode: "vertical-rl" }}>
  {"01000001 01001001 00100000 01000101 01001110 01000111".split("").map((c, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0.3, 1] }}
      transition={{ delay: 0.5 + i * 0.04, duration: 0.7 }}
    >{c}</motion.span>
  ))}
</span>
      </div>

      {/* Main content */}
      <div className="text-center px-6">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <span className="text-[10px] tracking-[0.4em] text-[#444]">
            
          </span>
        </motion.div>

        {/* Giant name */}
        <div className="overflow-hidden">
          <h1 className="text-[clamp(48px,10vw,96px)] font-light tracking-[-0.03em] text-[#0a0a0a] leading-none">
            <span className="block">
              {nameFirst.split("").map((char, i) => (
                <motion.span
                  key={`first-${i}`}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={charVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block">
              {nameLast.split("").map((char, i) => (
                <motion.span
                  key={`last-${i}`}
                  custom={i + nameFirst.length}
                  initial="hidden"
                  animate="visible"
                  variants={charVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        {/* Horizontal line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-32 h-px bg-[#0a0a0a] mx-auto my-8 origin-center"
        />

        {/* Descriptors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[12px] tracking-[0.15em] text-[#555]"
        >
          <span>LLM Fine-tuning</span>
          <span className="text-[#333]">|</span>
          <span>Real-Time AI</span>
          <span className="text-[#333]">|</span>
          <span>Arabic AI Systems</span>
        </motion.div>

        {/* GPA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-12"
        >
          <span className="text-[11px] tracking-[0.1em] text-[#333]">
            GPA 3.986 · University of Hail
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] tracking-[0.3em] text-[#333] mb-4">
          SCROLL
        </span>
        <div className="relative w-px h-12 bg-[#222] overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
