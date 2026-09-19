import React from 'react';
import type { TranslationType } from './types';

interface EmergencyBannerProps {
  t: TranslationType;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ t }) => {
  return (
    <section
      style={{
        padding: '60px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.3) 0%, rgba(27, 94, 32, 0.8) 100%)',
          border: '1px solid rgba(76, 175, 80, 0.3)',
          borderRadius: '20px',
          padding: '48px 40px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{ maxWidth: '650px' }}>
          <h3
            className="font-display"
            style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '12px',
            }}
          >
            {t.emergencyTitle}
          </h3>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {t.emergencySub}
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <a
            href="tel:+16319432157"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#ffffff',
              color: '#051408',
              padding: '16px 28px',
              borderRadius: '30px',
              fontWeight: 800,
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            {t.emergencyCallBtn}
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#ffffff',
              padding: '16px 28px',
              borderRadius: '30px',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            {t.freeEstimate} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
