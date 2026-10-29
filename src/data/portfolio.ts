import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  identity: {
    name: 'AKSHAYA',
    designation: 'Software Developer',
    systemGreeting: 'SYS_VER // 2.0.4 — PROTOCOL INITIALIZED',
    subGreeting: 'SOFTWARE DEVELOPER × INTELLIGENT AI SYSTEMS',
    roles: [
      'Software Developer',
      'Full-Stack Developer',
      'AI & Machine Learning Developer',
      'Web Developer'
    ],
    monogram: 'AK',
    avatarUrl: '/profile.jpg',
  },
  about: {
    quote: 'Transforming ideas into resilient software, intelligent AI models, and intuitive user experiences.',
    quoteAuthor: 'Akshaya — Software Developer',
    biography: [
      'I am Akshaya, a Software Developer based in Hyderabad, India, dedicated to engineering high-performance web systems and intelligent software applications.',
      'My work centers on developing scalable full-stack architectures, integrating computer vision and machine learning models (such as plant detection and species recognition), and crafting fluid, accessible user interfaces.',
      'Driven by clean code craftsmanship and user-centered design, I enjoy solving complex engineering challenges and delivering dependable digital solutions.'
    ],
    interestTags: [
      'Software Engineering',
      'AI & Machine Learning',
      'Computer Vision & Plant Detection',
      'Full-Stack Web Development',
      'Python & FastAPI',
      'React & TypeScript',
      'Database Systems',
      'REST & Cloud Services'
    ],
    verifiedMetrics: [
      {
        label: 'ROLE',
        value: 'Software Dev',
        detail: 'Full-Stack & Intelligent AI'
      },
      {
        label: 'LOCATION',
        value: 'Hyderabad',
        detail: 'Telangana, India'
      },
      {
        label: 'AI VISION',
        value: 'Plant AI',
        detail: 'Botanical Recognition Model'
      },
      {
        label: 'STATUS',
        value: 'Available',
        detail: 'Open to Opportunities'
      }
    ]
  },
  contact: {
    email: 'akshaya.dasari@gmail.com',
    phone: '+91 9963544682',
    location: 'Hyderabad, India · Available for Remote & On-Site Roles',
    availability: 'Open for Software Developer & Engineering Roles',
    socials: [
      {
        platform: 'GitHub',
        url: 'https://github.com',
        handle: '@akshaya',
        verified: true
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com',
        handle: 'in/akshaya-dasari',
        verified: true
      },
      {
        platform: 'X / Twitter',
        url: 'https://twitter.com',
        handle: '@akshaya_dev',
        verified: true
      }
    ],
    note: 'Form submissions use client-side verification and trigger your default mail client with prefilled telemetry data. Delivery depends on client dispatch.'
  },
  voiceNarration: {
    introScript: 'Greetings. I am JARVIS, an autonomous intelligence interface curated for Akshaya, a software developer based in Hyderabad. All system diagnostics are nominal. Explore the project universe, inspect the skill matrix, or initiate communication at your command.',
    preferredVoiceLang: 'en-GB',
    rate: 0.96,
    pitch: 1.02
  }
};
