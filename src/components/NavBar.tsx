import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface NavBarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const links = [
  { id: 'home', label: 'Главная' },
  { id: 'courses', label: 'О занятиях' },
  { id: 'chatbot', label: 'Чат-бот' },
  { id: 'contacts', label: 'Контакты' },
];

export default function NavBar({ activeSection, onNavigate }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl border-b'
          : 'bg-transparent'
      }`}
      style={scrolled ? {
        background: 'hsl(var(--background)/0.9)',
        borderColor: 'hsl(var(--border))',
      } : undefined}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 group"
        >
          <img
            src="https://lidernao.ru/wp-content/uploads/2023/08/logo_vec.svg"
            alt="ДЮЦ Лидер"
            className="h-[88px] w-auto"
          />
          <span className="font-cormorant text-xl font-semibold tracking-wide" style={{ color: 'hsl(var(--foreground))' }}>
            ДЮЦ <span className="text-neon">ЛИДЕР</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`nav-link text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-neon'
                  : 'text-[hsl(var(--muted-foreground))]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => onNavigate('courses')}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-neon text-white text-sm font-medium hover:opacity-90 transition-opacity glow-neon"
        >
          Начать учиться
        </button>

        <button
          className="md:hidden text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden backdrop-blur-xl border-b px-6 py-4 flex flex-col gap-4 animate-fade-in"
          style={{ background: 'hsl(var(--card)/0.97)', borderColor: 'hsl(var(--border))' }}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
              className={`text-left text-sm font-medium py-2 transition-colors ${
                activeSection === link.id ? 'text-neon' : 'text-[hsl(var(--muted-foreground))]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { onNavigate('courses'); setMenuOpen(false); }}
            className="px-4 py-2 rounded-lg bg-neon text-white text-sm font-medium text-center"
          >
            Начать учиться
          </button>
        </div>
      )}
    </nav>
  );
}