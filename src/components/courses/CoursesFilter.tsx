interface CoursesFilterProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function CoursesFilter({ categories, activeCategory, onChange }: CoursesFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
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
  );
}
