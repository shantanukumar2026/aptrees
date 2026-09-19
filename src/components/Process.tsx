import React from 'react';
import type { TranslationType } from './types';

interface ProcessProps {
  t: TranslationType;
}

export const Process: React.FC<ProcessProps> = ({ t }) => {
  const steps = [
    {
      num: '01',
      title: t.step1Title,
      desc: t.step1Desc,
    },
    {
      num: '02',
      title: t.step2Title,
      desc: t.step2Desc,
    },
    {
      num: '03',
      title: t.step3Title,
      desc: t.step3Desc,
    },
    {
      num: '04',
      title: t.step4Title,
      desc: t.step4Desc,
    },
  ];

  return (
    <section id="process" className="process-section" style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }}>
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
          {t.processHeading}
        </h2>
        <p
          style={{
            color: 'var(--text-muted)',
            maxWidth: '650px',
            margin: '0 auto',
            fontSize: '1.2rem',
          }}
        >
          {t.processSub}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}
      >
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '36px 28px',
              position: 'relative',
              transition: 'transform 0.3s ease, border-color 0.3s ease',
            }}
          >
            <div
              style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: 'var(--primary-light)',
                opacity: 0.8,
                marginBottom: '16px',
                fontFamily: 'var(--font-display, inherit)',
              }}
            >
              {step.num}
            </div>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '12px',
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
