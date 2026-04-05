import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface Message {
  id: number;
  role: 'bot' | 'user';
  text: string;
  time: string;
}

const faqs = [
  { q: 'Как начать учиться?', a: 'Выберите курс в разделе «О курсах», нажмите «Записаться» и следуйте инструкциям. Первый урок доступен сразу после регистрации.' },
  { q: 'Сколько стоят курсы?', a: 'Цены зависят от программы и начинаются от 2 900 ₽/мес. Есть пробный период 7 дней бесплатно.' },
  { q: 'Есть ли сертификат?', a: 'Да! После успешного завершения курса вы получаете официальный сертификат, который можно добавить в резюме и LinkedIn.' },
  { q: 'Можно учиться в своём темпе?', a: 'Конечно. Все уроки доступны в записи 24/7. Вы сами выбираете, когда и сколько учиться.' },
  { q: 'Как связаться с куратором?', a: 'Каждый курс включает живого куратора. Пишите в чат курса или на support@eduflow.ru — ответим в течение 2 часов.' },
  { q: 'Что если не понравится курс?', a: 'Предоставляем гарантию возврата средств в течение 14 дней без вопросов.' },
];

const botName = 'EduBot';
const initMessage: Message = {
  id: 0,
  role: 'bot',
  text: 'Привет! Я EduBot 👋 — помогу разобраться с платформой, курсами и любыми вопросами. Нажмите на вопрос ниже или напишите свой.',
  time: now(),
};

function now() {
  return new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' });
}

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
    <section id="chatbot" className="py-28 px-6 bg-[hsl(220,18%,8%)]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(245,80%,65%)]/30 bg-[hsl(245,80%,65%)]/10 text-xs font-medium text-neon mb-6">
            <Icon name="Bot" size={12} />
            Умный помощник
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-semibold text-white mb-4">
            <span className="text-neon italic">Чат-бот</span> поддержки
          </h2>
          <p className="text-[hsl(215,15%,55%)] text-lg max-w-xl mx-auto">
            Мгновенные ответы на любые вопросы о платформе и курсах — без ожидания.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-sm font-medium text-[hsl(215,15%,55%)] uppercase tracking-widest mb-1">
              Частые вопросы
            </h3>
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() => handleFaq(faq, i)}
                className={`text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                  selectedFaq === i
                    ? 'border-[hsl(245,80%,65%)]/50 bg-[hsl(245,80%,65%)]/10 text-white'
                    : 'border-[hsl(220,15%,16%)] text-[hsl(215,15%,60%)] hover:border-[hsl(245,80%,65%)]/30 hover:text-white'
                }`}
              >
                <div className="flex items-start gap-2">
                  <Icon name="HelpCircle" size={14} className="mt-0.5 flex-shrink-0 text-neon" />
                  {faq.q}
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-3 flex flex-col rounded-2xl border border-[hsl(220,15%,16%)] bg-[hsl(220,20%,7%)] overflow-hidden" style={{ height: '520px' }}>
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[hsl(220,15%,14%)]">
              <div className="w-9 h-9 rounded-xl bg-neon/20 flex items-center justify-center animate-pulse-glow">
                <Icon name="Bot" size={18} className="text-neon" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{botName}</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-xs text-[hsl(215,15%,50%)]">Онлайн · отвечает мгновенно</span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 animate-slide-in-right ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 rounded-lg bg-neon/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Bot" size={14} className="text-neon" />
                    </div>
                  )}
                  <div className={`max-w-[75%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                        msg.role === 'bot'
                          ? 'bg-[hsl(220,15%,13%)] text-[hsl(210,20%,85%)] rounded-tl-sm'
                          : 'bg-neon text-white rounded-tr-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-xs text-[hsl(215,15%,40%)]">{msg.time}</span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-neon/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Bot" size={14} className="text-neon" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-[hsl(220,15%,13%)]">
                    <div className="flex gap-1.5 items-center h-4">
                      {[0, 1, 2].map(i => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-neon/50"
                          style={{ animation: `typing 1.2s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="p-4 border-t border-[hsl(220,15%,14%)]">
              <form
                onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Напишите вопрос..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[hsl(220,15%,12%)] border border-[hsl(220,15%,18%)] text-sm text-white placeholder-[hsl(215,15%,40%)] focus:outline-none focus:border-[hsl(245,80%,65%)]/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 rounded-xl bg-neon flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity glow-neon"
                >
                  <Icon name="Send" size={16} className="text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
