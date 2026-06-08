"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const workItems = [
  {
    role: "AI Engineer",
    company: "SDAIA",
    description:
      "National-Scale AI Implementation: Contributed core technical engineering to a high-impact generative AI system under strict NDA and national data security protocols. Redesigned Arabic NLP via advanced prompt strategies achieving 75%+ improvement in dialectal realism. Engineered region-specific Arabic TTS using ElevenLabs with precise phonetic synchronization.",
  },
  {
    role: "Advanced AI Scholar",
    company: "KAUST Academy",
    description:
      "Completed intensive training in advanced AI architectures, deep learning systems, and hands-on implementations of cutting-edge ML techniques.",
  },
  {
    role: "Reinforcement Learning Engineer",
    company: "Independent Research",
    description:
      "Built custom physics-based RL environments from scratch. Trained agents using PPO, DQN, and custom reward shaping. Implemented full simulation-to-policy pipelines for robotics and game AI.",
  },
];

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full bg-white py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] text-[#333]">WORK</span>
        </motion.div>

        {/* Work items */}
        <div className="space-y-12">
          {workItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="border-l border-[#0a0a0a]/15 pl-6 md:pl-8"
            >
              <h3 className="text-xl md:text-2xl font-light text-[#0a0a0a] mb-2">
                {item.role}
                <span className="text-[#555]"> · {item.company}</span>
              </h3>
              <p className="text-[14px] md:text-[15px] text-[#555] leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
