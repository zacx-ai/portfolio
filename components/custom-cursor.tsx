"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverWhite, setIsOverWhite] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Create trail elements
    const trailContainer = document.createElement("div");
    trailContainer.className = "trail-container";
    document.body.appendChild(trailContainer);

    for (let i = 0; i < 5; i++) {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trailContainer.appendChild(trail);
      trailsRef.current.push(trail);
    }

    let trailIndex = 0;
    let lastTrailTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      positionRef.current = { x: e.clientX, y: e.clientY };

      // Update cursor position
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;

      // Check if cursor is over a white background element
      const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
      if (elementBelow) {
        const section = elementBelow.closest("section");
        const isWhiteBg = section?.classList.contains("bg-white");
        setIsOverWhite(!!isWhiteBg);
      }

      // Create trail dots
      const now = Date.now();
      if (now - lastTrailTime > 50) {
        const trail = trailsRef.current[trailIndex];
        if (trail) {
          trail.style.left = `${e.clientX - 2}px`;
          trail.style.top = `${e.clientY - 2}px`;
          trail.style.opacity = "0.6";
          trail.style.background = isOverWhite ? "#000000" : "#ffffff";

          setTimeout(() => {
            trail.style.opacity = "0";
          }, 100);

          trailIndex = (trailIndex + 1) % trailsRef.current.length;
          lastTrailTime = now;
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      trailContainer.remove();
    };
  }, [isOverWhite]);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor hidden md:block"
      style={{
        opacity: isVisible ? 1 : 0,
        color: isOverWhite ? "#000000" : "#ffffff",
        // @ts-expect-error CSS custom property
        "--cursor-bg": isOverWhite ? "#ffffff" : "transparent",
      }}
    >
      <div className="cursor-bg" />
    </div>
  );
}
