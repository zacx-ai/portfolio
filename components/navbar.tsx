"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AboutModal } from "@/components/about-modal";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about", isModal: true },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white border-b border-neutral-200" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-center h-20">

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) =>
                link.isModal ? (
                  <button
                    key={link.href}
                    onClick={() => setAboutOpen(true)}
                    className="text-[11px] tracking-[0.2em] uppercase text-black hover:text-neutral-500 transition-colors draw-underline magnetic-btn"
                  >
                    {link.label}
                  </button>
                ) : (
                  <NavLink key={link.href} href={link.href} label={link.label} />
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-black block"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-px bg-black block"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-px bg-black block"
              />
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) =>
                link.isModal ? (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setAboutOpen(true);
                    }}
                    className="text-2xl font-light tracking-[0.2em] uppercase text-neutral-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ) : (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-light tracking-[0.2em] uppercase text-neutral-600 hover:text-black transition-colors"
                  >
                    {link.label}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* About Modal */}
      <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
    </>
  );
}

function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    linkRef.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const handleMouseLeave = () => {
    if (!linkRef.current) return;
    linkRef.current.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={linkRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="text-[11px] tracking-[0.2em] uppercase text-black hover:text-neutral-500 transition-colors draw-underline magnetic-btn"
    >
      {label}
    </a>
  );
}