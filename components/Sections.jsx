export function About() {
  return (
    <section className="panel about" id="about">
      <div>
        <p className="eyebrow reveal">About Me</p>
        <h2 className="reveal">
          Building for the Web,
          <br />
          Learning with Every <em>Project.</em>
        </h2>
        <div className="stats raised reveal">
          <div>
            <span className="inset-icon">
              <i className="fa-solid fa-code " aria-hidden="true"></i>
            </span>
            <strong>2024</strong>
            <span>Building since</span>
          </div>
          <div>
            <span className="inset-icon">
              <i className="fa-regular fa-folder " aria-hidden="true"></i>
            </span>
            <strong data-count="6">6</strong>
            <span>Selected projects</span>
          </div>
          <div>
            <span className="inset-icon">
              <i className="fa-solid fa-location-dot " aria-hidden="true"></i>
            </span>
            <strong className="location-stat">PH</strong>
            <span>Port Harcourt</span>
          </div>
        </div>
      </div>
      <div className="about-copy reveal">
        <p>
          I'm <strong>David Agbor</strong>, a frontend developer and Computer
          Science student based in Port Harcourt. I enjoy turning ideas into
          websites that look good and work well — from landing pages to
          dashboards and apps built around live data.
        </p>
        <p>
          I'm studying at the University of Port Harcourt and completing my
          SIWES training at Loctech, where I'm also developing my backend skills
          with Python, Django, and PostgreSQL.
        </p>
        <a className="button button-light" href="#contact">
          Contact Me <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="panel" id="services">
      <p className="eyebrow reveal">What I Do</p>
      <h2 className="reveal">What I Can Build</h2>
      <div className="service-grid">
        <article
          className="service-card raised reveal"
          style={{ "--delay": "0s" }}
        >
          <div className="service-top">
            <span className="color-icon gold">
              <i className="fa-solid fa-code " aria-hidden="true"></i>
            </span>
            <span className="number">01</span>
          </div>
          <h3>Frontend Development</h3>
          <p>
            Responsive interfaces built with HTML, CSS, JavaScript, React, and
            Next.js.
          </p>
          <a
            className="round-link"
            href="#contact"
            aria-label="Enquire about Frontend Development"
          >
            ↗
          </a>
        </article>
        <article
          className="service-card raised reveal"
          style={{ "--delay": "0.07s" }}
        >
          <div className="service-top">
            <span className="color-icon lilac">
              <i
                className="fa-regular fa-window-maximize "
                aria-hidden="true"
              ></i>
            </span>
            <span className="number">02</span>
          </div>
          <h3>Landing Pages</h3>
          <p>
            Thoughtful layouts that give your brand, product, or idea a clear
            home on the web.
          </p>
          <a
            className="round-link"
            href="#contact"
            aria-label="Enquire about Landing Pages"
          >
            ↗
          </a>
        </article>
        <article
          className="service-card raised reveal"
          style={{ "--delay": "0.14s" }}
        >
          <div className="service-top">
            <span className="color-icon blue">
              <i className="fa-solid fa-layer-group " aria-hidden="true"></i>
            </span>
            <span className="number">03</span>
          </div>
          <h3>Web Applications</h3>
          <p>
            Dashboards and interactive apps that connect useful features with
            live data and APIs.
          </p>
          <a
            className="round-link"
            href="#contact"
            aria-label="Enquire about Web Applications"
          >
            ↗
          </a>
        </article>
        <article
          className="service-card raised reveal"
          style={{ "--delay": "0.21000000000000002s" }}
        >
          <div className="service-top">
            <span className="color-icon mint">
              <i
                className="fa-solid fa-mobile-screen-button "
                aria-hidden="true"
              ></i>
            </span>
            <span className="number">04</span>
          </div>
          <h3>Responsive Websites</h3>
          <p>
            Careful attention to layout, readability, and interaction across
            phones, tablets, and desktops.
          </p>
          <a
            className="round-link"
            href="#contact"
            aria-label="Enquire about Responsive Websites"
          >
            ↗
          </a>
        </article>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="panel tools" id="skills">
      <div className="reveal">
        <p className="eyebrow">Tools &amp; Skills</p>
        <h2>
          Technologies
          <br /> I Use
        </h2>
      </div>
      <div className="tool-grid">
        <div className="tool raised reveal" style={{ "--delay": "0s" }}>
          <span style={{ color: "#e2874d" }}>
            <i className="fa-brands fa-html5 " aria-hidden="true"></i>
          </span>
          <span>HTML</span>
        </div>
        <div className="tool raised reveal" style={{ "--delay": "0.035s" }}>
          <span style={{ color: "#5e92de" }}>
            <i className="fa-brands fa-css3-alt " aria-hidden="true"></i>
          </span>
          <span>CSS</span>
        </div>
        <div className="tool raised reveal" style={{ "--delay": "0.07s" }}>
          <span style={{ color: "#b59339" }}>
            <i className="fa-brands fa-js " aria-hidden="true"></i>
          </span>
          <span>JavaScript</span>
        </div>
        <div
          className="tool raised reveal"
          style={{ "--delay": "0.10500000000000001s" }}
        >
          <span style={{ color: "#53a8c7" }}>
            <i className="fa-brands fa-react " aria-hidden="true"></i>
          </span>
          <span>React</span>
        </div>
        <div className="tool raised reveal" style={{ "--delay": "0.14s" }}>
          <span style={{ color: "#252737" }}>
            <i className="fa-solid fa-n " aria-hidden="true"></i>
          </span>
          <span>Next.js</span>
        </div>
        <div
          className="tool raised reveal"
          style={{ "--delay": "0.17500000000000002s" }}
        >
          <span style={{ color: "#44a4bd" }}>
            <i className="fa-solid fa-wind " aria-hidden="true"></i>
          </span>
          <span>Tailwind</span>
        </div>
        <div
          className="tool raised reveal"
          style={{ "--delay": "0.21000000000000002s" }}
        >
          <span style={{ color: "#6a91c5" }}>
            <i className="fa-brands fa-python " aria-hidden="true"></i>
          </span>
          <span>Python</span>
        </div>
        <div
          className="tool raised reveal"
          style={{ "--delay": "0.24500000000000002s" }}
        >
          <span style={{ color: "#4f8978" }}>
            <i className="fa-solid fa-leaf " aria-hidden="true"></i>
          </span>
          <span>Django</span>
        </div>
        <div className="tool raised reveal" style={{ "--delay": "0.28s" }}>
          <span style={{ color: "#6d89b0" }}>
            <i className="fa-solid fa-database " aria-hidden="true"></i>
          </span>
          <span>PostgreSQL</span>
        </div>
        <div
          className="tool raised reveal"
          style={{ "--delay": "0.31500000000000006s" }}
        >
          <span style={{ color: "#da866d" }}>
            <i className="fa-brands fa-git-alt " aria-hidden="true"></i>
          </span>
          <span>Git & GitHub</span>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="panel" id="experience">
      <p className="eyebrow reveal">Experience &amp; Education</p>
      <h2 className="reveal">My Journey So Far</h2>
      <div className="experience-grid">
        <article className="experience-card raised featured reveal">
          <div className="experience-top">
            <span className="color-icon lilac">
              <i className="fa-solid fa-laptop-code " aria-hidden="true"></i>
            </span>
            <div>
              <h3>
                Full-Stack Trainee <span className="status-badge">SIWES</span>
              </h3>
              <p className="company">Loctech · Port Harcourt</p>
            </div>
            <span className="date">2026 — Present</span>
          </div>
          <ul>
            <li>
              Building my full-stack development skills through practical work
              with React, Next.js, Python, Django, and PostgreSQL.
            </li>
            <li>
              Learning how frontend interfaces, APIs, and databases come
              together in a web application.
            </li>
          </ul>
        </article>
        <article className="experience-card raised reveal">
          <div className="experience-top">
            <span className="color-icon lilac">
              <i className="fa-solid fa-code " aria-hidden="true"></i>
            </span>
            <div>
              <h3>Freelance Frontend Developer</h3>
              <p className="company">Independent projects</p>
            </div>
            <span className="date">2024 — Present</span>
          </div>
          <ul>
            <li>
              Building and deploying responsive websites and web applications,
              from landing pages to task management dashboards.
            </li>
            <li>Working with React, Next.js, Tailwind CSS, and live APIs.</li>
          </ul>
        </article>
        <article className="experience-card raised reveal">
          <div className="experience-top">
            <span className="color-icon lilac">
              <i className="fa-solid fa-graduation-cap " aria-hidden="true"></i>
            </span>
            <div>
              <h3>BSc Computer Science</h3>
              <p className="company">University of Port Harcourt</p>
            </div>
            <span className="date">2023 — Present</span>
          </div>
          <ul>
            <li>
              Studying algorithms, data structures, databases, and software
              engineering.
            </li>
            <li>
              Putting what I learn into practice through personal projects.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="panel" id="process">
      <p className="eyebrow reveal">My Process</p>
      <h2 className="reveal">From an Idea to a Working Website</h2>
      <div className="process-grid">
        <article
          className="process-card raised reveal"
          style={{ "--delay": "0s" }}
        >
          <div>
            <span className="inset-icon">
              <i
                className="fa-solid fa-magnifying-glass "
                aria-hidden="true"
              ></i>
            </span>
            <span className="step-number">01</span>
          </div>
          <h3>Understand</h3>
          <p>
            Start with the idea, the people using it, and what it needs to do.
          </p>
        </article>
        <article
          className="process-card raised reveal"
          style={{ "--delay": "0.06s" }}
        >
          <div>
            <span className="inset-icon">
              <i className="fa-solid fa-list " aria-hidden="true"></i>
            </span>
            <span className="step-number">02</span>
          </div>
          <h3>Plan</h3>
          <p>Work out the page structure, features, and tools for the job.</p>
        </article>
        <article
          className="process-card raised reveal"
          style={{ "--delay": "0.12s" }}
        >
          <div>
            <span className="inset-icon">
              <i className="fa-solid fa-pen " aria-hidden="true"></i>
            </span>
            <span className="step-number">03</span>
          </div>
          <h3>Shape</h3>
          <p>
            Refine the layout, typography, and small details of the interface.
          </p>
        </article>
        <article
          className="process-card raised reveal"
          style={{ "--delay": "0.18s" }}
        >
          <div>
            <span className="inset-icon">
              <i className="fa-solid fa-code " aria-hidden="true"></i>
            </span>
            <span className="step-number">04</span>
          </div>
          <h3>Build</h3>
          <p>Turn the design into responsive pages and working features.</p>
        </article>
        <article
          className="process-card raised reveal"
          style={{ "--delay": "0.24s" }}
        >
          <div>
            <span className="inset-icon">
              <i className="fa-solid fa-check " aria-hidden="true"></i>
            </span>
            <span className="step-number">05</span>
          </div>
          <h3>Test & Launch</h3>
          <p>Check the interactions and screen sizes, then put it online.</p>
        </article>
      </div>
    </section>
  );
}
