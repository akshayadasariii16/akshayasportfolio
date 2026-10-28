export type ProjectStatus = 'Completed' | 'In Development' | 'Experimental' | 'Production';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  status: ProjectStatus;
  techStack: string[];
  problem: string;
  solution: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  category: string;
  telemetryId: string;
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0 - 100 (self-assessed)
  context?: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface PortfolioData {
  identity: {
    name: string;
    designation: string;
    systemGreeting: string;
    subGreeting: string;
    roles: string[];
    monogram: string;
    avatarUrl?: string;
  };
  about: {
    quote: string;
    quoteAuthor: string;
    biography: string[];
    interestTags: string[];
    verifiedMetrics: Array<{
      label: string;
      value: string;
      detail: string;
    }>;
  };
  contact: {
    email: string;
    phone?: string;
    location: string;
    availability: string;
    socials: Array<{
      platform: string;
      url: string;
      handle: string;
      verified: boolean;
    }>;
    note: string;
  };
  voiceNarration: {
    introScript: string;
    preferredVoiceLang: string;
    rate: number;
    pitch: number;
  };
}
