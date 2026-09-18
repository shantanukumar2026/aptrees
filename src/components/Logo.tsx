import React from 'react';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
};

export default function Logo({ className = '', style, imageStyle }: Props) {
  return (
    <span className={className} aria-hidden={false} role="img" title="Ap Trees" style={{ display: 'flex', ...style }}>
      <img
        src="/logo.png"
        alt="Ap Trees"
        className="logo-img"
        style={{
          borderRadius: '8px',
          ...imageStyle
        }}
      />
    </span>
  );
}
