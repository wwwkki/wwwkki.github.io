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
    title: "Knowledge-Graph-Enhanced Methods for Text Classification",
    authors: ["Your Name", "Advisor Name"],
    venue: "Chinese Journal of Computers",
    year: 2022,
    type: "journal",
    abstract:
      "We propose a knowledge-graph-enhanced approach to text classification that integrates external knowledge into a pretrained language model, substantially improving classification accuracy. Experiments show that the approach achieves state-of-the-art performance across multiple public datasets.",
    keywords: ["Knowledge Graphs", "Text Classification", "Pretrained Models", "Natural Language Processing"],
    doi: "10.xxxx/xxxxx",
    pdf: "#",
    code: "https://github.com/yourusername/kg-text-classification",
  },
  {
    id: "paper-2",
    title: "Large Language Models for Domain-Specific Question Answering: A Comprehensive Study",
    authors: ["Your Name", "Co-author Name", "Advisor Name"],
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
    title: "A Survey of Contrastive Learning for Code Search",
    authors: ["Your Name", "Co-author Name"],
    venue: "Journal of Software",
    year: 2023,
    type: "journal",
    abstract:
      "This paper presents a systematic survey of contrastive-learning-based code search. Existing methods are comprehensively compared across model architectures, training strategies, and evaluation benchmarks, followed by a discussion of future research directions.",
    keywords: ["Code Search", "Contrastive Learning", "Code Representation", "Deep Learning"],
    doi: "10.xxxx/xxxxx",
    pdf: "#",
    code: "https://github.com/yourusername/code-search-survey",
  },
  {
    id: "paper-4",
    title: "RAG-Empowered Code Generation: Bridging the Gap Between Natural Language and Programming",
    authors: ["Your Name", "Advisor Name"],
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
  "Natural Language Processing (NLP)",
  "Large Language Model (LLM) Applications",
  "Knowledge Graphs and Information Extraction",
  "Code Intelligence",
  "Retrieval-Augmented Generation (RAG)",
  "Deep Learning Model Optimization",
];
