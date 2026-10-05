"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const nav = useRef(null);
  const toggle = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      setShowTop(window.scrollY > 420);
      let current = "home";
      for (const { id } of links) {
        const section = document.getElementById(id);
        if (section?.getBoundingClientRect().top <= 150) current = section.id;
      }
      setActive(current);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      if (window.innerWidth > 760) setOpen(false);
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
      <header className="portfolio-header">
        <nav ref={nav} className="portfolio-nav" aria-label="Main navigation">
          <a
            className="portfolio-brand"
            href="#home"
            onClick={() => setOpen(false)}
          >
            <span className="portfolio-monogram" aria-hidden="true">
              d<span>.</span>
            </span>
            <span>David Agbor</span>
          </a>
          <button
            ref={toggle}
            type="button"
            className="portfolio-menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? "Close" : "Menu"}</span>
          </button>
          <div
            className={`portfolio-nav-links${open ? " is-open" : ""}`}
            id="navigation"
          >
            {links.map(({ label, id }) => (
              <a
                key={label}
                href={`#${id}`}
                className={`${id === "contact" ? "portfolio-contact-link " : ""}${active === id ? "is-active" : ""}`}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <a
        className={`back-to-top${showTop ? " visible" : ""}`}
        href="#home"
        aria-label="Back to top"
      >
        Top
      </a>
    </>
  );
}
