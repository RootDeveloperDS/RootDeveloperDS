"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon, TelegramIcon } from "./SocialIcons";
import { personal } from "@/data/content";
import { useTheme } from "next-themes";
import { useIsHydrated } from "@/lib/useIsHydrated";

const footerLinks = [
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
  { icon: GithubIcon, href: personal.github, label: "GitHub" },
  { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
  { icon: XIcon, href: personal.twitter, label: "X/Twitter" },
  { icon: InstagramIcon, href: personal.instagram, label: "Instagram" },
  { icon: TelegramIcon, href: personal.telegram, label: "Telegram" },
];

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const isHydrated = useIsHydrated();
  const isVisar = isHydrated && resolvedTheme === "visar";

  return (
    <footer
      className="relative z-10 py-12 px-6 md:px-12"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        <div
          className="text-xs tracking-[0.3em] uppercase font-bold"
          style={{
            fontFamily: isVisar ? "var(--font-orbitron)" : "var(--font-inter)",
            color: "var(--text-accent)",
          }}
        >
          Devansh Sharma
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {footerLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full"
              style={{
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
              }}
              whileHover={{
                color: "var(--text-accent)",
                borderColor: "var(--accent)",
                scale: 1.15,
                boxShadow: isVisar ? "0 0 12px var(--accent-glow)" : "none",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        {/* Resume download */}
        <motion.a
          href={personal.resumeUrl}
          download="Devansh_Sharma_Resume.pdf"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold"
          style={{
            background: "var(--accent-dim)",
            border: "1px solid var(--border)",
            color: "var(--text-accent)",
          }}
          whileHover={{ scale: 1.04, borderColor: "var(--accent)" }}
        >
          <Download size={13} />
          Download Resume
        </motion.a>

        {/* Copyright */}
        <div
          className="text-center"
          style={{ color: "var(--text-secondary)" }}
        >
          <p className="text-xs mono-font">
            {isVisar ? "// " : ""}© {new Date().getFullYear()} Devansh Sharma —
            Built with Next.js & Framer Motion
            {isVisar ? " //" : ""}
          </p>
          <p className="text-[11px] mt-1 opacity-50 mono-font">
            {isVisar ? "> VISAR_PORTFOLIO_v1.0.0 [ACTIVE]" : "AI/ML Developer · Founder · Creator"}
          </p>
        </div>
      </div>
    </footer>
  );
}
