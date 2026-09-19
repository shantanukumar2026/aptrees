import React from 'react';
import type { TranslationType } from './types';

interface WhyUsProps {
  t: TranslationType;
}

export const WhyUs: React.FC<WhyUsProps> = ({ t }) => {
  return (
    <section id="why-us" className="trust-section">
      <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 20px' }}>
        <h2
          className="font-display"
          style={{
            fontSize: '3rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          {t.whyChooseHeading} <span style={{ color: 'var(--primary-light)' }}>AP Trees</span>
        </h2>
        <p
          style={{
            color: 'var(--text-muted)',
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: '1.2rem',
          }}
        >
          {t.whyChooseSub}
        </p>
      </div>

      <div className="trust-grid">
        <div className="trust-card">
          <div className="trust-icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
          </div>
          <h3>{t.whoWeAre}</h3>
          <p>{t.whoWeAreDesc}</p>
        </div>

        <div className="trust-card">
          <div className="trust-icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </div>
          <h3>{t.whatWeDo}</h3>
          <p>{t.whatWeDoDesc}</p>
        </div>

        <div className="trust-card">
          <div className="trust-icon-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3>{t.whyTrustUs}</h3>
          <p>{t.whyTrustUsDesc}</p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
