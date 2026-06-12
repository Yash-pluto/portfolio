import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubGraph() {
  const scrollRef = useRef(null);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const customTheme = {
    dark: ["#161b22", "#4c2889", "#6b33cc", "#8b5cf6", "#a78bfa"],
  };

  const handleMouseDown = (e) => {
    dragRef.current.isDown = true;
    dragRef.current.startX = e.pageX - scrollRef.current.offsetLeft;
    dragRef.current.scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    dragRef.current.isDown = false;
  };
  const handleMouseUp = () => {
    dragRef.current.isDown = false;
  };
  const handleMouseMove = (e) => {
    if (!dragRef.current.isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragRef.current.startX) * 1.5;
    scrollRef.current.scrollLeft = dragRef.current.scrollLeft - walk;
  };

  return (
    <section
      id='github-activity'
      className='py-24 bg-[#0a0a0a] border-t border-white/[0.02] px-6 md:px-12 lg:px-24 flex justify-center'
    >
      <div className='max-w-7xl w-full flex flex-col'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className='mb-12 flex flex-col items-start'
        >
          <h2 className='text-3xl md:text-5xl font-bold tracking-tight text-white mb-4'>
            Consistency
          </h2>
          <div className='w-12 h-1 bg-white mb-8'></div>

          {/* 🚀 UPGRADED: Premium Purple Tooltip */}
          <div className='relative z-50'>
            <button
              onClick={() => setIsTooltipVisible(!isTooltipVisible)}
              onMouseEnter={() => setIsTooltipVisible(true)}
              onMouseLeave={() => setIsTooltipVisible(false)}
              className='flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-950/10 hover:bg-purple-900/20 hover:border-purple-500/40 transition-all duration-300'
            >
              <div className='w-5 h-5 flex items-center justify-center'>
                <img
                  src='/logos/node.svg'
                  alt='Node.js'
                  className='w-full h-full opacity-70 group-hover:opacity-100'
                />
              </div>
              <span className='text-sm font-medium text-purple-200 tracking-wide'>
                @nodejs
              </span>
            </button>

            <AnimatePresence>
              {isTooltipVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className='absolute top-full mt-3 left-0 px-4 py-2 bg-[#0f071a] backdrop-blur-md border border-purple-500/30 rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.15)] z-[100]'
                >
                  <span className='text-xs font-semibold text-purple-100 whitespace-nowrap tracking-wide'>
                    Official Node.js Contributor
                  </span>
                  {/* Matching purple arrow */}
                  <div className='absolute -top-1.5 left-4 w-3 h-3 bg-[#0f071a] border-t border-l border-purple-500/30 rotate-45'></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className='w-full overflow-x-auto scrollbar-hide select-none'
        >
          <div className='w-max min-w-[800px] text-neutral-400 pb-4 pointer-events-none'>
            <GitHubCalendar
              username='Yash-pluto'
              colorScheme='dark'
              theme={customTheme}
              blockSize={15}
              blockMargin={6}
              fontSize={14}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
