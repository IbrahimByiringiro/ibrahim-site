import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* dotted-grid backdrop, faded toward the portrait */}
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute inset-0 text-slate-300/70 [mask-image:radial-gradient(ellipse_at_72%_45%,black,transparent_68%)] dark:text-white/[0.07]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-16 pt-28 sm:px-10 md:grid-cols-[1.1fr_1fr] lg:pt-16">
        <Reveal>
          <p className="font-display text-xl font-medium text-accent dark:text-accent-dark">Hello, I am</p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-6 min-h-[2rem] font-display text-xl font-semibold text-slate-900 dark:text-white">
            <Typewriter words={site.roles} />
          </p>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {site.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href={site.resume} download className="group btn btn-primary">
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact" className="group btn btn-outline">
              Get in touch
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
          </div>

          {/* On phones the sidebar is hidden, so repeat the social links here */}
          <div className="mt-8 flex gap-5 text-slate-500 dark:text-slate-400 lg:hidden">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-md">
          {/* Photo file: public/img/Prof landing page.png (spaces are written as %20 in the path) */}
          <div className="relative aspect-square w-full overflow-hidden rounded-full bg-gradient-to-br from-accent to-slate-900 shadow-2xl ring-1 ring-accent/30 dark:from-panel dark:to-black dark:ring-accent-dark/30">
            <Image
              src="/img/Prof%20landing%20page.png"
              alt={site.name}
              fill
              sizes="(min-width: 768px) 28rem, 90vw"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* floating highlight chips */}
        </Reveal>
      </div>
    </section>
  );
}
