import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { about, site } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-slate-50 dark:bg-panel/40">
      <div className="section">
        <Reveal>
          <SectionHeading number="01" title="About me" />
        </Reveal>

        <div className="mt-14 grid items-center gap-14 md:grid-cols-[0.9fr_1.2fr]">
          <Reveal className="relative mx-auto w-full max-w-xs">
            {/* offset outline frame behind the portrait */}
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] border-2 border-accent/50 dark:border-accent-dark/40"
            />
            {/* Photo file: public/img/Prof landing page.png (spaces are written as %20 in the path) */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-accent to-slate-900 dark:from-panel dark:to-black">
              <Image
                src="/img/Prof%20landing%20page.png"
                alt={site.name}
                fill
                sizes="20rem"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-2xl font-semibold leading-snug text-slate-900 dark:text-white sm:text-3xl">
              {about.heading}
            </h3>
            <div className="mt-5 space-y-4 leading-relaxed text-slate-600 dark:text-slate-400">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <dd className="font-display text-3xl font-bold text-highlight dark:text-highlight-dark">{s.value}</dd>
                  <dt className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label}</dt>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="group btn btn-primary">
                Contact me <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <a href="#experience" className="group btn btn-outline">
                Experience
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
