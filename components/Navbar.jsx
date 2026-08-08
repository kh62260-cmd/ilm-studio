"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={scrolled ? "navbar navbar-scrolled" : "navbar"}>

      <div className="container-custom navbar-container">

        {/* Logo */}
        <Link
          href="/"
          className="logo"
          onClick={closeMenu}
        >
          ILM <span>STUDIO</span>
        </Link>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/videos" onClick={closeMenu}>
            Videos
          </Link>

          <Link href="/shorts" onClick={closeMenu}>
            Shorts
          </Link>

          <Link href="/blog" onClick={closeMenu}>
            Blog
          </Link>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>

        </nav>

        {/* Mobile Menu */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

      </div>

    </header>
  );
}