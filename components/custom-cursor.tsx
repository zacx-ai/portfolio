"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    // 1. فحص ما إذا كان الجهاز يدعم اللمس (جوال/تابلت) لإيقاف الكود فوراً
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;

      const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
      if (elementBelow) {
        const section = elementBelow.closest("section");
        const isDarkBg = section?.classList.contains("bg-black") || section?.classList.contains("bg-neutral-900");
        setIsOverDark(!!isDarkBg);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      // 2. الكلاس hidden md:block يضمن عدم حجز أي مساحة في الجوال
      className="custom-cursor hidden md:block"
      style={{
        opacity: isVisible ? 1 : 0,
        color: isOverDark ? "#ffffff" : "#000000",
        // @ts-expect-error CSS custom property
        "--cursor-bg": isOverDark ? "transparent" : "#000000",
      }}
    />
  );
}