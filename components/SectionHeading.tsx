export default function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="font-display text-sm font-semibold text-highlight dark:text-highlight-dark">{number}</span>
        <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-white sm:text-3xl">
          {title}
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-accent/60 to-transparent dark:from-accent-dark/60" />
      </div>
      {subtitle && <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">{subtitle}</p>}
    </div>
  );
}
