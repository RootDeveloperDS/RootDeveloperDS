// "use client";

// import { motion } from "framer-motion";
// import ScrollReveal from "./ScrollReveal";
// import { techStack } from "@/data/content";
// import { useTheme } from "next-themes";
// import { useIsHydrated } from "@/lib/useIsHydrated";

// // Devicon icon mapping
// const DEVICON_MAP: Record<string, string> = {
//   python: "devicon-python-plain",
//   cplusplus: "devicon-cplusplus-plain",
//   mysql: "devicon-mysql-plain",
//   qt: "devicon-qt-plain",
//   flask: "devicon-flask-original",
//   react: "devicon-react-original",
//   fastapi: "devicon-fastapi-plain",
//   google: "devicon-google-plain",
//   numpy: "devicon-numpy-plain",
//   pandas: "devicon-pandas-plain",
//   scikitlearn: "devicon-scikitlearn-plain",
// };

// const EMOJI_MAP: Record<string, string> = {
//   groq: "⚡",
//   openai: "🤖",
//   async: "⚙",
//   io: "📡",
//   module: "🧩",
//   gpu: "🔥",
// };

// const CATEGORY_COLORS: Record<string, string> = {
//   Languages: "#00f7ff",
//   Frameworks: "#a78bfa",
//   "AI / ML": "#4ade80",
//   "System Concepts": "#fb923c",
// };

// function SkillBadge({
//   name,
//   icon,
//   delay,
//   color,
//   isVisar,
// }: {
//   name: string;
//   icon: string;
//   delay: number;
//   color: string;
//   isVisar: boolean;
// }) {
//   const deviconClass = DEVICON_MAP[icon];
//   const emoji = EMOJI_MAP[icon];

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.7, y: 20 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       whileHover={{
//         scale: 1.08,
//         y: -4,
//         boxShadow: isVisar ? `0 0 20px ${color}40` : "0 8px 24px rgba(0,0,0,0.12)",
//       }}
//       transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//       viewport={{ once: true }}
//       className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-medium cursor-default"
//       style={{
//         background: isVisar ? `${color}12` : "var(--bg-card)",
//         border: `1px solid ${isVisar ? `${color}30` : "var(--border)"}`,
//         color: isVisar ? color : "var(--text-primary)",
//         boxShadow: isVisar ? `inset 0 1px 0 ${color}20` : "var(--shadow)",
//       }}
//     >
//       {deviconClass ? (
//         <i
//           className={`${deviconClass} text-base`}
//           style={{ color: isVisar ? color : "var(--text-accent)" }}
//         />
//       ) : emoji ? (
//         <span className="text-base">{emoji}</span>
//       ) : (
//         <span
//           className="w-2 h-2 rounded-full"
//           style={{ background: color }}
//         />
//       )}
//       <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem" }}>
//         {name}
//       </span>
//     </motion.div>
//   );
// }

// export default function TechStack() {
//   const { resolvedTheme } = useTheme();
//   const isHydrated = useIsHydrated();
//   const isVisar = isHydrated && resolvedTheme === "visar";
//   let globalDelay = 0;

//   return (
//     <section id="techstack" className="section-padding relative z-10">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Label */}
//         <ScrollReveal>
//           <div className="flex items-center gap-4 mb-16" style={{ color: "var(--text-secondary)" }}>
//             <span className="text-xs tracking-[0.3em] uppercase mono-font" style={{ color: "var(--text-accent)" }}>
//               05 /
//             </span>
//             <span className="text-xs tracking-[0.3em] uppercase mono-font">Tech Stack</span>
//             <div className="flex-1 h-px max-w-xs" style={{ background: "var(--border)" }} />
//           </div>
//         </ScrollReveal>

//         <ScrollReveal>
//           <h2
//             className="text-4xl md:text-5xl font-black mb-4 heading-font"
//             style={{ color: "var(--text-primary)" }}
//           >
//             My{" "}
//             <span style={{ color: "var(--text-accent)" }}>Arsenal.</span>
//           </h2>
//           <p className="text-base mb-16" style={{ color: "var(--text-secondary)" }}>
//             Tools and technologies I deploy in production-grade AI systems.
//           </p>
//         </ScrollReveal>

//         <div className="space-y-12">
//           {Object.entries(techStack).map(([category, skills]) => {
//             const color = CATEGORY_COLORS[category] ?? "#00f7ff";
//             return (
//               <div key={category}>
//                 <ScrollReveal direction="left">
//                   <div className="flex items-center gap-4 mb-6">
//                     <div
//                       className="w-3 h-3 rounded-full"
//                       style={{
//                         background: color,
//                         boxShadow: isVisar ? `0 0 10px ${color}` : "none",
//                       }}
//                     />
//                     <h3
//                       className="text-xs tracking-[0.3em] uppercase font-bold"
//                       style={{
//                         color,
//                         fontFamily: "var(--font-mono)",
//                       }}
//                     >
//                       {category}
//                     </h3>
//                     <div
//                       className="flex-1 h-px"
//                       style={{ background: `${color}20` }}
//                     />
//                   </div>
//                 </ScrollReveal>

//                 <div className="flex flex-wrap gap-3">
//                   {skills.map((skill) => {
//                     const d = globalDelay;
//                     globalDelay += 0.04;
//                     return (
//                       <SkillBadge
//                         key={skill.name}
//                         name={skill.name}
//                         icon={skill.icon}
//                         delay={d}
//                         color={color}
//                         isVisar={isVisar}
//                       />
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { techStack } from "@/data/content";
import { useTheme } from "next-themes";
import { useIsHydrated } from "@/lib/useIsHydrated";

// Devicon icon mapping
const DEVICON_MAP: Record<string, string> = {
  python: "devicon-python-plain",
  cplusplus: "devicon-cplusplus-plain",
  mysql: "devicon-mysql-plain",
  qt: "devicon-qt-plain",
  flask: "devicon-flask-original",
  react: "devicon-react-original",
  fastapi: "devicon-fastapi-plain",
  google: "devicon-google-plain",
  numpy: "devicon-numpy-plain",
  pandas: "devicon-pandas-plain",
  scikitlearn: "devicon-scikitlearn-plain",
};

const EMOJI_MAP: Record<string, string> = {
  groq: "⚡",
  openai: "🤖",
  async: "⚙",
  io: "📡",
  module: "🧩",
  gpu: "🔥",
};

const CATEGORY_COLORS: Record<string, string> = {
  Languages: "#00f7ff",
  Frameworks: "#a78bfa",
  "AI / ML": "#4ade80",
  "System Concepts": "#fb923c",
};



function SkillBadge({
  name,
  icon,
  delay,
  color,
  isVisar,
}: {
  name: string;
  icon: string;
  delay: number;
  color: string;
  isVisar: boolean;
}) {
  const deviconClass = DEVICON_MAP[icon];
  const emoji = EMOJI_MAP[icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{
        scale: 1.05, // Slightly softer scale
        y: -4,
        boxShadow: isVisar ? `0 0 25px ${color}50` : "0 8px 24px rgba(0,0,0,0.12)",
      }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      // 🚨 THE FIX: Added min-w-[140px], px-6, py-4, and larger text
      className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full font-semibold cursor-default min-w-[140px]"
      style={{
        background: isVisar ? `${color}15` : "var(--bg-card)",
        border: `1px solid ${isVisar ? `${color}40` : "var(--border)"}`,
        color: isVisar ? color : "var(--text-primary)",
        boxShadow: isVisar ? `inset 0 1px 0 ${color}30` : "var(--shadow)",
      }}
    >
      {deviconClass ? (
        <i
          className={`${deviconClass} text-xl`} // 🚨 Increased icon size
          style={{ color: isVisar ? color : "var(--text-accent)" }}
        />
      ) : emoji ? (
        <span className="text-xl">{emoji}</span> // 🚨 Increased emoji size
      ) : (
        <span
          className="w-3 h-3 rounded-full" // 🚨 Increased dot size
          style={{ background: color }}
        />
      )}
      <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem", letterSpacing: "0.02em" }}>
        {name}
      </span>
    </motion.div>
  );
}


export default function TechStack() {
  const { resolvedTheme } = useTheme();
  const isHydrated = useIsHydrated();
  const isVisar = isHydrated && resolvedTheme === "visar";
  let globalDelay = 0;

  return (
    <section id="techstack" className="section-padding relative z-10 w-full">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* LEFT COLUMN: Header & Info (Takes up 5 columns) */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-8" style={{ color: "var(--text-secondary)" }}>
              <span className="text-xs tracking-[0.3em] uppercase mono-font" style={{ color: "var(--text-accent)" }}>
                05 /
              </span>
              <span className="text-xs tracking-[0.3em] uppercase mono-font">Tech Stack</span>
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6 heading-font" style={{ color: "var(--text-primary)" }}>
              My <br/><span style={{ color: "var(--text-accent)" }}>Arsenal.</span>
            </h2>
            
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              Tools and technologies I deploy in production-grade AI systems, agentic loops, and scalable architectures.
            </p>
          </ScrollReveal>
        </div>

        {/* RIGHT COLUMN: The Skills List (Takes up 7 columns) */}
        <div className="lg:col-span-7 space-y-16 pt-2 md:pt-4">
          {Object.entries(techStack).map(([category, skills]) => {
            const color = CATEGORY_COLORS[category] ?? "#00f7ff";
            return (
              <div key={category} className="w-full">
                <ScrollReveal direction="left">
                  <div className="flex items-center gap-4 mb-8 w-full">
                    <div
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{
                        background: color,
                        boxShadow: isVisar ? `0 0 10px ${color}` : "none",
                      }}
                    />
                    <h3
                      className="text-xs tracking-[0.3em] uppercase font-bold whitespace-nowrap"
                      style={{ color, fontFamily: "var(--font-mono)" }}
                    >
                      {category}
                    </h3>
                    <div className="flex-1 h-px w-full" style={{ background: `${color}40` }} />
                  </div>
                </ScrollReveal>

                <div className="flex flex-wrap gap-4 md:gap-5">
                  {skills.map((skill) => {
                    const d = globalDelay;
                    globalDelay += 0.04;
                    return (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                        delay={d}
                        color={color}
                        isVisar={isVisar}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import ScrollReveal from "./ScrollReveal";
// import { techStack } from "@/data/content";
// import { useTheme } from "next-themes";
// import { useIsHydrated } from "@/lib/useIsHydrated";

// // Devicon icon mapping
// const DEVICON_MAP: Record<string, string> = {
//   python: "devicon-python-plain",
//   cplusplus: "devicon-cplusplus-plain",
//   mysql: "devicon-mysql-plain",
//   qt: "devicon-qt-plain",
//   flask: "devicon-flask-original",
//   react: "devicon-react-original",
//   fastapi: "devicon-fastapi-plain",
//   google: "devicon-google-plain",
//   numpy: "devicon-numpy-plain",
//   pandas: "devicon-pandas-plain",
//   scikitlearn: "devicon-scikitlearn-plain",
// };

// const EMOJI_MAP: Record<string, string> = {
//   groq: "⚡",
//   openai: "🤖",
//   async: "⚙",
//   io: "📡",
//   module: "🧩",
//   gpu: "🔥",
// };

// const CATEGORY_COLORS: Record<string, string> = {
//   Languages: "#00f7ff",
//   Frameworks: "#a78bfa",
//   "AI / ML": "#4ade80",
//   "System Concepts": "#fb923c",
// };

// function SkillBadge({
//   name,
//   icon,
//   delay,
//   color,
//   isVisar,
// }: {
//   name: string;
//   icon: string;
//   delay: number;
//   color: string;
//   isVisar: boolean;
// }) {
//   const deviconClass = DEVICON_MAP[icon];
//   const emoji = EMOJI_MAP[icon];

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.7, y: 20 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       whileHover={{
//         scale: 1.08,
//         y: -4,
//         boxShadow: isVisar ? `0 0 20px ${color}40` : "0 8px 24px rgba(0,0,0,0.12)",
//       }}
//       transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//       viewport={{ once: true }}
//       className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-medium cursor-default"
//       style={{
//         background: isVisar ? `${color}12` : "var(--bg-card)",
//         border: `1px solid ${isVisar ? `${color}30` : "var(--border)"}`,
//         color: isVisar ? color : "var(--text-primary)",
//         boxShadow: isVisar ? `inset 0 1px 0 ${color}20` : "var(--shadow)",
//       }}
//     >
//       {deviconClass ? (
//         <i
//           className={`${deviconClass} text-base`}
//           style={{ color: isVisar ? color : "var(--text-accent)" }}
//         />
//       ) : emoji ? (
//         <span className="text-base">{emoji}</span>
//       ) : (
//         <span
//           className="w-2 h-2 rounded-full"
//           style={{ background: color }}
//         />
//       )}
//       <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem" }}>
//         {name}
//       </span>
//     </motion.div>
//   );
// }

// export default function TechStack() {
//   const { resolvedTheme } = useTheme();
//   const isHydrated = useIsHydrated();
//   const isVisar = isHydrated && resolvedTheme === "visar";
//   let globalDelay = 0;

//   return (
//     <section id="techstack" className="section-padding relative z-10 w-full">
//       {/* 🚨 CHANGED TO A 12-COLUMN GRID TO FORCE BREATHING SPACE 🚨 */}
//       <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
//         {/* LEFT COLUMN: Header & Info (Takes up 5 columns) */}
//         <div className="lg:col-span-5 flex flex-col justify-start">
//           <ScrollReveal>
//             <div className="flex items-center gap-4 mb-8" style={{ color: "var(--text-secondary)" }}>
//               <span className="text-xs tracking-[0.3em] uppercase mono-font" style={{ color: "var(--text-accent)" }}>
//                 05 /
//               </span>
//               <span className="text-xs tracking-[0.3em] uppercase mono-font">Tech Stack</span>
//               <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
//             </div>
            
//             <h2 className="text-4xl md:text-6xl font-black mb-6 heading-font" style={{ color: "var(--text-primary)" }}>
//               My <br/><span style={{ color: "var(--text-accent)" }}>Arsenal.</span>
//             </h2>
            
//             <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
//               Tools and technologies I deploy in production-grade AI systems, agentic loops, and scalable architectures.
//             </p>
//           </ScrollReveal>
//         </div>

//         {/* RIGHT COLUMN: The Skills List (Takes up 7 columns) */}
//         <div className="lg:col-span-7 space-y-12 pt-2 md:pt-4">
//           {Object.entries(techStack).map(([category, skills]) => {
//             const color = CATEGORY_COLORS[category] ?? "#00f7ff";
//             return (
//               <div key={category} className="w-full">
//                 <ScrollReveal direction="left">
//                   <div className="flex items-center gap-4 mb-6 w-full">
//                     <div
//                       className="w-3 h-3 rounded-full shrink-0"
//                       style={{
//                         background: color,
//                         boxShadow: isVisar ? `0 0 10px ${color}` : "none",
//                       }}
//                     />
//                     <h3
//                       className="text-xs tracking-[0.3em] uppercase font-bold whitespace-nowrap"
//                       style={{ color, fontFamily: "var(--font-mono)" }}
//                     >
//                       {category}
//                     </h3>
//                     {/* This line will now stretch beautifully across the right side of the screen */}
//                     <div className="flex-1 h-px w-full" style={{ background: `${color}40` }} />
//                   </div>
//                 </ScrollReveal>

//                 <div className="flex flex-wrap gap-3">
//                   {skills.map((skill) => {
//                     const d = globalDelay;
//                     globalDelay += 0.04;
//                     return (
//                       <SkillBadge
//                         key={skill.name}
//                         name={skill.name}
//                         icon={skill.icon}
//                         delay={d}
//                         color={color}
//                         isVisar={isVisar}
//                       />
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }
