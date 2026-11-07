
import { ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

const DiscordIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const FacebookIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4z" />
  </svg>
);

const XIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 13.9 4.9 22H1.8l7.3-8.4L1.3 2h6.5l4.5 7.5L18.9 2zm-1.1 18h1.7L6.8 3.9H5L17.8 20z" />
  </svg>
);

const WhatsAppIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.5 23.2l5.7-1.5A11.8 11.8 0 0 0 20.5 3.5zM12 21a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.4.9.9-3.3-.2-.4A9.8 9.8 0 1 1 12 21zm5.4-7.3c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.5-3.8-3.3-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5s-.6-1.4-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.3s1 2.7 1.2 2.9c0 0 2 3.1 4.9 4.3 1.8.8 2.5.9 3.4.8.5-.1 1.6-.7 1.8-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.4z" />
  </svg>
);

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white transition-colors">
      <div
        aria-hidden="true"
        className="hero-bg-text pointer-events-none absolute left-1/2 top-[12%] z-0 -translate-x-1/2 whitespace-nowrap text-center text-[20vw] font-black leading-none tracking-tighter text-[#f2f2f4] select-none sm:top-[14%] sm:text-[18vw] lg:top-[16%] lg:text-[16vw]"
      >
        DEVELOPER
      </div>

      <section
        id="home"
        className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-4 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-20"
      >
        <div className="grid flex-1 grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_1.1fr_0.85fr] lg:gap-6">
          <div className="hero-intro order-2 self-center space-y-4 text-center lg:order-1 lg:text-left">
            <p className="text-xs font-extrabold tracking-[0.25em] text-[#888] uppercase">
              HELLO! I'M YOUSUF
            </p>

            <h1 className="text-3xl font-black leading-[1.08] tracking-tight text-[#101010] min-[380px]:text-4xl sm:text-5xl lg:text-6xl">
              I'M Web Developer
            </h1>

            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-red-500">
              <span>CREATE A WEB APP.</span>
            </div>

            <p className="flex items-center justify-center gap-2 text-sm font-semibold text-[#333] min-[380px]:text-base sm:text-lg lg:justify-start">
              <span className="text-2xl font-bold leading-none text-red-500">→</span>
              <span>Web Development & Modern UI</span>
            </p>

            <p className="mx-auto max-w-md text-sm leading-relaxed text-zinc-600 lg:mx-0">
              Computer Science student at{' '}
              <strong className="font-bold text-[#101010]">
                Varendra University, Rajshahi, Bangladesh
              </strong>
              . Crafting responsive web applications with precision, speed, and smooth physics.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3 sm:gap-4 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-red-500/40 min-[380px]:px-5 min-[380px]:text-xs sm:px-6"
              >
                <span>View Projects</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-[#101010] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500 hover:text-red-500 min-[380px]:px-5 min-[380px]:text-xs sm:px-6"
              >
                Say Hello
              </a>
            </div>

            <div className="mx-auto grid w-full max-w-[390px] grid-cols-3 items-center justify-items-center gap-x-2 gap-y-4 pt-4 text-xs font-mono lg:mx-0">
              <a href="https://github.com/yousufali2525" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap font-medium text-[#181717] transition-all duration-200 hover:-translate-y-0.5 hover:text-red-500">
                <GithubIcon />
                <span>GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/yousufali2525/" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap font-medium text-[#0A66C2] transition-all duration-200 hover:-translate-y-0.5 hover:text-red-500">
                <LinkedinIcon />
                <span>LinkedIn</span>
              </a>

              <a href="https://discord.com/users/1520096208691925102" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap font-medium text-[#5865F2] transition-all duration-200 hover:-translate-y-0.5 hover:text-red-500" title="Discord: yousufali2525">
                <DiscordIcon />
                <span>Discord</span>
              </a>

              <a href="https://www.facebook.com/yousufali25" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap font-medium text-[#1877F2] transition-all duration-200 hover:-translate-y-0.5 hover:text-red-500" title="Facebook: yousufali25">
                <FacebookIcon />
                <span>Facebook</span>
              </a>

              <a href="https://x.com/yousufali2525" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap font-medium text-[#101010] transition-all duration-200 hover:-translate-y-0.5 hover:text-red-500" title="X: yousufali2525">
                <XIcon />
                <span>X</span>
              </a>

              <a href="https://wa.me/8801521748537" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap font-medium text-[#25D366] transition-all duration-200 hover:-translate-y-0.5 hover:text-red-500" title="WhatsApp: +880 1521-748537">
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="hero-image order-1 relative flex h-[280px] items-end justify-center min-[380px]:h-[320px] sm:h-[440px] lg:order-2 lg:h-[600px]">
            <div className="absolute bottom-[8%] left-1/2 h-[65%] w-[75%] -translate-x-1/2 rounded-full bg-gradient-to-t from-red-100/70 via-rose-50/40 to-transparent blur-3xl" />

            <div className="absolute bottom-[5%] left-1/2 h-[8%] w-[65%] -translate-x-1/2 rounded-full bg-zinc-300/30 blur-2xl" />

            <div className="relative z-10 flex h-full w-full max-w-[460px] items-end justify-center">
              <img
                src="/profile.png"
                alt="Yousuf Ali - Web Developer"
                fetchPriority="high"
                draggable={false}
                className="relative z-10 max-h-full max-w-full w-auto select-none object-contain object-bottom drop-shadow-[0_24px_35px_rgba(0,0,0,0.16)] transition-transform duration-500 ease-out hover:scale-[1.035]"
              />
            </div>
          </div>

          <div className="order-3 grid grid-cols-1 gap-3.5 self-center sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-transparent bg-transparent p-4 shadow-none backdrop-blur-none transition-all duration-300 hover:border-red-500/50 hover:bg-red-50/20 sm:p-5">
              <span className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-red-500">
                01 / CORE FOCUS
              </span>
              <h3 className="mb-1 text-base font-bold text-[#101010]">
                Interactive Interfaces
              </h3>
              <p className="text-xs leading-relaxed text-zinc-600">
                Responsive layouts, reusable components, and smooth micro-interactions built with React & Tailwind.
              </p>
            </div>

            <div className="rounded-2xl border border-transparent bg-transparent p-4 shadow-none backdrop-blur-none transition-all duration-300 hover:border-red-500/50 hover:bg-red-50/20 sm:p-5">
              <span className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-red-500">
                02 / ACADEMIC BACKGROUND
              </span>
              <h3 className="mb-1 text-base font-bold text-[#101010]">
                Varendra University
              </h3>
              <p className="text-xs leading-relaxed text-zinc-600">
                Department of Computer Science & Engineering, Rajshahi, Bangladesh.
              </p>
            </div>

            <div className="rounded-2xl border border-transparent bg-transparent p-4 shadow-none backdrop-blur-none transition-all duration-300 hover:border-red-500/50 hover:bg-red-50/20 sm:col-span-2 sm:p-5 lg:col-span-1">
              <span className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-red-500">
                03 / FULL-STACK PIPELINE
              </span>
              <h3 className="mb-1 text-base font-bold text-[#101010]">
                APIs & State Architecture
              </h3>
              <p className="text-xs leading-relaxed text-zinc-600">
                Full-stack workflows with TypeScript, Node.js, and modern relational databases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-4 w-full overflow-hidden border-y border-zinc-800 bg-[#121214] py-3.5 text-white shadow-inner select-none">
        <div className="animate-marquee-left flex w-max text-xs font-mono font-bold uppercase tracking-widest sm:text-sm">
          <div className="flex shrink-0 items-center">
            <span className="mx-4 text-sm text-red-500">✦</span>
            <span>FULL STACK DEVELOPER</span>
            <span className="mx-4 text-sm text-red-500">✦</span>
            <span>NEXT.JS & REACT</span>
            <span className="mx-4 text-sm text-red-500">✦</span>
            <span>TAILWIND CSS</span>
            <span className="mx-4 text-sm text-red-500">✦</span>
            <span>VARENDRA UNIVERSITY</span>
            <span className="mx-4 text-sm text-red-500">✦</span>
            <span>CREATIVE MOTION PHYSICS</span>
            <span className="mx-4 text-sm text-red-500">✦</span>
            <span>OPEN TO WORK</span>
          </div>

          <div className="flex shrink-0 items-center" aria-hidden="true">
            <span className="mx-4 text-sm text-red-500">✦</span>
            <span>FULL STACK DEVELOPER</span>
            <span className="mx-4 text-sm text-red-500">✦</span>
            <span>NEXT.JS & REACT</span>
            <span className="mx-4 text-sm text-red-500">✦</span>
            <span>TAILWIND CSS</span>
            <span className="mx-4 text-sm text-red-500">✦</span>
            <span>VARENDRA UNIVERSITY</span>
            <span className="mx-4 text-sm text-red-500">✦</span>
            <span>CREATIVE MOTION PHYSICS</span>
            <span className="mx-4 text-sm text-red-500">✦</span>
            <span>OPEN TO WORK</span>
          </div>
        </div>
      </div>
    </div>
  );
};
