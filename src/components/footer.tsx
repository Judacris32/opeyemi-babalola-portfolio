import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navLinks, profile } from "@/data/content";

// Real product icons (Gmail, LinkedIn, Phone) stand in for the written-out
// email/phone -- they already say what they link to, so the text version
// next to them would just repeat it.
const socialLinks = [
  {
    label: `Email ${profile.name}`,
    href: `mailto:${profile.email}`,
    icon: "/images/icons/gmail.png",
  },
  {
    // TODO: swap in the real LinkedIn profile URL once it's available --
    // the source resume didn't include one, so this opens a LinkedIn
    // people-search for his name rather than a guessed/fabricated profile
    // link.
    label: `${profile.name} on LinkedIn`,
    href: `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(profile.name)}`,
    icon: "/images/icons/linkedin.png",
  },
  {
    label: `Call ${profile.name}`,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: "/images/icons/phone.png",
  },
];

export function Footer() {
  return (
    // --footer-bg/-ink/-muted/-border are a fixed solid-black palette
    // (globals.css) -- identical in light and dark mode, so the footer
    // never shifts with the rest of the page's theme.
    <footer className="border-t border-footer-border bg-footer-bg">
      <Container className="flex flex-col items-center gap-8 py-16 text-center sm:py-20">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-footer-border">
            <Image
              src="/images/logo-icon.png"
              alt="Opeyemi Babalola logo"
              fill
              sizes="36px"
              className="object-contain"
            />
          </span>
          <span className="font-display text-base font-semibold text-footer-ink">
            {profile.name}
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-footer-muted transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={link.label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-pill ring-1 ring-footer-border transition-all duration-300 hover:-translate-y-1 hover:shadow-soft hover:ring-gold"
            >
              <span className="relative h-5 w-5">
                <Image src={link.icon} alt="" fill sizes="20px" className="object-contain" />
              </span>
            </a>
          ))}
        </div>

        <p className="text-xs text-footer-muted">
          © {new Date().getFullYear()} {profile.name}. {profile.role} based in{" "}
          {profile.location}.
        </p>
      </Container>
    </footer>
  );
}
