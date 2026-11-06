import { BarChart3, Code2, Database, Users, Workflow, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/data/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Match each group name in data/site.ts to an icon.
const groupIcons: Record<string, LucideIcon> = {
  "Programming & Analytics": Code2,
  "Data Engineering & Automation": Workflow,
  "Visualization & Reporting": BarChart3,
  "Platforms & Tools": Database,
  "Leadership & Research": Users,
};

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 dark:bg-panel/40">
      <div className="section">
        <Reveal>
          <SectionHeading number="03" title="Technical skills" />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((g, i) => {
            const Icon = groupIcons[g.name] ?? Code2;
            return (
              <Reveal key={g.name} delay={(i % 2) * 0.08}>
                <div className="flex h-full gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-accent/50 dark:border-line dark:bg-panel dark:hover:border-accent-dark/40">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-dark/15 dark:text-accent-dark">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{g.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{g.blurb}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/5 dark:text-slate-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
