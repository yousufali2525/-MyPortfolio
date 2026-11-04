
import { ArrowUpRight, Github } from 'lucide-react';

export const About = () => {
  return (
    <section
      id="about"
      className="border-t border-zinc-100 bg-white py-16 transition-colors sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="mb-10 sm:mb-16">
          <span className="mb-2 block text-xs font-mono font-bold uppercase tracking-widest text-[#888]">
            ( 01 — About Me )
          </span>

          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-red-500 sm:text-sm">
            The person behind the code
          </p>

          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#101010] min-[380px]:text-5xl sm:text-6xl lg:text-7xl">
            I BUILD
            <br />
            FOR THE WEB.
          </h2>
        </div>

        <div className="mb-12 grid grid-cols-1 items-start gap-8 sm:mb-16 sm:gap-10 lg:mb-20 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-5 sm:space-y-6 lg:col-span-7">
            <p className="text-lg font-bold leading-snug text-[#101010] min-[380px]:text-xl sm:text-2xl">
              I'm Yousuf — a Full Stack developer and Computer Science student at Varendra University who enjoys turning ideas into thoughtful digital experiences.
            </p>

            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
              I work with React, Next.js, TypeScript, and Tailwind CSS to create responsive, accessible, and interactive interfaces. I'm also exploring backend development to understand how complete web applications work, from UI to database.
            </p>

            <p className="text-xs font-mono leading-relaxed text-zinc-500 sm:text-sm">
              Always learning. Always building. Always looking for a better way to solve problems.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-5">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm sm:p-6">
              <span className="mb-1 block text-xs font-mono font-bold uppercase text-red-500">
                LOCATION & EDUCATION
              </span>

              <p className="text-base font-bold text-[#101010] sm:text-lg">
                Varendra University, Rajshahi
              </p>

              <p className="mt-1 text-xs leading-relaxed text-zinc-500 sm:text-sm">
                Department of Computer Science & Engineering · Bangladesh
              </p>
            </div>

            <a
              href="https://github.com/yousufali2525"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 items-center justify-between gap-3 rounded-2xl bg-[#101010] p-4 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 sm:p-5"
            >
              <div className="flex min-w-0 items-center gap-3">
                <Github className="h-5 w-5 shrink-0" />

                <span className="text-xs font-bold uppercase tracking-wider sm:text-sm">
                  Explore My GitHub
                </span>
              </div>

              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          <div className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm transition-all duration-300 hover:border-red-500/50 hover:shadow-md sm:p-7 lg:p-8">
            <span className="mb-3 block text-xs font-mono font-bold uppercase text-red-500">
              01 / What I Do
            </span>

            <h3 className="mb-2 text-lg font-bold text-[#101010] transition-colors group-hover:text-red-500 sm:text-xl">
              Web Development
            </h3>

            <p className="text-sm leading-relaxed text-zinc-600">
              Responsive interfaces, reusable components, and smooth user experiences built with modern web technologies.
            </p>
          </div>

          <div className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm transition-all duration-300 hover:border-red-500/50 hover:shadow-md sm:p-7 lg:p-8">
            <span className="mb-3 block text-xs font-mono font-bold uppercase text-red-500">
              02 / What I Explore
            </span>

            <h3 className="mb-2 text-lg font-bold text-[#101010] transition-colors group-hover:text-red-500 sm:text-xl">
              Motion & Interaction
            </h3>

            <p className="text-sm leading-relaxed text-zinc-600">
              Learning to build meaningful animations and interactive experiences that make interfaces feel alive and fluid.
            </p>
          </div>

          <div className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm transition-all duration-300 hover:border-red-500/50 hover:shadow-md sm:col-span-2 sm:p-7 lg:col-span-1 lg:p-8">
            <span className="mb-3 block text-xs font-mono font-bold uppercase text-red-500">
              03 / Where I'm Going
            </span>

            <h3 className="mb-2 text-lg font-bold text-[#101010] transition-colors group-hover:text-red-500 sm:text-xl">
              Full-Stack Knowledge
            </h3>

            <p className="text-sm leading-relaxed text-zinc-600">
              Expanding my backend skills with APIs, databases, and authentication while strengthening my frontend foundation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
