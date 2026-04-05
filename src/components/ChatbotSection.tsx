import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  role: 'bot' | 'user';
  text: string;
  time: string;
}

const faqs = [
  { q: 'Обучение бесплатное?', a: 'Да! Все программы ДЮЦ «Лидер» для детей и подростков до 18 лет финансируются из бюджета Ненецкого Автономного Округа и предоставляются полностью бесплатно.' },
  { q: 'Сколько стоит для взрослых?', a: 'Для лиц старше 18 лет стоимость занятий определяется по действующему прейскуранту. Актуальные цены уточняйте у администрации центра или на сайте lidernao.ru.' },
  { q: 'Какие секции есть?', a: 'У нас работают: футбол, волейбол, бокс, каратэ, тхэквандо, пулевая стрельба, пауэрлифтинг, бодибилдинг, аэробика, настольный теннис, лыжные гонки.' },
  { q: 'С какого возраста принимают?', a: 'Большинство секций принимают детей с 5–7 лет. Например, тхэквандо и каратэ — с 5 лет, футбол и аэробика — с 6 лет, пулевая стрельба — с 10 лет.' },
  { q: 'Как записаться?', a: 'Свяжитесь с администрацией ДЮЦ «Лидер» через раздел «Контакты» или посетите центр лично. Запись ведётся в начале учебного года, а также при наличии свободных мест.' },
  { q: 'Есть ли соревнования?', a: 'Да! Воспитанники центра участвуют в соревнованиях районного, городского, регионального и всероссийского уровня. Многие становятся призёрами и чемпионами.' },
];

const botName = 'EduBot';

function now() {
  return new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' });
}

const initMessage: Message = {
  id: 0, role: 'bot',
  text: 'Привет! Я EduBot 👋 — помогу разобраться с занятиями и любыми вопросами. Нажмите на вопрос ниже или напишите свой.',
  time: now(),
};

export default function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([initMessage]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: 'user', text: text.trim(), time: now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    const faq = faqs.find(f => f.q === text.trim());
    const answer = faq
      ? faq.a
      : 'Спасибо за вопрос! Наши специалисты ответят в ближайшее время. Или попробуйте выбрать один из популярных вопросов ниже.';
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'bot', text: answer, time: now() }]);
    }, 1000 + Math.random() * 500);
  };

  const handleFaq = (faq: typeof faqs[0], index: number) => {
    setSelectedFaq(index);
    sendMessage(faq.q);
  };

  return (
    <section id="chatbot" className="py-28 px-6" style={{ background: 'hsl(var(--background))' }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(var(--neon))]/30 bg-[hsl(var(--neon))]/10 text-xs font-medium text-neon mb-6">
            <Icon name="Bot" size={12} />
            Умный помощник
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-semibold mb-4" style={{ color: 'hsl(var(--foreground))' }}>
            <span className="text-neon italic">Чат-бот</span> поддержки
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Мгновенные ответы на любые вопросы о занятиях — без ожидания.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-sm font-medium uppercase tracking-widest mb-1" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Частые вопросы
            </h3>
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => handleFaq(faq, i)}
                className="text-left px-4 py-3 rounded-xl border text-sm transition-all"
                style={{
                  borderColor: selectedFaq === i ? 'hsl(var(--primary)/0.5)' : 'hsl(var(--border))',
                  background: selectedFaq === i ? 'hsl(var(--primary)/0.1)' : 'transparent',
                  color: selectedFaq === i ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))',
                }}
              >
                <div className="flex items-start gap-2">
                  <Icon name="HelpCircle" size={14} className="mt-0.5 flex-shrink-0 text-neon" />
                  {faq.q}
                </div>
              </button>
            ))}
          </div>

          <div
            className="lg:col-span-3 flex flex-col rounded-2xl border overflow-hidden"
            style={{ height: '520px', borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))' }}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ borderColor: 'hsl(var(--border))' }}>
              <div className="w-9 h-9 rounded-xl bg-neon/20 flex items-center justify-center animate-pulse-glow">
                <Icon name="Bot" size={18} className="text-neon" />
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: 'hsl(var(--foreground))' }}>{botName}</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>Онлайн · отвечает мгновенно</span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 animate-slide-in-right ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 rounded-lg bg-neon/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Bot" size={14} className="text-neon" />
                    </div>
                  )}
                  <div className={`max-w-[75%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                    <div
                      className="px-4 py-3 rounded-2xl text-sm leading-relaxed"
                      style={msg.role === 'bot'
                        ? { background: 'hsl(var(--secondary))', color: 'hsl(var(--foreground))', borderRadius: '16px 16px 16px 4px' }
                        : { background: 'hsl(var(--neon))', color: '#fff', borderRadius: '16px 16px 4px 16px' }
                      }
                    >
                      {msg.text}
                    </div>
                    <span className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{msg.time}</span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-neon/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Bot" size={14} className="text-neon" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-tl-sm" style={{ background: 'hsl(var(--secondary))' }}>
                    <div className="flex gap-1.5 items-center h-4">
                      {[0, 1, 2].map(i => (
                        <span key={i} className="w-1.5 h-1.5 rounded-full bg-neon/50"
                          style={{ animation: `typing 1.2s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="p-4 border-t" style={{ borderColor: 'hsl(var(--border))' }}>
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="flex gap-2">
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Напишите вопрос..."
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-colors"
                  style={{
                    background: 'hsl(var(--input))',
                    border: '1px solid hsl(var(--border))',
                    color: 'hsl(var(--foreground))',
                  }}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 rounded-xl bg-neon text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 glow-neon"
                >
                  <Icon name="Send" size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
