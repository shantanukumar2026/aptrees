import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import type { Language, TranslationType } from './types';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationType;
}

export const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange, t }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <div
        className="top-bar"
        style={{
          background: scrolled ? 'var(--bg-dark)' : 'var(--primary-dark)',
          transition: 'background 0.3s ease',
        }}
      >
        <a href="#" className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo className="app-logo header-logo" style={{ height: '100%', alignItems: 'center' }} />
        </a>

        <div className="top-links">
          <a href="tel:+16319432157" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
            {t.phone}
          </a>

          <a href="#services" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {t.location}
          </a>

          <a href="#contact" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
            {t.freeEstimate}
          </a>

          <select
            value={lang}
            onChange={(e) => onLanguageChange(e.target.value as Language)}
            style={{
              background: 'transparent',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontWeight: 800,
              fontSize: '13px',
              outline: 'none',
              marginLeft: '8px',
            }}
          >
            <option value="en" style={{ color: '#000' }}>
              EN
            </option>
            <option value="es" style={{ color: '#000' }}>
              ES
            </option>
          </select>
        </div>
      </div>

      <div
        className="bottom-bar"
        style={{
          display: scrolled ? 'none' : 'flex',
          transform: scrolled ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'all 0.3s ease',
          opacity: scrolled ? 0 : 1,
        }}
      >
        <nav className="bottom-nav">
          <a href="#services" style={{ textDecoration: 'none' }}>
            <button>
              {t.navServices} <div className="nav-underline"></div>
            </button>
          </a>
          <a href="#why-us" style={{ textDecoration: 'none' }}>
            <button>
              {t.navWhyUs} <div className="nav-underline"></div>
            </button>
          </a>
          <a href="#process" style={{ textDecoration: 'none' }}>
            <button>
              {t.navProcess} <div className="nav-underline"></div>
            </button>
          </a>
          <a href="#contact" style={{ textDecoration: 'none' }}>
            <button>
              {t.navContact} <div className="nav-underline"></div>
            </button>
          </a>
        </nav>

        <div className="header-cta-wrapper">
          <a href="#contact" className="nav-cta-btn">
            {t.freeEstimate} →
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
