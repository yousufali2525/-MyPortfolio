import { useRef, useState, type TouchEvent } from 'react';
import { ArrowUp, MapPin } from 'lucide-react';

export const Footer = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nameLetters = ['Y', 'O', 'U', 'S', 'U', 'F', ' ', 'A', 'L', 'I'];

  const handleTouch = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (!touch) return;

    const index = letterRefs.current.findIndex((letter) => {
      if (!letter) return false;

      const rect = letter.getBoundingClientRect();

      return (
        touch.clientX >= rect.left &&
        touch.clientX <= rect.right &&
        touch.clientY >= rect.top &&
        touch.clientY <= rect.bottom
      );
    });

    setActiveIndex(index !== -1 ? index : null);
  };

  const handleTouchEnd = () => {
    setActiveIndex(null);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black pb-8 pt-12 text-white sm:pb-10 sm:pt-16 lg:pb-12 lg:pt-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">

        <div
          className="flex w-full select-none items-center justify-center overflow-hidden py-8 sm:py-12 lg:py-16"
          onTouchStart={handleTouch}
          onTouchMove={handleTouch}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <div className="flex w-full flex-nowrap items-center justify-between whitespace-nowrap font-black leading-none tracking-tighter text-[clamp(2rem,11vw,10rem)]">
            {nameLetters.map((char, index) =>
              char === ' ' ? (
                <span
                  key={index}
                  className="inline-block w-[0.3em] shrink-0"
                >
                  &nbsp;
                </span>
              ) : (
                <span
                  key={index}
                  ref={(element) => {
                    letterRefs.current[index] = element;
                  }}
                  className={`footer-letter inline-block shrink-0 cursor-pointer text-transparent transition-all duration-300 ease-out [-webkit-text-stroke:1px_rgba(255,255,255,0.5)] sm:[-webkit-text-stroke:1.5px_rgba(255,255,255,0.5)] ${
                    activeIndex === index
                      ? '-translate-y-2 text-red-500 sm:-translate-y-4'
                      : ''
                  } hover:-translate-y-2 hover:text-red-500 sm:hover:-translate-y-4`}
                  style={
                    activeIndex === index
                      ? {
                          WebkitTextFillColor: '#ef4444',
                          WebkitTextStrokeColor: '#ef4444',
                        }
                      : undefined
                  }
                >
                  {char}
                </span>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-7 border-t border-white/15 pt-8 text-center text-xs text-white/80 sm:pt-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:text-left">

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 lg:justify-start">
            {[
              ['Home', '#home'],
              ['About', '#about'],
              ['Skills', '#skills'],
              ['Projects', '#projects'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="transition-colors duration-300 hover:text-red-500"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="px-2 text-center font-medium leading-relaxed text-white/80">
            <span>
              © {new Date().getFullYear()} Yousuf Ali.
            </span>
            <span className="block sm:inline">
              {' '}Designed & Developed with passion | Full-Stack Web Developer.
            </span>
          </div>

          {/* Location & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-end">

            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-white transition-all duration-300 hover:border-red-500/60">
              <MapPin className="h-4 w-4 shrink-0 text-red-500" />
              <span className="whitespace-nowrap font-medium">
                Rajshahi, Bangladesh
              </span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-white transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
};