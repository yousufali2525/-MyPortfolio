import React, { useState } from 'react';
import { Copy, Check, FileCode, Sparkles } from 'lucide-react';

export const NextJsFixer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'page' | 'css' | 'cursor' | 'layout'>('page');
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2500);
  };

  const cssCode = `@import "tailwindcss";

html {
  scroll-behavior: smooth;
}

/* Ensure the cursor stays as an arrow pointer (tir cinno) and never turns into an I-beam (darir moto) on text */
*,
*::before,
*::after {
  cursor: default;
}

h1, h2, h3, h4, h5, h6, p, span, li, blockquote {
  cursor: default !important;
}

/* Interactive elements keep pointer cursor */
a,
a *,
button,
button *,
[role="button"],
[role="button"] *,
[data-cursor],
[data-cursor] *,
label,
summary {
  cursor: pointer !important;
}

/* Only real typing inputs allow text-selection cursor */
input[type="text"],
input[type="email"],
textarea {
  cursor: text !important;
}

@keyframes marquee-left {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

.animate-marquee-left {
  display: flex;
  width: max-content;
  will-change: transform;
  animation: marquee-left 25s linear infinite;
}

.animate-marquee-left:hover {
  animation-play-state: paused;
}`;

  const pageCode = `import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const allTechnologies = [
  { num: "01", name: "HTML5", desc: "Web Structure", category: "Frontend" },
  { num: "02", name: "CSS3", desc: "Visual Styling", category: "Frontend" },
  { num: "03", name: "JavaScript", desc: "Core Language", category: "Frontend" },
  { num: "04", name: "TypeScript", desc: "Type Safety", category: "Frontend" },
  { num: "05", name: "React", desc: "UI Development", category: "Frontend" },
  { num: "06", name: "Next.js", desc: "React Framework", category: "Frontend" },
  { num: "07", name: "Tailwind CSS", desc: "Utility Styling", category: "Frontend" },
  { num: "08", name: "Bootstrap", desc: "CSS Framework", category: "Frontend" },
  { num: "09", name: "GSAP", desc: "Web Animation", category: "Frontend" },
  { num: "10", name: "Node.js", desc: "JavaScript Runtime", category: "Backend" },
  { num: "11", name: "Express.js", desc: "Server Framework", category: "Backend" },
  { num: "12", name: "MongoDB", desc: "NoSQL Database", category: "Backend" },
  { num: "13", name: "Better Auth", desc: "Authentication", category: "Backend" },
  { num: "14", name: "VS Code", desc: "Code Editor", category: "Tools" },
  { num: "15", name: "AI Tools", desc: "AI-Assisted Workflow", category: "Tools" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#101010] font-sans selection:bg-red-500 selection:text-white">
      {/* 1. Header Navigation */}
      <nav className="fixed left-0 top-0 z-[1000] w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-5 flex items-center justify-between rounded-full border border-zinc-200/90 bg-white/90 px-5 py-3 shadow-lg shadow-black/5 backdrop-blur-2xl md:px-7">
            <Link href="#home" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#101010]">
              Yousuf<span className="text-red-500">.</span>
            </Link>
            <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#333]">
              <li><Link href="#home" className="hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-red-500 transition-colors">About</Link></li>
              <li><Link href="#skills" className="hover:text-red-500 transition-colors">Skills</Link></li>
              <li><Link href="#projects" className="hover:text-red-500 transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
            </ul>
            <Link
              href="#contact"
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-red-500 hover:bg-red-600 rounded-full transition-all shadow-md shadow-red-500/25"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <div className="relative overflow-hidden bg-white pt-32 pb-20">
        <div className="pointer-events-none absolute left-1/2 top-[14%] z-0 -translate-x-1/2 whitespace-nowrap text-center font-black tracking-tighter text-[#f2f2f4] select-none text-[16vw] leading-none">
          DEVELOPER
        </div>

        <section id="home" className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid flex-1 items-center gap-8 lg:grid-cols-[1fr_1.1fr_0.85fr]">
            <div className="order-2 text-center lg:order-1 lg:text-left space-y-4">
              <p className="text-xs font-extrabold tracking-[0.25em] text-[#888] uppercase">
                HELLO! I'M YOUSUF
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#101010] leading-tight">
                I'M Web Developer
              </h1>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-red-500 border border-red-200 text-xs font-extrabold uppercase tracking-wider">
                CREATE A WEB APP.
              </div>
              <p className="text-[#333] font-semibold flex items-center justify-center lg:justify-start gap-2 text-base sm:text-lg">
                <span className="text-2xl text-red-500 font-bold">→</span>
                <span>Web Development & Modern UI</span>
              </p>
              <p className="text-sm text-zinc-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Computer Science student at <strong className="text-[#101010] font-bold">Varendra University, Rajshahi, Bangladesh</strong>.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
                <Link
                  href="#projects"
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-red-500 hover:bg-red-600 rounded-full transition-all shadow-lg shadow-red-500/25"
                >
                  View Projects ↗
                </Link>
                <Link
                  href="#contact"
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#101010] border border-zinc-300 hover:border-red-500 hover:text-red-500 rounded-full transition-all bg-white shadow-sm"
                >
                  Say Hello
                </Link>
              </div>

              {/* Social Links with Brand Colors */}
              <div className="flex items-center justify-center lg:justify-start gap-5 pt-3 text-xs font-mono">
                <a href="https://github.com/yousufali2525" target="_blank" rel="noreferrer" className="text-[#181717] hover:text-red-500 transition-colors font-medium">GitHub</a>
                <span className="text-zinc-300">·</span>
                <a href="https://www.linkedin.com/in/yousufali2525/" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:text-red-500 transition-colors font-medium">LinkedIn</a>
                <span className="text-zinc-300">·</span>
                <a href="https://discord.com/users/1520096208691925102" target="_blank" rel="noreferrer" className="text-[#5865F2] hover:text-red-500 transition-colors font-medium">Discord</a>
              </div>
            </div>

            <div className="order-1 flex h-[360px] sm:h-[460px] lg:order-2 lg:h-[540px] items-end justify-center">
              <div className="relative h-full w-full max-w-[420px] flex items-end justify-center">
                <Image
                  src="/profile.png"
                  alt="Yousuf Ali"
                  fill
                  className="object-contain object-bottom drop-shadow-xl"
                  priority
                />
              </div>
            </div>

            <div className="order-3 grid grid-cols-1 gap-3.5">
              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm">
                <span className="text-[10px] font-mono font-bold text-red-500 tracking-wider uppercase block mb-1">
                  01 / CORE FOCUS
                </span>
                <h3 className="text-base font-bold text-[#101010]">Interactive Interfaces</h3>
                <p className="text-xs text-zinc-600 mt-1">Responsive layouts, clean code, and smooth animations.</p>
              </div>
              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm">
                <span className="text-[10px] font-mono font-bold text-red-500 tracking-wider uppercase block mb-1">
                  02 / EDUCATION
                </span>
                <h3 className="text-base font-bold text-[#101010]">Varendra University</h3>
                <p className="text-xs text-zinc-600 mt-1">CSE Department, Rajshahi, Bangladesh.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Ribbon (Dan theke Bam dike scroll) */}
        <div className="w-full overflow-hidden whitespace-nowrap py-3.5 bg-[#121214] text-white border-y border-zinc-800 shadow-inner select-none mt-16">
          <div className="animate-marquee-left text-xs font-mono font-bold tracking-widest uppercase">
            <div className="flex items-center shrink-0">
              <span className="mx-4 text-red-500">✦</span>
              <span>FULL STACK DEVELOPER</span>
              <span className="mx-4 text-red-500">✦</span>
              <span>NEXT.JS & REACT</span>
              <span className="mx-4 text-red-500">✦</span>
              <span>TAILWIND CSS</span>
              <span className="mx-4 text-red-500">✦</span>
              <span>VARENDRA UNIVERSITY</span>
              <span className="mx-4 text-red-500">✦</span>
              <span>CREATIVE MOTION PHYSICS</span>
              <span className="mx-4 text-red-500">✦</span>
              <span>OPEN TO WORK</span>
            </div>
            <div className="flex items-center shrink-0" aria-hidden="true">
              <span className="mx-4 text-red-500">✦</span>
              <span>FULL STACK DEVELOPER</span>
              <span className="mx-4 text-red-500">✦</span>
              <span>NEXT.JS & REACT</span>
              <span className="mx-4 text-red-500">✦</span>
              <span>TAILWIND CSS</span>
              <span className="mx-4 text-red-500">✦</span>
              <span>VARENDRA UNIVERSITY</span>
              <span className="mx-4 text-red-500">✦</span>
              <span>CREATIVE MOTION PHYSICS</span>
              <span className="mx-4 text-red-500">✦</span>
              <span>OPEN TO WORK</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Skills Section (15 Technologies) */}
      <section id="skills" className="py-24 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#888]">03 / My Skills · Tech Stack</span>
            <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200 text-[11px] font-mono font-bold">15 TECHNOLOGIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#101010] uppercase mb-12">
            MY SUPER <br /> POWERS<span className="text-red-500">.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allTechnologies.map((t) => (
              <div key={t.name} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between hover:border-red-500 hover:bg-white transition-all">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-red-500">{t.num}</span>
                    <h3 className="text-base font-bold text-[#101010]">{t.name}</h3>
                  </div>
                  <p className="text-xs text-zinc-500 mt-0.5">{t.desc}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Section */}
      <section id="contact" className="py-24 bg-[#101010] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center space-y-4">
          <h2 className="text-4xl font-black uppercase">SAY HELLO.</h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto">
            Have a project or internship in mind? Send an email directly:
          </p>
          <a
            href="mailto:yousufali025250@gmail.com"
            className="inline-block mt-4 px-8 py-4 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-red-500/25"
          >
            yousufali025250@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}`;

  const layoutCode = `import type { Metadata } from "next";
import { Archivo, Figtree } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

export const metadata: Metadata = {
  title: "Md. Yousuf Ali | Web Developer",
  description: "Computer Science student at Varendra University, Rajshahi, Bangladesh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={\`\${archivo.variable} \${figtree.variable}\`}>
      <body className="antialiased bg-white text-zinc-900 selection:bg-red-500 selection:text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}`;

  const cursorCode = `"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const mousePos = useRef({ x: -100, y: -100 });
  const circlePos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = \`translate3d(\${e.clientX}px, \${e.clientY}px, 0)\`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const loop = () => {
      const speed = 0.16;
      circlePos.current.x += (mousePos.current.x - circlePos.current.x) * speed;
      circlePos.current.y += (mousePos.current.y - circlePos.current.y) * speed;

      if (circleRef.current) {
        circleRef.current.style.transform = \`translate3d(\${circlePos.current.x}px, \${circlePos.current.y}px, 0)\`;
      }
      animId = requestAnimationFrame(loop);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, input, textarea, select, [role='button']")) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("a, button, input, textarea, select, [role='button']")) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <div
        ref={circleRef}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
        className="fixed top-0 left-0 w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border border-zinc-900 will-change-transform flex items-center justify-center transition-all duration-150 ease-out"
      >
        <div
          className={\`w-full h-full rounded-full transition-transform duration-200 \${
            isClicked
              ? "scale-75"
              : isHovered
              ? "scale-[1.9] border border-red-500 bg-red-500/10"
              : "scale-100"
          }\`}
        />
      </div>

      <div
        ref={dotRef}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-red-500 will-change-transform"
      >
        <div
          className={\`w-full h-full rounded-full transition-transform duration-150 \${
            isHovered ? "scale-50 opacity-50" : "scale-100"
          }\`}
        />
      </div>
    </div>
  );
}`;

  return (
    <section id="vscode-fix" className="py-20 border-t border-zinc-200 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-red-500 mb-2 uppercase tracking-widest font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Updated Code (15 Technologies & All Categories)</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-[#101010]">
              আপনার সম্পূর্ণ ১৫টি টেকনোলজি সহ আপডেট করা কোড
            </h2>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4 py-2.5 gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setActiveTab('page')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeTab === 'page'
                    ? 'bg-zinc-800 text-red-400 border border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-red-400" />
                <span>app/page.tsx (15 Technologies)</span>
              </button>

              <button
                onClick={() => setActiveTab('css')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeTab === 'css'
                    ? 'bg-zinc-800 text-amber-400 border border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-amber-400" />
                <span>app/globals.css</span>
              </button>

              <button
                onClick={() => setActiveTab('cursor')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeTab === 'cursor'
                    ? 'bg-zinc-800 text-indigo-400 border border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-indigo-400" />
                <span>components/CustomCursor.tsx</span>
              </button>

              <button
                onClick={() => setActiveTab('layout')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeTab === 'layout'
                    ? 'bg-zinc-800 text-emerald-400 border border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-emerald-400" />
                <span>app/layout.tsx</span>
              </button>
            </div>

            <button
              onClick={() => {
                const text =
                  activeTab === 'page'
                    ? pageCode
                    : activeTab === 'css'
                    ? cssCode
                    : activeTab === 'cursor'
                    ? cursorCode
                    : layoutCode;
                copyCode(text, activeTab);
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors shadow-sm"
            >
              {copied === activeTab ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy This File</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-6 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed max-h-[480px]">
            <code>
              {activeTab === 'page' && pageCode}
              {activeTab === 'css' && cssCode}
              {activeTab === 'cursor' && cursorCode}
              {activeTab === 'layout' && layoutCode}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};
