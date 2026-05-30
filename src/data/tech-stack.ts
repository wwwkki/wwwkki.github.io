export interface TechItem {
  name: string;
  icon: string;
  category: string;
  level: number; // 1-5
  description: string;
}

export interface TechCategory {
  name: string;
  icon: string;
  description: string;
}

export const techCategories: TechCategory[] = [
  {
    name: "前端开发",
    icon: "Monitor",
    description: "构建现代化、高性能的用户界面",
  },
  {
    name: "后端开发",
    icon: "Server",
    description: "设计可扩展的服务端架构与 API",
  },
  {
    name: "数据库",
    icon: "Database",
    description: "数据存储、查询优化与数据建模",
  },
  {
    name: "DevOps & 工具",
    icon: "Terminal",
    description: "自动化部署、CI/CD 与开发工具链",
  },
  {
    name: "AI & 机器学习",
    icon: "BrainCircuit",
    description: "深度学习、NLP 与模型部署",
  },
  {
    name: "编程语言",
    icon: "Code2",
    description: "精通多种编程范式与语言特性",
  },
];

export const techStack: TechItem[] = [
  // 前端开发
  { name: "React", icon: "react", category: "前端开发", level: 5, description: "熟练使用 React Hooks、Next.js、状态管理" },
  { name: "Vue.js", icon: "vue", category: "前端开发", level: 4, description: "使用 Vue 3 Composition API 构建中大型应用" },
  { name: "TypeScript", icon: "typescript", category: "前端开发", level: 5, description: "类型安全的前端开发，泛型与高级类型" },
  { name: "Tailwind CSS", icon: "tailwind", category: "前端开发", level: 5, description: "Utility-first CSS 框架快速构建 UI" },
  { name: "Next.js", icon: "nextjs", category: "前端开发", level: 5, description: "SSR/SSG/ISR 全栈应用开发" },

  // 后端开发
  { name: "Node.js", icon: "nodejs", category: "后端开发", level: 5, description: "Express/Nest.js 服务端应用开发" },
  { name: "Python", icon: "python", category: "后端开发", level: 4, description: "FastAPI/Django REST 框架" },
  { name: "GraphQL", icon: "graphql", category: "后端开发", level: 3, description: "API 查询语言与 Apollo 生态" },
  { name: "REST API", icon: "api", category: "后端开发", level: 5, description: "RESTful 架构设计与最佳实践" },

  // 数据库
  { name: "PostgreSQL", icon: "postgresql", category: "数据库", level: 4, description: "关系型数据库设计与性能优化" },
  { name: "MongoDB", icon: "mongodb", category: "数据库", level: 4, description: "NoSQL 文档数据库与聚合管道" },
  { name: "Redis", icon: "redis", category: "数据库", level: 3, description: "缓存策略与消息队列" },

  // DevOps
  { name: "Docker", icon: "docker", category: "DevOps & 工具", level: 4, description: "容器化部署与微服务架构" },
  { name: "Git", icon: "git", category: "DevOps & 工具", level: 5, description: "版本控制与团队协作工作流" },
  { name: "CI/CD", icon: "cicd", category: "DevOps & 工具", level: 4, description: "GitHub Actions 自动化流水线" },
  { name: "Linux", icon: "linux", category: "DevOps & 工具", level: 4, description: "服务器管理与 Shell 脚本" },

  // AI
  { name: "TensorFlow", icon: "tensorflow", category: "AI & 机器学习", level: 3, description: "深度学习模型训练与部署" },
  { name: "PyTorch", icon: "pytorch", category: "AI & 机器学习", level: 4, description: "研究导向的深度学习框架" },
  { name: "LangChain", icon: "langchain", category: "AI & 机器学习", level: 3, description: "LLM 应用开发框架" },

  // 编程语言
  { name: "JavaScript", icon: "javascript", category: "编程语言", level: 5, description: "ES6+，异步编程与函数式范式" },
  { name: "TypeScript", icon: "typescript", category: "编程语言", level: 5, description: "静态类型检查与高级类型体操" },
  { name: "Python", icon: "python", category: "编程语言", level: 4, description: "数据分析、机器学习与后端开发" },
  { name: "Go", icon: "go", category: "编程语言", level: 2, description: "高性能并发编程入门" },
];
