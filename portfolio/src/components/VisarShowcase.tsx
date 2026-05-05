// "use client";

// import { motion } from "framer-motion";
// import { Zap, Cpu, Layers, ArrowUpRight } from "lucide-react";
// import { GithubIcon } from "./SocialIcons";
// import ScrollReveal from "./ScrollReveal";
// import { visar } from "@/data/content";
// import { useTheme } from "next-themes";
// import { useIsHydrated } from "@/lib/useIsHydrated";

// const featureIcons = [Zap, Cpu, Layers];

// export default function VisarShowcase() {
//   const { resolvedTheme } = useTheme();
//   const isHydrated = useIsHydrated();
//   const isVisar = isHydrated && resolvedTheme === "visar";

//   return (
//     <section id="visar" className="section-padding relative z-10 overflow-hidden">
//       {/* Background accent glow */}
//       {isVisar && (
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(ellipse at 50% 50%, rgba(0,247,255,0.04) 0%, transparent 70%)",
//           }}
//         />
//       )}

//       <div className="max-w-6xl mx-auto">
//         {/* Section Label */}
//         <ScrollReveal>
//           <div className="flex items-center gap-4 mb-16" style={{ color: "var(--text-secondary)" }}>
//             <span className="text-xs tracking-[0.3em] uppercase mono-font" style={{ color: "var(--text-accent)" }}>
//               02 /
//             </span>
//             <span className="text-xs tracking-[0.3em] uppercase mono-font">
//               Flagship Product
//             </span>
//             <div className="flex-1 h-px max-w-xs" style={{ background: "var(--border)" }} />
//           </div>
//         </ScrollReveal>

//         {/* Main showcase card */}
//         <div className="glass-card rounded-3xl overflow-hidden">
//           {/* Top bar */}
//           <div
//             className="px-8 py-5 flex items-center justify-between gap-4"
//             style={{
//               borderBottom: "1px solid var(--border)",
//               background: isVisar
//                 ? "rgba(0,247,255,0.03)"
//                 : "rgba(37,99,235,0.02)",
//             }}
//           >
//             <div className="flex items-center gap-3 min-w-0">
//               {isVisar && (
//                 <div className="flex gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500/60" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
//                   <div className="w-3 h-3 rounded-full bg-green-500/60" />
//                 </div>
//               )}
//               <span
//                 className="text-xs tracking-widest uppercase mono-font"
//                 style={{ color: "var(--text-secondary)" }}
//               >
//                 {isVisar ? "// SYSTEM: VISAR-EDGE-V1.0" : "Product Overview"}
//               </span>
//             </div>

//             {/* Status badge */}
//             <motion.div
//               className="shrink-0 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
//               style={{
//                 background: "rgba(0,247,255,0.1)",
//                 border: "1px solid rgba(0,247,255,0.3)",
//                 color: "var(--text-accent)",
//                 fontFamily: "var(--font-mono)",
//               }}
//               animate={isVisar ? { boxShadow: ["0 0 10px rgba(0,247,255,0.2)", "0 0 25px rgba(0,247,255,0.4)", "0 0 10px rgba(0,247,255,0.2)"] } : {}}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               <motion.span
//                 className="w-2 h-2 rounded-full"
//                 style={{ background: "#00f7ff" }}
//                 animate={{ opacity: [1, 0.3, 1] }}
//                 transition={{ duration: 1.5, repeat: Infinity }}
//               />
//               {visar.statusBadge}
//             </motion.div>
//           </div>

//           <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
//             {/* Left: Content */}
//             <div className="space-y-8">
//               <ScrollReveal direction="left">
//                 <div>
//                   <h2
//                     className="text-5xl md:text-6xl font-black mb-4 heading-font"
//                     style={{ color: "var(--text-primary)" }}
//                   >
//                     VISAR{" "}
//                     <span
//                       className="shimmer-text"
//                       style={{ display: "inline-block" }}
//                     >
//                       EDGE
//                     </span>
//                   </h2>
//                   <p
//                     className="text-base leading-relaxed"
//                     style={{ color: "var(--text-secondary)" }}
//                   >
//                     {visar.description}
//                   </p>
//                 </div>
//               </ScrollReveal>

//               {/* Features list */}
//               <div className="space-y-5">
//                 {visar.features.map((feature, i) => {
//                   const Icon = featureIcons[i];
//                   return (
//                     <ScrollReveal key={feature.title} direction="left" delay={0.1 * (i + 1)}>
//                       <div className="flex gap-4">
//                         <div
//                           className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
//                           style={{
//                             background: "var(--accent-dim)",
//                             border: "1px solid var(--border)",
//                           }}
//                         >
//                           <Icon
//                             size={18}
//                             style={{ color: "var(--text-accent)" }}
//                           />
//                         </div>
//                         <div>
//                           <h4
//                             className="text-sm font-bold mb-1"
//                             style={{ color: "var(--text-primary)" }}
//                           >
//                             {feature.title}
//                           </h4>
//                           <p
//                             className="text-sm leading-relaxed"
//                             style={{ color: "var(--text-secondary)" }}
//                           >
//                             {feature.description}
//                           </p>
//                         </div>
//                       </div>
//                     </ScrollReveal>
//                   );
//                 })}
//               </div>

//               {/* GitHub CTA */}
//               <ScrollReveal direction="left" delay={0.4}>
//                 <motion.a
//                   href={visar.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-bold"
//                   style={{
//                     background: "var(--accent)",
//                     color: "#050505",
//                     boxShadow: isVisar ? "0 0 30px var(--accent-glow)" : "none",
//                   }}
//                   whileHover={{
//                     scale: 1.05,
//                     boxShadow: isVisar ? "0 0 50px var(--accent-glow)" : "0 8px 30px rgba(0,0,0,0.2)",
//                   }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   <GithubIcon size={18} />
//                   View on GitHub
//                   <ArrowUpRight size={16} />
//                 </motion.a>
//               </ScrollReveal>
//             </div>

//             {/* Right: Mock UI Window */}
//             <ScrollReveal direction="right" delay={0.2}>
//               <motion.div
//                 className="rounded-2xl overflow-hidden"
//                 style={{
//                   background: isVisar ? "#080810" : "#f8fafc",
//                   border: "1px solid var(--border)",
//                   boxShadow: isVisar
//                     ? "0 0 60px rgba(0,247,255,0.1), inset 0 1px 0 rgba(0,247,255,0.1)"
//                     : "0 20px 60px rgba(0,0,0,0.08)",
//                 }}
//                 animate={isVisar ? { boxShadow: ["0 0 40px rgba(0,247,255,0.08)", "0 0 80px rgba(0,247,255,0.15)", "0 0 40px rgba(0,247,255,0.08)"] } : {}}
//                 transition={{ duration: 4, repeat: Infinity }}
//               >
//                 {/* Mock titlebar */}
//                 <div
//                   className="flex items-center justify-between px-5 py-3"
//                   style={{
//                     background: isVisar ? "rgba(0,247,255,0.05)" : "#f0f2f5",
//                     borderBottom: "1px solid var(--border)",
//                   }}
//                 >
//                   <div className="flex items-center gap-2">
//                     <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
//                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
//                     <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
//                   </div>
//                   <span
//                     className="text-[10px] tracking-widest"
//                     style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}
//                   >
//                     VISAR::EDGE — ACTIVE
//                   </span>
//                   <div
//                     className="w-2 h-2 rounded-full"
//                     style={{ background: "var(--accent)", boxShadow: isVisar ? "0 0 8px var(--accent)" : "none" }}
//                   />
//                 </div>

//                 {/* Mock content */}
//                 <div className="p-5 space-y-3 font-mono text-xs" style={{ color: "var(--text-secondary)" }}>
//                   {[
//                     { type: "prompt", text: "> Initializing VISAR EDGE..." },
//                     { type: "ok", text: "[OK] Context pipeline: Active" },
//                     { type: "ok", text: "[OK] Clipboard monitor: Running" },
//                     { type: "ok", text: "[OK] GUI layer: Persistent" },
//                     { type: "ok", text: "[OK] AI model: Connected" },
//                     { type: "warn", text: "[BETA] Version 1.0.0 — Development" },
//                     { type: "prompt", text: "> Ready for input_" },
//                   ].map((line, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, x: -10 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: i * 0.15 }}
//                       viewport={{ once: true }}
//                       style={{
//                         color:
//                           line.type === "prompt"
//                             ? "var(--text-accent)"
//                             : line.type === "ok"
//                             ? "#4ade80"
//                             : line.type === "warn"
//                             ? "#fbbf24"
//                             : "var(--text-secondary)",
//                         fontFamily: "var(--font-mono)",
//                       }}
//                     >
//                       {line.text}
//                       {i === 6 && (
//                         <span
//                           className="cursor-blink inline-block w-1.5 h-3.5 ml-0.5 align-middle"
//                           style={{ background: "var(--accent)" }}
//                         />
//                       )}
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </ScrollReveal>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Layers, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import ScrollReveal from "./ScrollReveal";
import { visar } from "@/data/content";
import { useTheme } from "next-themes";
import { useIsHydrated } from "@/lib/useIsHydrated";

const featureIcons = [Zap, Cpu, Layers];

export default function VisarShowcase() {
  const { resolvedTheme } = useTheme();
  const isHydrated = useIsHydrated();
  const isVisar = isHydrated && resolvedTheme === "visar";

  return (
    // 🚨 THE FIX: Removed reliant 'section-padding' and added explicit py-24 and w-full
    <section id="visar" className="relative z-10 overflow-hidden py-24 w-full">
      {/* Background accent glow */}
      {isVisar && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(0,247,255,0.04) 0%, transparent 70%)",
          }}
        />
      )}

      {/* 🚨 THE FIX: Added w-full and px-6 md:px-12 to forcefully push it away from screen edges */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        
        {/* Section Label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16" style={{ color: "var(--text-secondary)" }}>
            <span className="text-xs tracking-[0.3em] uppercase mono-font" style={{ color: "var(--text-accent)" }}>
              02 /
            </span>
            <span className="text-xs tracking-[0.3em] uppercase mono-font">
              Flagship Product
            </span>
            <div className="flex-1 h-px max-w-xs" style={{ background: "var(--border)" }} />
          </div>
        </ScrollReveal>

        {/* Main showcase card */}
        <div className="glass-card rounded-3xl overflow-hidden w-full">
          {/* Top bar */}
          <div
            className="px-6 md:px-8 py-5 flex items-center justify-between gap-4"
            style={{
              borderBottom: "1px solid var(--border)",
              background: isVisar
                ? "rgba(0,247,255,0.03)"
                : "rgba(37,99,235,0.02)",
            }}
          >
            <div className="flex items-center gap-3 min-w-0">
              {isVisar && (
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
              )}
              <span
                className="text-xs tracking-widest uppercase mono-font hidden sm:inline-block"
                style={{ color: "var(--text-secondary)" }}
              >
                {isVisar ? "// SYSTEM: VISAR-EDGE-V1.0" : "Product Overview"}
              </span>
            </div>

            {/* Status badge */}
            <motion.div
              className="shrink-0 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
              style={{
                background: "rgba(0,247,255,0.1)",
                border: "1px solid rgba(0,247,255,0.3)",
                color: "var(--text-accent)",
                fontFamily: "var(--font-mono)",
              }}
              animate={isVisar ? { boxShadow: ["0 0 10px rgba(0,247,255,0.2)", "0 0 25px rgba(0,247,255,0.4)", "0 0 10px rgba(0,247,255,0.2)"] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span
                className="w-2 h-2 rounded-full"
                style={{ background: "#00f7ff" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              {visar.statusBadge}
            </motion.div>
          </div>

          <div className="p-6 md:p-12 lg:p-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Content */}
            <div className="space-y-8">
              <ScrollReveal direction="left">
                <div>
                  <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 heading-font leading-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    VISAR{" "}
                    <span
                      className="shimmer-text"
                      style={{ display: "inline-block" }}
                    >
                      EDGE
                    </span>
                  </h2>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {visar.description}
                  </p>
                </div>
              </ScrollReveal>

              {/* Features list */}
              <div className="space-y-6">
                {visar.features.map((feature, i) => {
                  const Icon = featureIcons[i];
                  return (
                    <ScrollReveal key={feature.title} direction="left" delay={0.1 * (i + 1)}>
                      <div className="flex gap-5">
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: "var(--accent-dim)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <Icon
                            size={22}
                            style={{ color: "var(--text-accent)" }}
                          />
                        </div>
                        <div>
                          <h4
                            className="text-base font-bold mb-2"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {feature.title}
                          </h4>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* GitHub CTA */}
              <ScrollReveal direction="left" delay={0.4}>
                <motion.a
                  href={visar.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold"
                  style={{
                    background: "var(--accent)",
                    color: "#050505",
                    boxShadow: isVisar ? "0 0 30px var(--accent-glow)" : "none",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: isVisar ? "0 0 50px var(--accent-glow)" : "0 8px 30px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <GithubIcon size={20} />
                  View on GitHub
                  <ArrowUpRight size={18} />
                </motion.a>
              </ScrollReveal>
            </div>

            {/* Right: Mock UI Window */}
            <ScrollReveal direction="right" delay={0.2} className="h-full">
              <motion.div
                className="rounded-2xl overflow-hidden h-full min-h-[400px] flex flex-col"
                style={{
                  background: isVisar ? "#080810" : "#f8fafc",
                  border: "1px solid var(--border)",
                  boxShadow: isVisar
                    ? "0 0 60px rgba(0,247,255,0.1), inset 0 1px 0 rgba(0,247,255,0.1)"
                    : "0 20px 60px rgba(0,0,0,0.08)",
                }}
                animate={isVisar ? { boxShadow: ["0 0 40px rgba(0,247,255,0.08)", "0 0 80px rgba(0,247,255,0.15)", "0 0 40px rgba(0,247,255,0.08)"] } : {}}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Mock titlebar */}
                <div
                  className="flex items-center justify-between px-5 py-4"
                  style={{
                    background: isVisar ? "rgba(0,247,255,0.05)" : "#f0f2f5",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  </div>
                  <span
                    className="text-xs tracking-widest"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}
                  >
                    VISAR::EDGE — ACTIVE
                  </span>
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: "var(--accent)", boxShadow: isVisar ? "0 0 8px var(--accent)" : "none" }}
                  />
                </div>

                {/* Mock content */}
                <div className="p-6 md:p-8 space-y-4 font-mono text-sm flex-1" style={{ color: "var(--text-secondary)" }}>
                  {[
                    { type: "prompt", text: "> Initializing VISAR EDGE..." },
                    { type: "ok", text: "[OK] Context pipeline: Active" },
                    { type: "ok", text: "[OK] Clipboard monitor: Running" },
                    { type: "ok", text: "[OK] GUI layer: Persistent" },
                    { type: "ok", text: "[OK] AI model: Connected" },
                    { type: "warn", text: "[BETA] Version 1.0.0 — Development" },
                    { type: "prompt", text: "> Ready for input_" },
                  ].map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      viewport={{ once: true }}
                      style={{
                        color:
                          line.type === "prompt"
                            ? "var(--text-accent)"
                            : line.type === "ok"
                            ? "#4ade80"
                            : line.type === "warn"
                            ? "#fbbf24"
                            : "var(--text-secondary)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {line.text}
                      {i === 6 && (
                        <span
                          className="cursor-blink inline-block w-2 h-4 ml-1 align-middle"
                          style={{ background: "var(--accent)" }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
