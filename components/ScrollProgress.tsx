"use client";
import { useEffect, useState } from "react";

// Thin bar at the top that fills as the visitor scrolls down the page.
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[70] h-0.5 bg-transparent lg:left-72">
      <div
        className="h-full bg-gradient-to-r from-accent to-highlight dark:from-accent-dark dark:to-highlight-dark"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
