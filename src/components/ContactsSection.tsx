import { useState } from 'react';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'Mail', label: 'Email', value: 'lidernao@mail.ru', color: 'hsl(245,80%,65%)' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (81853) 4-22-43', color: 'hsl(42,90%,58%)' },
  { icon: 'MapPin', label: 'Адрес', value: '166000, НАО, г. Нарьян-Мар, ул. Выучейского, д. 30', color: 'hsl(160,60%,45%)' },
  { icon: 'Globe', label: 'Сайт', value: 'lidernao.ru', color: 'hsl(320,70%,60%)' },
];

export default function ContactsSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-16 md:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(var(--gold))]/30 bg-[hsl(var(--gold))]/10 text-xs font-medium text-gold mb-6">
            <Icon name="Send" size={12} />
            Связаться с нами
          </div>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-semibold mb-4" style={{ color: 'hsl(var(--foreground))' }}>
            <span className="text-gold italic">Контакты</span>
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Есть вопросы? Напишите нам — ответим в течение 2 часов.
          </p>
        </div>

        {/* Карта */}
        <div className="rounded-2xl overflow-hidden border mb-8 md:mb-10" style={{ height: '240px', borderColor: 'hsl(var(--border))' }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=53.089755%2C67.638250&z=16&pt=53.089755%2C67.638250%2Cpm2rdm&text=%D0%9D%D0%B0%D1%80%D1%8C%D1%8F%D0%BD-%D0%9C%D0%B0%D1%80%2C%20%D1%83%D0%BB.%20%D0%92%D1%8B%D1%83%D1%87%D0%B5%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%2C%2030"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            title="Расположение ДЮЦ Лидер на карте"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contacts.map((c, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border transition-all group card-hover"
                  style={{ borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                    style={{ background: `${c.color}20` }}
                  >
                    <Icon name={c.icon} fallback="Info" size={18} style={{ color: c.color }} />
                  </div>
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'hsl(var(--muted-foreground))' }}>{c.label}</div>
                  <div className="text-sm font-medium" style={{ color: 'hsl(var(--foreground))' }}>{c.value}</div>
                </div>
              ))}
            </div>



            <div className="flex items-center gap-4">
              {[
                { label: 'ВКонтакте', href: 'https://vk.com/naolider' },
                { label: 'MAX', href: 'https://max.ru/id8300005685_gos' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm transition-all hover:border-[hsl(var(--primary))/0.4]"
                  style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--muted-foreground))' }}
                >
                  <Icon name="ExternalLink" size={13} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border p-5 sm:p-8" style={{ borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))' }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-8">
                <div className="w-16 h-16 rounded-full bg-neon/20 flex items-center justify-center glow-neon animate-float">
                  <Icon name="CheckCircle" size={32} className="text-neon" />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: 'hsl(var(--foreground))' }}>Сообщение отправлено!</h3>
                <p className="text-sm max-w-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  Мы ответим на ваш адрес в течение 2 часов.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  className="mt-2 text-sm text-neon hover:opacity-80 transition-opacity"
                >
                  Отправить ещё раз
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-semibold text-lg mb-2" style={{ color: 'hsl(var(--foreground))' }}>Написать нам</h3>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest" style={{ color: 'hsl(var(--muted-foreground))' }}>Имя</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="Ваше имя"
                    className="px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
                    style={{
                      background: 'hsl(var(--input))',
                      border: '1px solid hsl(var(--border))',
                      color: 'hsl(var(--foreground))',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest" style={{ color: 'hsl(var(--muted-foreground))' }}>Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    placeholder="email@example.com"
                    className="px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
                    style={{
                      background: 'hsl(var(--input))',
                      border: '1px solid hsl(var(--border))',
                      color: 'hsl(var(--foreground))',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest" style={{ color: 'hsl(var(--muted-foreground))' }}>Сообщение</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="Ваш вопрос или сообщение..."
                    className="px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors resize-none"
                    style={{
                      background: 'hsl(var(--input))',
                      border: '1px solid hsl(var(--border))',
                      color: 'hsl(var(--foreground))',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-neon text-white font-semibold hover:opacity-90 transition-opacity glow-neon mt-1"
                >
                  <Icon name="Send" size={16} />
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}