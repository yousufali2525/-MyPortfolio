
import { useState } from 'react';
import { Check, Copy, Sparkles, FileCode } from 'lucide-react';

export const CursorExplainer = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeCodeFile, setActiveCodeFile] = useState<'component' | 'layout' | 'css'>('component');

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      setCopiedKey(null);
    }
  };

  const nextjsComponentCode = `"use client";

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
        className="fixed top-0 left-0 w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border border-zinc-900 dark:border-zinc-100 will-change-transform flex items-center justify-center transition-all duration-150 ease-out"
      >
        <div
          className={\`w-full h-full rounded-full transition-transform duration-200 \${
            isClicked
              ? "scale-75"
              : isHovered
              ? "scale-[1.9] bg-zinc-900/10 dark:bg-white/10"
              : "scale-100"
          }\`}
        />
      </div>

      <div
        ref={dotRef}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-zinc-900 dark:bg-zinc-100 will-change-transform"
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

  const nextjsLayoutCode = `import type { Metadata } from "next";
import { Archivo, Figtree } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import { CustomCursor } from "@/components/CustomCursor";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

export const metadata: Metadata = {
  title: \`\${profile.name} | \${profile.role}\`,
  description: profile.tagline,
  openGraph: { title: \`\${profile.name} | \${profile.role}\`, description: profile.tagline, images: ["/profile.png"], type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={\`\${archivo.variable} \${figtree.variable}\`}>
      <body className="antialiased selection:bg-indigo-500/20">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}`;

  const nextjsCssCode = `@tailwind base;
@tailwind components;
@tailwind utilities;

@media (pointer: fine) {
  body,
  a,
  button,
  input,
  textarea,
  select,
  [role="button"] {
    cursor: none !important;
  }
}`;

  const activeCode =
    activeCodeFile === 'component'
      ? nextjsComponentCode
      : activeCodeFile === 'layout'
      ? nextjsLayoutCode
      : nextjsCssCode;

  return (
    <section id="cursor-guide" className="py-16 sm:py-20 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-widest">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>Clean Code Ready to Copy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              কমেন্ট ছাড়া সম্পূর্ণ ক্লিন কোড
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
              কোনো কমেন্ট ছাড়া ফ্রেশ কোড। নিচে থেকে ক্লিক করে সরাসরি কপি করে আপনার ফাইলে বসিয়ে দিন।
            </p>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 px-3.5 py-2 rounded-xl text-xs font-semibold shrink-0">
            <Check className="w-4 h-4 shrink-0" />
            <span>Zero Comments · 100% Clean Code</span>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 bg-zinc-950/70 px-3 sm:px-4 py-3 gap-3">
            <div className="flex items-center gap-1 overflow-x-auto max-w-full">
              <button
                type="button"
                onClick={() => setActiveCodeFile('component')}
                className={`flex shrink-0 items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeCodeFile === 'component'
                    ? 'bg-zinc-800 text-indigo-400 border border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-indigo-400" />
                <span>CustomCursor.tsx</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCodeFile('layout')}
                className={`flex shrink-0 items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeCodeFile === 'layout'
                    ? 'bg-zinc-800 text-indigo-400 border border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-emerald-400" />
                <span>layout.tsx</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveCodeFile('css')}
                className={`flex shrink-0 items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-medium transition-colors ${
                  activeCodeFile === 'css'
                    ? 'bg-zinc-800 text-indigo-400 border border-zinc-700'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-amber-400" />
                <span>globals.css</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => copyToClipboard(activeCode, activeCodeFile)}
              className="flex items-center justify-center gap-1.5 w-full sm:w-auto px-3 py-2 rounded-lg text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm shrink-0"
            >
              {copiedKey === activeCodeFile ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-4 sm:p-6 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed max-h-[460px]">
            <code>{activeCode}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};
