
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const closeMenu = () => setMobileOpen(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) closeMenu();
    };

    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed left-0 top-0 z-[1000] w-full pointer-events-none">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="navbar-main mt-3 sm:mt-5 flex items-center justify-between gap-2 sm:gap-3 rounded-full border border-zinc-200/90 bg-white/90 px-3 py-2.5 sm:px-5 sm:py-3 md:px-7 shadow-lg shadow-black/5 backdrop-blur-2xl transition-all pointer-events-auto">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl sm:text-3xl font-extrabold tracking-tight text-[#101010] shrink-0"
          >
            Yousuf<span className="text-red-500">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-5 lg:gap-8 text-sm font-semibold text-[#333]">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              onClick={closeMenu}
              className="px-3 sm:px-5 py-2 sm:py-2.5 text-[9px] sm:text-xs font-bold uppercase tracking-wider text-white bg-red-500 hover:bg-red-600 rounded-full transition-all duration-300 shadow-md shadow-red-500/25 whitespace-nowrap"
            >
              Let's Talk
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden p-2 text-zinc-700 hover:text-red-500 transition-colors rounded-full hover:bg-zinc-100"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[999] bg-white/98 backdrop-blur-xl pointer-events-auto"
          onClick={closeMenu}
        >
          <div
            id="mobile-navigation"
            className="min-h-[100dvh] flex flex-col justify-between gap-8 overflow-y-auto p-5 pt-8 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <a
                href="#home"
                onClick={closeMenu}
                className="text-3xl font-extrabold text-[#101010]"
              >
                Yousuf<span className="text-red-500">.</span>
              </a>

              <button
                type="button"
                onClick={closeMenu}
                className="p-2 rounded-full text-zinc-500 hover:text-red-500 hover:bg-zinc-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <ul className="flex flex-col gap-5 sm:gap-7 text-2xl sm:text-3xl font-bold text-[#101010]">
              {navItems.map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="flex items-center gap-3 hover:text-red-500 transition-colors"
                  >
                    <span className="text-xs font-mono text-red-500">
                      0{index + 1}
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-zinc-200">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block w-full py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white bg-red-500 hover:bg-red-600 rounded-full shadow-lg shadow-red-500/25 transition-colors"
              >
                Let's Talk
              </a>

              <p className="text-center text-xs text-zinc-400 mt-5">
                © {new Date().getFullYear()} Yousuf Ali
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
