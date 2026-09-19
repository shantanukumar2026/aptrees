import React, { useState } from 'react';
import type { TranslationType } from './types';

interface FAQProps {
  t: TranslationType;
}

export const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
  ];

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" style={{ padding: '100px 40px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2
          className="font-display"
          style={{
            fontSize: '3rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          {t.faqHeading}
        </h2>
        <p
          style={{
            color: 'var(--text-muted)',
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: '1.2rem',
          }}
        >
          {t.faqSub}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'border-color 0.2s ease',
              }}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  padding: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  textAlign: 'left',
                  cursor: 'pointer',
                  gap: '16px',
                }}
              >
                <span>{faq.q}</span>
                <span
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--primary-light)',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    display: 'inline-block',
                  }}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div
                  style={{
                    padding: '0 24px 24px 24px',
                    color: 'var(--text-muted)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
