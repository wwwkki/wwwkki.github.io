import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";
import { learningPath } from "@/data/learning-path";

export default function LearningPathPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Learning Path"
          description="A record of my technical growth from fundamentals to advanced practice"
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
