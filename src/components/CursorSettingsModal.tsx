
import { X, Sliders, RotateCcw } from 'lucide-react';
import { useCursor, type CursorTheme } from '../context/CursorContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CursorSettingsModal = ({ isOpen, onClose }: Props) => {
  const { settings, updateSettings } = useCursor();

  if (!isOpen) return null;

  const themes: { id: CursorTheme; label: string; desc: string }[] = [
    { id: 'classic', label: 'Classic Follower', desc: 'Exact replica of your screenshot (circle + center dot)' },
    { id: 'difference', label: 'Inverted Blend', desc: 'Mix-blend difference that inverts underlying colors' },
    { id: 'minimal', label: 'Minimalist Ring', desc: 'Subtle hairline stroke with gentle feedback' },
    { id: 'ring-only', label: 'Ring Only', desc: 'Pure hollow circle without center dot' },
  ];

  const resetDefaults = () => {
    updateSettings({
      enabled: true,
      hideNative: true,
      theme: 'classic',
      outerSize: 38,
      dotSize: 6,
      lerpSpeed: 0.16,
      magnetic: true,
    });
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-lg max-h-[95dvh] sm:max-h-[90vh] shadow-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <Sliders className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <h3 className="font-display font-semibold text-base sm:text-lg text-zinc-900 dark:text-zinc-100 truncate">
              Custom Cursor Studio
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close settings"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 overflow-y-auto overscroll-contain">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 block">
                  Enable Follower
                </span>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  Dual layer animated cursor
                </span>
              </div>

              <input
                type="checkbox"
                checked={settings.enabled}
                onChange={(e) => updateSettings({ enabled: e.target.checked })}
                className="w-4 h-4 accent-indigo-600 rounded cursor-pointer shrink-0"
              />
            </div>

            <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 block">
                  Hide Native Cursor
                </span>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  Hide OS standard arrow
                </span>
              </div>

              <input
                type="checkbox"
                checked={settings.hideNative}
                onChange={(e) => updateSettings({ hideNative: e.target.checked })}
                className="w-4 h-4 accent-indigo-600 rounded cursor-pointer shrink-0"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider block mb-2">
              Follower Style
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {themes.map((t) => (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => updateSettings({ theme: t.id })}
                  className={`p-3 text-left rounded-xl border transition-all ${
                    settings.theme === t.id
                      ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-900 dark:text-indigo-200'
                      : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-800 dark:text-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 font-medium text-xs">
                    <span>{t.label}</span>

                    {t.id === 'classic' && (
                      <span className="text-[10px] bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 px-1.5 py-0.5 rounded font-mono shrink-0">
                        Screenshot
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
                    {t.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center gap-2 text-xs mb-1">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  Outer Ring Diameter
                </span>
                <span className="font-mono text-zinc-500 shrink-0">
                  {settings.outerSize}px
                </span>
              </div>

              <input
                type="range"
                min="24"
                max="64"
                step="2"
                value={settings.outerSize}
                onChange={(e) => updateSettings({ outerSize: Number(e.target.value) })}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center gap-2 text-xs mb-1">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  Center Dot Size
                </span>
                <span className="font-mono text-zinc-500 shrink-0">
                  {settings.dotSize}px
                </span>
              </div>

              <input
                type="range"
                min="2"
                max="12"
                step="1"
                value={settings.dotSize}
                onChange={(e) => updateSettings({ dotSize: Number(e.target.value) })}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center gap-2 text-xs mb-1">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  Follower Smoothness / Speed (Lerp)
                </span>
                <span className="font-mono text-zinc-500 shrink-0">
                  {Math.round(settings.lerpSpeed * 100)}%
                </span>
              </div>

              <input
                type="range"
                min="0.06"
                max="0.32"
                step="0.02"
                value={settings.lerpSpeed}
                onChange={(e) => updateSettings({ lerpSpeed: Number(e.target.value) })}
                className="w-full accent-indigo-600 cursor-pointer"
              />

              <div className="flex justify-between text-[10px] text-zinc-400 mt-0.5">
                <span>Laggy & Smooth</span>
                <span>Snappy & Tight</span>
              </div>
            </div>
          </div>

          <div className="p-3 sm:p-4 bg-zinc-100 dark:bg-zinc-800/80 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 block mb-3">
              Interactive Test Sandbox (Hover these elements):
            </span>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                type="button"
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shadow-sm"
              >
                Button Hover (Expands)
              </button>

              <div
                data-cursor="view"
                data-cursor-text="VIEW"
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-900 dark:bg-zinc-700 text-white cursor-pointer select-none"
              >
                Project Card (Shows VIEW)
              </div>

              <input
                type="text"
                placeholder="Text field..."
                className="px-2.5 py-1 text-xs rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white w-full sm:w-32 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 px-4 sm:px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 shrink-0">
          <button
            type="button"
            onClick={resetDefaults}
            className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors py-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-semibold rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
