"use client";
import { useRef, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const pending = useRef(false);
  async function submit(event) {
    event.preventDefault();
    if (pending.current) return;
    pending.current = true;
    const form = event.currentTarget;
    setStatus({ state: "sending", message: "Sending your message…" });
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) throw new Error("Message failed");
      form.reset();
      setStatus({
        state: "success",
        message: "Message sent. Thanks for reaching out!",
      });
    } catch {
      setStatus({
        state: "error",
        message:
          "Your message could not be sent. Please try again, or reach me through one of my social links.",
      });
    } finally {
      pending.current = false;
    }
  }
  return (
    <div className="contact-form-wrap reveal">
      <span className="contact-orb" aria-hidden="true" />
      <form
        className="contact-form raised"
        action="https://formspree.io/f/meewdawq"
        method="POST"
        onSubmit={submit}
        aria-busy={status.state === "sending"}
      >
        <div className="form-row">
          <div>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="project">What are we building?</label>
          <select id="project" name="project" defaultValue="">
            <option value="" disabled>
              Select a project type
            </option>
            <option>Website</option>
            <option>Web Application</option>
            <option>Landing Page</option>
            <option>Website Redesign</option>
            <option>Something Else</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me a little about your idea…"
            rows={5}
            required
          />
        </div>
        <button
          className="button button-dark contact-submit"
          type="submit"
          disabled={status.state === "sending"}
        >
          {status.state === "sending" ? "Sending…" : "Send Message"}{" "}
          <span aria-hidden="true">↗</span>
        </button>
        <p
          className={`form-status ${status.state}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      </form>
    </div>
  );
}
