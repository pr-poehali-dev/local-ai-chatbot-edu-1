import Icon from '@/components/ui/icon';

export default function FooterSection() {
  return (
    <footer className="border-t border-[hsl(220,15%,14%)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-neon flex items-center justify-center">
            <Icon name="Zap" size={14} className="text-white" />
          </div>
          <span className="font-cormorant text-lg font-semibold text-white">
            Edu<span className="text-neon">Flow</span>
          </span>
        </div>
        <p className="text-xs text-[hsl(215,15%,40%)]">
          © 2025 EduFlow. Все права защищены.
        </p>
        <div className="flex items-center gap-5 text-xs text-[hsl(215,15%,45%)]">
          <button className="hover:text-white transition-colors">Политика конфиденциальности</button>
          <button className="hover:text-white transition-colors">Условия использования</button>
        </div>
      </div>
    </footer>
  );
}
