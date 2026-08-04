"use client";

import { motion } from "framer-motion";
import { Video, Users, Eye, BookOpen } from "lucide-react";

const stats = [
  {
    icon: <Video size={40} />,
    number: "100+",
    title: "Educational Videos",
  },
  {
    icon: <Users size={40} />,
    number: "1K+",
    title: "Subscribers",
  },
  {
    icon: <Eye size={40} />,
    number: "50K+",
    title: "Views",
  },
  {
    icon: <BookOpen size={40} />,
    number: "100%",
    title: "Authentic Knowledge",
  },
];

export default function Statistics() {
  return (
    <section className="stats-section">

      <div className="container-custom">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Why Choose Ilm Studio?
        </motion.h2>

        <p className="section-subtitle">
          Learning Islam with quality, authenticity and beautiful presentation.
        </p>

        <div className="stats-grid">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >

              <div className="stat-icon">
                {item.icon}
              </div>

              <h3>{item.number}</h3>

              <p>{item.title}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}