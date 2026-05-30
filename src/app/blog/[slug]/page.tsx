import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

// Blog post data - in a real app, this would come from MDX files or a CMS
const blogContent: Record<string, {
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}> = {
  "build-personal-website": {
    title: "从零搭建个人技术网站 — Next.js + Tailwind CSS 实战",
    date: "2024-06-15",
    readTime: "8 分钟",
    tags: ["Next.js", "Tailwind CSS", "个人网站", "前端开发"],
    content: `## 前言

搭建一个个人技术网站是展示技术能力、记录学习过程的最佳方式之一。本文将详细介绍如何使用 Next.js 14 和 Tailwind CSS 从零搭建一个功能完善的个人网站。

## 技术选型

### 为什么选择 Next.js？

- **App Router**: 基于文件系统的路由，直观且高效
- **Server Components**: 默认服务端渲染，性能优异
- **MDX 支持**: 直接在组件中编写 Markdown
- **Vercel 部署**: 一键部署，自动 CI/CD

### 为什么选择 Tailwind CSS？

- **Utility-First**: 原子化 CSS 类，开发效率极高
- **响应式设计**: 内置断点系统
- **自定义主题**: 灵活的设计 token 配置
- **JIT 引擎**: 按需生成 CSS，构建产物极小

## 项目架构

\`\`\`
src/
├── app/          # Next.js App Router 页面
├── components/   # 可复用组件
├── data/         # 数据层 (类型定义 + 数据)
├── content/      # MDX 博客内容
└── lib/          # 工具函数
\`\`\`

## 核心功能实现

### 1. 响应式导航栏

使用 Tailwind CSS 的响应式断点和状态管理实现移动端适配的导航栏。

### 2. 技术栈展示

将技术栈按类别分组展示，使用卡片组件呈现每个技术的熟练度和描述。

### 3. 时间线组件

使用 CSS 实现垂直时间线，展示学习历程中的重要节点。

### 4. 博客系统

基于文件系统的 MDX 博客，支持代码高亮和自定义组件。

## 部署

项目完成后，通过 Vercel 一键部署，绑定自定义域名即可上线。

## 总结

通过这个项目，你将掌握：
- Next.js App Router 的核心概念
- Tailwind CSS 的实用技巧
- 组件化开发的思维方式
- 从开发到部署的完整流程

希望这篇文章对你有所帮助！`,
  },
  "llm-rag-practice": {
    title: "RAG 架构实战：构建基于大语言模型的知识问答系统",
    date: "2024-05-20",
    readTime: "15 分钟",
    tags: ["LLM", "RAG", "LangChain", "向量数据库"],
    content: `## 什么是 RAG？

检索增强生成（Retrieval-Augmented Generation，RAG）是一种将信息检索与文本生成相结合的技术架构。它通过从外部知识库中检索相关信息，然后将其作为上下文提供给大语言模型，从而生成更准确、更可靠的回答。

## RAG 的核心组件

### 1. 文档处理

首先需要将文档分割成合适大小的块（chunks），以便进行高效检索。

### 2. 向量化

使用 Embedding 模型将文本块转换为向量表示，存储在向量数据库中。

### 3. 检索

当用户提问时，将问题也转换为向量，在向量数据库中搜索最相关的文档块。

### 4. 生成

将检索到的相关文档块作为上下文，与用户问题一起提供给 LLM 生成最终回答。

## 实战步骤

### 环境搭建

使用 LangChain 框架可以大大简化 RAG 系统的开发流程。

### 向量数据库选择

- **Chroma**: 轻量级，适合原型开发
- **Pinecone**: 全托管，适合生产环境
- **Weaviate**: 开源，功能丰富

### 优化策略

1. **分块策略**: 选择合适的 chunk size 和 overlap
2. **检索优化**: 使用混合检索（关键词 + 语义）
3. **重排序**: 对检索结果进行二次排序提高精度
4. **Prompt 工程**: 精心设计提示词模板

## 总结

RAG 是当前企业级 LLM 应用的核心架构，掌握它对于 AI 应用开发者来说至关重要。`,
  },
  "typescript-advanced": {
    title: "TypeScript 高级类型技巧：从入门到精通",
    date: "2024-04-10",
    readTime: "12 分钟",
    tags: ["TypeScript", "类型系统", "编程技巧"],
    content: `## 引言

TypeScript 的类型系统是其最强大的特性之一。掌握高级类型技巧可以让你写出更安全、更优雅的代码。

## 条件类型

条件类型允许你根据类型关系创建新类型：

\`\`\`typescript
type IsString<T> = T extends string ? true : false;
\`\`\`

## 映射类型

映射类型可以基于已有类型创建新类型：

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
\`\`\`

## 模板字面量类型

TypeScript 4.1 引入的模板字面量类型：

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
\`\`\`

## 实用技巧总结

### infer 关键字

在条件类型中推断类型变量。

### 递归类型

处理嵌套数据结构。

### 类型安全的事件系统

结合模板字面量类型和映射类型构建类型安全的事件系统。

## 总结

掌握这些高级类型技巧，可以让你的 TypeScript 代码更加健壮和优雅。`,
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogContent[slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          返回博客列表
        </Link>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
            <span className="inline-flex items-center gap-1">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-blue-50 text-blue-600"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-gray prose-lg max-w-none">
          {post.content.split("\n").map((line, i) => {
            // Simple markdown rendering
            if (line.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold text-gray-900 mt-10 mb-4"
                >
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="text-xl font-semibold text-gray-900 mt-8 mb-3"
                >
                  {line.replace("### ", "")}
                </h3>
              );
            }
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="text-gray-600 ml-4 mb-1">
                  {line.replace("- ", "")}
                </li>
              );
            }
            if (line.startsWith("1. ")) {
              return (
                <li key={i} className="text-gray-600 ml-4 mb-1 list-decimal">
                  {line.replace(/^\d+\.\s/, "")}
                </li>
              );
            }
            if (line.startsWith("```")) {
              return null; // Skip code block markers
            }
            if (line.startsWith("`") && line.endsWith("`") && !line.includes(" ")) {
              return (
                <code
                  key={i}
                  className="px-1.5 py-0.5 bg-gray-100 text-pink-600 rounded text-sm font-mono"
                >
                  {line.replace(/`/g, "")}
                </code>
              );
            }
            if (line.trim() === "") {
              return <br key={i} />;
            }
            return (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">
                {line}
              </p>
            );
          })}
        </div>
      </article>
    </main>
  );
}
