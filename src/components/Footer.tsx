import React from 'react';
import Logo from './Logo';
import type { TranslationType } from './types';

interface FooterProps {
  t: TranslationType;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <Logo className="app-logo footer-logo-img" />
          </a>
          <p className="footer-desc">{t.footerDesc}</p>
          <div className="footer-contact">
            <p>133 New York Ave </p>
            <p>Huntington, NY 11743</p>
            <p className="footer-phone">+1 (631) 943-2157</p>
            <p>Email :- nick@aptreescorp.com</p>
          </div>
        </div>

        <div>
          <h4 className="footer-title">{t.navigation}</h4>
          <ul className="footer-links">
            <li>
              <a href="#services">{t.navServices}</a>
            </li>
            <li>
              <a href="#why-us">{t.navWhyUs}</a>
            </li>
            <li>
              <a href="#services">{t.service1}</a>
            </li>
            <li>
              <a href="#contact">{t.service6}</a>
            </li>
          </ul>
        </div>

        <div id="about">
          <h4 className="footer-title">{t.company}</h4>
          <ul className="footer-links">
            <li>
              <a href="#why-us">{t.navAbout}</a>
            </li>
            <li>
              <a href="#services">{t.navServices}</a>
            </li>
            <li>
              <a href="tel:+16319432157">
                {t.callUs} (631) 943-2157
              </a>
            </li>
            <li>
              <a href="#contact">{t.freeEstimate}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer-title">{t.subscribe}</h4>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '14px',
              marginBottom: '16px',
              lineHeight: 1.6,
            }}
          >
            {t.subscribeText}
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'flex', gap: '8px' }}
          >
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              style={{
                padding: '10px 16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                borderRadius: '4px',
                flex: 1,
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '0 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              {t.join}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          &copy; {new Date().getFullYear()} AP Trees. {t.rightsReserved}
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            {t.privacyPolicy}
          </a>
          <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
            {t.termsOfService}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
