import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useScroll,
} from "framer-motion";

// Helper component to handle the dynamic counting
const AnimatedCounter = ({
  from = 0,
  to,
  duration = 1.5,
  suffix = "",
  decimals = 0,
}) => {
  const count = useMotionValue(from);

  // Transforms the raw number into a formatted string with decimals and suffixes
  const displayValue = useTransform(count, (latest) => {
    return latest.toFixed(decimals) + suffix;
  });

  useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.5,
    });

    return () => controls.stop();
  }, [count, to, duration]);

  return <motion.span>{displayValue}</motion.span>;
};

export default function Hero() {
  // --- Parallax Setup ---
  const { scrollY } = useScroll();

  // Background moves down slowly
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  // Left column moves down and fades out
  const yLeft = useTransform(scrollY, [0, 800], [0, 150]);
  const opacityLeft = useTransform(scrollY, [0, 600], [1, 0]);
  // Right column moves up for contrast
  const yRight = useTransform(scrollY, [0, 800], [0, -100]);

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center bg-[#050505] px-6 md:px-12 lg:px-24 overflow-hidden select-none'
    >
      {/* Animated Parallax Noise Texture */}
      <motion.div
        className='absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay'
        style={{
          y: yBg,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      ></motion.div>

      <div className='relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center pt-20'>
        {/* Left Column: Bold, Asymmetrical Typography */}
        <motion.div
          style={{ y: yLeft, opacity: opacityLeft }}
          className='lg:col-span-8'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h1 className='text-[clamp(3.5rem,8vw,7.5rem)] font-bold text-white leading-[0.85] tracking-tighter mb-8'>
              Build.
              <br />
              <span className='text-neutral-600'>Optimize.</span>
              <br />
              Ship.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className='text-lg md:text-xl text-neutral-400 font-light max-w-xl leading-relaxed mb-12'
          >
            Full-stack engineer building fast, reliable web systems. I write
            clean code, optimize performance, and keep things structurally
            sound.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className='flex gap-6'
          >
            <a
              href='#projects'
              className='group flex items-center gap-4 border-b border-white/30 pb-2 text-sm tracking-widest uppercase text-white hover:border-white transition-colors duration-300'
            >
              View Production Systems
              <svg
                className='w-4 h-4 group-hover:translate-x-2 transition-transform duration-300'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Hard Data & Metrics */}
        <motion.div
          style={{ y: yRight }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className='lg:col-span-4 flex flex-col gap-10 lg:border-l lg:border-white/10 lg:pl-10'
        >
          <div>
            <p className='text-5xl font-bold text-white tracking-tighter'>
              <AnimatedCounter to={6} suffix='+' />
            </p>
            <p className='text-xs text-neutral-500 uppercase tracking-widest mt-2 leading-relaxed'>
              Production
              <br />
              Deployments
            </p>
          </div>

          <div>
            <p className='text-5xl font-bold text-white tracking-tighter'>
              <AnimatedCounter to={5.6} decimals={1} suffix='M' />
            </p>
            <p className='text-xs text-neutral-500 uppercase tracking-widest mt-2 leading-relaxed'>
              Historical Sessions
              <br />
              Handled
            </p>
          </div>

          <div>
            <p className='text-5xl font-bold text-white tracking-tighter'>
              <AnimatedCounter to={40} suffix='%' />
            </p>
            <p className='text-xs text-neutral-500 uppercase tracking-widest mt-2 leading-relaxed'>
              Page-Load
              <br />
              Reduction
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
