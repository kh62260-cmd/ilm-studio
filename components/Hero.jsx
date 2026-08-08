"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";
import Stars from "./Stars";
import Crescent from "./Crescent";
import Mosque from "./Mosque";

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Pattern */}
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>

        {/* Stars */}
        <Stars />

        {/* Particles */}
        <Particles />

        {/* Mosque */}
        <div className="absolute inset-x-0 bottom-0 z-0 pointer-events-none">
          <Mosque />
        </div>
      </div>

      {/* Moon */}
      <div className="absolute top-20 right-16 hidden lg:block z-10">
        <Crescent />
      </div>

      {/* Hero Content */}
      <div className="hero-content relative z-20">

        <div className="hero-card relative z-20 w-full max-w-5xl text-center px-3 py-10 sm:px-10 sm:py-16">

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-heading text-3xl sm:text-6xl md:text-7xl lg:text-8xl text-gold font-bold tracking-wide"
          >
            ILM STUDIO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto px-2"
          >
            Islamic Knowledge • Quran • Hadith • Inspirational Stories
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-50"
          >

            {/* Watch on YouTube */}
            <a
              href="https://www.youtube.com/@ilmStudioOffical"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn relative z-50 whitespace-nowrap px-6 py-3 text-sm sm:text-base inline-flex items-center justify-center"
            >
              ▶ Watch on YouTube
            </a>

            {/* Explore Articles */}
            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn relative z-50 whitespace-nowrap px-6 py-3 text-sm sm:text-base inline-flex items-center justify-center"
            >
              Explore Articles
            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}