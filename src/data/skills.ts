import { SkillCategory } from '../types/portfolio';

export const skillsCategories: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming',
    description: 'Foundational languages for systems programming, data structures, and enterprise logic.',
    skills: [
      { name: 'TypeScript / JavaScript', proficiency: 92, context: 'Modern ESNext, strict type systems, async patterns', tag: 'Primary' },
      { name: 'Python', proficiency: 88, context: 'Scientific computing, automation, AI orchestrations', tag: 'Core' },
      { name: 'C / C++', proficiency: 74, context: 'Memory management, low-level algorithms, socket programming', tag: 'Foundational' },
      { name: 'SQL / Procedural SQL', proficiency: 82, context: 'Complex querying, indexing strategies, schema modeling', tag: 'Database' }
    ]
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Autonomous agents, neural architectures, speech synthesis, and prompt engineering.',
    skills: [
      { name: 'Speech Recognition & TTS', proficiency: 88, context: 'Web Speech API, Whisper integration, real-time audio streams', tag: 'Interactive' },
      { name: 'LangChain & Agentic Workflows', proficiency: 84, context: 'Tool calling, retrieval augmented generation (RAG)', tag: 'Modern AI' },
      { name: 'PyTorch & Core ML Concepts', proficiency: 76, context: 'Model fine-tuning, tensor operations, evaluation metrics', tag: 'Modeling' },
      { name: 'Multimodal Telemetry & Prompts', proficiency: 90, context: 'Structured extraction, system guardrails, context windows', tag: 'Production' }
    ]
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Modern frontend ecosystems, state machines, animation choreography, and glassmorphic UI.',
    skills: [
      { name: 'React 18 & Ecosystem', proficiency: 95, context: 'Custom hooks, concurrent features, component architecture', tag: 'Expertise' },
      { name: 'Next.js & Server Components', proficiency: 86, context: 'SSR, SSG, edge middleware, route optimization', tag: 'Framework' },
      { name: 'Framer Motion & Fluid Motion', proficiency: 90, context: 'Spring dynamics, gesture physics, layout projections', tag: 'Motion' },
      { name: 'Modern CSS & Design Systems', proficiency: 94, context: 'Custom properties, glassmorphism, clamp typography', tag: 'Styling' }
    ]
  },
  {
    id: 'backend-db',
    name: 'Backend & Databases',
    description: 'Distributed servers, API gateways, cache coherence, and relational/document persistence.',
    skills: [
      { name: 'Node.js & Express / Nest', proficiency: 88, context: 'RESTful architectures, WebSocket clustering, auth pipelines', tag: 'Backend' },
      { name: 'PostgreSQL & ORMs (Prisma)', proficiency: 84, context: 'Relational migrations, relational integrity, connection pooling', tag: 'Relational' },
      { name: 'MongoDB & Document Stores', proficiency: 80, context: 'Aggregation pipelines, schema-flexible modeling', tag: 'NoSQL' },
      { name: 'Redis Cache & Pub/Sub', proficiency: 78, context: 'Session persistence, key expiration, rate limiting', tag: 'In-Memory' }
    ]
  },
  {
    id: 'dev-tools',
    name: 'Development Tools',
    description: 'DevOps, containerization, version control, and automated build pipelines.',
    skills: [
      { name: 'Git & GitHub Collaboration', proficiency: 92, context: 'Trunk-based workflow, branch protection, semantic commits', tag: 'VCS' },
      { name: 'Vite & Bundler Tooling', proficiency: 90, context: 'ESBuild optimization, chunk splitting, tree-shaking', tag: 'Build' },
      { name: 'Docker & Containerization', proficiency: 78, context: 'Multi-stage Dockerfiles, microservice orchestration', tag: 'Containers' },
      { name: 'Postman & API Testing', proficiency: 86, context: 'Automated test assertions, mock environments', tag: 'Testing' }
    ]
  },
  {
    id: 'creative-media',
    name: 'Creative Tools & Media',
    description: '3D spatial visualization, vector design, holographic aesthetics, and audio telemetry.',
    skills: [
      { name: 'Three.js & WebGL 3D', proficiency: 82, context: 'Orbital controls, procedural geometries, lighting shaders', tag: '3D Graphics' },
      { name: 'Figma UI/UX & Prototyping', proficiency: 88, context: 'Design tokens, auto-layout, interactive component states', tag: 'Design' },
      { name: 'Web Audio API & Equalizers', proficiency: 80, context: 'Frequency spectrum analysis, reactive audio visualizers', tag: 'Sound FX' },
      { name: 'Accessibility (WCAG 2.1 AA)', proficiency: 86, context: 'ARIA semantics, keyboard focus traps, contrast compliance', tag: 'Accessibility' }
    ]
  }
];
