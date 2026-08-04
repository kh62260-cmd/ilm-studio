"use client";

import { motion } from "framer-motion";

const cards = [
  {
    emoji: "📖",
    title: "Our Mission",
    text: "To spread authentic Islamic knowledge through inspiring videos, Quranic teachings, Hadith, and motivational stories.",
  },
  {
    emoji: "🌙",
    title: "Our Vision",
    text: "To become one of the most trusted Islamic educational platforms for learners of all ages.",
  },
  {
    emoji: "💛",
    title: "Our Values",
    text: "Authenticity, simplicity, respect, and beneficial knowledge in every piece of content we create.",
  },
];

export default function Mission() {
  return (
    <section className="mission-section">
      <div className="container-custom">

        <h2 className="section-title">
          Our Mission & Vision
        </h2>

        <p className="section-subtitle">
          Knowledge that benefits in this life and the Hereafter.
        </p>

        <div className="mission-grid">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="mission-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mission-emoji">{card.emoji}</div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}