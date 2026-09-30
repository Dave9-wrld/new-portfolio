export default function Footer() {
  return (
    <footer>
      <p>
        © <span>{new Date().getFullYear()}</span> David Agbor. All rights
        reserved.
      </p>
      <div>
        <a
          href="https://github.com/Dave9-wrld"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github " aria-hidden="true"></i>
        </a>
        <a
          href="https://linkedin.com/in/david-agbor"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in " aria-hidden="true"></i>
        </a>
        <a
          href="https://www.youtube.com/@curious-Frenzy25"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <i className="fa-brands fa-youtube " aria-hidden="true"></i>
        </a>
        <a
          href="https://x.com/Dave_WRLD9"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <i className="fa-brands fa-x-twitter " aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
}
