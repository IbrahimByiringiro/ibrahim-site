import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-8 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
