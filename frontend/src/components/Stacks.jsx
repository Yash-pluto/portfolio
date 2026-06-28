import React from "react";
import { motion } from "framer-motion";

const stackCategories = [
  {
    title: "Front-End",
    skills: [
      { name: "React.js", icon: "/logos/react.svg" },
      { name: "Next.js", icon: null },
      { name: "TailwindCSS", icon: "/logos/tailwind.svg" },
      { name: "Framer Motion", icon: "/logos/framer.svg" },
      { name: "HTML5", icon: "/logos/html.svg" },
      { name: "CSS3", icon: "/logos/css.svg" },
      { name: "GSAP", icon: null },
    ],
  },
  {
    title: "Back-End & DB",
    skills: [
      { name: "Node.js", icon: "/logos/node.svg" },
      { name: "Express.js", icon: "/logos/express.svg" },
      { name: "MongoDB", icon: "/logos/mongo.svg" },
      { name: "REST APIs", icon: null },
      { name: "Socket.IO", icon: null },
      { name: "Redis", icon: null },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "/logos/js.svg" },
      { name: "TypeScript", icon: null },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "GitHub", icon: "/logos/github.svg" },
      { name: "Docker", icon: null },
      { name: "AWS (EC2, S3)", icon: null },
      { name: "CI/CD", icon: null },
    ],
  },
];

export default function Stacks() {
  return (
    <section
      id='stacks'
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
            Technical Arsenal
          </h2>
          <div className='w-8 h-[1px] bg-white/30'></div>
        </motion.div>

        <div className='flex flex-col border-t border-white/10'>
          {stackCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='flex flex-col lg:flex-row py-14 border-b border-white/10 group'
            >
              {/* Category Title */}
              <div className='lg:w-1/3 mb-6 lg:mb-0'>
                <h3 className='text-xl md:text-2xl font-bold text-neutral-600 group-hover:text-white transition-colors duration-500 tracking-tighter font-mono'>
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className='lg:w-2/3 flex flex-wrap gap-3'>
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      y: -2,
                      borderColor: "rgba(255,255,255,0.2)",
                      backgroundColor: "rgba(255,255,255,0.03)",
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className='flex items-center gap-3 px-4 py-2.5 border border-white/5 bg-white/[0.01] rounded-sm group/card cursor-default'
                  >
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className='w-4 h-4 opacity-40 grayscale group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-300'
                      />
                    ) : (
                      <span className='w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover/card:bg-purple-500 transition-colors duration-300 shadow-[0_0_6px] shadow-transparent group-hover/card:shadow-purple-500/50'></span>
                    )}
                    <span className='text-xs font-mono text-neutral-500 group-hover/card:text-white transition-colors duration-300'>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
