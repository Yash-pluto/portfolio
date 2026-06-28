import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Hides the 0,0 top-left flash

  // 1. Setup Motion Values (Bypasses React render cycle for insane performance)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. Apply spring physics directly to the motion values
  const springConfig = { damping: 35, stiffness: 800, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices immediately
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    document.body.style.cursor = "none";

    const updateMousePosition = (e) => {
      if (!isVisible) setIsVisible(true);
      // Offset by 8px (half the width/height) to perfectly center the dot
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") // Catch custom interactive elements
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [cursorX, cursorY, isVisible]);

  // Fallback for mobile
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <motion.div
      className='fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference'
      style={{
        // Bind the animated motion values directly to the style prop
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        scale: isHovering ? 3.5 : 1,
      }}
      transition={{
        // Only scale needs a transition prop now, coordinates are handled by useSpring
        scale: { type: "spring", stiffness: 300, damping: 20 },
      }}
    />
  );
}
