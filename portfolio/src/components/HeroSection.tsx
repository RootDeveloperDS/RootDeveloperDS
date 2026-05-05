"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Mail, Download, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./SocialIcons";
import { personal, hero } from "@/data/content";
import { useTheme } from "next-themes";
import { useIsHydrated } from "@/lib/useIsHydrated";

function MouseOrb({ isVisar }: { isVisar: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 60, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      style={{
        x: useTransform(springX, (x) => x - 300),
        y: useTransform(springY, (y) => y - 300),
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: isVisar
          ? "radial-gradient(circle, rgba(0,247,255,0.06) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)",
        filter: "blur(30px)",
      }}
    />
  );
}

const WORDS = ["Building", "AI", "Systems", "That", "Evolve."];

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const isHydrated = useIsHydrated();
  const isVisar = isHydrated && resolvedTheme === "visar";

  const socials = [
    { icon: GithubIcon, href: personal.github, label: "GitHub" },
    { icon: LinkedinIcon, href: personal.linkedin, label: "LinkedIn" },
    { icon: XIcon, href: personal.twitter, label: "X / Twitter" },
    { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const navOffset = 96;
    const top =
      section.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-center px-6 md:px-12 pt-24 pb-10 md:pb-14 overflow-hidden"
    >
      <div className="hidden md:block">
        <MouseOrb isVisar={isVisar} />
      </div>

      {/* Geometric ring decoration (VISAR only) */}
      {isVisar && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "min(86vw, 700px)",
              height: "min(86vw, 700px)",
              border: "1px solid rgba(0,247,255,0.06)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "min(68vw, 500px)",
              height: "min(68vw, 500px)",
              border: "1px solid rgba(0,247,255,0.04)",
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute rounded-full hidden md:block"
            style={{
              width: "min(94vw, 900px)",
              height: "min(94vw, 900px)",
              border: "1px dashed rgba(0,247,255,0.03)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="profile-ring rounded-full overflow-hidden"
            style={{ width: 120, height: 120 }}
          >
            <Image
              src={personal.profileImage}
              alt="Devansh Sharma"
              width={120}
              height={120}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {isVisar && (
            <motion.div
              className="absolute -inset-2 rounded-full"
              style={{
                border: "1px solid rgba(0,247,255,0.2)",
                boxShadow: "0 0 20px rgba(0,247,255,0.15)",
              }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          )}
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase"
          style={{
            background: "var(--accent-dim)",
            border: "1px solid var(--border)",
            color: "var(--text-accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: "var(--accent)",
              boxShadow: isVisar ? "0 0 8px var(--accent)" : "none",
            }}
          />
          <span>Available for Opportunities</span>
        </motion.div>

        {/* Headline */}
        <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-4 gap-y-1">
          {WORDS.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.4 + i * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`text-[clamp(2.3rem,8.5vw,5.8rem)] font-black leading-[0.95] tracking-tight heading-font ${
                word === "Evolve." ? "shimmer-text" : ""
              }`}
              style={{
                color: word === "Evolve." ? undefined : "var(--text-primary)",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="max-w-2xl text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-inter)" }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#visar"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("visar");
            }}
            className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold transition-all"
            style={{
              background: "var(--accent)",
              color: "#050505",
              fontFamily: "var(--font-inter)",
              boxShadow: isVisar ? "0 0 30px var(--accent-glow)" : "none",
            }}
            whileHover={{ scale: 1.05, boxShadow: isVisar ? "0 0 50px var(--accent-glow)" : "0 6px 24px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.97 }}
          >
            Explore VISAR Edge <ArrowRight size={16} />
          </motion.a>

          <motion.a
            href="#techstack"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("techstack");
            }}
            className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all"
            style={{
              background: "transparent",
              border: "1px solid var(--border-hover)",
              color: "var(--text-accent)",
              fontFamily: "var(--font-inter)",
            }}
            whileHover={{ scale: 1.05, background: "var(--accent-dim)" }}
            whileTap={{ scale: 0.97 }}
          >
            View Tech Stack
          </motion.a>

          <motion.a
            href={personal.resumeUrl}
            download="Devansh_Sharma_Resume.pdf"
            className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all"
            style={{
              background: "var(--accent-dim)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-inter)",
            }}
            whileHover={{ scale: 1.05, background: "var(--accent-dim)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={15} /> Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center gap-5 mt-2"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-full transition-all"
              style={{ color: "var(--text-secondary)", border: "1px solid var(--border)" }}
              whileHover={{
                scale: 1.2,
                color: "var(--text-accent)",
                borderColor: "var(--accent)",
                boxShadow: isVisar ? "0 0 15px var(--accent-glow)" : "none",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          style={{ color: "var(--text-secondary)" }}
        >
          <span className="text-[10px] tracking-widest uppercase mono-font">Scroll</span>
          <motion.div
            className="w-px h-10"
            style={{ background: "var(--accent)" }}
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
