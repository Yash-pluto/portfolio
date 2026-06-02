import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom scroll handler
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id.replace("#", ""));

    if (element) {
      // 1. Scroll first
      element.scrollIntoView({ behavior: "smooth" });

      // 2. Delay the closing of the menu so the browser finishes the scroll command
      // before the menu unmounts from the DOM
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-white/10 ${
          isScrolled ? "bg-[#050505]/95 backdrop-blur-md" : "bg-[#050505]"
        }`}
      >
        <div className='max-w-7xl mx-auto flex items-center justify-between md:grid md:grid-cols-12 md:divide-x md:divide-white/10'>
          <div className='px-6 md:px-12 py-5 md:col-span-4 lg:col-span-3 flex items-center'>
            <a
              href='#home'
              onClick={(e) => handleScrollTo(e, "#home")}
              className='text-sm font-bold tracking-widest text-white uppercase flex items-center gap-3'
            >
              <span className='w-2 h-2 bg-white rounded-sm'></span> Yash Vardhan
            </a>
          </div>

          <nav className='hidden md:flex items-center justify-center gap-8 py-5 md:col-span-5 lg:col-span-6'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className='text-xs font-mono text-neutral-300 hover:text-white transition-colors'
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className='hidden md:flex items-center justify-end px-12 py-5 md:col-span-3 lg:col-span-3'>
            <a
              href='/YashResume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='text-xs font-bold tracking-widest uppercase text-white hover:text-neutral-400 transition-colors'
            >
              Resume
            </a>
          </div>

          <div className='md:hidden px-6 py-5 border-l border-white/10'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-neutral-300 hover:text-white transition-colors'
            >
              <svg
                className='w-6 h-6'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className='fixed top-[65px] left-0 w-full z-40 bg-[#050505] border-b border-white/10 md:hidden overflow-hidden'
          >
            <div className='flex flex-col divide-y divide-white/10'>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className='px-6 py-6 text-sm font-mono text-neutral-300 hover:text-white hover:bg-white/[0.02] transition-all'
                >
                  {link.name}
                </a>
              ))}
              <a
                href='/YashResume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='px-6 py-6 text-sm font-bold tracking-widest uppercase text-white bg-white/[0.05]'
              >
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
