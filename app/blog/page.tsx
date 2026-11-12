import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on data analysis, statistics, automation and analytics leadership.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-24 lg:pt-16 sm:px-8">
      <p className="eyebrow">Blog</p>
      <h1 className="section-title mt-2"> Articles & Perspectives</h1>

      {posts.length === 0 ? (
        <p className="mt-10 text-slate-500">No posts yet. Add an .mdx file to content/posts.</p>
      ) : (
        <ul className="mt-12 divide-y divide-slate-200 dark:divide-line">
          {posts.map((p) => (
            <li key={p.slug} className="py-8">
              <Link href={`/blog/${p.slug}`} className="group block">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {formatDate(p.date)} · {p.readingTime} min read
                </p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-900 transition group-hover:text-accent dark:text-white dark:group-hover:text-accent-dark">
                  {p.title}
                </h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{p.summary}</p>
                {p.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 dark:bg-line dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
