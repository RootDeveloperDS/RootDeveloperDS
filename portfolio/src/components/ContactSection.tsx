"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon, TelegramIcon } from "./SocialIcons";
import ScrollReveal from "./ScrollReveal";
import { personal } from "@/data/content";
import { useTheme } from "next-themes";
import { useIsHydrated } from "@/lib/useIsHydrated";

const primarySocials = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${personal.email}`,
    value: personal.email,
    priority: "primary",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: personal.linkedin,
    value: "devanshsharma987",
    priority: "primary",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: personal.github,
    value: "RootDeveloperDS",
    priority: "primary",
  },
  {
    icon: XIcon,
    label: "X / Twitter",
    href: personal.twitter,
    value: "@devanshsha6563",
    priority: "primary",
  },
];

const secondarySocials = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: personal.instagram,
    value: "pro_gamer_devansh",
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    href: personal.telegram,
    value: "@developerofroot",
  },
  {
    icon: TelegramIcon,
    label: "Telegram Channel",
    href: personal.telegramChannel,
    value: "@RootDeveloperDS",
  },
];

function TerminalContact() {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [lines, setLines] = useState<string[]>([
    "> VISAR::CONTACT_NODE — Initializing...",
    "[OK] Secure channel established.",
    '[OK] Auth: Devansh Sharma <devanshsharma8029@gmail.com>',
    "> Awaiting message input...",
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLines((prev) => [
      ...prev,
      `> MSG: "${input}"`,
      "[OK] Message queued for transmission.",
      "[OK] Response ETA: 24-48h",
    ]);
    setInput("");
    setSubmitted(true);
  };

  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-400" />
        <div className="terminal-dot bg-green-500" />
        <span
          className="ml-3 text-[11px] tracking-widest"
          style={{ color: "rgba(0,247,255,0.5)", fontFamily: "var(--font-mono)" }}
        >
          contact.exe — VISAR EDGE TERMINAL
        </span>
      </div>
      <div className="terminal-body space-y-2 text-xs">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{
              color: line.startsWith("[OK]")
                ? "#4ade80"
                : line.startsWith(">")
                ? "#00f7ff"
                : "#7a8899",
              fontFamily: "var(--font-mono)",
            }}
          >
            {line}
          </motion.div>
        ))}

        {!submitted && (
          <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
            <span style={{ color: "#00f7ff", fontFamily: "var(--font-mono)" }}>
              &gt;
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type your message..."
              className="flex-1 bg-transparent outline-none text-xs"
              style={{
                color: "#e0e6f0",
                caretColor: "#00f7ff",
                fontFamily: "var(--font-mono)",
              }}
            />
            <span className="cursor-blink" />
            <button
              type="submit"
              className="text-[10px] px-3 py-1 rounded"
              style={{
                background: "rgba(0,247,255,0.15)",
                border: "1px solid rgba(0,247,255,0.3)",
                color: "#00f7ff",
                fontFamily: "var(--font-mono)",
              }}
            >
              [SEND]
            </button>
          </form>
        )}

        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2"
            style={{ color: "#4ade80", fontFamily: "var(--font-mono)" }}
          >
            [TRANSMITTED] Thank you. I will respond within 24-48h.
          </motion.div>
        )}
      </div>
    </div>
  );
}

function CleanContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl p-10 text-center"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          Message Sent
        </h3>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          I&apos;ll get back to you within 24-48 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl p-8"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
    >
      {[
        { key: "name", label: "Name", type: "text", placeholder: "Your name" },
        { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
      ].map((field) => (
        <div key={field.key}>
          <label
            className="block text-xs font-semibold mb-2 uppercase tracking-widest"
            style={{ color: "var(--text-secondary)" }}
          >
            {field.label}
          </label>
          <input
            type={field.type}
            value={form[field.key as keyof typeof form]}
            onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
            placeholder={field.placeholder}
            required
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors focus-visible:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent-dim)]"
            style={{
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-inter)",
            }}
          />
        </div>
      ))}
      <div>
        <label
          className="block text-xs font-semibold mb-2 uppercase tracking-widest"
          style={{ color: "var(--text-secondary)" }}
        >
          Message
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Your message..."
          required
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors resize-none focus-visible:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent-dim)]"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            color: "var(--text-primary)",
            fontFamily: "var(--font-inter)",
          }}
        />
      </div>
      <motion.button
        type="submit"
        className="w-full py-3.5 rounded-xl text-sm font-bold transition-all"
        style={{ background: "var(--accent)", color: "#050505" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </form>
  );
}

export default function ContactSection() {
  const { resolvedTheme } = useTheme();
  const isHydrated = useIsHydrated();
  const isVisar = isHydrated && resolvedTheme === "visar";

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16" style={{ color: "var(--text-secondary)" }}>
            <span className="text-xs tracking-[0.3em] uppercase mono-font" style={{ color: "var(--text-accent)" }}>
              06 /
            </span>
            <span className="text-xs tracking-[0.3em] uppercase mono-font">Contact</span>
            <div className="flex-1 h-px max-w-xs" style={{ background: "var(--border)" }} />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-8">
            <ScrollReveal direction="left">
              <h2
                className="text-4xl md:text-5xl font-black heading-font"
                style={{ color: "var(--text-primary)" }}
              >
                Let&apos;s{" "}
                <span style={{ color: "var(--text-accent)" }}>Connect.</span>
              </h2>
              <p
                className="text-base leading-relaxed mt-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Open to opportunities, collaborations, and conversations about
                AI systems. Reach out through any channel.
              </p>
            </ScrollReveal>

            {/* Primary socials */}
            <div className="space-y-3">
              {primarySocials.map((s, i) => (
                <ScrollReveal key={s.label} direction="left" delay={i * 0.08}>
                  <motion.a
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-5 py-4 rounded-xl transition-all group"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                    }}
                    whileHover={{
                      borderColor: "var(--accent)",
                      x: 4,
                      boxShadow: isVisar ? "0 0 20px var(--accent-glow)" : "var(--shadow-hover)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "var(--accent-dim)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <s.icon size={16} style={{ color: "var(--text-accent)" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-xs tracking-widest uppercase mb-0.5"
                        style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}
                      >
                        {s.label}
                      </div>
                      <div
                        className="text-sm font-medium truncate"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {s.value}
                      </div>
                    </div>
                    <ExternalLink
                      size={14}
                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--text-accent)" }}
                    />
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>

            {/* Secondary socials */}
            <ScrollReveal direction="left" delay={0.4}>
              <div
                className="pt-4"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div
                  className="text-xs tracking-widest uppercase mb-3"
                  style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}
                >
                  Also find me on
                </div>
                <div className="flex flex-wrap gap-2">
                  {secondarySocials.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-full text-xs"
                      style={{
                        background: "var(--accent-dim)",
                        border: "1px solid var(--border)",
                        color: "var(--text-secondary)",
                      }}
                      whileHover={{ color: "var(--text-accent)", borderColor: "var(--accent)" }}
                    >
                      <s.icon size={13} />
                      {s.value}
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Contact Form */}
          <ScrollReveal direction="right" delay={0.1}>
            <AnimatePresence mode="wait">
              {isVisar ? (
                <motion.div
                  key="terminal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <TerminalContact />
                </motion.div>
              ) : (
                <motion.div
                  key="clean"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <CleanContact />
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
