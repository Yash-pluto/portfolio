import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubGraph() {
  const scrollRef = useRef(null);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  // Cleaned up your purple theme to blend beautifully with the deep black background
  const customTheme = {
    dark: ["#111111", "#4c2889", "#6b33cc", "#8b5cf6", "#a78bfa"],
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
      className='py-24 bg-black px-6 md:px-12 lg:px-24 flex justify-center'
    >
      <div className='max-w-7xl w-full flex flex-col'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className='mb-12 flex flex-col items-start'
        >
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-3'>
            Consistency
          </h2>
          <div className='w-12 h-[3px] bg-white mb-8'></div>

          <div className='relative z-50 inline-block'>
            <button
              onClick={() => setIsTooltipVisible(!isTooltipVisible)}
              onMouseEnter={() => setIsTooltipVisible(true)}
              onMouseLeave={() => setIsTooltipVisible(false)}
              className='group flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-colors duration-200'
            >
              <div className='w-4 h-4 flex items-center justify-center'>
                <img
                  src='/logos/node.svg'
                  alt='Node.js'
                  className='w-full h-full opacity-80 group-hover:opacity-100 transition-opacity'
                />
              </div>
              <span className='text-sm font-medium text-neutral-300'>
                @nodejs
              </span>
            </button>

            <AnimatePresence>
              {isTooltipVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.15 }}
                  className='absolute top-full left-0 mt-2 px-3 py-2 bg-[#111] border border-white/10 rounded-md shadow-2xl z-[100] min-w-max'
                >
                  <span className='text-xs font-medium text-neutral-300 whitespace-nowrap'>
                    Official Node.js Contributor
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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
              blockMargin={5}
              fontSize={14}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
