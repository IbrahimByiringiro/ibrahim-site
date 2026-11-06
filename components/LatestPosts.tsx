import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, getAllPosts } from "@/lib/posts";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="bg-slate-50 dark:bg-panel/40">
      <div className="section">
        <Reveal>
          <SectionHeading number="05" title="Blog" />
          <Link href="/blog" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent dark:text-accent-dark">
            All posts <ArrowRight size={16} />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Reveal key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="block h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-accent dark:border-line dark:bg-panel dark:hover:border-accent-dark"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {formatDate(p.date)} · {p.readingTime} min read
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{p.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
