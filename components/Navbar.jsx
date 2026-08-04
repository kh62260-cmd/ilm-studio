"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar navbar-scrolled" : "navbar"}>

      <div className="container-custom navbar-container">

        <h2 className="logo">
          ILM <span>STUDIO</span>
        </h2>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#videos">Videos</a>
          <a href="#shorts">Shorts</a>
          <a href="#contact">Contact</a>

        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

    </header>
  );
}