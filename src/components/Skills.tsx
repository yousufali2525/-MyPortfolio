
import { useState, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface TechItem {
  num: string;
  name: string;
  desc: string;
  category: 'Frontend' | 'Backend' | 'Tools';
  color: string;
  bgColor: string;
  icon: ReactNode;
}

const TechIcons = {
  html5: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm17.4 5.3H5.1l.4 4.5h12.9l-.5 5.5-5.9 1.6-5.9-1.6-.3-3.2h2.8l.2 1.4 3.2.9 3.2-.9.4-3.7H5.9l-.9-9.9h14.3l-.4 1.8z" />
    </svg>
  ),
  css3: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm16.7 5.3H5.8l.3 3.6h11.7l-.4 4.5-5.4 1.5-5.4-1.5-.3-2.9H3.7l.5 5.5 7.8 2.2 7.8-2.2 1-10.7H18.2z" />
    </svg>
  ),
  javascript: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm17.5 18.5c-.8.8-1.9 1.1-3.2.9-1.1-.2-2-.9-2.5-1.9l2.4-1.4c.3.6.8 1 1.5 1.1.7.1 1.3-.2 1.5-.7.2-.6-.1-1.1-.8-1.5l-1-.5c-1.6-.8-2.6-1.8-2.3-3.6.3-1.7 1.7-2.9 3.5-3 1.3 0 2.4.5 3.1 1.4l-2.2 1.5c-.3-.4-.7-.7-1.3-.7-.6 0-1 .3-1.1.7-.1.4.1.8.6 1.1l1 .5c2 1 2.9 2.1 2.6 3.9-.2 1-1 1.8-1.8 2.3zm-7.3-7.7v6.3c0 1.2-.5 1.7-1.7 1.7-.6 0-1.2-.2-1.7-.6l.9-1.9c.3.2.5.3.8.3.4 0 .6-.2.6-.6v-5.2h1.1z" />
    </svg>
  ),
  typescript: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21C23.3 0 24 .7 24 1.5v21c0 .8-.7 1.5-1.5 1.5h-21C.7 24 0 23.3 0 22.5v-21C0 .7.7 0 1.5 0zm11 12.8h-3v8.5H7.1v-8.5H4.2V10.4h8.3v2.4zm8.6 3.9c-.2 2.2-1.8 3.5-4.3 3.5-2.6 0-4.3-1.5-4.4-3.7l2.4-.6c.2 1.1 1 1.9 2.1 1.9 1.1 0 1.8-.6 1.8-1.4 0-.8-.6-1.2-1.9-1.6l-1-.3c-2-.6-3.1-1.6-3.1-3.4 0-2 1.6-3.4 4-3.4 2.2 0 3.7 1.2 4 3.1l-2.4.6c-.2-.9-.8-1.5-1.7-1.5-.9 0-1.5.5-1.5 1.2 0 .6.4 1 1.7 1.4l.9.3c2.3.8 3.5 1.8 3.5 3.8z" />
    </svg>
  ),
  react: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-7c4.8 0 9 2.2 11.2 5.5.4.6.4 1.4 0 2-2.2 3.3-6.4 5.5-11.2 5.5s-9-2.2-11.2-5.5a1.8 1.8 0 0 1 0-2C3 4.2 7.2 2 12 2zm0 18.5c-4.8 0-9-2.2-11.2-5.5a1.8 1.8 0 0 1 0-2c2.2-3.3 6.4-5.5 11.2-5.5s9 2.2 11.2 5.5c.4.6.4 1.4 0 2-2.2 3.3-6.4 5.5-11.2 5.5z" />
    </svg>
  ),
  nextjs: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.625 18.25l-6.5-8.5v8.5H9.5V5.75h1.75l6.75 8.75V5.75H19.5v12.5h-1.875z" />
    </svg>
  ),
  tailwind: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  ),
  bootstrap: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.5 0h17A3.5 3.5 0 0 1 24 3.5v17a3.5 3.5 0 0 1-3.5 3.5h-17A3.5 3.5 0 0 1 0 20.5v-17A3.5 3.5 0 0 1 3.5 0zm10.75 11.23c1.07-.48 1.75-1.4 1.75-2.6 0-1.95-1.52-3.13-3.92-3.13H7.5v12h5.13c2.56 0 4.12-1.28 4.12-3.4 0-1.45-.87-2.45-2.5-2.87zm-4.32-3.7h1.9c1.3 0 2.05.57 2.05 1.55 0 1-.77 1.55-2.07 1.55H9.93V7.53zm0 7.4v-3.3h2.15c1.45 0 2.3.62 2.3 1.65 0 1.05-.85 1.65-2.3 1.65H9.93z" />
    </svg>
  ),
  gsap: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 2.5L3 13.5h7.5L9 21.5l12-12.5h-8l.5-6.5z" />
    </svg>
  ),
  nodejs: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0l10.4 6v12L12 24 1.6 18V6L12 0zm0 2.3L3.6 7.2v9.6L12 21.7l8.4-4.9V7.2L12 2.3zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" />
    </svg>
  ),
  express: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 6l-3.5 7-3.5-7h-2.5l4.8 9.5-5 5.5h2.8l4-4.5 4 4.5h2.9L18.2 13 24 6h-2zM4 6v12h7v-2H6.5v-3h4v-2h-4V8H11V6H4z" />
    </svg>
  ),
  mongodb: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C11.5 4.5 7 8 7 13.5 7 18 9.5 21.5 12 24c2.5-2.5 5-6 5-10.5C17 8 12.5 4.5 12 0zm0 21.8c-1.8-2-3.3-4.8-3.3-8.3 0-3.6 2.5-6.8 3.3-9.5.8 2.7 3.3 5.9 3.3 9.5 0 3.5-1.5 6.3-3.3 8.3z" />
    </svg>
  ),
  betterauth: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.66 0 3 1.34 3 3 0 1.09-.59 2.04-1.46 2.56l.46 1.44h2v2h-2v2h-2v-4.56C10.59 12.04 10 11.09 10 10c0-1.66 1.34-3 3-3z" />
    </svg>
  ),
  vscode: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 0L6.7 10.2 1.9 6.4 0 7.8 4 12 0 16.2l1.9 1.4 4.8-3.8L17.5 24 24 20.8V3.2L17.5 0zm1.5 17.5l-8.4-6.5L19 4.5v13z" />
    </svg>
  ),
  aitools: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a1 1 0 0 1 1 1v1.1a8.002 8.002 0 0 1 6.9 6.9H21a1 1 0 1 1 0 2h-1.1a8.002 8.002 0 0 1-6.9 6.9V21a1 1 0 1 1-2 0v-1.1a8.002 8.002 0 0 1-6.9-6.9H3a1 1 0 1 1 0-2h1.1A8.002 8.002 0 0 1 11 4.1V3a1 1 0 0 1 1-1zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-2 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm4 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
    </svg>
  ),
};

const allTechnologies: TechItem[] = [
  { num: '01', name: 'HTML5', desc: 'Web Structure', category: 'Frontend', color: 'text-orange-500', bgColor: 'bg-orange-500/10 border-orange-500/20', icon: TechIcons.html5 },
  { num: '02', name: 'CSS3', desc: 'Visual Styling', category: 'Frontend', color: 'text-blue-500', bgColor: 'bg-blue-500/10 border-blue-500/20', icon: TechIcons.css3 },
  { num: '03', name: 'JavaScript', desc: 'Core Language', category: 'Frontend', color: 'text-amber-500', bgColor: 'bg-amber-500/10 border-amber-500/20', icon: TechIcons.javascript },
  { num: '04', name: 'TypeScript', desc: 'Type Safety', category: 'Frontend', color: 'text-blue-600', bgColor: 'bg-blue-600/10 border-blue-600/20', icon: TechIcons.typescript },
  { num: '05', name: 'React', desc: 'UI Development', category: 'Frontend', color: 'text-cyan-500', bgColor: 'bg-cyan-500/10 border-cyan-500/20', icon: TechIcons.react },
  { num: '06', name: 'Next.js', desc: 'React Framework', category: 'Frontend', color: 'text-zinc-900 dark:text-white', bgColor: 'bg-zinc-900/10 dark:bg-white/10 border-zinc-900/20', icon: TechIcons.nextjs },
  { num: '07', name: 'Tailwind CSS', desc: 'Utility Styling', category: 'Frontend', color: 'text-sky-500', bgColor: 'bg-sky-500/10 border-sky-500/20', icon: TechIcons.tailwind },
  { num: '08', name: 'Bootstrap', desc: 'CSS Framework', category: 'Frontend', color: 'text-purple-600', bgColor: 'bg-purple-600/10 border-purple-600/20', icon: TechIcons.bootstrap },
  { num: '09', name: 'GSAP', desc: 'Web Animation', category: 'Frontend', color: 'text-emerald-500', bgColor: 'bg-emerald-500/10 border-emerald-500/20', icon: TechIcons.gsap },
  { num: '10', name: 'Node.js', desc: 'JavaScript Runtime', category: 'Backend', color: 'text-green-600', bgColor: 'bg-green-600/10 border-green-600/20', icon: TechIcons.nodejs },
  { num: '11', name: 'Express.js', desc: 'Server Framework', category: 'Backend', color: 'text-zinc-700 dark:text-zinc-300', bgColor: 'bg-zinc-700/10 border-zinc-700/20', icon: TechIcons.express },
  { num: '12', name: 'MongoDB', desc: 'NoSQL Database', category: 'Backend', color: 'text-emerald-600', bgColor: 'bg-emerald-600/10 border-emerald-600/20', icon: TechIcons.mongodb },
  { num: '13', name: 'Better Auth', desc: 'Authentication', category: 'Backend', color: 'text-indigo-600', bgColor: 'bg-indigo-600/10 border-indigo-600/20', icon: TechIcons.betterauth },
  { num: '14', name: 'VS Code', desc: 'Code Editor', category: 'Tools', color: 'text-blue-500', bgColor: 'bg-blue-500/10 border-blue-500/20', icon: TechIcons.vscode },
  { num: '15', name: 'AI Tools', desc: 'AI-Assisted Workflow', category: 'Tools', color: 'text-purple-500', bgColor: 'bg-purple-500/10 border-purple-500/20', icon: TechIcons.aitools },
];

export const Skills = () => {
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Tools'>('All');

  const filtered =
    filter === 'All'
      ? allTechnologies
      : allTechnologies.filter((tech) => tech.category === filter);

  return (
    <section
      id="skills"
      className="border-t border-zinc-200/80 bg-white py-16 text-zinc-900 transition-colors sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <div className="mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#888]">
                03 / My Skills · Tech Stack
              </span>

              <span className="rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-[10px] font-mono font-bold text-red-600 sm:text-[11px]">
                15 TECHNOLOGIES
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#101010] min-[380px]:text-5xl sm:text-6xl lg:text-7xl">
              MY SUPER
              <br />
              POWERS<span className="text-red-500">.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              The technologies I use to turn ideas into digital experiences. From crafting responsive interfaces to exploring backend systems, I'm continuously learning and building.
            </p>
          </div>

          <div className="flex w-full flex-wrap items-center gap-1 rounded-2xl border border-zinc-200 bg-zinc-100 p-1 sm:w-fit sm:rounded-full">
            {(['All', 'Frontend', 'Backend', 'Tools'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                aria-pressed={filter === tab}
                className={`min-h-10 flex-1 rounded-full px-3 py-2 text-xs font-bold transition-all duration-200 sm:flex-none sm:px-4 ${
                  filter === tab
                    ? 'bg-red-500 text-white shadow-md shadow-red-500/20'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {filtered.map((tech) => (
            <div
              key={tech.name}
              className="group flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-zinc-200/90 bg-zinc-50 p-4 transition-all duration-300 hover:border-red-500/50 hover:bg-white hover:shadow-lg sm:p-5"
            >
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11 ${tech.bgColor} ${tech.color}`}
                >
                  {tech.icon}
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-red-500 sm:text-[11px]">
                      {tech.num}
                    </span>

                    <h3 className="break-words text-sm font-bold text-[#101010] transition-colors group-hover:text-red-500 sm:text-base">
                      {tech.name}
                    </h3>
                  </div>

                  <p className="mt-0.5 text-xs text-zinc-500">
                    {tech.desc}
                  </p>
                </div>
              </div>

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-zinc-400 transition-all group-hover:bg-red-50 group-hover:text-red-500">
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
