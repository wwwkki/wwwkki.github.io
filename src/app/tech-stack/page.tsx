import SectionHeading from "@/components/SectionHeading";
import TechCard, { categoryIcons } from "@/components/TechCard";
import { techCategories, techStack } from "@/data/tech-stack";

export default function TechStackPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="技术栈"
          description="我日常使用和持续学习的技术与工具"
        />

        <div className="space-y-16">
          {techCategories.map((category) => {
            const items = techStack.filter(
              (tech) => tech.category === category.name
            );
            if (items.length === 0) return null;

            return (
              <section key={category.name}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center text-blue-600">
                    {categoryIcons[category.name]}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {category.name}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Tech grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((tech) => (
                    <TechCard key={tech.name} tech={tech} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
