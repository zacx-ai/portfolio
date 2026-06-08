"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AbuMtrSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const techStack = [
    "Unreal Engine",
    "MetaHuman",
    "Live Link ARKit",
    "Gemini 2.0 Flash",
    "Faster Whisper",
    "ElevenLabs",
    "Python",
  ];

  return (
    <section
      ref={sectionRef}
      id="abu-mtr"
      className="relative min-h-screen bg-white text-[#0a0a0a] py-32 px-6 overflow-hidden"
    >
      {/* Section number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8"
      >
        <span className="text-[11px] tracking-[0.3em] text-[#333]">02</span>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Project identity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-light tracking-tight mb-8">
            Abu Matar
          </h2>

          {/* Tech stack pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="px-4 py-2 text-[11px] tracking-[0.15em] border border-[#0a0a0a]/20 rounded-full hover:bg-[#0a0a0a] hover:text-[#f5f5f5] transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.6 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[13px] tracking-[0.1em] text-[#333] max-w-xl mx-auto"
          >
            3D · Real-Time · Arabic NLP
          </motion.p>
        </motion.div>

        {/* Main image showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative max-w-[900px] mx-auto mb-16"
        >
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0762.JPG-Ju0kghP51QJktYnglXjofJOyr3GpLu.jpeg"
              alt="Abu Matar - Saudi MetaHuman with traditional keffiyeh"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>
        </motion.div>

        {/* Project description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl font-light leading-relaxed text-[#222] mb-8">
            Saudi MetaHuman with real-time Arabic facial animation. Sub-3s
            latency pipeline combining Faster Whisper speech recognition, Gemini
            2.0 Flash for intelligent responses, and Live Link ARKit for
            photorealistic lip-sync.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-[12px] tracking-[0.15em] text-[#555]">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-light text-[#0a0a0a] mb-1">
                {"<"}3s
              </span>
              <span>LATENCY</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-light text-[#0a0a0a] mb-1">
                500+
              </span>
              <span>LINKEDIN REACTIONS</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-light text-[#0a0a0a] mb-1">
                Real-Time
              </span>
              <span>FACIAL ANIMATION</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
