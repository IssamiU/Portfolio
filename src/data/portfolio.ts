import type { Project } from "../components/ProjectCard";

export const personalInfo = {
  name: "Issami Umeoka",
  title: "Desenvolvedor de Software Multiplataforma",
  bio: `Sou Issami Umeoka, nascido em 2005, e atualmente estou cursando Desenvolvimento de Software Multiplataforma na Fatec São José dos Campos, com previsão de conclusão em 2027. Minha formação inclui também o Técnico em Informática pelo Senac São José dos Campos, concluído em 2023, onde adquiri sólida base em áreas como programação, desenvolvimento web, engenharia de software e banco de dados.`,
  traits: `Sou comunicativo, disciplinado e adaptável, com facilidade para trabalhar em equipe e resolver problemas de forma criativa. Minhas experiências em esportes e projetos técnicos fortaleceram minha resiliência e organização, além de me capacitar para aprender rapidamente e colaborar eficazmente.`,
  goal: `Tenho como objetivo atuar na área da programação que eu possa colocar em prática meus conhecimentos na empresa.`,
  location: "São José dos Campos, SP — Brasil",
  timezone: "America/Sao_Paulo",
  linkedin: "https://www.linkedin.com/in/issami-umeoka",
  github: "https://github.com/issamiUmeworx",
  email: "issami.umeoka@email.com",
  resumeUrl: "/assets/documents/curriculo.pdf",
};

export const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "JavaScript", icon: "🟨" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Redis", icon: "🔴" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "📦" },
  { name: "Figma", icon: "🎯" },
  { name: "Elixir", icon: "💜" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🚀" },
];

export const projects: Project[] = [
  {
    id: "api-terceiro-semestre",
    title: "Plataforma de Gestão de Tarefas e Colaboração",
    semester: "API 3º Semestre",
    description:
      "Desenvolvimento de uma Plataforma de Gestão de Tarefas e Colaboração para a parceira GSW. O projeto visa otimizar o fluxo de trabalho das equipes, indo além de um simples organizador. A solução integra controle de prioridades, visualização de prazos via calendário, inclusão de anexos para comprovantes e atribuição de responsabilidades em uma interface totalmente responsiva.",
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "Tailwind CSS", "HTML5", "CSS3", "MongoDB", "Redis", "Figma", "Git"],
    role: "Project Owner (P.O)",
    client: "GSW",
    year: "2024",
    date: "2024-12-01",
    status: "Concluído",
    duration: "6 meses",
    overview:
      "Plataforma completa de gerenciamento de tarefas com foco em colaboração em equipe, controle de prioridades e rastreamento de prazos. O sistema oferece dashboards interativos, sistema de notificações e integração com calendário.",
    impact:
      "Liderei a documentação de artefatos, gerenciamento de backlog, planejamento de sprints e coordenação de equipe. Atuei como ponte direta entre o time de desenvolvimento e o cliente, garantindo alinhamento constante de expectativas e entregas dentro dos prazos. Desenvolvi wireframes que serviram de base para a interface final.",
    repoUrl: "https://github.com/issamiUmeworx",
  },
  {
    id: "api-segundo-semestre",
    title: "Sistema de Gerenciamento Acadêmico",
    semester: "API 2º Semestre",
    description:
      "Sistema web completo para gerenciamento acadêmico, com funcionalidades de cadastro de alunos, professores e disciplinas, além de controle de notas e frequência.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "CSS3"],
    role: "Desenvolvedor Full Stack",
    client: "Fatec SJC",
    year: "2024",
    date: "2024-06-01",
    status: "Concluído",
    duration: "5 meses",
    overview:
      "Sistema acadêmico que centraliza informações de alunos, professores e disciplinas com controle automatizado de notas e frequência. Interface intuitiva para diferentes perfis de usuário.",
    impact:
      "Implementei features tanto no frontend quanto no backend, realizei integração com banco de dados MongoDB e contribuí para a arquitetura da API REST. Minha atuação full stack permitiu entregas mais rápidas e consistentes entre as camadas da aplicação.",
  },
  {
    id: "api-primeiro-semestre",
    title: "Portfolio Pessoal Interativo",
    semester: "API 1º Semestre",
    description:
      "Desenvolvimento do primeiro portfólio pessoal utilizando tecnologias web fundamentais, com foco em design responsivo e apresentação profissional.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Git"],
    role: "Desenvolvedor Frontend",
    client: "Projeto Acadêmico",
    year: "2023",
    date: "2023-12-01",
    status: "Concluído",
    duration: "4 meses",
    overview:
      "Portfólio web pessoal construído do zero utilizando apenas tecnologias fundamentais da web, demonstrando domínio de HTML semântico, CSS responsivo e JavaScript interativo.",
    impact:
      "Design e implementação completa do projeto de forma independente, desde o planejamento visual até o deploy. O projeto serviu como base para o meu desenvolvimento profissional na área de frontend.",
  },
];

// ============= Activity / Experiência =============

export const githubUsername = "IssamiU";
export const gitlabUsername = "Issami";

export const featuredRepos: { name: string; provider: "github" | "gitlab" }[] = [
  // Exemplo: { name: "meu-repo", provider: "github" },
];

export const stackByCategory: { category: string; items: string[] }[] = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"] },
  { category: "Backend", items: ["Java", "Spring Boot", "Node.js", "Express", "Elixir"] },
  { category: "Banco de Dados", items: ["MongoDB", "Redis", "PostgreSQL"] },
  { category: "DevOps", items: ["AWS", "Git", "Docker"] },
  { category: "Ferramentas", items: ["Figma", "VS Code", "Postman", "Blender"] },
];

export const workStyle = {
  metodologia: ["Scrum", "Kanban", "Sprints curtas"],
  organizacao: ["Trello", "Jira", "Notion"],
  ferramentas: ["VS Code", "Git", "Figma", "Postman"],
  comunicacao: ["Slack", "Discord", "Microsoft Teams"],
};

export const freeTimeContent = {
  musicas: [
    "Lo-fi enquanto programo",
    "Rock alternativo nos treinos",
    "Trilhas sonoras para foco",
  ],
  livros: [
    "Clean Code — Robert C. Martin",
    "The Pragmatic Programmer",
    "Atomic Habits — James Clear",
  ],
  stack: {
    titulo: "APRENDENDO / DESENVOLVENDO",
    items: [
      "Modelagem no Blender",
      "Me aprofundando no Framer",
      "Expo",
      "Remodelagem do Spotify",
    ],
  },
};

// ============= Experiência =============

export type Experience = {
  id: string;
  project: string;
  role: string;
  technologies: string[];
  impact: string;
  // Campos opcionais para expansão futura
  company?: string;
  duration?: string;
  location?: string;
  type?: "Estágio" | "Freelance" | "Acadêmico" | "CLT" | "PJ";
};

export const experiences: Experience[] = [
  // Vazio por enquanto — empty state será exibido
];

export const certificates = [
  {
    id: "escola-inovadores",
    title: "19ª Edição da ESCOLA DE INOVADORES (2024-2)",
    issuer: "INOVA CPS",
    date: "Novembro de 2024",
    hours: "40 horas",
    description:
      "Conteúdo Aplicado: Empatia e Mapear, Entender, Idear, Prototipar, Testar, Formalizar e Crescer.",
  },
];
