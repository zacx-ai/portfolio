"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  "Unreal Engine 5",
  "Blender",
  "LLM",
  "Faster Whisper",
  "ElevenLabs",
];

export function ShadowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white py-24 md:py-32"
    >
      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-[10px] tracking-[0.25em] text-[#aaa]">
          FEATURED PROJECT · 01
        </span>
      </motion.div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Project identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-[48px] md:text-[56px] font-light text-black mb-2">
            Shadow
          </h2>
          <span className="text-[14px] tracking-[0.3em] text-[#555]">
            v1
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[22px] md:text-[26px] font-light text-black tracking-[-0.01em] mb-8"
        >
          Not a chatbot. A synthetic companion.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[14px] text-[#666] max-w-[480px] mx-auto leading-[1.8] mb-12"
        >
          Shadow bridges text and reality — giving AI a physical body that
          mirrors human context, emotion, and tone in real-time. Dynamic body
          language from 100+ animations. The AI conducts every movement.
        </motion.p>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-black text-white text-[11px] tracking-[0.1em]"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Video embed area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="relative max-w-[860px] mx-auto aspect-video bg-white rounded overflow-hidden"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 55%" }}
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video5809964718437178662-jYQyjMot5SZN22L8ToURxk4pvtEEXO.mp4"
              type="video/mp4"
            />
          </video>
          {/* White bar to cover yellow line at top */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-white" />
        </motion.div>
      </div>

      {/* Bottom transition line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-white origin-left"
      />
    </section>
  );
}
