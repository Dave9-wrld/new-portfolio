import TechMarquee from "./TechMarquee";
import DeveloperShowcase from "./DeveloperShowcase";
export default function Hero() {
  return (
    <section className="panel hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow enter" style={{ "--delay": ".05s" }}>
          Hello, I&apos;m
        </p>
        <h1 className="hero-name" aria-label="David Agbor">
          <span className="name-mask" aria-hidden="true">
            <span style={{ "--delay": ".12s" }}>David</span>
          </span>{" "}
          <span className="name-mask" aria-hidden="true">
            <span style={{ "--delay": ".27s" }}>Agbor</span>
          </span>
        </h1>
        <p className="hero-role enter" style={{ "--delay": ".3s" }}>
          Frontend Developer
        </p>
        <p className="intro enter" style={{ "--delay": ".4s" }}>
          I build responsive websites and web apps with React, Next.js, and a
          careful eye for the details — bringing ideas to life, one thoughtful
          interface at a time.
        </p>
        <div className="hero-actions enter" style={{ "--delay": ".5s" }}>
          <a className="button button-dark" href="#projects">
            View My Work <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-light" href="#contact">
            Let&apos;s Talk <span aria-hidden="true">↗</span>
          </a>
        </div>
        <TechMarquee />
      </div>
      <DeveloperShowcase />
    </section>
  );
}
