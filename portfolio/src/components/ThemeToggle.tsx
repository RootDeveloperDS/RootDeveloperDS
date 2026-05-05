"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useIsHydrated } from "@/lib/useIsHydrated";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isHydrated = useIsHydrated();

  if (!isHydrated) return <div className="w-36 h-9" />;

  const isVisar = theme === "visar";

  return (
    <motion.button
      onClick={() => setTheme(isVisar ? "professional" : "visar")}
      className="relative flex items-center gap-2 rounded-full px-1 py-1 text-xs font-medium transition-all duration-500 cursor-pointer"
      style={{
        background: isVisar
          ? "rgba(0, 247, 255, 0.08)"
          : "rgba(37, 99, 235, 0.08)",
        border: isVisar
          ? "1px solid rgba(0, 247, 255, 0.3)"
          : "1px solid rgba(37, 99, 235, 0.2)",
        color: "var(--text-accent)",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Labels */}
      <span
        className="px-2 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300"
        style={{
          background: isVisar ? "var(--accent)" : "transparent",
          color: isVisar ? "#050505" : "var(--text-secondary)",
          fontFamily: isVisar ? "var(--font-orbitron)" : "var(--font-inter)",
        }}
      >
        VISAR
      </span>
      <span
        className="px-2 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300"
        style={{
          background: !isVisar ? "var(--accent)" : "transparent",
          color: !isVisar ? "#ffffff" : "var(--text-secondary)",
          fontFamily: "var(--font-inter)",
        }}
      >
        PRO
      </span>

      {/* Animated indicator dot */}
      <motion.div
        className="absolute top-1 w-2 h-2 rounded-full"
        style={{ background: "var(--accent)" }}
        animate={{ left: isVisar ? "8px" : "calc(100% - 18px)" }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );
}
