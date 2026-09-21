"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
        "border-border bg-surface text-ink shadow-pill",
        "hover:bg-gold hover:text-gold-contrast hover:border-gold hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--gold)]",
        className
      )}
    >
      <span className="sr-only">Toggle theme</span>
      {mounted ? (
        isDark ? (
          <Sun className="h-[18px] w-[18px] transition-transform duration-300 group-hover:rotate-45" strokeWidth={2} />
        ) : (
          <Moon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-12" strokeWidth={2} />
        )
      ) : (
        <span className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
