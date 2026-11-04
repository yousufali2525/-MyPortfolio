import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const GithubIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

const DiscordIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const FacebookIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4z" />
  </svg>
);

const XIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 13.9 4.9 22H1.8l7.3-8.4L1.3 2h6.5l4.5 7.5L18.9 2zm-1.1 18h1.7L6.8 3.9H5L17.8 20z" />
  </svg>
);

const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5 3.5A11.8 11.8 0 0 0 2 17.7L.5 23.2l5.7-1.5A11.8 11.8 0 0 0 20.5 3.5zM12 21a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.4.9.9-3.3-.2-.4A9.8 9.8 0 1 1 12 21zm5.4-7.3c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.7-1.5-3.8-3.3-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5s-.6-1.4-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.9 3.4.8.5-.1 1.6-.7 1.8-1.4.2-.7.2-1.3.1-1.4-.1-.2-.3-.3-.6-.4z" />
  </svg>
);

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  const email = 'yousufali025250@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setSubmitted(true);

    window.setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-zinc-200/80 bg-white py-16 text-zinc-900 transition-colors sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="mb-10 sm:mb-16">
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-red-500">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-red-500" />
            <span>OPEN TO WORK</span>
          </div>

          <span className="mb-2 block text-xs font-mono font-bold uppercase tracking-widest text-[#888]">
            06 / Contact · Get In Touch
          </span>

          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#101010] sm:text-6xl lg:text-7xl">
            SAY <br /> HELLO<span className="text-red-500">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base lg:text-lg">
            Have a job, an internship, or a project idea? Send me a message and I will get back to you by email.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 space-y-4 lg:col-span-5">
            <div className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm sm:p-6">
              <span className="mb-3 block text-xs font-mono font-bold uppercase text-red-500">
                DIRECT INQUIRY
              </span>

              <p className="mb-4 break-all text-base font-bold text-[#101010] sm:text-lg">
                {email}
              </p>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex min-h-10 self-start items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-800 shadow-sm transition-all duration-300 hover:border-red-500 hover:bg-red-500 hover:text-white"
              >
                {copiedEmail ? (
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                <span>{copiedEmail ? 'Copied Email' : 'Copy Email'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-3">
              <a
                href="https://github.com/yousufali2525"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[76px] min-w-0 items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all hover:border-zinc-800 hover:bg-white hover:shadow-md min-[360px]:min-h-[110px] min-[360px]:flex-col min-[360px]:items-stretch"
                title="GitHub: yousufali2525"
              >
                <div className="flex items-center justify-between">
                  <GithubIcon className="h-5 w-5 shrink-0 text-[#181717] transition-transform group-hover:scale-110" />
                  <ArrowUpRight className="hidden h-4 w-4 text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#181717] min-[360px]:block" />
                </div>
                <div className="min-w-0 min-[360px]:mt-2">
                  <span className="block text-xs font-bold uppercase text-[#101010]">GitHub</span>
                  <span className="block truncate text-[10px] font-mono font-semibold text-[#181717]">yousufali2525</span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 min-[360px]:hidden" />
              </a>

              <a
                href="https://www.linkedin.com/in/yousufali2525/"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[76px] min-w-0 items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all hover:border-[#0A66C2] hover:bg-white hover:shadow-md min-[360px]:min-h-[110px] min-[360px]:flex-col min-[360px]:items-stretch"
                title="LinkedIn: yousufali2525"
              >
                <div className="flex items-center justify-between">
                  <LinkedinIcon className="h-5 w-5 shrink-0 text-[#0A66C2] transition-transform group-hover:scale-110" />
                  <ArrowUpRight className="hidden h-4 w-4 text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0A66C2] min-[360px]:block" />
                </div>
                <div className="min-w-0 min-[360px]:mt-2">
                  <span className="block text-xs font-bold uppercase text-[#101010]">LinkedIn</span>
                  <span className="block truncate text-[10px] font-mono font-semibold text-[#0A66C2]">yousufali2525</span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 min-[360px]:hidden" />
              </a>

              <a
                href="https://discord.com/users/1520096208691925102"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[76px] min-w-0 items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all hover:border-[#5865F2] hover:bg-white hover:shadow-md min-[360px]:min-h-[110px] min-[360px]:flex-col min-[360px]:items-stretch"
                title="Discord: yousufali2525"
              >
                <div className="flex items-center justify-between">
                  <DiscordIcon className="h-5 w-5 shrink-0 text-[#5865F2] transition-transform group-hover:scale-110" />
                  <ArrowUpRight className="hidden h-4 w-4 text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#5865F2] min-[360px]:block" />
                </div>
                <div className="min-w-0 min-[360px]:mt-2">
                  <span className="block text-xs font-bold uppercase text-[#101010]">Discord</span>
                  <span className="block truncate text-[10px] font-mono font-semibold text-[#5865F2]">yousufali2525</span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 min-[360px]:hidden" />
              </a>

              <a
                href="https://www.facebook.com/yousufali25"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[76px] min-w-0 items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all hover:border-[#1877F2] hover:bg-white hover:shadow-md min-[360px]:min-h-[110px] min-[360px]:flex-col min-[360px]:items-stretch"
                title="Facebook: yousufali25"
              >
                <div className="flex items-center justify-between">
                  <FacebookIcon className="h-5 w-5 shrink-0 text-[#1877F2] transition-transform group-hover:scale-110" />
                  <ArrowUpRight className="hidden h-4 w-4 text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#1877F2] min-[360px]:block" />
                </div>
                <div className="min-w-0 min-[360px]:mt-2">
                  <span className="block text-xs font-bold uppercase text-[#101010]">Facebook</span>
                  <span className="block truncate text-[10px] font-mono font-semibold text-[#1877F2]">yousufali25</span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 min-[360px]:hidden" />
              </a>

              <a
                href="https://x.com/yousufali2525"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[76px] min-w-0 items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all hover:border-zinc-800 hover:bg-white hover:shadow-md min-[360px]:min-h-[110px] min-[360px]:flex-col min-[360px]:items-stretch"
                title="X: yousufali2525"
              >
                <div className="flex items-center justify-between">
                  <XIcon className="h-5 w-5 shrink-0 text-[#101010] transition-transform group-hover:scale-110" />
                  <ArrowUpRight className="hidden h-4 w-4 text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#101010] min-[360px]:block" />
                </div>
                <div className="min-w-0 min-[360px]:mt-2">
                  <span className="block text-xs font-bold uppercase text-[#101010]">X</span>
                  <span className="block truncate text-[10px] font-mono font-semibold text-[#101010]">yousufali2525</span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 min-[360px]:hidden" />
              </a>

              <a
                href="https://wa.me/8801521748537"
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[76px] min-w-0 items-center justify-between gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 transition-all hover:border-[#25D366] hover:bg-white hover:shadow-md min-[360px]:min-h-[110px] min-[360px]:flex-col min-[360px]:items-stretch"
                title="WhatsApp: +880 1521-748537"
              >
                <div className="flex items-center justify-between">
                  <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#25D366] transition-transform group-hover:scale-110" />
                  <ArrowUpRight className="hidden h-4 w-4 text-zinc-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#25D366] min-[360px]:block" />
                </div>
                <div className="min-w-0 min-[360px]:mt-2">
                  <span className="block text-xs font-bold uppercase text-[#101010]">WhatsApp</span>
                  <span className="block truncate text-[10px] font-mono font-semibold text-[#25D366]">+880 1521-748537</span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-400 min-[360px]:hidden" />
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm sm:p-8 lg:p-10">
              {submitted ? (
                <div className="space-y-3 py-10 text-center sm:py-12">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-500">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101010] sm:text-2xl">Message Sent!</h3>
                  <p className="text-sm text-zinc-600">
                    Thank you, Yousuf will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-600">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full min-w-0 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm transition-colors focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-600">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full min-w-0 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm transition-colors focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-600">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, team, or opportunity..."
                      className="w-full min-w-0 resize-y rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm transition-colors focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-red-500 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600"
                  >
                    <span>Send Message</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};