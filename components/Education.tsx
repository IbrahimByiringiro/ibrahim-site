import { certifications, education, languages } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education">
      <div className="section">
        <Reveal>
          <SectionHeading number="04" title="Education" />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Reveal>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Education</h3>
            <ul className="mt-4 space-y-5">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="font-medium text-slate-900 dark:text-white">{e.degree}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {e.school} · {e.place}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Certifications</h3>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-600 marker:text-slate-400 dark:text-slate-400">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Languages</h3>
            <ul className="mt-4 space-y-2">
              {languages.map((l) => (
                <li key={l.name} className="flex justify-between border-b border-slate-200 pb-2 dark:border-line">
                  <span className="text-slate-800 dark:text-slate-200">{l.name}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{l.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
