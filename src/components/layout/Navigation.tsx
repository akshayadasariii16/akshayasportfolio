import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Terminal } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection';

const navItems = [
  { id: 'hero', label: 'Home', num: '01' },
  { id: 'about', label: 'About', num: '02' },
  { id: 'projects', label: 'Projects', num: '03' },
  { id: 'skills', label: 'Skills', num: '04' },
  { id: 'contact', label: 'Contact', num: '05' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(['hero', 'about', 'projects', 'skills', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: isScrolled ? '10px 0' : '18px 0',
        transition: 'all var(--transition-normal)'
      }}
    >
      <div className="container-custom">
        <nav
          className="glass-panel"
          role="navigation"
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.65rem 1.4rem',
            borderRadius: 'var(--radius-pill)',
            background: isScrolled
              ? 'rgba(255, 248, 250, 0.92)'
              : 'rgba(255, 248, 250, 0.78)',
            border: '1px solid var(--glass-border)',
            boxShadow: isScrolled
              ? 'var(--shadow-glass), 0 4px 20px rgba(183, 110, 139, 0.12)'
              : 'var(--shadow-subtle)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}
        >
          {/* Logo & Identity */}
          <a
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: 'var(--color-rosewood)'
            }}
            aria-label="Akshaya — Return to top"
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #F8D7E3 0%, #D982A3 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(217, 130, 163, 0.45)',
                color: '#FFF8FA',
                fontWeight: 800,
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              A
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  letterSpacing: '0.12em',
                  lineHeight: 1.1
                }}
              >
                AKSHAYA
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  color: 'var(--color-strong-pink)',
                  letterSpacing: '0.08em'
                }}
              >
                CORE // V2.0
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul
            style={{
              display: 'none',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              gap: '1.8rem',
              alignItems: 'center'
            }}
            className="desktop-nav-list"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    style={{
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? 'var(--color-strong-pink)' : 'var(--color-rosewood)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '4px 8px',
                      borderRadius: 'var(--radius-sm)',
                      transition: 'color var(--transition-fast)',
                      position: 'relative'
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: isActive ? 'var(--color-strong-pink)' : 'var(--color-dusty-blush)'
                      }}
                    >
                      {item.num}.
                    </span>
                    <span>{item.label}</span>
                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '-2px',
                          left: '8px',
                          right: '8px',
                          height: '2px',
                          borderRadius: '1px',
                          background: 'linear-gradient(90deg, #D982A3, #A78BFA)',
                          boxShadow: '0 0 8px rgba(217, 130, 163, 0.6)'
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Right Telemetry Status Pill */}
          <div
            className="desktop-telemetry"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <div className="status-pill">
              <span className="status-dot" />
              <span>CORE_ONLINE</span>
            </div>
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: '0.45rem 1.1rem',
                fontSize: '0.78rem'
              }}
            >
              <Sparkles size={13} />
              <span>INITIALIZE</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'transparent',
              border: '1px solid var(--glass-border)',
              color: 'var(--color-rosewood)',
              cursor: 'pointer'
            }}
            className="mobile-nav-toggle"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Slide-Over Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(81, 55, 71, 0.35)',
            backdropFilter: 'blur(8px)',
            zIndex: 1001,
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: '85%',
              maxWidth: '320px',
              height: '100%',
              background: 'rgba(255, 248, 250, 0.98)',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '-8px 0 32px rgba(81, 55, 71, 0.15)',
              borderLeft: '1px solid var(--color-dusty-blush)',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '2rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Terminal size={18} color="#D982A3" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: 'var(--color-rosewood)'
                    }}
                  >
                    SYSTEM NAV
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-rosewood)'
                  }}
                  aria-label="Close navigation drawer"
                >
                  <X size={22} />
                </button>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        textDecoration: 'none',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: activeSection === item.id ? 'var(--color-strong-pink)' : 'var(--color-rosewood)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '8px 0',
                        borderBottom: '1px solid var(--color-border)'
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-dusty-blush)' }}>
                        {item.num}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ paddingTop: '2rem' }}>
              <div className="status-pill" style={{ marginBottom: '1rem', width: '100%', justifyContent: 'center' }}>
                <span className="status-dot" />
                <span>AI_CORE // RUNNING</span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Initialize Terminal
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive media query styling */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav-list {
            display: flex !important;
          }
          .desktop-telemetry {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

