import {
  BookOpen,
  Code2,
  Award,
  Flag,
  FileText,
  Calendar,
} from "lucide-react";
import type { LearningMilestone } from "@/data/learning-path";

const typeConfig: Record<
  LearningMilestone["type"],
  { icon: React.ReactNode; color: string; bg: string }
> = {
  course: {
    icon: <BookOpen size={16} />,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  project: {
    icon: <Code2 size={16} />,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  certification: {
    icon: <Award size={16} />,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  milestone: {
    icon: <Flag size={16} />,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  paper: {
    icon: <FileText size={16} />,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
};

interface TimelineItemProps {
  milestone: LearningMilestone;
  isLast: boolean;
}

export default function TimelineItem({ milestone, isLast }: TimelineItemProps) {
  const config = typeConfig[milestone.type];

  return (
    <div className="relative flex gap-6">
      {/* Timeline line & dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full ${config.bg} flex items-center justify-center flex-shrink-0 z-10 ring-4 ring-white`}
        >
          <span className={config.color}>{config.icon}</span>
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-200 to-purple-200 my-2" />
        )}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-flex items-center gap-1 text-xs text-gray-400">
            <Calendar size={12} />
            {milestone.date}
          </span>
          <span
            className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${config.bg} ${config.color}`}
          >
            {config.icon}
            {milestone.type === "course" && "课程"}
            {milestone.type === "project" && "项目"}
            {milestone.type === "certification" && "认证"}
            {milestone.type === "milestone" && "里程碑"}
            {milestone.type === "paper" && "论文"}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {milestone.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">
          {milestone.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {milestone.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {milestone.link && (
          <a
            href={milestone.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
          >
            查看详情 &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
