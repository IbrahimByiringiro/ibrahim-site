"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Github,
  Home,
  Linkedin,
  Mail,
  Menu,
  User,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { navLinks, site } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  Home,
  About: User,
  Experience: Briefcase,
  Skills: Wrench,
  Education: GraduationCap,
  Blog: BookOpen,
  Contact: Mail,
};

const sectionIds = ["home", "about", "experience", "skills", "education", "blog", "contact"];

function useActiveSection() {
  const pathname = usePathname();
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return pathname.startsWith("/blog") ? "blog" : active;
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const active = useActiveSection();

  return (
    <div className="flex h-full flex-col">
      {/* Gradient header with avatar */}
      <div className="relative flex h-40 shrink-0 items-start justify-center rounded-b-[55%] bg-gradient-to-br from-accent-dark to-cyan-500 pt-7">
        {/* Photo file: public/img/Prof landing page.png (spaces are written as %20 in the path) */}
        <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-slate-900 ring-4 ring-accent-dark/30 dark:border-ink">
          <Image
            src="/img/Prof%20landing%20page.png"
            alt={site.name}
            width={96}
            height={96}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>

      <div className="mt-5 text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.35em] text-slate-900 dark:text-white">
          {site.shortName}
        </p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{site.roles[0]}</p>
      </div>

      <nav className="mt-9" aria-label="Main">
        <ul>
          {navLinks.map((l) => {
            const Icon = icons[l.label] ?? Home;
            const id = l.label.toLowerCase();
            const isActive = active === id;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={onNavigate}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-4 border-l-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest transition ${
                    isActive
                      ? "border-accent bg-accent/5 text-accent dark:border-accent-dark dark:bg-accent-dark/10 dark:text-accent-dark"
                      : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-accent dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-accent-dark"
                  }`}
                >
                  <Icon size={18} />
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto flex justify-center gap-5 pb-7 pt-6 text-slate-500 dark:text-slate-400">
        <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent dark:hover:text-accent-dark">
          <Github size={18} />
        </a>
        <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent dark:hover:text-accent-dark">
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop: fixed sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-slate-200 bg-white dark:border-line dark:bg-sidebar lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile: top bar + slide-in drawer */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-14 items-center gap-3 border-b border-slate-200 bg-white/90 px-4 backdrop-blur dark:border-line dark:bg-sidebar/90 lg:hidden">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="rounded-md p-2 text-slate-800 dark:text-slate-100"
        >
          <Menu size={22} />
        </button>
        <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-white">
          {site.shortName}
        </span>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} aria-hidden />
          <div className="absolute inset-y-0 left-0 w-72 max-w-[85%] overflow-y-auto bg-white dark:bg-sidebar">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute right-3 top-3 z-10 rounded-full bg-black/20 p-1.5 text-white"
            >
              <X size={18} />
            </button>
            <SidebarContent onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
