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
    title: "Started University — Software Engineering",
    description: "Began systematic study of computer science fundamentals: C, data structures, algorithms, and operating systems.",
    type: "milestone",
    tags: ["Computer Science Fundamentals", "C", "Data Structures"],
  },
  {
    id: "2",
    date: "2018-06",
    title: "First Web Project — Personal Blog",
    description: "Built a first static blog with HTML, CSS, and JavaScript while learning the fundamentals of frontend development.",
    type: "project",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/yourusername/first-blog",
  },
  {
    id: "3",
    date: "2019-03",
    title: "Learned the React Ecosystem",
    description: "Studied component-based development, state management, and React Router, then built a Todo application and an e-commerce prototype.",
    type: "course",
    tags: ["React", "Redux", "Frontend Frameworks"],
  },
  {
    id: "4",
    date: "2020-01",
    title: "Advanced Node.js and Backend Development",
    description: "Developed proficiency in Express.js and MongoDB, independently delivering full-stack projects and RESTful API services.",
    type: "course",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: "5",
    date: "2020-08",
    title: "Contributed to Open Source",
    description: "Started contributing to open-source projects on GitHub, submitted a first pull request, and learned collaborative Git workflows.",
    type: "milestone",
    tags: ["Open Source", "Git", "GitHub"],
    link: "https://github.com/yourusername",
  },
  {
    id: "6",
    date: "2021-06",
    title: "Undergraduate Capstone — Intelligent Recommendation System",
    description: "Researched and implemented a hybrid recommendation algorithm based on collaborative filtering and deep learning, resulting in an outstanding thesis.",
    type: "project",
    tags: ["Python", "Recommendation Systems", "Deep Learning", "PyTorch"],
    link: "https://github.com/yourusername/recommender-system",
  },
  {
    id: "7",
    date: "2021-09",
    title: "Graduate Studies — NLP Research",
    description: "Joined a research lab focused on natural language processing and knowledge graphs, systematically reading papers and reproducing experiments.",
    type: "milestone",
    tags: ["NLP", "Deep Learning", "Academic Research"],
  },
  {
    id: "8",
    date: "2022-03",
    title: "Published First Academic Paper",
    description: "Published a paper on knowledge-graph-enhanced text classification in a leading Chinese academic journal.",
    type: "paper",
    tags: ["NLP", "Knowledge Graphs", "Research Papers"],
    link: "#",
  },
  {
    id: "9",
    date: "2022-09",
    title: "Learned Docker & DevOps",
    description: "Built practical expertise in Docker containerization, Docker Compose, and GitHub Actions CI/CD pipelines.",
    type: "course",
    tags: ["Docker", "DevOps", "CI/CD"],
  },
  {
    id: "10",
    date: "2023-03",
    title: "Built a Full-Stack Next.js Application",
    description: "Built a full-stack SaaS application with the Next.js 13+ App Router, Prisma ORM, and NextAuth.",
    type: "project",
    tags: ["Next.js", "TypeScript", "Prisma", "Full Stack"],
    link: "https://github.com/yourusername/saas-app",
  },
  {
    id: "11",
    date: "2023-09",
    title: "Developed Large Language Model Applications",
    description: "Studied LangChain, vector databases, and RAG architectures, then built an LLM-powered question-answering system.",
    type: "project",
    tags: ["LLM", "LangChain", "RAG", "Vector Databases"],
    link: "https://github.com/yourusername/llm-qa-system",
  },
  {
    id: "12",
    date: "2024-01",
    title: "Master's Thesis Defense",
    description: "Completed research on applying large language models to specialized domains and successfully defended the thesis.",
    type: "milestone",
    tags: ["LLM", "Academic Research", "Master's Degree"],
  },
  {
    id: "13",
    date: "2024-06",
    title: "Continuous Learning and Growth",
    description: "Remain curious about emerging technologies while continuing to learn and contribute across AI, full-stack development, and open source.",
    type: "milestone",
    tags: ["Continuous Learning", "AI", "Full-Stack Development"],
  },
];
