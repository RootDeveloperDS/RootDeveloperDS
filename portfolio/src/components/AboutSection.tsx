"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { about, personal } from "@/data/content";
import { useTheme } from "next-themes";
import { useIsHydrated } from "@/lib/useIsHydrated";

export default function AboutSection() {
  const { resolvedTheme } = useTheme();
  const isHydrated = useIsHydrated();
  const isVisar = isHydrated && resolvedTheme === "visar";

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <ScrollReveal>
          <div
            className="flex items-center gap-4 mb-16"
            style={{ color: "var(--text-secondary)" }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase mono-font"
              style={{ color: "var(--text-accent)" }}
            >
              01 /
            </span>
            <span className="text-xs tracking-[0.3em] uppercase mono-font">
              About
            </span>
            <div
              className="flex-1 h-px max-w-xs"
              style={{ background: "var(--border)" }}
            />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <ScrollReveal direction="left">
              <h2
                className="text-4xl md:text-5xl font-black leading-tight heading-font"
                style={{ color: "var(--text-primary)" }}
              >
                Turning AI from a{" "}
                <span
                  className="shimmer-text"
                  style={{ display: "inline-block" }}
                >
                  tool
                </span>{" "}
                into a{" "}
                <span style={{ color: "var(--text-accent)" }}>layer.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {about.paragraph1}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {about.paragraph2}
              </p>
            </ScrollReveal>

            {/* Philosophy quote */}
            <ScrollReveal direction="left" delay={0.3}>
              <div
                className="relative pl-6 py-4"
                style={{
                  borderLeft: isVisar
                    ? "2px solid var(--accent)"
                    : "3px solid var(--accent)",
                }}
              >
                {isVisar && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.5"
                    style={{
                      background: "var(--accent)",
                      boxShadow: "0 0 12px var(--accent-glow)",
                    }}
                  />
                )}
                <p
                  className="text-lg font-semibold italic"
                  style={{
                    color: "var(--text-accent)",
                    fontFamily: isVisar
                      ? "var(--font-space-grotesk)"
                      : "var(--font-inter)",
                  }}
                >
                  &ldquo;{about.philosophy}&rdquo;
                </p>
              </div>
            </ScrollReveal>

            {/* Resume CTA */}
            <ScrollReveal direction="left" delay={0.4}>
              <motion.a
                href={personal.resumeUrl}
                download="Devansh_Sharma_Resume.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold transition-all"
                style={{
                  background: "var(--accent-dim)",
                  border: "1px solid var(--border-hover)",
                  color: "var(--text-accent)",
                }}
                whileHover={{
                  scale: 1.04,
                  background: "var(--accent)",
                  color: "#050505",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </ScrollReveal>
          </div>

          {/* Right: Stats / Visual Panel */}
          <ScrollReveal direction="right" delay={0.1}>
            <div
              className="glass-card rounded-3xl p-8 space-y-6"
            >
              {/* Stat items */}
              {[
                { label: "Projects Built", value: "10+", sub: "AI-powered applications" },
                { label: "Focus Area", value: "Applied AI", sub: "LLMs, agents & automation" },
                { label: "Current Status", value: "Building", sub: "VISAR Edge — Beta" },
                { label: "Experience", value: "2024+", sub: "Independent applied developer" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start justify-between py-4"
                  style={{
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div>
                    <div
                      className="text-xs tracking-widest uppercase mb-1"
                      style={{
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {stat.label}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {stat.sub}
                    </div>
                  </div>
                  <div
                    className="text-2xl font-black heading-font"
                    style={{ color: "var(--text-accent)" }}
                  >
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
