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
    title: "Building a Personal Portfolio from Scratch — Next.js + Tailwind CSS in Practice",
    date: "2024-06-15",
    readTime: "8 min read",
    tags: ["Next.js", "Tailwind CSS", "Personal Portfolio", "Frontend Development"],
    content: `## Introduction

Building a personal portfolio is one of the best ways to demonstrate technical expertise and document a learning journey. This article explains how to build a polished personal website from scratch with Next.js 14 and Tailwind CSS.

## Technology Choices

### Why Next.js?

- **App Router**: File-system-based routing that is intuitive and efficient
- **Server Components**: Server rendering by default for strong performance
- **MDX Support**: Write Markdown directly within components
- **Vercel Deployment**: One-command deployment with automated CI/CD

### Why Tailwind CSS?

- **Utility-First**: Atomic utility classes for highly efficient development
- **Responsive Design**: Built-in breakpoints for adaptable layouts
- **Custom Themes**: Flexible design-token configuration
- **JIT Engine**: Generates CSS on demand for a smaller production bundle

## Project Architecture

\`\`\`
src/
├── app/          # Next.js App Router pages
├── components/   # Reusable components
├── data/         # Data layer (type definitions and data)
├── content/      # MDX blog content
└── lib/          # Utility functions
\`\`\`

## Core Features

### 1. Responsive Navigation

Use Tailwind CSS responsive breakpoints and state management to build a navigation bar that adapts to mobile layouts.

### 2. Tech Stack Showcase

Group technologies by category and use card components to present proficiency levels and descriptions.

### 3. Timeline Component

Use CSS to create a vertical timeline highlighting important milestones in the learning journey.

### 4. Blog System

Build a file-system-based MDX blog with syntax highlighting and custom component support.

## Deployment

Once complete, deploy the project with Vercel and connect a custom domain to go live.

## Conclusion

By completing this project, you will gain:
- Core Next.js App Router concepts
- Practical Tailwind CSS techniques
- A component-driven development mindset
- An end-to-end workflow from development to deployment

I hope you find this article useful!`,
  },
  "llm-rag-practice": {
    title: "RAG in Practice: Building an LLM-Powered Knowledge Q&A System",
    date: "2024-05-20",
    readTime: "15 min read",
    tags: ["LLM", "RAG", "LangChain", "Vector Databases"],
    content: `## What Is RAG?

Retrieval-augmented generation (RAG) combines information retrieval with text generation. It retrieves relevant information from an external knowledge base and provides it as context to a large language model, enabling more accurate and reliable responses.

## Core Components of RAG

### 1. Document Processing

First, split documents into appropriately sized chunks for efficient retrieval.

### 2. Vectorization

Use an embedding model to convert text chunks into vector representations and store them in a vector database.

### 3. Retrieval

When a user asks a question, convert it into a vector and search the vector database for the most relevant document chunks.

### 4. Generation

Provide the retrieved document chunks as context alongside the user question so the LLM can generate a final answer.

## Implementation Steps

### Environment Setup

The LangChain framework can significantly simplify the development workflow for a RAG system.

### Choosing a Vector Database

- **Chroma**: Lightweight and well suited to prototyping
- **Pinecone**: Fully managed and suitable for production
- **Weaviate**: Open source with a rich feature set

### Optimization Strategies

1. **Chunking Strategy**: Choose appropriate chunk sizes and overlap
2. **Retrieval Optimization**: Combine keyword and semantic retrieval
3. **Reranking**: Rerank retrieved results to improve precision
4. **Prompt Engineering**: Carefully design prompt templates

## Conclusion

RAG is a foundational architecture for enterprise LLM applications, making it an essential skill for AI application developers.`,
  },
  "typescript-advanced": {
    title: "Advanced TypeScript Types: From Fundamentals to Mastery",
    date: "2024-04-10",
    readTime: "12 min read",
    tags: ["TypeScript", "Type Systems", "Programming Techniques"],
    content: `## Introduction

TypeScript's type system is one of its most powerful features. Mastering advanced type techniques enables safer and more expressive code.

## Conditional Types

Conditional types let you create new types based on relationships between types:

\`\`\`typescript
type IsString<T> = T extends string ? true : false;
\`\`\`

## Mapped Types

Mapped types let you create new types from existing types:

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
\`\`\`

## Template Literal Types

Template literal types were introduced in TypeScript 4.1:

\`\`\`typescript
type EventName<T extends string> = \`on\${Capitalize<T>}\`;
\`\`\`

## Practical Techniques

### The \`infer\` Keyword

Infer type variables within conditional types.

### Recursive Types

Handle nested data structures.

### Type-Safe Event Systems

Combine template literal types and mapped types to build type-safe event systems.

## Conclusion

Mastering these advanced techniques will make your TypeScript code more robust and expressive.`,
  },
};

export function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({ slug }));
}

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
          Back to Blog
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
