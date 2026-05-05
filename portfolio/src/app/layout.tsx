import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devansh Sharma — AI Systems Developer & Creator of VISAR Edge",
  description:
    "Portfolio of Devansh Sharma, an AI/ML-focused Python developer and founder. Creator of VISAR Edge — an advanced, system-wide AI assistant. Applied AI systems, LLM integration, automation.",
  keywords: [
    "Devansh Sharma",
    "AI developer",
    "Python developer",
    "VISAR Edge",
    "Applied AI",
    "Machine Learning",
    "LLM",
    "AI assistant",
    "portfolio",
  ],
  authors: [{ name: "Devansh Sharma" }],
  creator: "Devansh Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Devansh Sharma — AI Systems Developer",
    description:
      "AI/ML-Focused Python Developer. Creator of VISAR Edge — a system-wide AI assistant.",
    siteName: "Devansh Sharma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devansh Sharma — AI Systems Developer",
    description: "Creator of VISAR Edge. AI/ML-Focused Python Developer.",
    creator: "@devanshsha6563",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${orbitron.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="visar"
          themes={["visar", "professional"]}
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
