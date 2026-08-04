"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const shorts = [
  {
    title: "Muharram Ki Fazilat",
    image: "/images/short1.png",
    url: "https://www.youtube.com/@ilmStudioOffical/shorts",
  },
  {
    title: "Result Se Pehle Ye Dua",
    image: "/images/short2.png",
    url: "https://www.youtube.com/@ilmStudioOffical/shorts",
  },
  {
    title: "Aaj Ki Hadees",
    image: "/images/short3.png",
    url: "https://www.youtube.com/@ilmStudioOffical/shorts",
  },
];

export default function LatestShorts() {
  return (
    <section id="shorts" className="shorts-section">

      <div className="container-custom">

        <h2 className="section-title">
          Latest Shorts
        </h2>

        <p className="section-subtitle">
          Quick Islamic reminders and educational shorts.
        </p>

        <div className="shorts-grid">

          {shorts.map((short, index) => (

            <motion.a
              key={short.title}
              href={short.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10, scale: 1.03 }}
              className="short-card"
            >

              <Image
                src={short.image}
                alt={short.title}
                width={400}
                height={700}
                className="w-full h-auto"
              />

              <div className="short-overlay">
                <span className="play-icon">▶</span>
              </div>

              <div className="short-info">
                <h3>{short.title}</h3>
              </div>

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  );
}