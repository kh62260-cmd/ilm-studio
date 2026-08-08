"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-custom">

        <div className="footer-top">

          <Link href="/" className="footer-logo">
            ILM <span>STUDIO</span>
          </Link>

          <p className="footer-text">
            Spreading authentic Islamic knowledge through Quran,
            Hadith, Islamic History, Motivational Stories
            and Educational Content.
          </p>

        </div>

        {/* Footer Links */}
        <div className="footer-links">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/videos">Videos</Link>

          <Link href="/shorts">Shorts</Link>

          <Link href="/blog">Blog</Link>

          <Link href="/contact">Contact</Link>

        </div>

        {/* Contact / Social */}
        <div className="footer-contact">

          <p>
            📧 kh62260@gmail.com
          </p>

          <a
            href="https://www.youtube.com/@ilmStudioOffical"
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ YouTube
          </a>

          <a
            href="https://www.instagram.com/ilmStudioOffical"
            target="_blank"
            rel="noopener noreferrer"
          >
            📷 Instagram
          </a>

          <a
            href="https://www.facebook.com/ilmStudioOffical"
            target="_blank"
            rel="noopener noreferrer"
          >
            f Facebook
          </a>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">

          <p>
            © {year} ILM STUDIO. All Rights Reserved.
          </p>

          <p>
            "The best among you are those who learn the Quran and teach it."
          </p>

        </div>

      </div>
    </footer>
  );
}