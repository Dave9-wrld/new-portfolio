"use client";
import { createContext, useContext, useEffect, useState } from "react";
const MotionContext = createContext({ paused: false });
export const useMotion = () => useContext(MotionContext);
export default function MotionProvider({ children }) {
  const [manualPause, setManualPause] = useState(false);
  const [reduced, setReduced] = useState(false);
  const paused = manualPause || reduced;
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
      <button
        type="button"
        className="site-motion-control"
        onClick={() => setManualPause((value) => !value)}
        aria-label={
          reduced
            ? "Reduced motion enabled by your device"
            : manualPause
              ? "Resume animations"
              : "Pause animations"
        }
        aria-pressed={paused}
        disabled={reduced}
      >
        <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
        <span>
          {reduced
            ? "Motion reduced"
            : paused
              ? "Resume motion"
              : "Pause motion"}
        </span>
      </button>
    </MotionContext.Provider>
  );
}
