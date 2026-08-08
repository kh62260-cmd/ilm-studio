"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";
import Stars from "./Stars";
import Crescent from "./Crescent";
import Mosque from "./Mosque";

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden min-h-[85vh] flex items-center justify-center py-12">

      {/* Background */}
      <div className="absolute inset-0 z-0">

        <div className="absolute inset-0 islamic-pattern opacity-10"></div>

        <Stars />

        <Particles />

        <div className="absolute inset-x-0 bottom-0 z-0 pointer-events-none">
          <Mosque />
        </div>

      </div>

      {/* Moon */}
      <div className="absolute top-20 right-16 hidden lg:block z-10">
        <Crescent />
      </div>

      {/* Hero Content */}
      <div className="hero-content relative z-20 w-full px-4 flex justify-center">

        <div className="hero-card relative z-20 w-full max-w-4xl text-center px-6 py-12 sm:px-12 sm:py-16">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gold font-bold tracking-wide leading-tight"
          >
            ILM STUDIO
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 mt-6 mb-8 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-2"
          >
            Islamic Knowledge • Quran • Hadith • Inspirational Stories
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none relative z-30"
          >

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@ilmStudioOffical"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn whitespace-nowrap text-sm sm:text-base w-full sm:w-auto text-center"
            >
              ▶ Watch on YouTube
            </a>

            {/* Articles */}
            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn whitespace-nowrap text-sm sm:text-base w-full sm:w-auto text-center"
            >
              Explore Articles
            </a>

          </motion.div>

        </div>

      </div>

    </section>
  );
}