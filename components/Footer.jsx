"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container-custom">

        <div className="footer-top">

          <h2 className="footer-logo">
            ILM <span>STUDIO</span>
          </h2>

          <p className="footer-text">
            Spreading authentic Islamic knowledge through Quran,
            Hadith, Islamic History, Motivational Stories
            and Educational Content.
          </p>

        </div>

        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#videos">Videos</a>

          <a href="#shorts">Shorts</a>

          <a href="#contact">Contact</a>

        </div>

        <div className="footer-contact">

          <p>
            📧 kh62260@gmail.com
          </p>

          <a
            href="https://www.youtube.com/@ilmStudioOffical"
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ Visit YouTube Channel
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