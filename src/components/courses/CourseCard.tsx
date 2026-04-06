import Icon from '@/components/ui/icon';
import { Course } from './courses.data';

interface CourseCardProps {
  course: Course;
  hovered: number | null;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

export default function CourseCard({ course, hovered, onMouseEnter, onMouseLeave }: CourseCardProps) {
  return (
    <div
      key={course.id}
      onMouseEnter={() => onMouseEnter(course.id)}
      onMouseLeave={onMouseLeave}
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
        <span className="text-xs px-2 py-0.5 rounded" style={{ background: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))' }}>01.09-25.05</span>
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
  );
}
