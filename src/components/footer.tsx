import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navLinks, profile } from "@/data/content";

// Real product icons (Gmail, LinkedIn, Phone, Google Maps) rather than
// generic outline glyphs -- supplied as brand artwork, so they're rendered
// as-is via next/image instead of recolored icon components.
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
    // Fixed gold background + fixed dark text -- deliberately the same in
    // both light and dark mode, so the footer doesn't shift with the rest
    // of the page's theme tokens.
    <footer className="border-t border-footer-border bg-footer-bg py-12">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-footer-border">
            <Image
              src="/images/logo-icon.png"
              alt="Opeyemi Babalola logo"
              fill
              sizes="32px"
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
              className="text-sm font-medium text-footer-muted transition-colors hover:text-[oklch(87.9%_0.169_91.605)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={link.label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-pill ring-1 ring-footer-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="relative h-6 w-6">
                <Image src={link.icon} alt="" fill sizes="24px" className="object-contain" />
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
