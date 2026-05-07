import type { Project } from "../components/ProjectCard";

export const personalInfo = {
  name: "Issami Umeoka",
  title: "Desenvolvedor de Software Multiplataforma",
  bio: `Sou Issami Umeoka, nascido em 2005, e atualmente estou cursando Desenvolvimento de Software Multiplataforma na Fatec São José dos Campos, com previsão de conclusão em 2027. Minha formação inclui também o Técnico em Informática pelo Senac São José dos Campos, concluído em 2023, onde adquiri sólida base em áreas como programação, desenvolvimento web, engenharia de software e banco de dados.`,
  traits: `Sou comunicativo, disciplinado e adaptável, com facilidade para trabalhar em equipe e resolver problemas de forma prática e eficiente. Minha vivência em projetos acadêmicos e desenvolvimento de software fortaleceu minha organização, senso de responsabilidade e capacidade de aprender rapidamente, sempre buscando evoluir e contribuir de forma consistente em equipe.`,
  goal: `Tenho como objetivo atuar na área de programação, aplicando na prática meus conhecimentos em projetos reais e contribuindo com soluções eficientes, enquanto continuo evoluindo tecnicamente e adquirindo experiência no ambiente profissional.`,
  location: "São José dos Campos, SP — Brasil",
  timezone: "America/Sao_Paulo",
  linkedin: "https://www.linkedin.com/in/issami-umeoka-786716226/",
  github: "https://github.com/IssamiU",
  email: "issami.umeoka@gmail.com",
  resumeUrl: "/assets/documents/Currículo Profissional ISSAMI.pdf",
};

export const skills = [
  { name: "HTML", icon: "/assets/images/html.png" },
  { name: "CSS", icon: "/assets/images/css.png" },
  { name: "Python", icon: "/assets/images/python.png" },
  { name: "Java", icon: "/assets/images/java.png" },
  { name: "JavaScript", icon: "/assets/images/javascript.png" },
  { name: "TypeScript", icon: "/assets/images/typescript.png" },
  { name: "C", icon: "/assets/images/C.png" },
  { name: "C++", icon: "/assets/images/C++.png" },
  { name: "Spring Boot", icon: "/assets/images/springboot.png" },
  { name: "Swagger", icon: "/assets/images/swagger.png" },
  { name: "Node.js", icon: "/assets/images/node.png" },
  { name: "Express.js", icon: "/assets/images/express.png" },
  { name: "React", icon: "/assets/images/react.png" },
  { name: "MySQL", icon: "/assets/images/mysql.png" },
  { name: "PostgreSQL", icon: "/assets/images/postgresql.png" },
  { name: "MongoDB", icon: "/assets/images/mongodb.png" },
  { name: "Redis", icon: "/assets/images/redis.png" },
  { name: "Apache", icon: "/assets/images/apache.png" },
  { name: "Neo4j", icon: "/assets/images/neo4j.png" },
  { name: "Flask", icon: "/assets/images/Flask.png" },
  { name: "AWS", icon: "/assets/images/aws.png" },
  { name: "Docker", icon: "/assets/images/docker-icon.png" },
  { name: "Git", icon: "/assets/images/git.png" },
  { name: "GitHub", icon: "/assets/images/github.png" },
  { name: "GitLab", icon: "/assets/images/gitlab.png" },
  { name: "Bootstrap", icon: "/assets/images/Bootstrap.png" },
  { name: "Tailwind CSS", icon: "/assets/images/tailwind.png" },
  { name: "Figma", icon: "/assets/images/figma.png" },
  { name: "Jira", icon: "/assets/images/jira.png" },
  { name: "Trello", icon: "/assets/images/trello.png" },
  { name: "Insomnia", icon: "/assets/images/insomnia.png" },
  { name: "Postman", icon: "/assets/images/postman.png" },
  { name: "Supabase", icon: "/assets/images/supabase.png" },
  { name: "Vercel", icon: "/assets/images/vercel.png" },
];

export const projects: Project[] = [
  {
    id: "api-quarto-semestre",
    title: "Sistema de Coleta de Dados de Estações Meteorológicas",
    semester: "API 4º Semestre",
    description:
      "Desenvolvimento de um sistema completo de monitoramento meteorológico (IoT) em parceria com a Tecsus, focado em ONGs e Associações de Bairro. A solução permite coleta remota, processamento e visualização de dados climáticos, como temperatura, vento e chuva, por meio de estações meteorológicas de baixo custo.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MQTT",
      "PostgreSQL",
      "MongoDB",
      "C",
      "C++",
      "ESP32",
      "Swagger",
      "Docker",
      "AWS",
      "GitLab",
      "Jira",
    ],
    role: "Desenvolvedor Full Stack com foco em QA e DevOps",
    client: "Tecsus",
    year: "2026",
    date: "2026-03-16",
    status: "Em andamento",
    duration: "6 meses",
    overview:
      "Ecossistema IoT de ponta a ponta para monitoramento meteorológico em comunidades remotas, unindo hardware de baixo consumo, comunicação via MQTT, banco de dados híbrido e dashboards interativos para acompanhamento climático em tempo real.",
    impact:
      "Atuo no desenvolvimento da solução em equipe dentro de um projeto acadêmico em parceria com a Tecsus, contribuindo para a construção de uma plataforma escalável de ingestão, processamento e visualização de dados meteorológicos. O projeto envolve integração entre frontend, backend, banco de dados, documentação de APIs, infraestrutura com Docker e fluxo de trabalho com Scrum e GitLab CI/CD.",
    repoUrl: "https://gitlab.com/Issami/api-4-sem-tecsus",
    banner: "/assets/images/tecsus-thumbnail.png",
    thumbnail: "/assets/images/tecsus-thumbnail.png",
    // video: "/assets/videos/tecsus-demo.mp4",
  },
  {
    id: "api-terceiro-semestre",
    title: "TaskManager - Gestão de Tarefas e Colaboração",
    semester: "API 3º Semestre",
    description:
      "Desenvolvimento de uma plataforma de gestão de tarefas e colaboração para a parceira GSW. O projeto visa otimizar o fluxo de trabalho das equipes, indo além de um simples organizador. A solução integra controle de prioridades, visualização de prazos via calendário, inclusão de anexos para comprovantes e atribuição de responsabilidades em uma interface responsiva.",
    technologies: [
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "MongoDB",
      "Redis",
      "Figma",
      "Git",
    ],
    role: "Project Owner (P.O)",
    client: "GSW",
    year: "2025",
    date: "2025-12-01",
    status: "Concluído",
    duration: "6 meses",
    overview:
      "Plataforma completa de gerenciamento de tarefas com foco em colaboração entre equipes, priorização de demandas, acompanhamento de prazos e organização de entregas em uma interface moderna e responsiva.",
    impact:
      "Atuei como Project Owner, sendo responsável pela documentação de artefatos, gerenciamento de backlog, planejamento de sprints, coordenação de equipe, desenvolvimento de wireframes e comunicação direta entre a dev team e o cliente. Também acompanhei métricas de desempenho e ajudei a garantir o alinhamento entre visão do produto e execução técnica.",
    repoUrl: "https://github.com/the-devs-department/GSW-2025.2-3Sem",
    banner: "/assets/images/gsw-thumbnail.png",
    thumbnail: "/assets/images/gsw-thumbnail.png",
    video: "/assets/videos/TaskManager.mp4",
  },
  {
    id: "api-segundo-semestre",
    title: "Dashboard Estratégico Helpnei",
    semester: "API 2º Semestre",
    description:
      "Desenvolvimento de um dashboard de indicadores para a Helpnei, centralizando e apresentando de forma interativa dados sobre lojas, usuários e transações. A interface foi projetada para ser responsiva e intuitiva, permitindo acompanhar o desempenho da plataforma por meio de métricas relevantes.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "SQL",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Figma",
      "Git",
    ],
    role: "Desenvolvedor Frontend",
    client: "Helpnei",
    year: "2024",
    date: "2024-06-01",
    status: "Concluído",
    duration: "5 meses",
    overview:
      "Dashboard web para visualização de indicadores estratégicos da plataforma Helpnei, com foco em métricas como lojas criadas, usuários impactados, transações e distribuição geográfica.",
    impact:
      "Atuei no frontend dentro de um modelo ágil, participando do desenvolvimento da interface, consumo de dados e integração com o backend. Contribuí para a construção de uma experiência responsiva e orientada a dados, utilizando React, Node.js, Express, SQL e Tailwind CSS.",
    repoUrl: "https://github.com/the-devs-department/helpnei",
    banner: "/assets/images/helpnei-thumbnail.png",
    thumbnail: "/assets/images/helpnei-thumbnail.png",
    video: "/assets/videos/The Devs Dept - Helpnei.mp4",
  },
  {
    id: "api-primeiro-semestre",
    title: "Plataforma de Transparência Legislativa",
    semester: "API 1º Semestre",
    description:
      "Projeto que organiza e apresenta, de forma interativa e acessível, dados disponibilizados pelo site da prefeitura sobre proposições, frequência e participação em comissões de cada vereador.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Python",
      "Flask",
      "Tailwind CSS",
      "Figma",
      "Git",
      "Railway",
      "Microsoft Excel",
    ],
    role: "Desenvolvedor Full Stack",
    client: "Projeto Acadêmico",
    year: "2023",
    date: "2023-12-01",
    status: "Concluído",
    duration: "4 meses",
    overview:
      "Sistema web voltado para a visualização e organização de dados legislativos públicos, permitindo acesso mais claro e interativo a informações sobre vereadores, proposições, presença e participação em comissões.",
    impact:
      "Atuei no modelo ágil como integrante da Dev Team, contribuindo no frontend, backend, raspagem de dados e web design. Trabalhei com HTML, CSS, JavaScript, Python e Flask, ajudando a transformar dados públicos em uma interface acessível e funcional.",
    repoUrl: "https://github.com/IssamiU/the-devs-department",
    banner: "/assets/images/legislativo-thumbnail.png",
    thumbnail: "/assets/images/legislativo-thumbnail.png",
    video: "/assets/videos/The Devs Dept - Sprint 1 - Pedro Henrique Vaz (1080p, h264, youtube).mp4",
  },
  {
    id: "chatbot-beatfy",
    title: "Beatfy - ChatBot Ollama de Letras de Música",
    semester: "Projeto Acadêmico",
    description:
      "Chatbot integrado ao Telegram capaz de buscar letras de músicas e interagir com o usuário utilizando processamento de linguagem natural. A aplicação combina IA local com Ollama, backend em Python e um sistema próprio de armazenamento e busca de dados.",
    technologies: [
      "Python",
      "FastAPI",
      "Telegram API",
      "Ollama",
      "Whisper",
      "SQLite",
      "API REST",
      "Git",
    ],
    role: "Desenvolvedor Backend com foco em IA e Integração",
    client: "Projeto Acadêmico",
    year: "2024",
    date: "2024-04-01",
    status: "Concluído",
    duration: "Projeto curto",
    overview:
      "Sistema composto por um chatbot no Telegram, um servidor backend em FastAPI e um mecanismo de busca inteligente que permite consultar letras de músicas e armazenar dados localmente. O projeto integra processamento de linguagem natural, comandos via API e suporte a entrada por texto e voz.",
    impact:
      "Implementei um backend completo utilizando FastAPI para gerenciamento de dados e integração com um modelo de linguagem executado localmente via Ollama. Desenvolvi comunicação assíncrona com a API do Telegram, além de suporte a entrada por voz utilizando Whisper. Também construí um sistema de persistência com SQLite e endpoints REST para operações de busca e manipulação de dados. O projeto reforçou conhecimentos em IA aplicada, integração de serviços e arquitetura backend.",
    repoUrl: "https://github.com/IssamiU/ChatBot-Musica",
    banner: "/assets/images/beatfy-thumbnail.png",
    thumbnail: "/assets/images/beatfy-thumbnail.png",
  },
  {
    id: "mealsync-app",
    title: "MealSync - Planejamento Alimentar e Lista de Compras",
    semester: "Projeto Acadêmico",
    description:
      "Aplicativo mobile desenvolvido com React Native e Expo para planejamento alimentar, organização de receitas e geração automática de listas de compras. A proposta do MealSync é ajudar o usuário a planejar refeições semanais de forma prática, centralizando receitas, preferências alimentares e lista de compras em uma única experiência mobile.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "React Navigation",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "JWT",
      "Docker",
    ],
    role: "Desenvolvedor Full Stack Mobile",
    client: "Projeto Acadêmico",
    year: "2026",
    date: "2026-04-01",
    status: "Em desenvolvimento",
    duration: "Em andamento",
    overview:
      "Aplicação mobile completa voltada para planejamento de refeições e organização de compras, integrando frontend mobile, backend em API REST e persistência em bancos diferentes conforme o tipo de dado. O sistema combina gerenciamento de receitas, planejamento semanal e geração automatizada de lista de compras com foco em usabilidade e escalabilidade.",
    impact:
      "Desenvolvi o projeto utilizando React Native com Expo no frontend e Node.js com Express no backend, estruturando uma arquitetura full stack com separação clara de responsabilidades. Implementei autenticação com JWT e refresh token, cadastro de usuários com preferências alimentares, dashboard semanal, cadastro e visualização de receitas, sistema de favoritos, planejamento semanal de refeições, geração automática da lista de compras e edição manual dos itens. Também organizei o ambiente com Docker e segui uma base preparada para evolução futura com persistência offline e armazenamento externo de imagens.",
    repoUrl: "https://github.com/IssamiU/MealSync",
    banner: "/assets/images/MealSync-thumbnail.png",
    thumbnail: "/assets/images/MealSync-thumbnail.png",
    // video: "/assets/videos/mealsync-demo.mp4",
  }
];

// ============= Activity / Experiência =============

export const githubUsername = "IssamiU";
export const gitlabUsername = "Issami";

export const featuredRepos: { name: string; provider: "github" | "gitlab" }[] = [
  { name: "the-devs-department", provider: "github" },
  { name: "HELPNEI-2025.1-2Sem", provider: "github" },
  { name: "GSW-2025.2-3Sem", provider: "github" },
  { name: "api-4-sem-tecsus", provider: "gitlab" },
  { name: "ChatBot-Musica", provider: "github" },
  { name: "MealSync", provider: "github" },
];

export const stackByCategory: { category: string; items: string[] }[] = [
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Redux Toolkit", "React Navigation", "Consumo de APIs REST", "Responsividade"] },
  { category: "Backend", items: ["Node.js", "Java", "Python", "APIs REST", "JWT", "Refresh Token", "Programação Assíncrona", "MQTT"] },
  { category: "Mobile", items: ["React Native", "Expo", "Navegação Mobile", "Gerenciamento de Estado", "Integração com Backend"] },
  { category: "Banco de Dados", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Cassandra", "Neo4j", "Modelagem de Dados"] },
  { category: "DevOps & Cloud", items: ["AWS", "Docker", "Git", "GitHub", "GitLab", "GitHub Actions", "CI/CD"] },
  { category: "IoT & Sistemas", items: ["C", "C++", "Sistemas Embarcados", "Comunicação MQTT", "Integração Hardware-Software"] }
];

export const workStyle = {
  metodologia: ["Scrum", "Kanban", "Sprints curtas"],
  organizacao: ["Jira", "Trello", "Notion"],
  ferramentas: ["VS Code", "Git", "Figma", "Postman", "Insomnia"],
  comunicacao: ["Discord", "Microsoft Teams", "Slack"],
};

export const freeTimeContent = {
  explorando: {
    titulo: "O QUE ESTOU INVESTIGANDO",
    items: [
      "Aprofundando em arquitetura full stack (React + Node + APIs)",
      "Estudos práticos com React Native para aplicações móveis",
      "Fundamentos de DevOps e ambientes com Docker",
      "Melhoria de performance e organização de código",
    ],
  },

  construindo: {
    titulo: "NO QUE ESTOU TRABALHANDO AGORA",
    items: [
      "APP MealSync (React Native + Node + PostgreSQL)",
      "Evolução contínua do portfólio com novas features",
      "Projeto acadêmico em parceria com a Tecsus (API 4º semestre)",
      "Ambientes locais com Docker para desenvolvimento",
    ],
  },

  evoluindo: {
    titulo: "COMO ESTOU EVOLUINDO COMO DEV",
    items: [
      "Boas práticas de código e organização de projetos",
      "Consumo e integração de APIs REST",
      "UX/UI aplicado a projetos reais",
      "Planejamento ágil (Scrum/Kanban na prática)",
      "Noções de deploy, containers e fluxo DevOps",
    ],
  },
};

export type Experience = {
  id: string;
  project: string;
  role: string;
  technologies: string[];
  impact: string;
  company?: string;
  duration?: string;
  location?: string;
  current?: boolean;
  type?: "Estágio" | "Freelance" | "Acadêmico" | "CLT" | "PJ";
};

export const experiences: Experience[] = [
  {
    id: "estagio-simova-pd",
    project: "Pesquisa e Desenvolvimento em Telemetria Industrial",
    role: "Estagiário em P&D",
    company: "SIMOVA Tecnologia e Serviços de Informática S.A",
    type: "Estágio",
    current: true,
    location: "São José dos Campos, SP — Brasil",
    duration: "Mai 2026 - Jul 2027",
    technologies: [
      "Python",
      "C++",
      "ESP32",
      "Firmware",
      "QA",
      "Testes Automatizados",
      "BLE",
      "UART",
      "Protocolos Seriais",
      "Sistemas Embarcados",
      "Telemetria Industrial",
    ],
    impact:
      "Atuo no time de Pesquisa e Desenvolvimento apoiando o desenvolvimento e validação de sistemas embarcados e ferramentas de software para telemetria industrial. Minhas atividades envolvem desenvolvimento e manutenção de scripts de QA e testes automatizados para validação de equipamentos, organização de ferramentas internas em Python e C++, suporte ao desenvolvimento de firmware para dispositivos embarcados com ESP32, documentação técnica de procedimentos de teste e validação, além de apoio na integração entre hardware e plataformas de backend por meio de protocolos seriais, BLE e UART.",
  },
  
];

export const certificates = [
  {
    id: "escola-inovadores",
    title: "19ª Edição da ESCOLA DE INOVADORES (2024-2)",
    issuer: "INOVA CPS",
    date: "Novembro de 2024",
    hours: "40 horas",
    description:
      "Conteúdo aplicado em empatia, mapear, entender, idear, prototipar, testar, formalizar e crescer.",
    image: "/assets/images/Inovadores.png",
    certificateUrl: "/assets/documents/CERTIFICADO_-_2024-2.pdf",
  },
  {
    id: "gerenciamento-ameacas-ciberneticas",
    title: "Gerenciamento de Ameaças Cibernéticas",
    issuer: "Cisco",
    date: "Outubro de 2024",
    hours: "30 horas",
    description:
      "Certificação voltada para fundamentos de identificação, prevenção e gerenciamento de ameaças cibernéticas.",
    image: "/assets/images/CyberCertificado.jpg",
    certificateUrl: "/assets/documents/CyberCertificado.pdf",
  },
];