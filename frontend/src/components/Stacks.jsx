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
      { name: "Python", icon: null },
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
    <section id='stacks' className='py-32 bg-[#050505] px-6 md:px-12 lg:px-24'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className='mb-20'
        >
          <h2 className='text-3xl md:text-5xl font-bold tracking-tight text-white mb-4'>
            Technical Arsenal
          </h2>
          <div className='w-12 h-1 bg-white'></div>
        </motion.div>

        <div className='flex flex-col border-t border-white/10'>
          {stackCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className='flex flex-col lg:flex-row py-12 border-b border-white/10 group'
            >
              {/* Category Title */}
              <div className='lg:w-1/3 mb-8 lg:mb-0'>
                <h3 className='text-2xl md:text-3xl font-bold text-neutral-500 group-hover:text-white transition-colors duration-500 tracking-tighter'>
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className='lg:w-2/3 flex flex-wrap gap-4'>
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className='flex items-center gap-3 px-5 py-3 border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 rounded-sm'
                  >
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={`${skill.name} logo`}
                        className='w-5 h-5 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300'
                      />
                    ) : (
                      <span className='w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors duration-300'></span>
                    )}
                    <span className='text-sm font-mono text-neutral-400 group-hover:text-white transition-colors duration-300'>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
