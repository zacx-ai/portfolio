"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);

      // تحريك المؤشر الرئيسي مباشرة مع حركة اليد بدون تأخير النقاط
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;

      // الفحص الذكي لعناصر الخلفية المظلمة لقلب لون الكروسهاير للابيض عند الحاجة
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
  }, []); // مصفوفة فارغة لأننا حذفنا متغير التتبع القديم للأثر

  return (
    <div
      ref={cursorRef}
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