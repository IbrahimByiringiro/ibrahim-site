"use client";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this hidden field.
    if (data.get("website")) return;

    if (!formId || formId === "your_form_id") {
      // Fallback until Formspree is configured: open the visitor's email app.
      const subject = encodeURIComponent(String(data.get("subject") || `Message from ${data.get("name")}`));
      const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-line dark:bg-ink dark:text-white dark:focus:border-accent-dark dark:focus:ring-accent-dark/20";

  const rows = [
    { icon: MapPin, label: site.location, href: undefined },
    { icon: Mail, label: site.email, href: `mailto:${site.email}` },
    { icon: Linkedin, label: "LinkedIn", href: site.linkedin },
    { icon: Github, label: "GitHub", href: site.github },
  ];

  return (
    <section id="contact">
      <div className="section">
        <Reveal>
          <SectionHeading number="06" title="Contact me" />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 dark:border-line dark:bg-panel">
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
                Reach out and let's connect.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Open to connecting about analytics, research and data projects. Feel free to reach out.
              </p>
              <ul className="mt-6 space-y-4">
                {rows.map(({ icon: Icon, label, href }) => (
                  <li key={label} className="flex items-center gap-3 text-sm">
                    <Icon size={18} className="shrink-0 text-accent dark:text-accent-dark" />
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="break-all font-medium text-slate-800 hover:text-accent dark:text-slate-100 dark:hover:text-accent-dark"
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="font-medium text-slate-800 dark:text-slate-100">{label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-2xl border border-slate-200 bg-white p-7 dark:border-line dark:bg-panel"
            >
              <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Send me a message</h3>
              <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" required placeholder="Name *" aria-label="Name" className={input} />
                <input name="email" type="email" required placeholder="Email *" aria-label="Email" className={input} />
              </div>
              <input name="subject" required placeholder="Subject *" aria-label="Subject" className={input} />
              <textarea name="message" required rows={5} placeholder="Your message *" aria-label="Message" className={input} />
              <button type="submit" disabled={status === "sending"} className="group btn btn-primary disabled:opacity-60">
                <Send size={16} /> {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "sent" && <p className="text-sm text-accent dark:text-accent-dark">Thanks! Your message was sent.</p>}
              {status === "error" && <p className="text-sm text-red-500">Something went wrong. Please email me directly.</p>}
            </form>
          </Reveal>
        </div>

        {/* City-level map (no API key needed). Dark mode inverts it to match the theme. */}
        <Reveal className="mt-5">
          <iframe
            title={`Map of ${site.location}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.location)}&z=11&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full rounded-2xl border border-slate-200 grayscale dark:border-line dark:opacity-80 dark:invert dark:hue-rotate-180"
          />
        </Reveal>
      </div>
    </section>
  );
}
