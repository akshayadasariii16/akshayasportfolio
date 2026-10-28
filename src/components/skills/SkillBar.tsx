import React from 'react';
import { motion } from 'framer-motion';
import { SkillItem } from '../../types/portfolio';

interface SkillBarProps {
  skill: SkillItem;
  index: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.45rem',
        padding: '1rem',
        borderRadius: 'var(--radius-md)',
        background: 'rgba(255, 248, 250, 0.75)',
        border: '1px solid var(--glass-border)',
        boxShadow: 'var(--shadow-subtle)',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
      }}
      className="glass-panel"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-rosewood)' }}>
            {skill.name}
          </span>
          {skill.tag && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'var(--color-strong-pink)',
                backgroundColor: 'rgba(248, 215, 227, 0.5)',
                padding: '2px 6px',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              {skill.tag}
            </span>
          )}
        </div>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--color-strong-pink)'
          }}
        >
          {skill.proficiency}%
        </span>
      </div>

      {skill.context && (
        <span style={{ fontSize: '0.78rem', color: 'var(--color-muted-text)', lineHeight: 1.4 }}>
          {skill.context}
        </span>
      )}

      {/* Progress Bar Container */}
      <div
        style={{
          width: '100%',
          height: '6px',
          backgroundColor: 'rgba(233, 168, 188, 0.2)',
          borderRadius: '9999px',
          overflow: 'hidden',
          marginTop: '0.35rem',
          position: 'relative'
        }}
        role="progressbar"
        aria-valuenow={skill.proficiency}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} self-assessed proficiency`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #F8D7E3 0%, #D982A3 60%, #A78BFA 100%)',
            borderRadius: '9999px',
            boxShadow: '0 0 10px rgba(217, 130, 163, 0.6)'
          }}
        />
      </div>
    </div>
  );
};
