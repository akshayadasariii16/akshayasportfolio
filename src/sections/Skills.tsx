import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer } from '../components/layout/SectionContainer';
import { SkillBar } from '../components/skills/SkillBar';
import { skillsCategories } from '../data/skills';
import { Terminal, Info } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(skillsCategories[0].id);

  const selectedCategory = skillsCategories.find(c => c.id === selectedCategoryId) || skillsCategories[0];

  return (
    <SectionContainer
      id="skills"
      badge="SCENE 04 // CAPABILITY MATRIX"
      title="Skills Intelligence Matrix"
      subtitle="Structured technical capabilities across neural computation, full-stack architectures, and 3D telemetry."
      alternateBg={true}
    >
      {/* Category Tabs List */}
      <div
        role="tablist"
        aria-label="Skill Categories"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.65rem',
          justifyContent: 'center',
          marginBottom: '2.5rem'
        }}
      >
        {skillsCategories.map((category) => {
          const isSelected = category.id === selectedCategoryId;
          return (
            <button
              key={category.id}
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${category.id}`}
              onClick={() => setSelectedCategoryId(category.id)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: isSelected ? 700 : 500,
                padding: '0.55rem 1.25rem',
                borderRadius: 'var(--radius-pill)',
                border: isSelected ? '1px solid var(--color-strong-pink)' : '1px solid var(--glass-border)',
                background: isSelected
                  ? 'linear-gradient(135deg, #F8D7E3 0%, #D982A3 100%)'
                  : 'rgba(255, 248, 250, 0.85)',
                color: isSelected ? '#FFF8FA' : 'var(--color-rosewood)',
                cursor: 'pointer',
                boxShadow: isSelected ? '0 4px 16px rgba(217, 130, 163, 0.35)' : 'var(--shadow-subtle)',
                transition: 'all 0.2s ease'
              }}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory.id}
          id={`panel-${selectedCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${selectedCategory.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '880px', margin: '0 auto' }}
        >
          {/* Category Description Banner */}
          <div
            style={{
              padding: '1.25rem 1.75rem',
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(255, 248, 250, 0.9)',
              border: '1px solid var(--glass-border)',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            <Terminal size={18} color="#D982A3" />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-strong-pink)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                Category Dossier
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-rosewood)', fontWeight: 500 }}>
                {selectedCategory.description}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {selectedCategory.skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Self-Assessment Transparency Note (Spec 10) */}
      <div
        style={{
          marginTop: '3.5rem',
          maxWidth: '680px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0.85rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255, 248, 250, 0.7)',
          border: '1px dashed var(--color-dusty-blush)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.78rem',
          color: 'var(--color-muted-text)',
          lineHeight: 1.5
        }}
      >
        <Info size={16} color="#D982A3" style={{ flexShrink: 0 }} />
        <span>
          <strong>Methodology Note:</strong> Proficiency metrics represent transparent self-assessed confidence scales based on production experience, not absolute industry benchmarks.
        </span>
      </div>
    </SectionContainer>
  );
};
