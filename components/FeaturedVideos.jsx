"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const videos = [
  {
    title: "Hazrat Umar (RA) Part 1",
    category: "Islamic History",
    image: "/images/video1.jpg",
    date: "July 2026",
    url: "https://youtu.be/O7tg0tF3upI",
  },
  {
    title: "10th Result Ki Dua",
    category: "Motivational",
    image: "/images/video2.png",
    date: "August 2026",
    url: "https://www.youtube.com/shorts/ZdODj8TMC1g",
  },
  {
    title: "My Family and I",
    category: "Moral Story",
    image: "/images/video3.jpg",
    date: "August 2026",
    url: "https://youtu.be/q7uY4UP8Eqc",
  },
];

export default function FeaturedVideos() {
  return (
    <section id="videos" className="featured-section">

      <div className="container-custom">

        <h2 className="section-title">
          Latest Videos
        </h2>

        <p className="section-subtitle">
          Watch the latest videos from Ilm Studio.
        </p>

        <div className="video-grid">

          {videos.map((video) => (
            <motion.a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10 }}
              className="video-card"
            >

              <div className="video-image">

                <Image
                  src={video.image}
                  alt={video.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />

                <div className="play-overlay">
                  ▶
                </div>

              </div>

              <div className="video-content">

                <span className="video-category">
                  {video.category}
                </span>

                <h3>
                  {video.title}
                </h3>

                <small className="video-date">
                  {video.date}
                </small>

              </div>

            </motion.a>
          ))}

        </div>

        <div className="section-btn">

          <a
            href="https://www.youtube.com/@ilmStudioOffical"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn"
          >
            Visit YouTube Channel
          </a>

        </div>

      </div>

    </section>
  );
}