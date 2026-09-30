"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Experience",
  "Process",
  "Contact",
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const nav = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0,
      );
      setShowTop(window.scrollY > 420);
      let current = "home";
      for (const label of links) {
        const section = document.getElementById(label.toLowerCase());
        if (section?.getBoundingClientRect().top <= 150) current = section.id;
      }
      setActive(current);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
      onScroll();
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const outside = (event) => {
      if (!nav.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const focusOutside = (event) => {
      if (!nav.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    document.addEventListener("focusin", focusOutside);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
      document.removeEventListener("focusin", focusOutside);
    };
  }, [open]);

  return (
    <>
      <div
        className="reading-progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${progress})` }}
      />
      <header className="site-header">
        <nav ref={nav} className="nav" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              d<span>.</span>
            </span>
            <span>
              David Agbor<small>Frontend Developer</small>
            </span>
          </a>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-links${open ? " open" : ""}`} id="navigation">
            {links.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className={active === label.toLowerCase() ? "active" : ""}
                aria-current={
                  active === label.toLowerCase() ? "location" : undefined
                }
                onClick={() => setOpen(false)}
              >
                {label}
                <span className="mobile-nav-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
          <a className="button button-light nav-cta" href="#contact">
            Let&apos;s Talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <a
        className={`back-to-top${showTop ? " visible" : ""}`}
        href="#home"
        aria-label="Back to top"
      >
        ↑
      </a>
    </>
  );
}
