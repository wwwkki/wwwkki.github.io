export interface LearningMilestone {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "course" | "project" | "certification" | "milestone" | "paper";
  tags: string[];
  link?: string;
}

export const learningPath: LearningMilestone[] = [
  {
    id: "1",
    date: "2017-09",
    title: "进入大学 — 软件工程专业",
    description: "开始系统学习计算机科学基础：C 语言、数据结构、算法设计、操作系统。",
    type: "milestone",
    tags: ["计算机基础", "C 语言", "数据结构"],
  },
  {
    id: "2",
    date: "2018-06",
    title: "第一个 Web 项目 — 个人博客",
    description: "使用 HTML/CSS/JavaScript 搭建第一个静态博客，学习了前端三大件的基础知识。",
    type: "project",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/yourusername/first-blog",
  },
  {
    id: "3",
    date: "2019-03",
    title: "学习 React 框架",
    description: "系统学习 React 生态：组件化开发、状态管理、React Router，完成了一个 Todo 应用和电商 Demo。",
    type: "course",
    tags: ["React", "Redux", "前端框架"],
  },
  {
    id: "4",
    date: "2020-01",
    title: "深入学习 Node.js 与后端开发",
    description: "掌握 Express.js、MongoDB，能够独立完成全栈项目。搭建了 RESTful API 服务。",
    type: "course",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: "5",
    date: "2020-08",
    title: "参与开源项目",
    description: "开始在 GitHub 上贡献开源项目，提交了第一个 PR，学习了 Git 工作流和协作规范。",
    type: "milestone",
    tags: ["开源", "Git", "GitHub"],
    link: "https://github.com/yourusername",
  },
  {
    id: "6",
    date: "2021-06",
    title: "本科毕业设计 — 智能推荐系统",
    description: "基于协同过滤和深度学习的混合推荐算法研究与实现，获得优秀毕业论文。",
    type: "project",
    tags: ["Python", "推荐系统", "深度学习", "PyTorch"],
    link: "https://github.com/yourusername/recommender-system",
  },
  {
    id: "7",
    date: "2021-09",
    title: "研究生阶段 — NLP 研究方向",
    description: "进入实验室，研究方向为自然语言处理与知识图谱，开始系统阅读论文并复现实验。",
    type: "milestone",
    tags: ["NLP", "深度学习", "学术研究"],
  },
  {
    id: "8",
    date: "2022-03",
    title: "发表第一篇学术论文",
    description: "在中文核心期刊发表关于知识图谱增强的文本分类方法的论文。",
    type: "paper",
    tags: ["NLP", "知识图谱", "论文"],
    link: "#",
  },
  {
    id: "9",
    date: "2022-09",
    title: "学习 Docker & DevOps",
    description: "掌握 Docker 容器化、Docker Compose、GitHub Actions CI/CD 流水线搭建。",
    type: "course",
    tags: ["Docker", "DevOps", "CI/CD"],
  },
  {
    id: "10",
    date: "2023-03",
    title: "Next.js 全栈项目实战",
    description: "使用 Next.js 13+ App Router、Prisma ORM、NextAuth 构建全栈 SaaS 应用。",
    type: "project",
    tags: ["Next.js", "TypeScript", "Prisma", "全栈"],
    link: "https://github.com/yourusername/saas-app",
  },
  {
    id: "11",
    date: "2023-09",
    title: "大语言模型应用开发",
    description: "学习 LangChain、向量数据库、RAG 架构，构建基于 LLM 的智能问答系统。",
    type: "project",
    tags: ["LLM", "LangChain", "RAG", "向量数据库"],
    link: "https://github.com/yourusername/llm-qa-system",
  },
  {
    id: "12",
    date: "2024-01",
    title: "硕士毕业论文答辩",
    description: "完成关于大语言模型在垂直领域应用的研究，顺利通过答辩。",
    type: "milestone",
    tags: ["LLM", "学术研究", "硕士"],
  },
  {
    id: "13",
    date: "2024-06",
    title: "持续学习与成长",
    description: "保持对新技术的好奇心，持续在 AI、全栈开发和开源社区中学习和贡献。",
    type: "milestone",
    tags: ["持续学习", "AI", "全栈开发"],
  },
];
