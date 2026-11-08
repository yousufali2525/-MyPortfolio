
import { useEffect, useState } from 'react';
import { ArrowUpRight, Github, X } from 'lucide-react';

interface Project {
  id: string;
  num: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

const projectItems: Project[] = [
  {
    id: 'booknook',
    num: '01',
    title: 'BookNook - Online Bookstore',
    tagline: 'A full-stack online bookstore application built with Next.js, combining frontend and backend development to deliver an interactive book browsing experience with dynamic functionality and data management.',
    category: 'Full-Stack',
    year: '2026',
    tags: ['Next.js', 'React', 'JavaScript', 'Full-Stack Development'],
    image: '/booknook.png',
    link: 'https://booknook-22-cc8a.vercel.app/',
    github: '',
  },
  {
    id: 'bazar-dor',
    num: '02',
    title: 'Bazar Dor - বাজার দর',
    tagline: 'A Bengali-friendly market price platform designed to help users explore everyday product prices and stay informed about essential grocery, vegetable, fish, and meat prices.',
    category: 'Frontend',
    year: '2026',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: '/bazardor.png',
    link: 'https://b14-a07-bazar-dor.vercel.app/',
    github: '',
  },
  {
    id: 'fitlog',
    num: '03',
    title: 'FitLog - Fitness Tracker',
    tagline: 'A modern fitness tracking application designed to help users explore exercises, discover workout routines, organize fitness activities, and manage their personal workout plans.',
    category: 'Frontend',
    year: '2026',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    image: '/fitlog.png',
    link: 'https://b14-a6-fit-log-mu.vercel.app/',
    github: '',
  },
  {
    id: 'react-b14-a5',
    num: '04',
    title: 'React Dev Stack Builder',
    tagline: 'A modern and responsive developer-focused website designed to showcase development technologies, tools, and project information through a clean interface and smooth user experience.',
    category: 'Frontend',
    year: '2026',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: '/devstack.png',
    link: 'https://extraordinary-cheesecake-4c5cb4.netlify.app/',
    github: '',
  },
  {
    id: 'devconf',
    num: '05',
    title: 'DevConf 2026',
    tagline: 'A professional developer conference website featuring event information, speakers, schedules, technology tracks, venue details, and registration plans with a modern responsive design.',
    category: 'Frontend',
    year: '2026',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: '/devconf.png',
    link: 'https://yousufali2525.github.io/assignment-B-14-A-01/',
    github: '',
  },
];

export const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelected(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selected]);

  return (
    <section
      id="projects"
      className="border-t border-zinc-200/80 bg-white py-16 transition-colors sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <span className="mb-2 block text-xs font-mono font-bold uppercase tracking-widest text-[#888]">
            04 / Projects · Selected Works
          </span>

          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#101010] min-[380px]:text-5xl sm:text-6xl lg:text-7xl">
            CRAFTED
            <br />
            WITH CARE<span className="text-red-500">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            A collection of my own web development projects, showcasing my skills in frontend and full-stack development using modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {projectItems.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelected(p)}
              data-cursor="view"
              data-cursor-text="VIEW"
              aria-label={`View details of ${p.title}`}
              className="group flex min-w-0 cursor-pointer select-none flex-col justify-between rounded-2xl border border-zinc-200/90 bg-zinc-50 p-5 text-left transition-all duration-300 hover:border-red-500/50 hover:bg-white hover:shadow-xl sm:rounded-3xl sm:p-7 lg:p-8"
            >
              <div className="w-full">
                <div className="mb-5 flex items-center justify-between gap-3 text-xs font-mono text-zinc-400 sm:mb-6">
                  <span className="font-bold text-red-500">
                    {p.num} // {p.category}
                  </span>
                  <span>{p.year}</span>
                </div>

                <div className="mb-5 overflow-hidden rounded-xl">
                  <img
                    src={p.image}
                    alt={`${p.title} project screenshot`}
                    loading="lazy"
                    onError={(e) => {
                      console.error('Image failed to load:', p.image);
                      e.currentTarget.style.visibility = 'hidden';
                    }}
                    className="h-auto max-h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 sm:mb-4">
                  <h3 className="break-words text-xl font-black leading-tight text-[#101010] transition-colors group-hover:text-red-500 sm:text-2xl lg:text-3xl">
                    {p.title}
                  </h3>

                  {p.category === 'Full-Stack' && (
                    <span className="shrink-0 rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Full-Stack
                    </span>
                  )}
                </div>

                <p className="mb-6 text-sm leading-relaxed text-zinc-600 sm:mb-8">
                  {p.tagline}
                </p>
              </div>

              <div className="flex w-full flex-col items-start justify-between gap-4 border-t border-zinc-200/70 pt-5 sm:flex-row sm:items-center sm:pt-6">
                <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-[11px] text-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center self-end rounded-full border border-zinc-300 text-zinc-600 shadow-sm transition-all group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-white sm:self-auto">
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {selected && (
          <div
            className="fixed inset-0 z-[10001] flex items-center justify-center overflow-y-auto bg-black/60 p-3 backdrop-blur-md sm:p-6"
            onClick={() => setSelected(null)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              className="relative my-auto max-h-[90dvh] w-full max-w-xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-400 shadow-sm transition-colors hover:bg-red-50 hover:text-red-500 sm:right-6 sm:top-6"
                aria-label="Close project details"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-5 overflow-hidden rounded-xl">
                <img
                  src={selected.image}
                  alt={`${selected.title} project screenshot`}
                  className="h-auto max-h-72 w-full object-cover object-center"
                />
              </div>

              <span className="mb-2 block pr-12 text-xs font-mono font-bold uppercase text-red-500">
                {selected.category} · {selected.year}
              </span>

              <h3
                id="project-dialog-title"
                className="mb-4 break-words pr-10 text-2xl font-black text-[#101010] sm:text-3xl"
              >
                {selected.title}
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-zinc-600">
                {selected.tagline}
              </p>

              <div className="mb-7 flex flex-wrap gap-2 sm:mb-8">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-1.5 text-xs font-mono font-semibold text-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 min-[420px]:flex-row sm:gap-4">
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-red-500 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-500/25 transition-colors hover:bg-red-600"
                >
                  Live Demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 py-3 text-xs font-bold uppercase tracking-wider text-[#101010] transition-colors hover:bg-zinc-200"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
