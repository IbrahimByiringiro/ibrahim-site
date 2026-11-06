"use client";
import { useEffect, useState } from "react";

// Types out each phrase, pauses, deletes it, then moves to the next.
export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const full = words[index % words.length];
  const article = /^[aeiou]/i.test(full) ? "an" : "a";

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }

    let delay = deleting ? 45 : 90;
    if (!deleting && text === full) delay = 1500;
    if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, full, words]);

  return (
    <span aria-label={`I'm ${words.join(", ")}`}>
      <span aria-hidden>
        I&apos;m {article} {text}
        <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-current align-middle" />
      </span>
    </span>
  );
}
