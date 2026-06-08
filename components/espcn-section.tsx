"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function EspcnSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const techStack = [
    "PyTorch",
    "ESPCN",
    "SRCNN",
    "Sub-pixel Convolution",
    "Computer Vision",
    "From Scratch",
  ];

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
          <p className="text-2xl md:text-3xl font-light mb-8 text-[#333]">
            Super-Resolution
          </p>

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
            className="text-[13px] tracking-[0.1em] text-[#333]"
          >
            Computer Vision · From Scratch · Inspired by DLSS
          </motion.p>
        </motion.div>

        {/* Video Box Container - المستطيل الرمادي محتضن الفيديو الآن */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative max-w-[900px] mx-auto mb-16"
        >
          <div className="relative overflow-hidden rounded-lg border border-[#0a0a0a]/10 aspect-[16/9] w-full">
            {/* Gradient background for the architecture box */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 40%, #d8d8d8 100%)",
              }}
            />

            {/* Subtle noise texture overlay */}
            <div
              className="absolute inset-0 opacity-30 z-20 pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
                backgroundSize: "128px",
              }}
            />

            {/* عنصر الفيديو التفاعلي مضبوط بالمسار المحلي الصحيح */}
            <video
              className="absolute inset-0 w-full h-full object-contain p-4 md:p-8 rounded-lg z-10"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/assets/espcn.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* طبقة فلتر ناعمة جداً للمزج البصري */}
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
            Custom temporal super-resolution model built from scratch in PyTorch
            — inspired by NVIDIA DLSS. Enhanced ESPCN architecture with temporal
            stability across frames using sub-pixel convolution, measurably
            outperforming baseline SRCNN in both quality and temporal coherence.
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