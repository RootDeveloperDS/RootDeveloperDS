"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  hover?: boolean;
}

export default function GlowCard({
  children,
  className = "",
  as: Tag = "div",
  hover = true,
}: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-2xl",
        hover && "cursor-default",
        className
      )}
      whileHover={hover ? { y: -4, scale: 1.005 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Tag className="h-full">{children}</Tag>
    </motion.div>
  );
}
