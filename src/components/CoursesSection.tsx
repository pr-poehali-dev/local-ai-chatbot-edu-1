import { useState } from 'react';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Спортивные', 'Единоборства', 'Физическая культура'];

const courses = [
  {
    id: 1,
    title: 'Футбол',
    category: 'Спортивные',
    desc: 'Командная игра, развитие скоростно-силовых качеств, тактическое мышление и работа в коллективе.',
    age: '6–18 лет',
    duration: 'Весь год',
    icon: 'CircleDot',
    color: 'hsl(140,60%,45%)',
    tag: 'Популярное',
  },
  {
    id: 2,
    title: 'Тхэквандо',
    category: 'Единоборства',
    desc: 'Корейское боевое искусство. Воспитание дисциплины, гибкости, силы духа и самозащиты.',
    age: '5–18 лет',
    duration: 'Весь год',
    icon: 'Zap',
    color: 'hsl(245,80%,65%)',
    tag: null,
  },
  {
    id: 3,
    title: 'Аэробика',
    category: 'Физическая культура',
    desc: 'Спортивная и оздоровительная аэробика. Развитие координации, гибкости и выносливости под музыку.',
    age: '6–18 лет',
    duration: 'Весь год',
    icon: 'Music',
    color: 'hsl(320,70%,60%)',
    tag: null,
  },
  {
    id: 4,
    title: 'Пулевая стрельба',
    category: 'Спортивные',
    desc: 'Развитие концентрации, точности и выдержки. Тренировки на профессиональном оборудовании.',
    age: '10–18 лет',
    duration: 'Весь год',
    icon: 'Target',
    color: 'hsl(200,80%,55%)',
    tag: 'Особое',
  },
  {
    id: 5,
    title: 'Пауэрлифтинг',
    category: 'Физическая культура',
    desc: 'Силовой спорт: жим лёжа, приседания со штангой, становая тяга. Тренировки под руководством тренера.',
    age: '12–18 лет',
    duration: 'Весь год',
    icon: 'Dumbbell',
    color: 'hsl(30,85%,55%)',
    tag: null,
  },
  {
    id: 6,
    title: 'Теннис настольный',
    category: 'Спортивные',
    desc: 'Развитие реакции, координации и скорости. Участие в соревнованиях районного и городского уровня.',
    age: '6–18 лет',
    duration: 'Весь год',
    icon: 'Trophy',
    color: 'hsl(42,90%,58%)',
    tag: null,
  },
  {
    id: 7,
    title: 'Лыжные гонки',
    category: 'Спортивные',
    desc: 'Общефизическая подготовка, выносливость, техника классического и конькового хода.',
    age: '7–18 лет',
    duration: 'Сезонно',
    icon: 'Wind',
    color: 'hsl(190,70%,50%)',
    tag: null,
  },
  {
    id: 8,
    title: 'Каратэ',
    category: 'Единоборства',
    desc: 'Традиционное боевое искусство. Ката, кумитэ, воспитание характера, уважения и самодисциплины.',
    age: '5–18 лет',
    duration: 'Весь год',
    icon: 'Shield',
    color: 'hsl(0,70%,55%)',
    tag: null,
  },
  {
    id: 9,
    title: 'Бодибилдинг',
    category: 'Физическая культура',
    desc: 'Гармоничное развитие тела, работа с отягощениями, основы правильного питания и режима.',
    age: '14–18 лет',
    duration: 'Весь год',
    icon: 'Flame',
    color: 'hsl(25,90%,50%)',
    tag: null,
  },
  {
    id: 10,
    title: 'Бокс',
    category: 'Единоборства',
    desc: 'Техника ударов, защитные действия, развитие скорости реакции, силы и психологической устойчивости.',
    age: '8–18 лет',
    duration: 'Весь год',
    icon: 'Swords',
    color: 'hsl(355,75%,55%)',
    tag: 'Популярное',
  },
  {
    id: 11,
    title: 'Волейбол',
    category: 'Спортивные',
    desc: 'Командные тренировки, отработка подач, приёмов и атак. Участие в соревнованиях.',
    age: '10–18 лет',
    duration: 'Весь год',
    icon: 'Circle',
    color: 'hsl(160,55%,45%)',
    tag: null,
  },
  {
    id: 12,
    title: 'Киберспорт',
    category: 'Спортивные',
    desc: 'Дисциплина, командная работа и стратегическое мышление через соревновательные компьютерные игры.',
    age: '10–18 лет',
    duration: 'Весь год',
    icon: 'Gamepad2',
    color: 'hsl(270,75%,60%)',
    tag: 'Новое',
  },
];

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = activeCategory === 'Все'
    ? courses
    : courses.filter(c => c.category === activeCategory);

  return (
    <section id="courses" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(42,90%,58%)]/30 bg-[hsl(42,90%,58%)]/10 text-xs font-medium text-gold mb-6">
            <Icon name="BookOpen" size={12} />
            Образовательные объединения ДЮЦ «Лидер»
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-semibold mb-4" style={{ color: 'hsl(var(--foreground))' }}>
            О <span className="text-gold italic">программах</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Спортивные секции и образовательные объединения для детей и молодёжи.
            Профессиональные тренеры, современная база, соревнования всех уровней.
          </p>
        </div>

        {/* Блок стоимости */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          <div className="relative overflow-hidden rounded-2xl border p-6 flex gap-4"
            style={{ borderColor: 'hsl(140,60%,45%,0.4)', background: 'hsl(140,60%,45%,0.07)' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: 'hsl(140,60%,45%,0.15)' }}>
              <Icon name="GraduationCap" size={22} style={{ color: 'hsl(140,60%,45%)' }} />
            </div>
            <div>
              <div className="text-sm font-bold mb-1" style={{ color: 'hsl(140,60%,50%)' }}>
                До 18 лет — бесплатно
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Все образовательные программы ДЮЦ «Лидер» для детей и подростков <strong style={{ color: 'hsl(var(--foreground))' }}>до 18 лет</strong> финансируются из бюджета Архангельской области и предоставляются <strong style={{ color: 'hsl(var(--foreground))' }}>полностью бесплатно</strong>.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border p-6 flex gap-4"
            style={{ borderColor: 'hsl(42,90%,58%,0.4)', background: 'hsl(42,90%,58%,0.07)' }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: 'hsl(42,90%,58%,0.15)' }}>
              <Icon name="Receipt" size={22} style={{ color: 'hsl(42,90%,58%)' }} />
            </div>
            <div>
              <div className="text-sm font-bold mb-1" style={{ color: 'hsl(42,90%,52%)' }}>
                Старше 18 лет — по прейскуранту
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Для лиц <strong style={{ color: 'hsl(var(--foreground))' }}>старше 18 лет</strong> стоимость занятий определяется индивидуально согласно действующему прейскуранту. Уточняйте актуальные цены у администрации центра.
              </p>
              <a
                href="https://lidernao.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium mt-2 hover:opacity-80 transition-opacity"
                style={{ color: 'hsl(42,90%,52%)' }}
              >
                Прейскурант на сайте lidernao.ru <Icon name="ExternalLink" size={11} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-neon text-white glow-neon'
                  : 'border text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
              }`}
              style={activeCategory !== cat ? { borderColor: 'hsl(var(--border))' } : undefined}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((course) => (
            <div
              key={course.id}
              onMouseEnter={() => setHovered(course.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative group rounded-2xl border p-6 card-hover cursor-pointer overflow-hidden"
              style={{
                borderColor: 'hsl(var(--border))',
                background: 'hsl(var(--card))',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(ellipse 80% 60% at 30% 20%, ${course.color}15, transparent 70%)` }}
              />

              {course.tag && (
                <span
                  className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: `${course.color}25`, color: course.color }}
                >
                  {course.tag}
                </span>
              )}

              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                style={{
                  background: `${course.color}20`,
                  boxShadow: hovered === course.id ? `0 0 20px ${course.color}40` : 'none'
                }}
              >
                <Icon name={course.icon} fallback="BookOpen" size={22} style={{ color: course.color }} />
              </div>

              <h3 className="relative font-semibold text-lg mb-1.5 leading-snug" style={{ color: 'hsl(var(--foreground))' }}>
                {course.title}
              </h3>

              <p className="relative text-sm leading-relaxed mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
                {course.desc}
              </p>

              <div className="relative flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))' }}>
                  👤 {course.age}
                </span>
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))' }}>
                  📅 {course.duration}
                </span>
              </div>

              <div
                className="relative flex items-center gap-1.5 text-xs pt-3 mt-auto border-t font-medium"
                style={{
                  borderColor: 'hsl(var(--border))',
                  color: parseInt(course.age) < 18 ? 'hsl(140,60%,45%)' : 'hsl(42,90%,52%)'
                }}
              >
                <Icon name="BadgeCheck" size={13} />
                {course.age === '14–18 лет' || course.age === '12–18 лет' || course.age === '10–18 лет'
                  ? 'До 18 лет — бесплатно'
                  : 'До 18 лет — бесплатно'}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: 'hsl(var(--muted-foreground))' }}>
          Источник: <a href="https://lidernao.ru/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">lidernao.ru</a> — ДЮЦ «Лидер», Архангельская область
        </p>
      </div>
    </section>
  );
}
