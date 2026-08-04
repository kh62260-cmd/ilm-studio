"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";
import Stars from "./Stars";
import Crescent from "./Crescent";
import Mosque from "./Mosque";

export default function Hero() {
  return (
    <section id="home" className="hero-section">

      {/* Background */}
      <div className="absolute inset-0 hero-bg"></div>

      {/* Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>

      {/* Stars */}
      <Stars />

      {/* Particles */}
      <Particles />

      {/* Moon */}
      <div className="absolute top-20 right-16 hidden lg:block z-10">
        <Crescent />
      </div>

      {/* Hero Content */}
      <div className="hero-content">

        <div className="hero-card relative z-20 w-full max-w-5xl text-center px-10 py-16">

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold font-bold tracking-wide"
          >
            ILM STUDIO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 mt-8 text-lg md:text-xl leading-9 max-w-2xl mx-auto"
          >
            Islamic Knowledge • Quran • Hadith • Inspirational Stories
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <button className="gold-btn">
              ▶ Watch on YouTube
            </button>

            <button className="outline-btn">
              Explore Articles
            </button>
          </motion.div>

        </div>

      </div>

      {/* Mosque */}
      <Mosque />

    </section>
  );
}