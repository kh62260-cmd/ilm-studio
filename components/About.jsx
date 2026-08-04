"use client";

import { motion } from "framer-motion";
import { BookOpen, PlayCircle, Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="about-section">

      <div className="container-custom">

        <div className="about-grid">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <span className="about-tag">
              About Ilm Studio
            </span>

            <h2 className="about-title">
              Learn Islam With Beautiful & Professional Content
            </h2>

            <p className="about-text">
              Ilm Studio is dedicated to spreading authentic Islamic knowledge
              through engaging videos, motivational stories, Quranic lessons,
              Hadith, Islamic history, and educational content for people of
              all ages.
            </p>

            <div className="about-features">

              <div className="feature-item">
                <BookOpen size={24} />
                <span>Authentic Islamic Knowledge</span>
              </div>

              <div className="feature-item">
                <PlayCircle size={24} />
                <span>High Quality Educational Videos</span>
              </div>

              <div className="feature-item">
                <Star size={24} />
                <span>Modern & Easy To Understand</span>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-card"
          >

            <h3>Our Mission</h3>

            <p>
              To inspire millions through Islamic education, moral values,
              motivational stories, and modern learning resources.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}