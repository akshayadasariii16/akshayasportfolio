import React, { useState } from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projectsData } from '../data/projects';
import { Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projectsData.map(p => p.category)))];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <SectionContainer
      id="projects"
      badge="SCENE 03 // PROJECT UNIVERSE"
      title="Interactive Engineering Systems"
      subtitle="Autonomous intelligence brokers, high-throughput distributed commerce engines, and wireless beacon protocols."
    >
      {/* Category Filter Pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.65rem',
          justifyContent: 'center',
          marginBottom: '3rem'
        }}
      >
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: isSelected ? 700 : 500,
                padding: '0.45rem 1.15rem',
                borderRadius: 'var(--radius-pill)',
                border: isSelected ? '1px solid var(--color-strong-pink)' : '1px solid var(--glass-border)',
                background: isSelected
                  ? 'linear-gradient(135deg, #F8D7E3 0%, #D982A3 100%)'
                  : 'rgba(255, 248, 250, 0.8)',
                color: isSelected ? '#FFF8FA' : 'var(--color-rosewood)',
                cursor: 'pointer',
                boxShadow: isSelected ? '0 4px 14px rgba(217, 130, 163, 0.35)' : 'none',
                transition: 'all 0.2s ease'
              }}
              aria-pressed={isSelected}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Disclaimer / Transparency Note (Spec 9) */}
      <div
        style={{
          marginTop: '3rem',
          textAlign: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--color-muted-text)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}
      >
        <Sparkles size={12} color="#D982A3" />
        <span>All projects reflect verified implementations with technical briefs. No fabricated metrics or outcomes.</span>
      </div>
    </SectionContainer>
  );
};
