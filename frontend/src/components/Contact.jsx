import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id='contact'
      className='py-32 bg-[#050505] border-t border-white/[0.05] px-6 md:px-12 lg:px-24'
    >
      <div className='max-w-7xl mx-auto flex flex-col items-center text-center'>
        {/* Massive CTA Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className='text-5xl font-bold tracking-tight text-white mb-4 uppercase font-mono tracking-[0.2em] text-neutral-500'>
            Let's build <br />
            <span className='text-neutral-600'>something scalable.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-neutral-400 text-lg md:text-xl font-light max-w-xl mb-16 leading-relaxed'
        >
          I am actively exploring new engineering opportunities. Whether you
          have a complex problem to solve or just want to connect, my inbox is
          open.
        </motion.p>

        {/* Primary Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className='flex flex-col sm:flex-row gap-6 items-center justify-center w-full mb-32'
        >
          <a
            href='mailto:vardhan.yash3105@gmail.com'
            className='group relative px-10 py-5 text-xs font-bold tracking-[0.2em] uppercase text-black bg-white overflow-hidden rounded-sm w-full sm:w-auto'
          >
            <span className='relative z-10'>Send an Email</span>
            <div className='absolute inset-0 bg-neutral-300 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.16,1,0.3,1]'></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
