import React, { useState, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import PreLoader from "./components/PreLoader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Stacks = lazy(() => import("./components/Stacks"));
const GithubGraph = lazy(() => import("./components/GithubGraph")); // 🚀 Added this!
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='bg-[#050505] min-h-screen text-white font-sans selection:bg-white selection:text-black overflow-x-hidden'>
      <CustomCursor />

      {/* Cinematic Entrance */}
      <AnimatePresence mode='wait'>
        {isLoading && <PreLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Content - Only visible after loading */}
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Suspense
              fallback={<div className='min-h-screen bg-[#050505]'></div>}
            >
              <About />
              <Experience />
              <Stacks />

              <GithubGraph />

              <Projects />
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </>
      )}
    </div>
  );
}
