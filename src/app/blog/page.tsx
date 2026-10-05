import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";

const blogPosts = [
  {
    slug: "build-personal-website",
    title: "Building a Personal Portfolio from Scratch — Next.js + Tailwind CSS in Practice",
    description:
      "A detailed account of building a personal portfolio with Next.js 14 and Tailwind CSS, covering architecture design, component development, MDX integration, and Vercel deployment.",
    date: "2024-06-15",
    readTime: "8 min read",
    tags: ["Next.js", "Tailwind CSS", "Personal Portfolio", "Frontend Development"],
  },
  {
    slug: "llm-rag-practice",
    title: "RAG in Practice: Building an LLM-Powered Knowledge Q&A System",
    description:
      "An in-depth exploration of retrieval-augmented generation (RAG), with practical lessons from building an enterprise knowledge Q&A system using LangChain and vector databases.",
    date: "2024-05-20",
    readTime: "15 min read",
    tags: ["LLM", "RAG", "LangChain", "Vector Databases"],
  },
  {
    slug: "typescript-advanced",
    title: "Advanced TypeScript Types: From Fundamentals to Mastery",
    description:
      "A practical summary of advanced TypeScript techniques, including conditional, mapped, and template literal types, to improve type safety.",
    date: "2024-04-10",
    readTime: "12 min read",
    tags: ["TypeScript", "Type Systems", "Programming Techniques"],
  },
  {
    slug: "git-workflow",
    title: "Efficient Git Workflows: Best Practices for Team Collaboration",
    description:
      "Common Git workflow strategies for team development, including Git Flow, trunk-based development, and standardized commit messages.",
    date: "2024-03-05",
    readTime: "6 min read",
    tags: ["Git", "DevOps", "Team Collaboration"],
  },
  {
    slug: "react-performance",
    title: "React Performance Optimization: From Rendering Principles to Practice",
    description:
      "An in-depth analysis of React rendering, with practical optimization strategies covering memoization, useMemo, virtualized lists, and code splitting.",
    date: "2024-02-18",
    readTime: "10 min read",
    tags: ["React", "Performance Optimization", "Frontend"],
  },
  {
    slug: "docker-intro",
    title: "Docker Fundamentals and Practice: From Containerization to Microservice Delivery",
    description:
      "A beginner-friendly Docker guide covering image creation, container management, Docker Compose orchestration, and multi-stage build best practices.",
    date: "2024-01-08",
    readTime: "10 min read",
    tags: ["Docker", "DevOps", "Microservices"],
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Blog"
          description="Notes on learning, technical practice, and research"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}
