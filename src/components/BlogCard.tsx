import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

export default function BlogCard({
  slug,
  title,
  description,
  date,
  readTime,
  tags,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
        <span className="inline-flex items-center gap-1">
          <Calendar size={12} />
          {date}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock size={12} />
          {readTime}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-blue-50 text-blue-600"
          >
            <Tag size={10} />
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
