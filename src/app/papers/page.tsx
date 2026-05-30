import SectionHeading from "@/components/SectionHeading";
import PaperCard from "@/components/PaperCard";
import { papers, researchInterests } from "@/data/papers";
import { Lightbulb } from "lucide-react";

export default function PapersPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="论文发表"
          description="我的学术研究成果与论文"
        />

        {/* Research Interests */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb size={20} className="text-amber-500" />
            <h2 className="text-lg font-semibold text-gray-900">研究方向</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((interest) => (
              <span
                key={interest}
                className="px-3 py-1.5 rounded-lg bg-white/80 text-sm text-gray-700 border border-gray-100 shadow-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 gap-6">
          {papers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </div>
    </main>
  );
}
