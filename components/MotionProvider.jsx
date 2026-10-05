"use client";
import { createContext, useContext, useEffect, useState } from "react";
const MotionContext = createContext({ paused: false });
export const useMotion = () => useContext(MotionContext);
export default function MotionProvider({ children }) {
  const [reduced, setReduced] = useState(false);
  const paused = reduced;
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "running";
    return () => {
      delete document.documentElement.dataset.motion;
    };
  }, [paused]);
  return (
    <MotionContext.Provider value={{ paused }}>
      {children}
    </MotionContext.Provider>
  );
}
