import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";
import VideoLink from "@/components/VideoLink";
type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.summary,
    openGraph: { title: post.meta.title, description: post.meta.summary, type: "article" },
  };
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-24 lg:pt-16 sm:px-8">
      <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-accent dark:text-slate-400">
        <ArrowLeft size={16} /> All posts
      </Link>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {post.meta.title}
      </h1>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        {formatDate(post.meta.date)} · {post.meta.readingTime} min read
      </p>
      <div className="prose prose-slate mt-10 max-w-none dark:prose-invert prose-a:text-accent ">
        <MDXRemote source={post.content} components={{ VideoLink }} />
      </div>
    </article>
  );
}
