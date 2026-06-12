import React, { useRef } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubGraph() {
  const scrollRef = useRef(null);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

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
          <div className='w-12 h-1 bg-white'></div>
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
          className='w-full overflow-x-auto scrollbar-hide select-none '
        >
          {/* pointer-events-none on the inner text prevents the dates from catching the mouse */}
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
