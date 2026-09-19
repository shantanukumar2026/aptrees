import { useState } from 'react';
import './index.css';
import {
  Header,
  Hero,
  Services,
  WhyUs,
  Process,
  EmergencyBanner,
  FAQ,
  Footer,
  type Language,
} from './components';
import { translations } from './translations';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  return (
    <>
      <Header lang={lang} onLanguageChange={setLang} t={t} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <WhyUs t={t} />
        <Process t={t} />
        <EmergencyBanner t={t} />
        <FAQ t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}

export default App;
