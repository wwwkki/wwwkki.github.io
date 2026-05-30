import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";

const blogPosts = [
  {
    slug: "build-personal-website",
    title: "从零搭建个人技术网站 — Next.js + Tailwind CSS 实战",
    description:
      "详细记录使用 Next.js 14 和 Tailwind CSS 从零搭建个人技术网站的全过程，包括项目架构设计、组件开发、MDX 博客集成和 Vercel 部署。",
    date: "2024-06-15",
    readTime: "8 分钟",
    tags: ["Next.js", "Tailwind CSS", "个人网站", "前端开发"],
  },
  {
    slug: "llm-rag-practice",
    title: "RAG 架构实战：构建基于大语言模型的知识问答系统",
    description:
      "深入探讨检索增强生成（RAG）架构的核心原理，分享使用 LangChain 和向量数据库构建企业级知识问答系统的实战经验。",
    date: "2024-05-20",
    readTime: "15 分钟",
    tags: ["LLM", "RAG", "LangChain", "向量数据库"],
  },
  {
    slug: "typescript-advanced",
    title: "TypeScript 高级类型技巧：从入门到精通",
    description:
      "总结 TypeScript 中常用的高级类型技巧，包括条件类型、映射类型、模板字面量类型等，帮助提升代码的类型安全性。",
    date: "2024-04-10",
    readTime: "12 分钟",
    tags: ["TypeScript", "类型系统", "编程技巧"],
  },
  {
    slug: "git-workflow",
    title: "高效 Git 工作流：团队协作最佳实践",
    description:
      "分享在团队开发中常用的 Git 工作流策略，包括 Git Flow、Trunk-Based Development 以及如何规范 commit message。",
    date: "2024-03-05",
    readTime: "6 分钟",
    tags: ["Git", "DevOps", "团队协作"],
  },
  {
    slug: "react-performance",
    title: "React 性能优化指南：从渲染原理到实践技巧",
    description:
      "深入分析 React 的渲染机制，总结常见的性能优化策略，包括 memo、useMemo、虚拟列表、代码分割等实用技巧。",
    date: "2024-02-18",
    readTime: "10 分钟",
    tags: ["React", "性能优化", "前端"],
  },
  {
    slug: "docker-intro",
    title: "Docker 入门与实践：从容器化到微服务部署",
    description:
      "一篇面向初学者的 Docker 入门教程，涵盖镜像构建、容器管理、Docker Compose 编排以及多阶段构建的最佳实践。",
    date: "2024-01-08",
    readTime: "10 分钟",
    tags: ["Docker", "DevOps", "微服务"],
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="博客"
          description="分享学习心得、技术实践和研究思考"
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
