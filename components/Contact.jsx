import ContactForm from "./ContactForm";
export default function Contact() {
  return (
    <section className="panel contact" id="contact">
      <div className="contact-copy reveal">
        <p className="eyebrow">Let's Connect</p>
        <h2>
          Have a project in mind?
          <br />
          Let's build something <em>thoughtful</em> together.
        </h2>
        <div className="contact-links" id="socials">
          <a
            href="https://github.com/Dave9-wrld"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">
              <i className="fa-brands fa-github " aria-hidden="true"></i>
            </span>
            <span>
              <span className="sr-only">GitHub: </span>github.com/Dave9-wrld
            </span>
          </a>
          <a
            href="https://linkedin.com/in/david-agbor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">
              <i className="fa-brands fa-linkedin-in " aria-hidden="true"></i>
            </span>
            <span>
              <span className="sr-only">LinkedIn: </span>
              linkedin.com/in/david-agbor
            </span>
          </a>
          <a
            href="https://www.youtube.com/@curious-Frenzy25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">
              <i className="fa-brands fa-youtube " aria-hidden="true"></i>
            </span>
            <span>
              <span className="sr-only">YouTube: </span>@curious-Frenzy25
            </span>
          </a>
          <a
            href="https://x.com/Dave_WRLD9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">
              <i className="fa-brands fa-x-twitter " aria-hidden="true"></i>
            </span>
            <span>
              <span className="sr-only">X: </span>@Dave_WRLD9
            </span>
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
