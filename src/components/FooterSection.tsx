import Icon from '@/components/ui/icon';

export default function FooterSection() {
  return (
    <footer className="border-t py-8 px-4 sm:px-6" style={{ borderColor: 'hsl(var(--border))' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src="https://lidernao.ru/wp-content/uploads/2023/08/logo_vec.svg"
            alt="ДЮЦ Лидер"
            className="h-12 sm:h-20 w-auto"
          />
          <span className="font-cormorant text-base sm:text-lg font-bold" style={{ color: 'hsl(var(--foreground))' }}>
            ДЮЦ <span className="text-neon">ЛИДЕР</span>
          </span>
        </div>
        <p className="text-xs text-center" style={{ color: 'hsl(var(--muted-foreground))' }}>
          © 2025 ДЮЦ ЛИДЕР. Все права защищены.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
          <button className="hover:text-[hsl(var(--foreground))] transition-colors">Политика конфиденциальности</button>
          <button className="hover:text-[hsl(var(--foreground))] transition-colors">Условия использования</button>
        </div>
      </div>
    </footer>
  );
}