import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Full-Stack Developer Intern",
    company: "Ridgemont Site Solutions",
    date: "Jan 2025 - Mar 2025",
    achievements: [
      "Delivered 3 production eCommerce platforms for global clients, cutting average page-load time by 40% through React component architecture optimization and Next.js server-side rendering.",
      "Improved payment checkout reliability by 30%, measured via transaction error-rate logs, by designing Stripe and PayPal integration flows with full error-handling and retry logic in Node.js and Express.js.",
      "Reduced post-merge defects by 25% across a 4-engineer team by enforcing TypeScript strict-mode, structured Git branching conventions, and systematic peer code-review.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Unified Mentor Private Limited",
    date: "Dec 2024 - Jan 2025",
    achievements: [
      "Accelerated time-to-interactive by 35% as measured by Lighthouse, by migrating a legacy JavaScript codebase to a typed TypeScript and React architecture with lazy-loading and code-splitting.",
      "Achieved 100% cross-device compatibility across 5 screen breakpoints by building a responsive UI system grounded in accessible HTML semantics and TailwindCSS utility patterns.",
      "Reduced UI bug reports by 20% by establishing a component-testing workflow and writing reusable design-pattern documentation.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "Mapple Business Solutions",
    date: "May 2024 - Aug 2024",
    achievements: [
      "Cut user-interaction latency by 28%, profiled via Chrome DevTools, by refactoring React components and eliminating unnecessary re-renders using memoization and scoped state isolation.",
      "Maintained zero unresolved merge conflicts across 8 shipped UI features by enforcing clean commit hygiene and async pull-request review workflows via Git and GitHub.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id='experience'
      className='py-32 bg-[#050505] px-6 md:px-12 lg:px-24 select-none'
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
            Experience
          </h2>
          <div className='w-8 h-[1px] bg-white/30'></div>
        </motion.div>

        <div className='flex flex-col border-t border-white/10'>
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='flex flex-col lg:flex-row py-14 border-b border-white/10 group'
            >
              {/* Left Column: Dates & Company */}
              <div className='lg:w-1/3 mb-6 lg:mb-0 pr-8'>
                <p className='text-[10px] font-mono tracking-[0.2em] uppercase text-neutral-500 mb-3 group-hover:text-purple-400 transition-colors duration-500'>
                  {job.date}
                </p>
                <h3 className='text-xl md:text-2xl font-bold text-white tracking-tighter'>
                  {job.company}
                </h3>
              </div>

              {/* Right Column: Role & Achievements */}
              <div className='lg:w-2/3'>
                <h4 className='text-lg font-medium text-neutral-300 mb-6 font-mono text-sm'>
                  {job.role}
                </h4>
                <ul className='space-y-4'>
                  {job.achievements.map((item, i) => (
                    <li
                      key={i}
                      className='text-sm md:text-base text-neutral-400 leading-relaxed flex items-start group/item'
                    >
                      {/* FIX 4: Upgraded bullet points with interactive hover states */}
                      <span className='mr-4 mt-2.5 w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0 group-hover/item:bg-purple-500 transition-colors duration-300 shadow-[0_0_6px] shadow-transparent group-hover/item:shadow-purple-500/50'></span>
                      <span className='group-hover/item:text-neutral-300 transition-colors duration-300'>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
