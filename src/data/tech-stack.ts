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
    name: "Frontend Development",
    icon: "Monitor",
    description: "Building modern, high-performance user interfaces",
  },
  {
    name: "Backend Development",
    icon: "Server",
    description: "Designing scalable server-side architectures and APIs",
  },
  {
    name: "Databases",
    icon: "Database",
    description: "Data storage, query optimization, and data modeling",
  },
  {
    name: "DevOps & Tooling",
    icon: "Terminal",
    description: "Automated delivery, CI/CD, and developer tooling",
  },
  {
    name: "AI & Machine Learning",
    icon: "BrainCircuit",
    description: "Deep learning, NLP, and model deployment",
  },
  {
    name: "Programming Languages",
    icon: "Code2",
    description: "Proficiency in multiple programming paradigms and language features",
  },
];

export const techStack: TechItem[] = [
  // Frontend Development
  { name: "React", icon: "react", category: "Frontend Development", level: 5, description: "React Hooks, Next.js, and state management" },
  { name: "Vue.js", icon: "vue", category: "Frontend Development", level: 4, description: "Building medium-to-large applications with the Vue 3 Composition API" },
  { name: "TypeScript", icon: "typescript", category: "Frontend Development", level: 5, description: "Type-safe frontend development, generics, and advanced types" },
  { name: "Tailwind CSS", icon: "tailwind", category: "Frontend Development", level: 5, description: "Rapid UI development with a utility-first CSS framework" },
  { name: "Next.js", icon: "nextjs", category: "Frontend Development", level: 5, description: "Full-stack application development with SSR, SSG, and ISR" },

  // Backend Development
  { name: "Node.js", icon: "nodejs", category: "Backend Development", level: 5, description: "Server-side application development with Express and NestJS" },
  { name: "Python", icon: "python", category: "Backend Development", level: 4, description: "FastAPI and Django REST frameworks" },
  { name: "GraphQL", icon: "graphql", category: "Backend Development", level: 3, description: "API query language and the Apollo ecosystem" },
  { name: "REST API", icon: "api", category: "Backend Development", level: 5, description: "RESTful architecture design and best practices" },

  // Databases
  { name: "PostgreSQL", icon: "postgresql", category: "Databases", level: 4, description: "Relational database design and performance optimization" },
  { name: "MongoDB", icon: "mongodb", category: "Databases", level: 4, description: "NoSQL document databases and aggregation pipelines" },
  { name: "Redis", icon: "redis", category: "Databases", level: 3, description: "Caching strategies and message queues" },

  // DevOps
  { name: "Docker", icon: "docker", category: "DevOps & Tooling", level: 4, description: "Containerized delivery and microservice architecture" },
  { name: "Git", icon: "git", category: "DevOps & Tooling", level: 5, description: "Version control and collaborative development workflows" },
  { name: "CI/CD", icon: "cicd", category: "DevOps & Tooling", level: 4, description: "Automated pipelines with GitHub Actions" },
  { name: "Linux", icon: "linux", category: "DevOps & Tooling", level: 4, description: "Server administration and shell scripting" },

  // AI
  { name: "TensorFlow", icon: "tensorflow", category: "AI & Machine Learning", level: 3, description: "Deep learning model training and deployment" },
  { name: "PyTorch", icon: "pytorch", category: "AI & Machine Learning", level: 4, description: "Research-oriented deep learning framework" },
  { name: "LangChain", icon: "langchain", category: "AI & Machine Learning", level: 3, description: "Framework for building LLM-powered applications" },

  // Programming Languages
  { name: "JavaScript", icon: "javascript", category: "Programming Languages", level: 5, description: "ES6+, asynchronous programming, and functional paradigms" },
  { name: "TypeScript", icon: "typescript", category: "Programming Languages", level: 5, description: "Static type checking and advanced type design" },
  { name: "Python", icon: "python", category: "Programming Languages", level: 4, description: "Data analysis, machine learning, and backend development" },
  { name: "Go", icon: "go", category: "Programming Languages", level: 2, description: "Foundations of high-performance concurrent programming" },
];
