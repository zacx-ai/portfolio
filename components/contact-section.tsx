"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-white pt-32 pb-16 overflow-hidden"
    >
      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[clamp(80px,15vw,160px)] font-light tracking-[-0.04em] text-[#f0f0f0]">
          CONTACT
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-[28px] md:text-[32px] font-light text-[#0a0a0a] mb-2">
            {"Let's build something."}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[28px] md:text-[32px] font-light text-[#0a0a0a]"
          >
            something that matters.
          </motion.p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <MagneticLink href="mailto:zacx.college.ai@gmail.com">
            zacx.college.ai@gmail.com
          </MagneticLink>

          <MagneticLink
            href="https://github.com/zacx-ai"
            external
          >
            github.com/zacx-ai
          </MagneticLink>

          <MagneticLink
            href="https://linkedin.com/in/osama-alshammari-ai"
            external
          >
            linkedin.com/in/osama-alshammari-ai
          </MagneticLink>

          <span className="text-[13px] text-[#555] mt-4">0552789771</span>
        </motion.div>
      </div>
    </section>
  );
}

function MagneticLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    linkRef.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (!linkRef.current) return;
    linkRef.current.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={linkRef}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex items-center gap-2 text-[14px] tracking-[0.1em] text-[#0a0a0a] hover:text-[#aaa] transition-all draw-underline magnetic-btn"
    >
      {children}
      {external && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      )}
    </a>
  );
}
