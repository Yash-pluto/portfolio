import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Flantic (GreenBot)",
    role: "Full-Stack Migration",
    metrics: "5.6M+ Sessions",
    tech: "Next.js / TypeScript / GSAP",
    link: "https://flantic.app",
  },
  {
    id: "02",
    title: "Orbit",
    role: "LinkTree Alternative",
    metrics: "<1% API Error Rate",
    tech: "Next.js / TypeScript / MongoDB",
    link: "https://orbit-pluto.vercel.app",
  },
  {
    id: "03",
    title: "RefMe v1",
    role: "Responsive UI Architecture",
    metrics: "Production Deployed",
    tech: "React / TailwindCSS / Framer",
    link: "https://refmev1.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id='projects'
      className='py-32 bg-[#050505] px-6 md:px-12 lg:px-24'
    >
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className='mb-20'
        >
          <h2 className='text-5xl font-bold tracking-tight text-white mb-4 uppercase font-mono tracking-[0.2em] text-neutral-500'>
            Selected Work
          </h2>
          <div className='w-8 h-[1px] bg-white/30'></div>
        </motion.div>

        <div className='flex flex-col border-t border-white/10'>
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.08, // Matched delay timing to other sections
                ease: [0.16, 1, 0.3, 1],
              }}
              className='group flex flex-col lg:grid lg:grid-cols-12 lg:items-center py-12 lg:py-16 border-b border-white/10 hover:bg-white/[0.015] transition-colors relative px-4 md:px-8 overflow-hidden cursor-pointer'
            >
              {/* Decorative hover gradient wash */}
              <div className='absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none'></div>

              {/* Left Column: ID */}
              <div className='lg:col-span-2 mb-4 lg:mb-0'>
                <span className='text-sm font-mono text-neutral-600 group-hover:text-purple-400 transition-all duration-500 group-hover:pl-2'>
                  {project.id}
                </span>
              </div>

              {/* Middle Column: Title & Animated Arrow */}
              <div className='lg:col-span-6 mb-8 lg:mb-0 flex items-center gap-6'>
                <h3 className='text-3xl md:text-5xl font-bold text-neutral-400 group-hover:text-white transition-colors duration-500 tracking-tighter'>
                  {project.title}
                </h3>
                {/* Arrow reveals and slides in on hover */}
                <svg
                  className='w-6 h-6 md:w-8 md:h-8 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.16,1,0.3,1]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </div>

              {/* Right Column: Meta Info & Metrics */}
              <div className='lg:col-span-4 flex flex-col lg:items-end gap-2.5 z-10'>
                <span className='text-xs font-bold tracking-[0.2em] uppercase text-white group-hover:text-neutral-200 transition-colors'>
                  {project.role}
                </span>
                <span className='text-sm font-mono text-neutral-500 group-hover:text-neutral-400 transition-colors'>
                  {project.tech}
                </span>

                {/* Upgraded Pill with purple accent styling on hover */}
                <span className='inline-block mt-2 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase border border-neutral-800 text-neutral-500 rounded-sm group-hover:border-purple-500/30 group-hover:text-purple-400 group-hover:bg-purple-500/[0.02] transition-all duration-500 shadow-[0_0_0px] shadow-transparent group-hover:shadow-purple-500/20'>
                  {project.metrics}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
