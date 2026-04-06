import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const stats = [
  { value: '17+', label: 'Программ' },
];

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={orbRef}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl transition-transform duration-500 ease-out"
          style={{ background: 'radial-gradient(circle, hsl(245,80%,65%), transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full opacity-10 blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, hsl(42,90%,58%), transparent 70%)' }}
        />
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(hsl(220,15%,20%) 1px, transparent 1px), linear-gradient(90deg, hsl(220,15%,20%) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(245,80%,65%)]/30 bg-[hsl(245,80%,65%)]/10 text-xs font-medium text-neon mb-8 animate-fade-in-up"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
          Новый сезон занятий — открыт набор
        </div>

        <h1
          className="font-cormorant text-4xl sm:text-6xl md:text-8xl font-semibold leading-none mb-6 animate-fade-in-up delay-100"
          style={{ opacity: 0 }}
        >
          <span style={{ color: 'hsl(var(--foreground))' }}>Мы раскроем в вашем ребенке</span>
          <br />
          <span className="text-neon text-glow italic py-0 px-[11px] sm:text-6xl md:text-8xl my-0 mx-0 text-8xl">Лидера</span>
        </h1>

        <p
          className="text-[hsl(215,15%,60%)] text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200"
          style={{ opacity: 0 }}
        >Образовательная платформа с живыми наставниками, интерактивными заданиями. Учись в своём темпе — мы рядом.</p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300 w-full"
          style={{ opacity: 0 }}
        >
          <button
            onClick={() => onNavigate('courses')}
            className="group flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-neon text-white font-semibold text-sm sm:text-base hover:opacity-90 transition-all glow-neon hover:scale-105 w-full sm:w-auto justify-center"
          >
            Смотреть программы
            <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate('contacts')}
            className="flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl border font-medium text-sm sm:text-base transition-all w-full sm:w-auto justify-center"
            style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
          >
            <Icon name="Phone" size={18} />
            Связаться с нами
          </button>
        </div>

        <div
          className="flex items-center justify-center gap-8 animate-fade-in-up delay-400 px-0 py-[15px] mx-[376px] my-0 rounded-sm"
          style={{ opacity: 0 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-cormorant text-3xl md:text-4xl font-semibold text-gold">{stat.value}</div>
              <div className="text-xs text-[hsl(215,15%,55%)] mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => onNavigate('courses')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[hsl(215,15%,45%)] hover:text-neon transition-colors animate-float"
      >
        <span className="text-xs tracking-widest uppercase">Прокрути</span>
        <Icon name="ChevronDown" size={18} />
      </button>
    </section>
  );
}