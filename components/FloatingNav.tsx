"use client";

import { useEffect, useState, type ReactNode } from "react";
import ui from "@/styles/ui.module.css";

export function FloatingNav({
  children,
  solid = false,
}: {
  children: ReactNode;
  solid?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={ui.bar} data-solid={scrolled || solid}>
      <div className={ui.pill}>{children}</div>
    </header>
  );
}
