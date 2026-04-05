import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

export type ThemeMode = 'dark' | 'light';
export type A11yMode = 'none' | 'vision' | 'contrast';

interface Settings {
  theme: ThemeMode;
  a11y: A11yMode;
  largeText: boolean;
}

const STORAGE_KEY = 'eduflow-a11y';

function loadSettings(): Settings {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    return { theme: 'dark', a11y: 'none', largeText: false };
  }
  return { theme: 'dark', a11y: 'none', largeText: false };
}

function applySettings(settings: Settings, root: HTMLElement) {
  root.classList.remove('theme-light', 'a11y-vision', 'a11y-contrast', 'a11y-large-text');
  if (settings.theme === 'light') root.classList.add('theme-light');
  if (settings.a11y === 'vision') root.classList.add('a11y-vision');
  if (settings.a11y === 'contrast') root.classList.add('a11y-contrast');
  if (settings.largeText) root.classList.add('a11y-large-text');
}

export default function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(loadSettings);

  useEffect(() => {
    applySettings(settings, document.documentElement);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const update = (patch: Partial<Settings>) =>
    setSettings(prev => ({ ...prev, ...patch }));

  const isLight = settings.theme === 'light';

  return (
    <>
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Настройки доступности"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-all hover:scale-110 glow-neon"
        style={{ boxShadow: '0 0 20px hsl(var(--neon)/0.5)' }}
      >
        <Icon name="Accessibility" size={20} />
      </button>

      {open && (
        <div
          className="fixed bottom-22 right-6 z-50 w-72 rounded-2xl border shadow-2xl overflow-hidden animate-slide-in-right"
          style={{
            background: 'hsl(var(--card))',
            borderColor: 'hsl(var(--border))',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
          }}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: 'hsl(var(--border))' }}>
            <div className="flex items-center gap-2">
              <Icon name="Accessibility" size={16} className="text-[hsl(var(--primary))]" />
              <span className="font-semibold text-sm" style={{ color: 'hsl(var(--foreground))' }}>
                Доступность
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              <Icon name="X" size={16} />
            </button>
          </div>

          <div className="p-5 flex flex-col gap-5">

            {/* Тема */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Тема
              </p>
              <div className="grid grid-cols-2 gap-2">
                {([['dark', 'Moon', 'Тёмная'], ['light', 'Sun', 'Светлая']] as const).map(([val, icon, label]) => (
                  <button
                    key={val}
                    onClick={() => update({ theme: val })}
                    className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border text-xs font-medium transition-all"
                    style={{
                      borderColor: settings.theme === val ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                      background: settings.theme === val ? 'hsl(var(--primary)/0.12)' : 'transparent',
                      color: settings.theme === val ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
                    }}
                  >
                    <Icon name={icon} size={18} />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Режим для слабовидящих */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Режим зрения
              </p>
              <div className="flex flex-col gap-2">
                {([
                  ['none', 'Eye', 'Обычный'],
                  ['vision', 'EyeOff', 'Для слабовидящих'],
                  ['contrast', 'Contrast', 'Высокий контраст'],
                ] as const).map(([val, icon, label]) => (
                  <button
                    key={val}
                    onClick={() => update({ a11y: val })}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all text-left"
                    style={{
                      borderColor: settings.a11y === val ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                      background: settings.a11y === val ? 'hsl(var(--primary)/0.12)' : 'transparent',
                      color: settings.a11y === val ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
                    }}
                  >
                    <Icon name={icon} fallback="Eye" size={16} />
                    {label}
                    {settings.a11y === val && (
                      <Icon name="Check" size={14} className="ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Крупный шрифт */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Размер текста
              </p>
              <button
                onClick={() => update({ largeText: !settings.largeText })}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border text-sm font-medium transition-all"
                style={{
                  borderColor: settings.largeText ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                  background: settings.largeText ? 'hsl(var(--primary)/0.12)' : 'transparent',
                  color: settings.largeText ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
                }}
              >
                <div className="flex items-center gap-3">
                  <Icon name="Type" size={16} />
                  Увеличенный шрифт
                </div>
                <div
                  className="w-9 h-5 rounded-full transition-all relative"
                  style={{ background: settings.largeText ? 'hsl(var(--primary))' : 'hsl(var(--border))' }}
                >
                  <div
                    className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all"
                    style={{ left: settings.largeText ? '18px' : '2px' }}
                  />
                </div>
              </button>
            </div>

            {/* Сброс */}
            <button
              onClick={() => update({ theme: 'dark', a11y: 'none', largeText: false })}
              className="text-xs text-center py-2 rounded-lg transition-colors hover:opacity-80"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              Сбросить настройки
            </button>
          </div>
        </div>
      )}
    </>
  );
}