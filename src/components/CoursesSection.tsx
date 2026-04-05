import { useState } from 'react';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Программирование', 'Дизайн', 'Маркетинг'];

const courses = [
  {
    id: 1,
    title: 'Python с нуля до профи',
    category: 'Программирование',
    level: 'Начинающий',
    duration: '6 мес.',
    lessons: 48,
    students: 1240,
    rating: 4.9,
    icon: 'Code2',
    color: 'hsl(245,80%,65%)',
    tag: 'Хит',
  },
  {
    id: 2,
    title: 'UI/UX Дизайн. Полный курс',
    category: 'Дизайн',
    level: 'Средний',
    duration: '4 мес.',
    lessons: 36,
    students: 890,
    rating: 4.8,
    icon: 'Palette',
    color: 'hsl(42,90%,58%)',
    tag: 'Новый',
  },
  {
    id: 3,
    title: 'Цифровой маркетинг 2025',
    category: 'Маркетинг',
    level: 'Любой',
    duration: '3 мес.',
    lessons: 28,
    students: 670,
    rating: 4.7,
    icon: 'TrendingUp',
    color: 'hsl(160,60%,45%)',
    tag: null,
  },
  {
    id: 4,
    title: 'React + TypeScript',
    category: 'Программирование',
    level: 'Продвинутый',
    duration: '5 мес.',
    lessons: 52,
    students: 980,
    rating: 4.9,
    icon: 'Layers',
    color: 'hsl(200,80%,55%)',
    tag: 'Топ',
  },
  {
    id: 5,
    title: 'Figma. Мастер-класс',
    category: 'Дизайн',
    level: 'Начинающий',
    duration: '2 мес.',
    lessons: 22,
    students: 540,
    rating: 4.8,
    icon: 'Pen',
    color: 'hsl(320,70%,60%)',
    tag: null,
  },
  {
    id: 6,
    title: 'SEO и контент-стратегия',
    category: 'Маркетинг',
    level: 'Средний',
    duration: '3 мес.',
    lessons: 30,
    students: 420,
    rating: 4.6,
    icon: 'Search',
    color: 'hsl(30,85%,55%)',
    tag: null,
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
            Наши программы
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-semibold text-white mb-4">
            О <span className="text-gold italic">курсах</span>
          </h2>
          <p className="text-[hsl(215,15%,55%)] text-lg max-w-xl mx-auto">
            Практические программы от экспертов индустрии. Учись и сразу применяй.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-neon text-white glow-neon'
                  : 'border border-[hsl(220,15%,18%)] text-[hsl(215,15%,55%)] hover:border-[hsl(245,80%,65%)]/40 hover:text-white'
              }`}
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
              className="relative group rounded-2xl border border-[hsl(220,15%,16%)] bg-[hsl(220,18%,9%)] p-6 card-hover cursor-pointer overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 30% 20%, ${course.color}15, transparent 70%)`
                }}
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
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  background: `${course.color}20`,
                  boxShadow: hovered === course.id ? `0 0 20px ${course.color}40` : 'none'
                }}
              >
                <Icon name={course.icon} fallback="BookOpen" size={22} style={{ color: course.color }} />
              </div>

              <h3 className="relative text-white font-semibold text-lg mb-2 leading-snug">{course.title}</h3>

              <div className="relative flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-0.5 rounded bg-[hsl(220,15%,13%)] text-[hsl(215,15%,55%)]">
                  {course.level}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-[hsl(220,15%,13%)] text-[hsl(215,15%,55%)]">
                  {course.duration}
                </span>
              </div>

              <div className="relative flex items-center justify-between text-sm text-[hsl(215,15%,50%)] border-t border-[hsl(220,15%,14%)] pt-4 mt-4">
                <div className="flex items-center gap-1">
                  <Icon name="BookOpen" size={13} />
                  <span>{course.lessons} уроков</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Users" size={13} />
                  <span>{course.students.toLocaleString('ru')}</span>
                </div>
                <div className="flex items-center gap-1 text-gold">
                  <Icon name="Star" size={13} />
                  <span>{course.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}