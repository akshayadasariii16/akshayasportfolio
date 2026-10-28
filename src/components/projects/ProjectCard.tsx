import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types/portfolio';
import { ExternalLink, Github, ChevronDown, ChevronUp, Cpu, CheckCircle2, AlertCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return '#166534';
      case 'In Development':
        return '#D982A3';
      case 'Experimental':
        return '#A78BFA';
      default:
        return '#795A6B';
    }
  };

  return (
    <article
      className="glass-panel"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.75rem',
        position: 'relative',
        transition: 'all var(--transition-normal)'
      }}
      aria-labelledby={`project-title-${project.id}`}
    >
      <div>
        {/* Header telemetry & status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1rem'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--color-strong-pink)',
              letterSpacing: '0.1em'
            }}
          >
            {project.telemetryId}
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              fontWeight: 600,
              padding: '3px 9px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(255, 248, 250, 0.9)',
              border: `1px solid ${getStatusColor(project.status)}`,
              color: getStatusColor(project.status)
            }}
          >
            {project.status === 'Completed' ? (
              <CheckCircle2 size={11} />
            ) : (
              <Cpu size={11} />
            )}
            {project.status}
          </span>
        </div>

        {/* Project Title */}
        <h3
          id={`project-title-${project.id}`}
          style={{
            fontSize: 'var(--text-xl)',
            fontWeight: 700,
            color: 'var(--color-rosewood)',
            marginBottom: '0.35rem',
            lineHeight: 1.25
          }}
        >
          {project.title}
        </h3>

        {/* Tagline */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--color-strong-pink)',
            marginBottom: '1rem'
          }}
        >
          {project.tagline}
        </div>

        {/* Short Summary */}
        <p
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-muted-text)',
            lineHeight: 1.6,
            marginBottom: '1.25rem'
          }}
        >
          {project.summary}
        </p>

        {/* Technology Stack Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.45rem',
            marginBottom: '1.5rem'
          }}
        >
          {project.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                padding: '3px 8px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(248, 215, 227, 0.35)',
                border: '1px solid var(--glass-border)',
                color: 'var(--color-rosewood)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expandable Problem & Solution Drawer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            id={`project-details-${project.id}`}
            role="region"
            aria-labelledby={`project-title-${project.id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              overflow: 'hidden',
              marginBottom: '1.5rem',
              paddingTop: '1rem',
              borderTop: '1px dashed var(--color-border)'
            }}
          >
            {/* The Problem */}
            <div style={{ marginBottom: '1rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--color-error)',
                  marginBottom: '0.35rem',
                  textTransform: 'uppercase'
                }}
              >
                <AlertCircle size={13} />
                <span>The Problem</span>
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--color-muted-text)', lineHeight: 1.55 }}>
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div style={{ marginBottom: '1rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--color-success)',
                  marginBottom: '0.35rem',
                  textTransform: 'uppercase'
                }}
              >
                <CheckCircle2 size={13} />
                <span>The Solution</span>
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--color-muted-text)', lineHeight: 1.55 }}>
                {project.solution}
              </p>
            </div>

            {/* Key Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: 'var(--color-strong-pink)',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase'
                  }}
                >
                  Architecture Highlights
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem'
                  }}
                >
                  {project.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--color-rosewood)',
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '6px'
                      }}
                    >
                      <span style={{ color: 'var(--color-strong-pink)', fontSize: '0.75rem' }}>▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer controls: Expand Button + Links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1rem',
          borderTop: '1px solid var(--color-border)'
        }}
      >
        <button
          onClick={() => setIsExpanded(prev => !prev)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            color: 'var(--color-strong-pink)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '4px 0'
          }}
          aria-expanded={isExpanded}
          aria-controls={`project-details-${project.id}`}
        >
          <span>{isExpanded ? 'COLLAPSE BRIEF' : 'INSPECT ARCHITECTURE'}</span>
          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255, 248, 250, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-rosewood)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
              title="View Source on GitHub"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github size={15} />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target={project.liveUrl.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--color-dusty-blush)',
                background: 'linear-gradient(135deg, #F8D7E3, #FFF8FA)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-strong-pink)',
                textDecoration: 'none',
                boxShadow: '0 2px 6px rgba(217, 130, 163, 0.25)',
                transition: 'all 0.2s ease'
              }}
              title="Inspect Live Deployment"
              aria-label={`Inspect ${project.title} live interface`}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
