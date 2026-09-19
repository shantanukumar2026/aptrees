import React from 'react';
import ServiceCard from './ServiceCard';
import type { TranslationType, ServiceItem } from './types';

interface ServicesProps {
  t: TranslationType;
  services?: ServiceItem[];
}

export const Services: React.FC<ServicesProps> = ({ t, services }) => {
  const defaultServices: ServiceItem[] = [
    { title: t.service1, img: '/images/treemange.jpg' },
    { title: t.service2, img: '/images/istockphoto-2230881648-2048x2048.jpg' },
    { title: t.service3, img: '/images/istockphoto-1300474514-2048x2048.jpg' },
    { title: t.service4, img: '/images/istockphoto-2267218361-2048x2048.jpg' },
    { title: t.service5, img: '/images/istockphoto-1476419509-2048x2048.jpg' },
    { title: t.service6, img: '/images/istockphoto-1845458299-2048x2048.jpg' },
  ];

  const items = services || defaultServices;

  return (
    <section id="services" className="services-section">
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
          {t.servicesHeading}
        </h2>
        <p
          style={{
            color: 'var(--text-muted)',
            maxWidth: '600px',
            margin: '0 auto',
            fontSize: '1.2rem',
          }}
        >
          {t.servicesSub}
        </p>
      </div>

      <div className="services-grid">
        {items.map((service, i) => (
          <ServiceCard key={i} title={service.title} img={service.img} />
        ))}
      </div>
    </section>
  );
};

export default Services;
