import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const bootSequence = [
  "INITIALIZING KERNEL...",
  "MOUNTING REACT.JS V-DOM...",
  "ESTABLISHING SOCKET.IO WSS...",
  "LOADING PYTHON.ML.MODELS...",
  "RESOLVING REGION: RANCHI_JH...",
  "BYPASSING RENDER BLOCKERS...",
  "SYSTEM OPTIMAL.",
];

export default function PreLoader({ onComplete }) {
  const [bootText, setBootText] = useState(bootSequence[0]);

  // High-performance GPU-accelerated counter
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toString().padStart(3, "0"),
  );

  useEffect(() => {
    // Rapidly cycle through the boot sequence text
    let step = 0;
    const textInterval = setInterval(() => {
      step++;
      if (step < bootSequence.length) {
        setBootText(bootSequence[step]);
      }
    }, 250); // Flashes new text every 250ms

    // Animate the counter flawlessly from 0 to 100
    const controls = animate(count, 100, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1], // Sharp, cinematic bezier curve
      onComplete: () => {
        clearInterval(textInterval);
        setBootText("READY.");
        setTimeout(onComplete, 400); // Hang on 100 for a split second before vanishing
      },
    });

    return () => {
      controls.stop();
      clearInterval(textInterval);
    };
  }, [count, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className='fixed inset-0 z-[99999] bg-[#050505] flex flex-col justify-between p-6 md:p-12 lg:p-24 overflow-hidden'
    >
      {/* Top: Progress Bar */}
      <div className='w-full h-[1px] bg-white/10 relative'>
        <motion.div
          className='absolute top-0 left-0 h-full bg-white origin-left'
          style={{ width: useTransform(count, (v) => `${v}%`) }}
        />
      </div>

      {/* Bottom: Boot Sequence & Counter */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-8'>
        {/* Rapid-fire Terminal Text */}
        <div className='flex flex-col gap-2'>
          <span className='w-3 h-3 bg-white animate-pulse'></span>
          <p className='text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-500'>
            {bootText}
          </p>
        </div>

        {/* Massive 120fps Counter */}
        <motion.h1 className='text-[25vw] md:text-[20vw] leading-none font-bold tracking-tighter text-white'>
          {rounded}
        </motion.h1>
      </div>
    </motion.div>
  );
}
