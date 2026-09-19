import React from 'react';

export interface ServiceCardProps {
  title: string;
  img: string;
  alt?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, img, alt }) => {
  return (
    <div
      className="service-card"
      style={{
        display: 'block',
        padding: 0,
        overflow: 'hidden',
        position: 'relative',
        height: '280px',
        borderRadius: '16px',
        border: 'none',
      }}
    >
      <img
        src={img}
        alt={alt || title}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '40px 20px 20px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'white' }}>{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
