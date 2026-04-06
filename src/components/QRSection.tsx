import Icon from '@/components/ui/icon';

const socials = [
  {
    name: 'ВКонтакте',
    url: 'https://vk.com/naolider',
    icon: 'Users',
    color: 'hsl(214,80%,56%)',
    desc: 'Новости, фото и анонсы событий ДЮЦ «Лидер»',
  },
  {
    name: 'MAX',
    url: 'https://max.ru/id8300005685_gos',
    icon: 'MessageCircle',
    color: 'hsl(180,55%,45%)',
    desc: 'Напишите нам напрямую в мессенджере MAX',
    extraDesc: 'Новости, фото и анонсы событий ДЮЦ «Лидер»',
  },
];

export default function QRSection() {
  return (
    <section id="qr" className="py-28 px-6" style={{ background: 'hsl(var(--background))' }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(var(--neon))]/30 bg-[hsl(var(--neon))]/10 text-xs font-medium text-neon mb-6">
            <Icon name="QrCode" size={12} />
            Мы в социальных сетях
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-semibold mb-4" style={{ color: 'hsl(var(--foreground))' }}>
            Подключайтесь <span className="text-neon italic">к нам</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Наведите камеру на QR-код или нажмите кнопку для перехода
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {socials.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center gap-6 p-8 rounded-2xl border w-full max-w-sm"
              style={{ borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))' }}
            >
              <div className="flex items-center gap-3">

                <span className="text-lg font-semibold" style={{ color: 'hsl(var(--foreground))' }}>{s.name}</span>
              </div>

              {/* QR-код через публичный API */}
              <div
                className="rounded-2xl overflow-hidden p-3 bg-white"
                style={{ boxShadow: `0 0 24px ${s.color}30` }}
              >
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(s.url)}&color=000000&bgcolor=ffffff&margin=4`}
                  alt={`QR-код ${s.name}`}
                  width={220}
                  height={220}
                />
              </div>

              {!s.extraDesc && (
              <p className="text-sm text-center" style={{ color: 'hsl(var(--muted-foreground))' }}>
                {s.desc}
              </p>
              )}
              {s.extraDesc && (
                <p className="text-sm text-center" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {s.extraDesc}
                </p>
              )}

              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90 w-full justify-center"
                style={{ background: s.color }}
              >
                <Icon name="ExternalLink" size={15} />
                Перейти в {s.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}