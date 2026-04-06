import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { courses, categories } from './courses/courses.data';
import CourseCard from './courses/CourseCard';
import CoursesFilter from './courses/CoursesFilter';

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
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[hsl(42,90%,58%)]/30 bg-[hsl(42,90%,58%)]/10 text-xs font-medium text-gold mb-6">
            <img src="https://lidernao.ru/wp-content/uploads/2023/08/logo_vec.svg" alt="ДЮЦ Лидер" className="h-[50px] w-auto opacity-90" />
            <span className="w-px h-8 bg-current opacity-30" />
            <img src="https://kvantorium83.ru/wp-content/uploads/2023/04/logotip.png" alt="Кванториум НАО" className="h-[50px] w-auto opacity-90" />
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-semibold mb-4" style={{ color: 'hsl(var(--foreground))' }}>
            О <span className="text-gold italic">занятиях</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Спортивные секции ДЮЦ «Лидер» и технологические квантумы Кванториума НАО — всё для развития детей и молодёжи Нарьян-Мара.
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
                Все образовательные программы ДЮЦ «Лидер» для детей и подростков <strong style={{ color: 'hsl(var(--foreground))' }}>до 18 лет</strong> финансируются из бюджета Ненецкого Автономного Округа и предоставляются <strong style={{ color: 'hsl(var(--foreground))' }}>полностью бесплатно</strong>.
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

        <CoursesFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              hovered={hovered}
              onMouseEnter={setHovered}
              onMouseLeave={() => setHovered(null)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest mb-6" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Наши сайты
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <a href="https://lidernao.ru/" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-80 transition-opacity">
              <img src="https://lidernao.ru/wp-content/uploads/2023/08/logo_vec.svg" alt="ДЮЦ Лидер" className="h-[60px] w-auto" />
            </a>
            <a href="https://kvantorium83.ru/" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-80 transition-opacity">
              <img src="https://kvantorium83.ru/wp-content/uploads/2023/04/logotip.png" alt="Кванториум НАО" className="h-[60px] w-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
