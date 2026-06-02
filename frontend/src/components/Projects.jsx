import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Flantic (GreenBot)",
    role: "Full-Stack Migration",
    metrics: "5.6M+ Sessions",
    tech: "Next.js / TypeScript / GSAP",
    link: "https://flantic.gg",
  },
  {
    id: "02",
    title: "Shadowlinks",
    role: "Link Management API",
    metrics: "<1% API Error Rate",
    tech: "React / Node.js / MongoDB",
    link: "https://shadowlinks.vercel.app",
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
          <h2 className='text-3xl md:text-5xl font-bold tracking-tight text-white mb-4'>
            Selected Work
          </h2>
          <div className='w-12 h-1 bg-white'></div>
        </motion.div>

        <div className='flex flex-col border-t border-white/10'>
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='group flex flex-col lg:flex-row lg:items-center justify-between py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors relative overflow-hidden px-4 md:px-8'
            >
              {/* Left: ID & Title */}
              <div className='flex items-center gap-8 lg:gap-16 mb-6 lg:mb-0'>
                <span className='text-sm font-mono text-neutral-600 group-hover:text-white transition-colors'>
                  {project.id}
                </span>
                <h3 className='text-3xl md:text-5xl font-bold text-neutral-300 group-hover:text-white transition-colors tracking-tighter'>
                  {project.title}
                </h3>
              </div>

              {/* Right: Meta Info & Metrics */}
              <div className='flex flex-col lg:items-end gap-2'>
                <span className='text-xs font-bold tracking-[0.2em] uppercase text-white'>
                  {project.role}
                </span>
                <span className='text-sm font-mono text-neutral-500'>
                  {project.tech}
                </span>
                <span className='inline-block mt-2 px-3 py-1 text-[10px] font-bold tracking-widest uppercase border border-neutral-700 text-neutral-400 rounded-sm'>
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
