export interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "preprint";
  abstract: string;
  keywords: string[];
  doi?: string;
  pdf?: string;
  code?: string;
  slides?: string;
}

export const papers: Paper[] = [
  {
    id: "paper-1",
    title: "基于知识图谱增强的文本分类方法研究",
    authors: ["你的名字", "导师名字"],
    venue: "计算机学报",
    year: 2022,
    type: "journal",
    abstract:
      "本文提出了一种基于知识图谱增强的文本分类方法，通过将外部知识图谱信息融入预训练语言模型，显著提升了文本分类的准确率。实验结果表明，该方法在多个公开数据集上均取得了最优性能。",
    keywords: ["知识图谱", "文本分类", "预训练模型", "自然语言处理"],
    doi: "10.xxxx/xxxxx",
    pdf: "#",
    code: "https://github.com/yourusername/kg-text-classification",
  },
  {
    id: "paper-2",
    title: "Large Language Models for Domain-Specific Question Answering: A Comprehensive Study",
    authors: ["你的名字", "合作者名字", "导师名字"],
    venue: "ACL 2023",
    year: 2023,
    type: "conference",
    abstract:
      "We present a comprehensive study on adapting large language models for domain-specific question answering tasks. We propose a novel fine-tuning strategy combining retrieval-augmented generation with domain-adaptive pretraining, achieving state-of-the-art results on three benchmark datasets.",
    keywords: ["Large Language Models", "Question Answering", "RAG", "Domain Adaptation"],
    doi: "10.xxxx/xxxxx",
    pdf: "#",
    code: "https://github.com/yourusername/domain-qa-llm",
  },
  {
    id: "paper-3",
    title: "基于对比学习的代码搜索技术综述",
    authors: ["你的名字", "合作者名字"],
    venue: "软件学报",
    year: 2023,
    type: "journal",
    abstract:
      "本文系统综述了基于对比学习的代码搜索技术，从模型架构、训练策略和评估基准三个维度对现有方法进行了全面比较和分析，并指出了未来研究方向。",
    keywords: ["代码搜索", "对比学习", "代码表示", "深度学习"],
    doi: "10.xxxx/xxxxx",
    pdf: "#",
    code: "https://github.com/yourusername/code-search-survey",
  },
  {
    id: "paper-4",
    title: "RAG-Empowered Code Generation: Bridging the Gap Between Natural Language and Programming",
    authors: ["你的名字", "导师名字"],
    venue: "arXiv preprint",
    year: 2024,
    type: "preprint",
    abstract:
      "We introduce a novel retrieval-augmented generation framework for code generation that leverages a curated knowledge base of programming patterns and best practices. Our approach significantly reduces hallucination and improves code correctness compared to baseline LLM-based code generators.",
    keywords: ["Code Generation", "RAG", "LLM", "Software Engineering"],
    doi: "",
    pdf: "https://arxiv.org/abs/24xx.xxxxx",
    code: "https://github.com/yourusername/rag-codegen",
  },
];

export const researchInterests = [
  "自然语言处理 (NLP)",
  "大语言模型 (LLM) 应用",
  "知识图谱与信息抽取",
  "代码智能 (Code Intelligence)",
  "检索增强生成 (RAG)",
  "深度学习模型优化",
];
