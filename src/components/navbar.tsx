"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/data/content";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-5">
      <nav
        className={cn(
          "flex w-full max-w-content items-center justify-between gap-3 rounded-full border px-3 py-2 backdrop-blur-xl transition-shadow duration-300",
          "border-[var(--nav-pill-border)] bg-[var(--nav-pill-bg)]",
          scrolled ? "shadow-pill" : "shadow-none"
        )}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-full py-1 pl-1 pr-3 transition-opacity hover:opacity-80"
          aria-label="Opeyemi Babalola — home"
        >
          <span className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/images/logo-icon.png"
              alt="Opeyemi Babalola logo"
              fill
              sizes="32px"
              className="object-contain"
              priority
            />
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-ink sm:inline">
            Opeyemi Babalola
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-border/60 bg-surface/60 p-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-btn-bg text-btn-ink shadow-pill"
                    : "text-muted hover:bg-gold hover:text-gold-contrast"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Link
            href="/contact"
            className="btn-hover-gold hidden items-center gap-1.5 rounded-full bg-btn-bg px-4 py-2 text-sm font-semibold text-btn-ink shadow-pill sm:inline-flex"
          >
            Let&rsquo;s talk
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink transition-colors duration-300 hover:bg-gold hover:text-gold-contrast md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-3xl border border-[var(--nav-pill-border)] bg-[var(--nav-pill-bg)] p-4 shadow-pill backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-btn-bg text-btn-ink"
                    : "text-muted hover:bg-gold hover:text-gold-contrast"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between gap-2 border-t border-border pt-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="btn-hover-gold inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-btn-bg px-4 py-2.5 text-sm font-semibold text-btn-ink"
              >
                Let&rsquo;s talk
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
