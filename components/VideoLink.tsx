import Image from "next/image";
import { Play } from "lucide-react";

type Props = {
  href: string; // where the visitor goes when they click (the video page)
  title: string;
  caption?: string;
  image?: string; // optional thumbnail, e.g. "/img/cnbc-interview.jpg" (file in public/img)
};

// A clickable video "thumbnail" card for blog posts. Use it inside an .mdx file.
export default function VideoLink({ href, title, caption, image }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch: ${title} (opens in a new tab)`}
      className="not-prose group my-8 block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-line dark:bg-panel"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 768px) 48rem, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-slate-900 dark:from-panel dark:to-black" />
        )}
        <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/15" />
        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-xl transition group-hover:scale-110">
          <Play size={26} fill="currentColor" className="ml-1" />
        </span>
      </div>
      <div className="px-5 py-4">
        <p className="font-display text-base font-semibold text-slate-900 dark:text-white">{title}</p>
        {caption && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{caption}</p>}
      </div>
    </a>
  );
}
