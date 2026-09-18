import { useEffect, useState } from 'react';
import './index.css';
import Logo from './components/Logo';
import { translations } from './translations';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'es'>('en');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: t.service1, img: "/images/treemange.jpg" },
    { title: t.service2, img: "/images/istockphoto-2230881648-2048x2048.jpg" },
    { title: t.service3, img: "/images/istockphoto-1300474514-2048x2048.jpg" },
    { title: t.service4, img: "/images/istockphoto-2267218361-2048x2048.jpg" },
    { title: t.service5, img: "/images/istockphoto-1476419509-2048x2048.jpg" },
    { title: t.service6, img: "/images/istockphoto-1845458299-2048x2048.jpg" },
  ];

  return (
    <>
      <header style={{
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.5)' : 'none'
      }}>
        <div className="top-bar" style={{
          background: scrolled ? 'var(--bg-dark)' : 'var(--primary-dark)',
          transition: 'background 0.3s ease'
        }}>
          <a href="#" className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
            <Logo
              className="app-logo header-logo"
              style={{ height: '100%', alignItems: 'center' }}
            />
          </a>

          <div className="top-links">
            <a href="tel:+16319432157" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              {t.phone}
            </a>

            <a href="#services" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {t.location}
            </a>

            <a href="#contact" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect x="2" y="4" width="20" height="16" rx="2"></rect></svg>
              {t.freeEstimate}
            </a>

            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'en' | 'es')}
              style={{
                background: 'transparent',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 800,
                fontSize: '13px',
                outline: 'none',
                marginLeft: '8px'
              }}
            >
              <option value="en" style={{ color: '#000' }}>EN</option>
              <option value="es" style={{ color: '#000' }}>ES</option>
            </select>
          </div>
        </div>

        <div className="bottom-bar" style={{
          display: scrolled ? 'none' : 'flex',
          transform: scrolled ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'all 0.3s ease',
          opacity: scrolled ? 0 : 1
        }}>
          <nav className="bottom-nav">
            <a href="#services" style={{ textDecoration: 'none' }}><button>{t.navServices} <div className="nav-underline"></div></button></a>
            <a href="#why-us" style={{ textDecoration: 'none' }}><button>{t.navWhyUs} <div className="nav-underline"></div></button></a>
            <a href="#about" style={{ textDecoration: 'none' }}><button>{t.navAbout} <div className="nav-underline"></div></button></a>
            <a href="#contact" style={{ textDecoration: 'none' }}><button>{t.navContact} <div className="nav-underline"></div></button></a>
          </nav>

          <div className="header-cta-wrapper">
            <a href="#contact" className="nav-cta-btn">
              {t.freeEstimate} →
            </a>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-content">

            <h1 className="hero-title">
              {t.heroTitlePart1} <span>{t.heroTitlePart2}</span> {t.heroTitlePart3}
            </h1>
            <p className="hero-sub">
              {t.heroSub}
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn-primary">
                {t.ourServices} <span>→</span>
              </a>
              <a href="tel:+16319432157" className="btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                (631) 943-2157
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src="/images/istockphoto-1491158797-2048x2048.jpg" className="hero-bg" alt="Professional Tree Care and Landscaping" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />

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

      <section id="services" className="services-section">
        <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 20px' }}>
          <h2 className="font-display" style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px' }}>
            {t.servicesHeading}
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
            {t.servicesSub}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card" style={{ display: 'block', padding: 0, overflow: 'hidden', position: 'relative', height: '280px', borderRadius: '16px', border: 'none' }}>
              <img src={service.img} alt={service.title} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 20px 20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.9))' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'white' }}>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="why-us" className="trust-section">
        <div style={{ textAlign: 'center', marginBottom: '80px', padding: '0 20px' }}>
          <h2 className="font-display" style={{ fontSize: '3rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px' }}>
            {t.whyChooseHeading} <span style={{ color: 'var(--primary-light)' }}>AP Trees</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
            {t.whyChooseSub}
          </p>
        </div>

        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            </div>
            <h3>{t.whoWeAre}</h3>
            <p>{t.whoWeAreDesc}</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <h3>{t.whatWeDo}</h3>
            <p>{t.whatWeDoDesc}</p>
          </div>

          <div className="trust-card">
            <div className="trust-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>{t.whyTrustUs}</h3>
            <p>{t.whyTrustUsDesc}</p>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <Logo className="app-logo footer-logo-img" />
            </a>
            <p className="footer-desc">
              {t.footerDesc}
            </p>
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
              <li><a href="#services">{t.navServices}</a></li>
              <li><a href="#why-us">{t.navWhyUs}</a></li>
              <li><a href="#services">{t.service1}</a></li>
              <li><a href="#contact">{t.service6}</a></li>
            </ul>
          </div>

          <div id="about">
            <h4 className="footer-title">{t.company}</h4>
            <ul className="footer-links">
              <li><a href="#why-us">{t.navAbout}</a></li>
              <li><a href="#services">{t.navServices}</a></li>
              <li><a href="tel:+16319432157">{t.callUs} (631) 943-2157</a></li>
              <li><a href="#contact">{t.freeEstimate}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">{t.subscribe}</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>
              {t.subscribeText}
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input type="email" placeholder={t.emailPlaceholder} style={{
                padding: '10px 16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                borderRadius: '4px',
                flex: 1,
                outline: 'none'
              }} />
              <button style={{
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                padding: '0 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 700
              }}>{t.join}</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} AP Trees. {t.rightsReserved}</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{t.privacyPolicy}</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{t.termsOfService}</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
