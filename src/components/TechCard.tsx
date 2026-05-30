import {
  Code2,
  Server,
  Database,
  Terminal,
  BrainCircuit,
  Monitor,
} from "lucide-react";
import type { TechItem } from "@/data/tech-stack";

const categoryIcons: Record<string, React.ReactNode> = {
  "前端开发": <Monitor size={20} />,
  "后端开发": <Server size={20} />,
  "数据库": <Database size={20} />,
  "DevOps & 工具": <Terminal size={20} />,
  "AI & 机器学习": <BrainCircuit size={20} />,
  "编程语言": <Code2 size={20} />,
};

interface TechCardProps {
  tech: TechItem;
}

export default function TechCard({ tech }: TechCardProps) {
  return (
    <div className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 hover:-translate-y-1">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <span className="text-blue-600">
          {categoryIcons[tech.category] || <Code2 size={20} />}
        </span>
      </div>

      {/* Content */}
      <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
      <p className="text-sm text-gray-500 mb-3 leading-relaxed">
        {tech.description}
      </p>

      {/* Level indicator */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-5 rounded-full transition-colors ${
              i < tech.level
                ? "bg-gradient-to-r from-blue-500 to-purple-500"
                : "bg-gray-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Re-export for convenience
export { categoryIcons };
