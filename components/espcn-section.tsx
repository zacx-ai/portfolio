"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function EspcnSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="espcn"
      className="relative min-h-screen bg-white text-[#0a0a0a] py-32 px-6 overflow-hidden"
    >
      {/* Section number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8"
      >
        <span className="text-[11px] tracking-[0.3em] text-[#333]">03</span>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Project identity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
            ESPCN Temporal
          </h2>
          <p className="text-2xl md:text-3xl font-light mb-6 text-[#333]">
            Super-Resolution
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.7 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[13px] tracking-[0.2em] text-[#333]"
          >
            ESPCN · Optical Flow Generator · Temporal
          </motion.p>
        </motion.div>

        {/* Video Box Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative max-w-[900px] mx-auto mb-16 w-full"
        >
          <div className="relative overflow-hidden rounded-lg border border-[#0a0a0a]/10 w-full bg-[#e8e8e8]">

            {/* Gradient background */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 40%, #d8d8d8 100%)",
              }}
            />

            {/* Video — in-flow so it sizes the container on all devices */}
            <video
              className="relative w-full h-auto block z-10"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/assets/output_espcn.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Subtle noise texture overlay */}
            

            {/* Contrast overlay */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none z-30 mix-blend-multiply" />
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
          Custom temporal super-resolution pipeline built from scratch in PyTorch —
          combining ESPCN with optical flow motion estimation for temporal stability
          across frames, accelerated with TensorRT for real-time inference. Measurably
          outperforms baseline SRCNN in both visual quality and temporal coherence.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-[12px] tracking-[0.15em] text-[#555]">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-light text-[#0a0a0a] mb-1">
                4x
              </span>
              <span>UPSCALING</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-light text-[#0a0a0a] mb-1">
                PyTorch
              </span>
              <span>FROM SCRATCH</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-light text-[#0a0a0a] mb-1">
                {">"}SRCNN
              </span>
              <span>PERFORMANCE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}