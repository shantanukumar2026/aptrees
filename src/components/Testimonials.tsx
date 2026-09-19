import React from 'react';
import type { TranslationType } from './types';

interface TestimonialsProps {
  t: TranslationType;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  const reviews = [
    {
      text: t.review1Text,
      author: t.review1Author,
      location: t.review1Location,
    },
    {
      text: t.review3Text,
      author: t.review3Author,
      location: t.review3Location,
    },
  ];

  return (
    <section id="reviews" style={{ padding: '100px 40px', maxWidth: '1100px', margin: '0 auto' }}>
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
          {t.testimonialsHeading}
        </h2>
        <p
          style={{
            color: 'var(--text-muted)',
            maxWidth: '650px',
            margin: '0 auto',
            fontSize: '1.2rem',
          }}
        >
          {t.testimonialsSub}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
        }}
      >
        {reviews.map((rev, index) => (
          <div
            key={index}
            style={{
              background: 'var(--bg-card, rgba(10, 30, 15, 0.4))',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '4px', color: '#facc15', marginBottom: '20px' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '28px',
                }}
              >
                "{rev.text}"
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--primary-dark)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '16px',
                }}
              >
                {rev.author[0]}
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', color: 'white', fontWeight: 700 }}>
                  {rev.author}
                </h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {rev.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
