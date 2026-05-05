"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { experience } from "@/data/content";
import { useTheme } from "next-themes";
import { CheckCircle2 } from "lucide-react";
import { useIsHydrated } from "@/lib/useIsHydrated";

export default function ExperienceTimeline() {
  const { resolvedTheme } = useTheme();
  const isHydrated = useIsHydrated();
  const isVisar = isHydrated && resolvedTheme === "visar";

  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16" style={{ color: "var(--text-secondary)" }}>
            <span className="text-xs tracking-[0.3em] uppercase mono-font" style={{ color: "var(--text-accent)" }}>
              04 /
            </span>
            <span className="text-xs tracking-[0.3em] uppercase mono-font">Experience</span>
            <div className="flex-1 h-px max-w-xs" style={{ background: "var(--border)" }} />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2
            className="text-4xl md:text-5xl font-black mb-16 heading-font"
            style={{ color: "var(--text-primary)" }}
          >
            Where I&apos;ve{" "}
            <span style={{ color: "var(--text-accent)" }}>Operated.</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: isVisar
                ? "linear-gradient(to bottom, transparent, var(--accent), transparent)"
                : "linear-gradient(to bottom, transparent, var(--border), transparent)",
              boxShadow: isVisar ? "0 0 8px rgba(0,247,255,0.3)" : "none",
            }}
          />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className={`relative pl-10 md:pl-0 md:w-1/2 mb-14 md:mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:pr-14 md:mr-auto" : "md:pl-14 md:ml-auto"
              }`}
            >
              {/* Timeline node */}
              <motion.div
                className={`absolute top-2 w-3 h-3 rounded-full z-10 ${
                  i % 2 === 0 ? "left-0 md:left-auto md:-right-1.5" : "left-0 md:-left-1.5"
                }`}
                style={{
                  background: "var(--accent)",
                  transform: i % 2 === 0 ? "translateX(50%)" : "translateX(-50%)",
                }}
                animate={isVisar ? {
                  boxShadow: [
                    "0 0 0 0 rgba(0,247,255,0.4)",
                    "0 0 0 8px rgba(0,247,255,0)",
                  ],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <div className="glass-card rounded-2xl p-8 md:p-9 space-y-6">
                {/* Role header */}
                <div>
                  <div
                    className="text-xs tracking-widest uppercase mb-3 mono-font"
                    style={{ color: "var(--text-accent)" }}
                  >
                    {exp.period}
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: isVisar ? "var(--font-space-grotesk)" : "var(--font-inter)",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    className="text-sm mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {exp.company}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <CheckCircle2
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "var(--text-accent)" }}
                      />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
