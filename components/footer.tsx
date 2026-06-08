"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true });

  return (
    <motion.footer
      ref={footerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full bg-white border-t border-[#111] py-8"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[11px] tracking-[0.1em] text-[#333]">
            © 2025 Osama Alshammari
          </span>
          <span className="text-[11px] tracking-[0.1em] text-[#333]">
            Built with intention.
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
