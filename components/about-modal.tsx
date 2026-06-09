"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Full-width Top Panel */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 w-full bg-white z-50 flex flex-col md:flex-row gap-12 px-10 py-16 shadow-xl border-b border-neutral-200 max-h-screen overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-10 text-[11px] tracking-[0.3em] text-[#333] hover:text-[#0a0a0a] transition-colors"
            >
              CLOSE
            </button>

            {/* Header Column */}
            <div className="w-full md:w-1/4">
              <p className="text-[11px] tracking-[0.3em] text-[#999] mb-4">ABOUT</p>
              <h2 className="text-3xl font-light tracking-tight text-[#0a0a0a] leading-tight">
                Osama<br />Alshammari
              </h2>
            </div>

            {/* Bio Column */}
            <div className="w-full md:w-1/3">
              <p className="text-[11px] tracking-[0.3em] text-[#999] mb-4">BIO</p>
              <p className="text-[13px] tracking-[0.05em] text-[#333] leading-relaxed mb-4">
                Embodied AI Engineer at the intersection of perception and action —
                fusing LLMs, reinforcement learning, and robotics to manifest
                imagination into autonomous reality.
              </p>
              <p className="text-[13px] tracking-[0.05em] text-[#555] leading-relaxed">
                Engineering the geometry of intelligence, one system at a time.
              </p>
            </div>

            {/* Academics Column */}
            <div className="w-full md:w-1/6">
              <p className="text-[11px] tracking-[0.3em] text-[#999] mb-4">ACADEMICS</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-light text-[#0a0a0a]">3.986</span>
              </div>
              <span className="text-[12px] tracking-[0.15em] text-[#999] mt-2 block">/ 4.00 GPA</span>
            </div>

            {/* Links Column (Fixed Tags) */}
            <div className="w-full md:w-1/4 flex flex-col gap-4">
              <p className="text-[11px] tracking-[0.3em] text-[#999] mb-1">CONNECT</p>
              <a
                href="https://linkedin.com/in/osama-alshammari-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-4 bg-white border border-[#0a0a0a]/20 rounded-full hover:bg-[#0a0a0a] hover:border-[#0a0a0a] transition-colors group"
              >
                <span className="text-[11px] tracking-[0.2em] text-[#0a0a0a] group-hover:text-white transition-colors">
                  LINKEDIN
                </span>
                <span className="text-[11px] tracking-[0.1em] text-[#999] group-hover:text-white/60 transition-colors">
                  osama-alshammari-ai ↗
                </span>
              </a>
            {/*
              <a
                href="https://your-cv-url.com/osama-alshammari-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 py-4 bg-white border border-[#0a0a0a]/20 rounded-full hover:bg-[#0a0a0a] hover:border-[#0a0a0a] transition-colors group"
              >
                <span className="text-[11px] tracking-[0.2em] text-[#0a0a0a] group-hover:text-white transition-colors">
                  CURRICULUM VITAE
                </span>
                <span className="text-[11px] tracking-[0.1em] text-[#999] group-hover:text-white/60 transition-colors">
                  PDF ↗
                </span>
              </a> */}


            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}