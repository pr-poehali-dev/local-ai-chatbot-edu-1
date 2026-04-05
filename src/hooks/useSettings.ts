import { useState, useEffect } from 'react';

export type ThemeMode = 'dark' | 'light';
export type A11yMode = 'none' | 'vision' | 'contrast';

export interface Settings {
  theme: ThemeMode;
  a11y: A11yMode;
  largeText: boolean;
}

const STORAGE_KEY = 'eduflow-a11y';

function loadSettings(): Settings {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {
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

export function useSettings() {
  const [settings, setSettings] = useState<Settings>(loadSettings);

  useEffect(() => {
    applySettings(settings, document.documentElement);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  const update = (patch: Partial<Settings>) =>
    setSettings(prev => ({ ...prev, ...patch }));

  return { settings, update };
}
