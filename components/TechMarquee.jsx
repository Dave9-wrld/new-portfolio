const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "Python",
  "Django",
  "PostgreSQL",
];
export default function TechMarquee() {
  return (
    <div className="trusted enter" style={{ "--delay": ".6s" }}>
      <div className="trusted-label">
        <p>Tech I work with</p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="marquee-group"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
