import React from 'react';
import type { TranslationType } from './types';

interface HeroProps {
  t: TranslationType;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-content">
          <h1 className="hero-title">
            {t.heroTitlePart1} <span>{t.heroTitlePart2}</span> {t.heroTitlePart3}
          </h1>
          <p className="hero-sub">{t.heroSub}</p>
          <div className="hero-actions">
            <a href="#services" className="btn-primary">
              {t.ourServices} <span>→</span>
            </a>
            <a href="tel:+16319432157" className="btn-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              (631) 943-2157
            </a>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="/images/istockphoto-1491158797-2048x2048.jpg"
          className="hero-bg"
          alt="Professional Tree Care and Landscaping"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />

        <div className="floating-stats">
          <div className="stat-item">
            <span className="stat-value">15+</span>
            <span className="stat-label">{t.yearsExperience}</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">100%</span>
            <span className="stat-label">{t.licensedInsured}</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">2,500+</span>
            <span className="stat-label">{t.treesServiced}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
