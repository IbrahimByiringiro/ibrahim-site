import { experience } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section">
        <Reveal>
          <SectionHeading number="02" title="Experience" />
        </Reveal>

        <div className="mt-12 space-y-5">
          {experience.map((job) => (
            <Reveal key={job.title + job.org + job.dates}>
              <article className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-accent/50 dark:border-line dark:bg-panel dark:hover:border-accent-dark/40 sm:flex-row">
                {/* Initials tile. Swap for a logo with next/image if you like. */}
                <div
                  aria-hidden
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-cyan-600 font-display text-xl font-bold text-white dark:from-accent-dark dark:to-cyan-500 dark:text-ink"
                >
                  {job.short}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{job.title}</h3>
                    <span className="rounded-full bg-highlight/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-highlight dark:bg-highlight-dark/15 dark:text-highlight-dark">
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent dark:text-accent-dark">{job.org}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {job.place} · {job.dates}
                  </p>

                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-600 marker:text-slate-400 dark:text-slate-400">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-200 px-2.5 py-0.5 text-xs text-slate-600 dark:border-line dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
