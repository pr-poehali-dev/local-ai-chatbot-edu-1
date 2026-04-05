import { useState } from 'react';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'Mail', label: 'Email', value: 'support@eduflow.ru', color: 'hsl(245,80%,65%)' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (800) 000-00-00', color: 'hsl(42,90%,58%)' },
  { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Примерная, 1', color: 'hsl(160,60%,45%)' },
  { icon: 'Clock', label: 'Часы работы', value: 'Пн–Вс 9:00–21:00', color: 'hsl(320,70%,60%)' },
];

export default function ContactsSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(42,90%,58%)]/30 bg-[hsl(42,90%,58%)]/10 text-xs font-medium text-gold mb-6">
            <Icon name="Send" size={12} />
            Связаться с нами
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-semibold text-white mb-4">
            <span className="text-gold italic">Контакты</span>
          </h2>
          <p className="text-[hsl(215,15%,55%)] text-lg max-w-xl mx-auto">
            Есть вопросы? Напишите нам — ответим в течение 2 часов.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contacts.map((c, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-[hsl(220,15%,16%)] bg-[hsl(220,18%,9%)] hover:border-[hsl(245,80%,65%)]/30 transition-all group card-hover"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                    style={{ background: `${c.color}20` }}
                  >
                    <Icon name={c.icon} fallback="Info" size={18} style={{ color: c.color }} />
                  </div>
                  <div className="text-xs text-[hsl(215,15%,45%)] uppercase tracking-widest mb-1">{c.label}</div>
                  <div className="text-sm text-white font-medium">{c.value}</div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl border border-[hsl(245,80%,65%)]/20 bg-[hsl(245,80%,65%)]/5">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Icon name="Headphones" size={18} className="text-neon" />
                Мгновенная поддержка
              </h3>
              <p className="text-sm text-[hsl(215,15%,55%)] leading-relaxed mb-4">
                Используйте встроенный чат-бот для мгновенных ответов — он работает 24/7 и знает ответы на 95% вопросов.
              </p>
              <button
                onClick={() => document.getElementById('chatbot')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 text-sm text-neon font-medium hover:opacity-80 transition-opacity"
              >
                Открыть чат <Icon name="ArrowRight" size={14} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              {['Telegram', 'Vk', 'Youtube'].map((s) => (
                <button
                  key={s}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[hsl(220,15%,18%)] text-sm text-[hsl(215,15%,55%)] hover:border-[hsl(245,80%,65%)]/40 hover:text-white transition-all"
                >
                  <Icon name="ExternalLink" size={13} />
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[hsl(220,15%,16%)] bg-[hsl(220,18%,9%)] p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-8">
                <div className="w-16 h-16 rounded-full bg-neon/20 flex items-center justify-center glow-neon animate-float">
                  <Icon name="CheckCircle" size={32} className="text-neon" />
                </div>
                <h3 className="text-xl font-semibold text-white">Сообщение отправлено!</h3>
                <p className="text-[hsl(215,15%,55%)] text-sm max-w-xs">
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
                <h3 className="text-white font-semibold text-lg mb-2">Написать нам</h3>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[hsl(215,15%,50%)] uppercase tracking-widest">Имя</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="Ваше имя"
                    className="px-4 py-3 rounded-xl bg-[hsl(220,15%,12%)] border border-[hsl(220,15%,18%)] text-sm text-white placeholder-[hsl(215,15%,40%)] focus:outline-none focus:border-[hsl(245,80%,65%)]/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[hsl(215,15%,50%)] uppercase tracking-widest">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    placeholder="email@example.com"
                    className="px-4 py-3 rounded-xl bg-[hsl(220,15%,12%)] border border-[hsl(220,15%,18%)] text-sm text-white placeholder-[hsl(215,15%,40%)] focus:outline-none focus:border-[hsl(245,80%,65%)]/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[hsl(215,15%,50%)] uppercase tracking-widest">Сообщение</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="Ваш вопрос или сообщение..."
                    className="px-4 py-3 rounded-xl bg-[hsl(220,15%,12%)] border border-[hsl(220,15%,18%)] text-sm text-white placeholder-[hsl(215,15%,40%)] focus:outline-none focus:border-[hsl(245,80%,65%)]/50 transition-colors resize-none"
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
