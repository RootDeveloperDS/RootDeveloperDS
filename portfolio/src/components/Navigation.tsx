"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { personal } from "@/data/content";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "VISAR", href: "#visar" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map((l) => l.href.substring(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.substring(1);
    const section = document.getElementById(id);
    if (!section) return;
    const navOffset = 96;
    const top =
      section.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 w-full transition-all duration-500"
        style={{
          background: scrolled
            ? "var(--bg-glass, rgba(5,5,5,0.85))"
            : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-12 md:py-5 lg:px-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="min-w-0 shrink text-sm font-bold tracking-[0.2em] transition-colors"
            style={{
              fontFamily: "var(--font-orbitron)",
              color: "var(--text-accent)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            DS<span style={{ color: "var(--text-secondary)" }}>://</span>PORTFOLIO
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-xs tracking-widest font-medium uppercase transition-colors"
                  style={{
                    color: isActive ? "var(--text-accent)" : "var(--text-secondary)",
                    fontFamily: "var(--font-inter)",
                  }}
                  whileHover={{ color: "var(--text-accent)" }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right: Toggle + Resume */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0 pl-2">
            <ThemeToggle />
            <motion.a
              href={personal.resumeUrl}
              download="Devansh_Sharma_Resume.pdf"
              className="hidden xl:flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full transition-all"
              style={{
                background: "var(--accent)",
                color: "#050505",
                fontFamily: "var(--font-inter)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume ↓
            </motion.a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 ml-1"
              style={{ color: "var(--text-accent)" }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              aria-label="Close menu overlay"
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ background: "rgba(3, 6, 12, 0.58)", backdropFilter: "blur(3px)" }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="fixed inset-y-0 right-0 z-50 w-72 flex flex-col pt-24 px-8 gap-6"
              style={{
                background: "var(--bg-secondary)",
                borderLeft: "1px solid var(--border)",
                backdropFilter: "blur(24px)",
              }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-lg font-medium py-2 border-b transition-colors"
                  style={{
                    color:
                      activeSection === link.href.substring(1)
                        ? "var(--text-accent)"
                        : "var(--text-primary)",
                    borderColor: "var(--border)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href={personal.resumeUrl}
                download
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-center text-sm font-bold py-3 rounded-xl"
                style={{ background: "var(--accent)", color: "#050505" }}
              >
                Download Resume ↓
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
