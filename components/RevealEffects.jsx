"use client";
import { useEffect } from "react";
import { useMotion } from "./MotionProvider";

export default function RevealEffects() {
  const { paused } = useMotion();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 },
    );
    const apply = () => {
      observer.disconnect();
      document.body.classList.toggle(
        "motion-ready",
        !preference.matches && !paused,
      );
      if (!preference.matches && !paused)
        document
          .querySelectorAll(".reveal:not(.in-view)")
          .forEach((element) => observer.observe(element));
    };
    apply();
    preference.addEventListener("change", apply);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", apply);
      document.body.classList.remove("motion-ready");
    };
  }, [paused]);
  return null;
}
