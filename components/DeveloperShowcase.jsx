"use client";
import { useEffect, useRef, useState } from "react";
import { useMotion } from "./MotionProvider";
import { projects } from "./portfolio-data";
export default function DeveloperShowcase() {
  const [view, setView] = useState("design");
  const scene = useRef(null);
  const { paused } = useMotion();
  useEffect(() => {
    const element = scene.current;
    const pointer = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 901px)",
    );
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
    };
    if (paused) {
      reset();
      return;
    }
    const move = (event) => {
      if (!pointer.matches) return;
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.setProperty("--tilt-x", `${-y * 8}deg`);
        element.style.setProperty("--tilt-y", `${x * 10}deg`);
      });
    };
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", reset);
    return () => {
      reset();
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
    };
  }, [paused]);
  return (
    <div
      ref={scene}
      className="developer-scene enter"
      style={{ "--delay": ".3s" }}
    >
      <div className="scene-aura" aria-hidden="true" />
      <div className="scene-orbit orbit-one" aria-hidden="true">
        <span />
      </div>
      <div className="scene-orbit orbit-two" aria-hidden="true">
        <span />
      </div>
      <div className="scene-label">
        <span className="live-dot" /> A LITTLE OF HOW I THINK
      </div>
      <div className="studio-window">
        <div className="studio-toolbar">
          <span className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>david / creative playground</span>
          <span aria-hidden="true">✦</span>
        </div>
        <div className="studio-switch" role="group" aria-label="Showcase view">
          <button
            type="button"
            aria-pressed={view === "design"}
            onClick={() => setView("design")}
          >
            The interface
          </button>
          <button
            type="button"
            aria-pressed={view === "code"}
            onClick={() => setView("code")}
          >
            The code <span aria-hidden="true">&lt;/&gt;</span>
          </button>
        </div>
        <div className="studio-stage" aria-live="polite">
          {view === "design" ? (
            <div key="design" className="design-preview stage-enter">
              <div className="mini-brand">
                <span className="mini-symbol" aria-hidden="true">
                  ✳
                </span>
                <span>AN IDEA, REIMAGINED.</span>
              </div>
              <div className="mini-composition">
                <div>
                  <span className="mini-kicker">
                    A blank canvas. Endless possibilities.
                  </span>
                  <p>
                    Make it
                    <br />
                    <em>mean something.</em>
                  </p>
                  <span className="mini-pill">Thoughtfully built</span>
                </div>
                <div className="sculpture" aria-hidden="true">
                  <div className="sculpture-ring ring-a" />
                  <div className="sculpture-ring ring-b" />
                  <div className="sculpture-core">
                    d<span>.</span>
                  </div>
                  <span className="sculpture-spark">✦</span>
                </div>
              </div>
              <div className="mini-bottom">
                <span>01 / IMAGINE</span>
                <span>02 / CREATE</span>
              </div>
            </div>
          ) : (
            <div key="code" className="code-preview stage-enter">
              <div className="code-file">
                <span aria-hidden="true">◈</span> idea.jsx <span>React</span>
              </div>
              <pre>
                <code>
                  <span className="code-muted">
                    {"// A little idea. A lot of care.\n"}
                  </span>
                  <span className="code-purple">{"export default "}</span>
                  {"function Idea() {\n  return (\n    "}
                  <span className="code-green">{"<Experience\n"}</span>
                  {"      purpose="}
                  <span className="code-gold">{'"make it useful"\n'}</span>
                  {"      details="}
                  <span className="code-gold">{'"make it feel right"\n'}</span>
                  {"      builtWith="}
                  <span className="code-purple">{"{care}\n"}</span>
                  <span className="code-green">{"    />\n"}</span>
                  {"  );\n}"}
                  <span className="code-cursor" aria-hidden="true" />
                </code>
              </pre>
              <div className="code-caption">
                <span /> From the first idea to the final detail.
              </div>
            </div>
          )}
        </div>
        <div className="studio-footer">
          <span>
            <span className="live-dot" /> CURIOSITY · CODE · CRAFT
          </span>
          <span>Made by David</span>
        </div>
      </div>
      <div className="scene-note note-craft">
        <span aria-hidden="true">✧</span>
        <div>
          Good design.
          <br />
          <strong>Even better details.</strong>
        </div>
      </div>
      <a href="#projects" className="scene-note note-work">
        <strong>{String(projects.length).padStart(2, "0")}</strong>
        <span>
          Projects to
          <br />
          explore
        </span>
      </a>
      <div className="scene-caption">
        A little design. A little code. A lot of possibility.
      </div>
    </div>
  );
}
