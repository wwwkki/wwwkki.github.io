import { FileText, ExternalLink, Download, Code2, Presentation } from "lucide-react";
import type { Paper } from "@/data/papers";

const typeLabels: Record<Paper["type"], { label: string; color: string }> = {
  journal: { label: "期刊", color: "bg-green-50 text-green-600" },
  conference: { label: "会议", color: "bg-blue-50 text-blue-600" },
  preprint: { label: "预印本", color: "bg-amber-50 text-amber-600" },
};

interface PaperCardProps {
  paper: Paper;
}

export default function PaperCard({ paper }: PaperCardProps) {
  const typeConfig = typeLabels[paper.type];

  return (
    <div className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <span
          className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${typeConfig.color}`}
        >
          <FileText size={12} />
          {typeConfig.label}
        </span>
        <span className="text-xs text-gray-400 flex-shrink-0">
          {paper.venue} · {paper.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
        {paper.title}
      </h3>

      {/* Authors */}
      <p className="text-sm text-gray-500 mb-3">
        {paper.authors.join(", ")}
      </p>

      {/* Abstract */}
      <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
        {paper.abstract}
      </p>

      {/* Keywords */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {paper.keywords.map((kw) => (
          <span
            key={kw}
            className="text-xs px-2 py-0.5 rounded-md bg-gray-50 text-gray-500"
          >
            {kw}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-50">
        {paper.doi && (
          <a
            href={`https://doi.org/${paper.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <ExternalLink size={12} />
            DOI
          </a>
        )}
        {paper.pdf && (
          <a
            href={paper.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
          >
            <Download size={12} />
            PDF
          </a>
        )}
        {paper.code && (
          <a
            href={paper.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors"
          >
            <Code2 size={12} />
            Code
          </a>
        )}
        {paper.slides && (
          <a
            href={paper.slides}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
          >
            <Presentation size={12} />
            Slides
          </a>
        )}
      </div>
    </div>
  );
}
