import React, { useState } from 'react';
import { SectionContainer } from '../components/layout/SectionContainer';
import { portfolioData } from '../data/portfolio';
import { Mail, Copy, Check, Send, Phone, MapPin, Sparkles, AlertCircle, Info, ExternalLink } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<{
    show: boolean;
    mailtoUrl: string;
  }>({
    show: false,
    mailtoUrl: ''
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject heading is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Transmission message cannot be blank';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Spec 13 Rule: Validate client-side and trigger transparent email client dispatch
    const subjectEncoded = encodeURIComponent(`[Akshaya Portfolio] ${formData.subject}: From ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nTransmitted via Akshaya Futuristic Portfolio Terminal`
    );

    const mailto = `mailto:${contact.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setSubmissionFeedback({
      show: true,
      mailtoUrl: mailto
    });

    // Trigger system default mail client
    window.location.href = mailto;
  };

  return (
    <SectionContainer
      id="contact"
      badge="SCENE 05 // SECURE TELEMETRY"
      title="Contact Terminal"
      subtitle="Establish direct communication for architecture inquiries, engineering engagements, or creative ventures."
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}
      >
        {/* Left Column: Direct Telemetry & Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Email Direct Hub Card */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-strong-pink)',
                letterSpacing: '0.12em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}
            >
              <Mail size={14} />
              <span>Direct Transmission Channel</span>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
                padding: '0.85rem 1.15rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(255, 248, 250, 0.95)',
                border: '1px solid var(--color-border)',
                marginBottom: '1rem'
              }}
            >
              <a
                href={`mailto:${contact.email}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  color: 'var(--color-rosewood)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  wordBreak: 'break-all'
                }}
              >
                {contact.email}
              </a>

              <button
                onClick={handleCopyEmail}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--color-dusty-blush)',
                  background: copiedEmail ? 'var(--color-success)' : 'rgba(248, 215, 227, 0.4)',
                  color: copiedEmail ? '#FFFFFF' : 'var(--color-rosewood)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedEmail ? 'COPIED!' : 'COPY'}</span>
              </button>
            </div>

            {contact.phone && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.85rem',
                  color: 'var(--color-muted-text)',
                  marginBottom: '0.75rem'
                }}
              >
                <Phone size={14} color="#D982A3" />
                <a href={`tel:${contact.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {contact.phone}
                </a>
              </div>
            )}

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.85rem',
                color: 'var(--color-muted-text)'
              }}
            >
              <MapPin size={14} color="#D982A3" />
              <span>{contact.location}</span>
            </div>
          </div>

          {/* Availability Card */}
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--color-strong-pink)',
                letterSpacing: '0.12em',
                marginBottom: '0.75rem',
                textTransform: 'uppercase'
              }}
            >
              <Sparkles size={14} />
              <span>Operational Availability</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-rosewood)', fontWeight: 600, marginBottom: '0.5rem' }}>
              {contact.availability}
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted-text)', lineHeight: 1.5 }}>
              Responsive turnaround for technical challenges, system prototypes, and engineering leadership.
            </p>
          </div>
        </div>

        {/* Right Column: Validated Client Form */}
        <div className="glass-panel" style={{ padding: '2.25rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-strong-pink)',
              letterSpacing: '0.12em',
              marginBottom: '0.5rem',
              textTransform: 'uppercase'
            }}
          >
            Transmit Payload // Client Portal
          </div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-rosewood)', marginBottom: '1.5rem' }}>
            Dispatch Message
          </h3>

          <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Name Field */}
            <div>
              <label
                htmlFor="contact-name"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-rosewood)',
                  marginBottom: '0.4rem'
                }}
              >
                IDENTIFIER // NAME *
              </label>
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Elena Vance"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: errors.name ? '1px solid var(--color-error)' : '1px solid var(--glass-border)',
                  background: 'rgba(255, 248, 250, 0.95)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: 'var(--color-rosewood)',
                  transition: 'border-color 0.2s'
                }}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <div id="name-error" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-error)', fontSize: '0.75rem', marginTop: '4px' }}>
                  <AlertCircle size={12} />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="contact-email"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-rosewood)',
                  marginBottom: '0.4rem'
                }}
              >
                RETURN ROUTE // EMAIL *
              </label>
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="elena@example.com"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: errors.email ? '1px solid var(--color-error)' : '1px solid var(--glass-border)',
                  background: 'rgba(255, 248, 250, 0.95)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: 'var(--color-rosewood)',
                  transition: 'border-color 0.2s'
                }}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <div id="email-error" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-error)', fontSize: '0.75rem', marginTop: '4px' }}>
                  <AlertCircle size={12} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="contact-subject"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-rosewood)',
                  marginBottom: '0.4rem'
                }}
              >
                TELEMETRY SUBJECT *
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Systems Collaboration / Architecture Review"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: errors.subject ? '1px solid var(--color-error)' : '1px solid var(--glass-border)',
                  background: 'rgba(255, 248, 250, 0.95)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: 'var(--color-rosewood)',
                  transition: 'border-color 0.2s'
                }}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && (
                <div id="subject-error" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-error)', fontSize: '0.75rem', marginTop: '4px' }}>
                  <AlertCircle size={12} />
                  <span>{errors.subject}</span>
                </div>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="contact-message"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--color-rosewood)',
                  marginBottom: '0.4rem'
                }}
              >
                TRANSMISSION PAYLOAD *
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your project, objectives, or inquiry..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: errors.message ? '1px solid var(--color-error)' : '1px solid var(--glass-border)',
                  background: 'rgba(255, 248, 250, 0.95)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: 'var(--color-rosewood)',
                  resize: 'vertical',
                  transition: 'border-color 0.2s'
                }}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <div id="message-error" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-error)', fontSize: '0.75rem', marginTop: '4px' }}>
                  <AlertCircle size={12} />
                  <span>{errors.message}</span>
                </div>
              )}
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>
              <Send size={15} />
              <span>DISPATCH TRANSMISSION</span>
            </button>
          </form>

          {/* Submission Feedback Modal/Alert (Spec 13 Compliance) */}
          {submissionFeedback.show && (
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(252, 238, 243, 0.95)',
                border: '1px solid var(--color-dusty-blush)',
                boxShadow: 'var(--shadow-subtle)'
              }}
              role="alert"
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '0.5rem' }}>
                <Info size={18} color="#D982A3" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-rosewood)' }}>
                    Triggered Email Client Dispatch
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted-text)', lineHeight: 1.5, marginTop: '4px' }}>
                    Your system mail client was invoked with pre-filled telemetry data. Opening your client does not guarantee delivery until dispatched.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: '0.75rem' }}>
                <a
                  href={submissionFeedback.mailtoUrl}
                  className="btn-secondary"
                  style={{ fontSize: '0.75rem', padding: '0.4rem 0.9rem' }}
                >
                  <ExternalLink size={12} />
                  <span>Re-open Mail Client</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmissionFeedback({ show: false, mailtoUrl: '' })}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '0.75rem',
                    color: 'var(--color-muted-text)',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  Dismiss
                </button>
              </div>
            </div>
          )}

          {/* Notice */}
          <div
            style={{
              marginTop: '1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--color-muted-text)',
              lineHeight: 1.5
            }}
          >
            {contact.note}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
