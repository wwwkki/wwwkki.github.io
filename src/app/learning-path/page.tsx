import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";
import { learningPath } from "@/data/learning-path";

export default function LearningPathPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="学习路径"
          description="从入门到进阶，记录我的技术成长历程"
        />

        <div className="mt-8">
          {learningPath.map((milestone, index) => (
            <TimelineItem
              key={milestone.id}
              milestone={milestone}
              isLast={index === learningPath.length - 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
