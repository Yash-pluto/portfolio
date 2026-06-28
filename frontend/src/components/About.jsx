import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id='about'
      className='py-32 bg-[#050505] border-t border-white/[0.05] px-6 md:px-12 lg:px-24'
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
            Background
          </h2>
          <div className='w-8 h-[1px] bg-white/30'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24'>
          {/* Left Column: The Philosophy & Off-Screen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className='flex flex-col gap-8'
          >
            <div className='space-y-6 text-neutral-400 text-base md:text-lg font-light leading-relaxed'>
              <p>
                I'm a full-stack engineer focused on building web systems that
                are fast and reliable. Whether I'm optimizing React render
                cycles, managing Socket.IO connections, or structuring REST
                APIs, I care about writing clean, functional code without the
                over-engineering.
              </p>
              <p>
                When I step away from the IDE, my audio is usually locked into
                Juice WRLD, Lil Peep, or Kim Petras. I split my screen time
                between grinding Valorant and COD, getting humbled by Sekiro and
                Dark Souls, or just decompressing in Minecraft.
              </p>
              <p>
                Offline, I swap the monitors for a camera to photograph the
                trees and mountain landscapes around Ranchi. And if I'm just
                kicking back, I'm probably catching up on romcoms like{" "}
                <em>Bunny Girl Senpai</em>.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className='flex flex-col gap-12'
          >
            {/* Education */}
            <div>
              <h3 className='text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-6 border-b border-white/10 pb-4'>
                Education
              </h3>
              <div className='space-y-2'>
                <h4 className='text-lg font-medium text-white'>
                  B.Tech in Computer Science
                </h4>
                <p className='text-neutral-400 font-light'>
                  Amity University, Ranchi
                </p>
                <p className='text-sm text-neutral-500 font-mono mt-1'>
                  2025 — 2029
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className='text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-6 border-b border-white/10 pb-4'>
                Selected Certifications
              </h3>
              <ul className='space-y-4'>
                <li className='flex flex-col gap-1'>
                  <span className='text-white font-medium'>
                    Front-End Developer Professional
                  </span>
                  <span className='text-sm text-neutral-400 font-light'>
                    Meta / Coursera
                  </span>
                </li>
                <li className='flex flex-col gap-1'>
                  <span className='text-white font-medium'>
                    Responsive Web Design
                  </span>
                  <span className='text-sm text-neutral-400 font-light'>
                    freeCodeCamp
                  </span>
                </li>
                <li className='flex flex-col gap-1'>
                  <span className='text-white font-medium'>
                    Programming with JavaScript
                  </span>
                  <span className='text-sm text-neutral-400 font-light'>
                    Meta / Coursera
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
