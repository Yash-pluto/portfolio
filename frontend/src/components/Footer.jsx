import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LiveStatus from "./LiveStatus";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formatter.format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className='bg-[#050505] pt-24 pb-8 px-6 md:px-12 lg:px-24 border-t border-white/[0.05] relative overflow-hidden'>
      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 mb-24'>
          <div className='col-span-2 md:col-span-1'>
            <h4 className='text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-600 mb-5'>
              System
            </h4>
            {/* The styling lives here now, not in LiveStatus */}
            <div className='border border-white/10 p-3 bg-white/[0.02] w-full max-w-[280px]'>
              <LiveStatus />
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <h4 className='text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-600'>
              Local Time
            </h4>
            <div className='flex flex-col gap-1.5'>
              <span className='text-xs font-mono text-neutral-300'>
                {time || "SYNCING..."} IST
              </span>
              <span className='text-[10px] font-mono text-neutral-500'>
                Ranchi, JH // IND
              </span>
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <h4 className='text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-600'>
              Links
            </h4>
            <div className='grid grid-cols-2 gap-x-8 gap-y-3'>
              <a
                href='https://github.com/yash-pluto'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors w-fit'
              >
                GitHub
              </a>
              <a
                href='mailto:vardhan.yash3105@gmail.com'
                className='text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors w-fit'
              >
                Email
              </a>
              <a
                href='https://linkedin.com/in/vardhan-yash3105'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors w-fit'
              >
                LinkedIn
              </a>
              <a
                href='tel:+919204592139'
                className='text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors w-fit'
              >
                Phone
              </a>
            </div>
          </div>

          <div className='flex items-start md:items-end justify-between h-full col-span-2 md:col-span-1 mt-8 md:mt-0'>
            <a
              href='#home'
              className='group flex items-center justify-center w-14 h-14 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all duration-500 ease-[0.16,1,0.3,1]'
              aria-label='Back to top'
            >
              <svg
                className='w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M5 10l7-7m0 0l7 7m-7-7v18'
                />
              </svg>
            </a>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 mb-8 z-10 relative'>
          <p className='text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-600'>
            © {new Date().getFullYear()} Yash Vardhan.
          </p>
          <p className='text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-600'>
            Engineered with precision.
          </p>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full overflow-hidden flex justify-center items-end pointer-events-none select-none z-0 translate-y-1/4'>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className='text-[20vw] font-bold text-[#0a0a0a] leading-none tracking-tighter whitespace-nowrap'
        >
          VARDHAN
        </motion.h1>
      </div>
    </footer>
  );
}
