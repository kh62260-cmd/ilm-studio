"use client";

import { motion } from "framer-motion";
import { Mail, CirclePlay, Image } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="container-custom">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Contact Ilm Studio
        </motion.h2>

        <p className="section-subtitle">
          Stay connected with us for Islamic knowledge and educational content.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="contact-card"
        >

          <div className="contact-item">
            <Mail size={28} />
            <span>kh62260@gmail.com</span>
          </div>

          <a
            href="https://www.youtube.com/@ilmStudioOffical"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <CirclePlay size={28} />
            <span>YouTube Channel</span>
          </a>

          <a
            href="#"
            className="contact-item"
          >
            <Image size={28} />
            <span>Instagram (Coming Soon)</span>
          </a>

        </motion.div>

      </div>

    </section>
  );
}