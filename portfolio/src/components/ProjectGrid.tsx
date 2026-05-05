"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import ScrollReveal from "./ScrollReveal";
import { projects } from "@/data/content";
import { useTheme } from "next-themes";
import { useIsHydrated } from "@/lib/useIsHydrated";

const projectIcons: Record<string, React.ElementType> = {
  bot: Bot,
  workflow: Workflow,
};

export default function ProjectGrid() {
  const { resolvedTheme } = useTheme();
  const isHydrated = useIsHydrated();
  const isVisar = isHydrated && resolvedTheme === "visar";

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16" style={{ color: "var(--text-secondary)" }}>
            <span className="text-xs tracking-[0.3em] uppercase mono-font" style={{ color: "var(--text-accent)" }}>
              03 /
            </span>
            <span className="text-xs tracking-[0.3em] uppercase mono-font">Projects</span>
            <div className="flex-1 h-px max-w-xs" style={{ background: "var(--border)" }} />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2
            className="text-4xl md:text-5xl font-black mb-16 heading-font"
            style={{ color: "var(--text-primary)" }}
          >
            What I&apos;ve{" "}
            <span style={{ color: "var(--text-accent)" }}>Built.</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, i) => {
            const Icon = projectIcons[project.icon] ?? Bot;
            return (
              <ScrollReveal key={project.id} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                <motion.div
                  className="glass-card rounded-2xl p-8 h-full flex flex-col gap-6 group"
                  whileHover={{
                    y: -6,
                    rotateX: isVisar ? 1 : 0,
                    rotateY: isVisar ? 1 : 0,
                  }}
                  style={{ transformStyle: "preserve-3d", transformPerspective: 1000 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: "var(--accent-dim)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <Icon size={22} style={{ color: "var(--text-accent)" }} />
                    </div>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all"
                      style={{
                        background: "var(--accent-dim)",
                        border: "1px solid var(--border)",
                        color: "var(--text-accent)",
                      }}
                      whileHover={{ scale: 1.1 }}
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <ArrowUpRight size={16} />
                    </motion.a>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3
                      className="text-xl font-bold"
                      style={{
                        color: "var(--text-primary)",
                        fontFamily: isVisar ? "var(--font-space-grotesk)" : "var(--font-inter)",
                      }}
                    >
                      {project.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {project.description}
                    </p>
                    <p
                      className="text-sm leading-relaxed italic"
                      style={{ color: "var(--text-secondary)", opacity: 0.7 }}
                    >
                      {project.detail}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium"
                        style={{
                          background: "var(--accent-dim)",
                          border: "1px solid var(--border)",
                          color: "var(--text-accent)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold transition-colors hover:text-[var(--text-accent)]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <GithubIcon size={16} />
                    View Repository
                    <ArrowUpRight size={12} />
                  </a>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
