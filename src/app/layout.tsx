import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://opeyemibabalola.dev"),
  title: {
    default: "Opeyemi Babalola — Senior Software & ML Systems Engineer",
    template: "%s · Opeyemi Babalola",
  },
  description:
    "Opeyemi Babalola is a Senior Software & ML Systems Engineer in Liverpool, UK, building AI agent infrastructure, LLM-powered products, and cloud systems at scale. Founder of Wardscribe.",
  keywords: [
    "Opeyemi Babalola",
    "Software Engineer",
    "ML Systems Engineer",
    "AI Engineer",
    "Wardscribe",
    "Liverpool",
    "Full-stack developer",
  ],
  authors: [{ name: "Opeyemi Babalola" }],
  openGraph: {
    title: "Opeyemi Babalola — Senior Software & ML Systems Engineer",
    description:
      "Building AI agent infrastructure, LLM-powered products, and resilient cloud systems. Founder of Wardscribe.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opeyemi Babalola — Senior Software & ML Systems Engineer",
    description:
      "Building AI agent infrastructure, LLM-powered products, and resilient cloud systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased selection:bg-gold">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
