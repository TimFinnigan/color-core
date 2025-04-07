import React, { CSSProperties } from 'react';
import ColorBox from './ColorBox';

interface ColorSchemeProps {
  colors: string[];
  onClick?: () => void;
  title?: string;
  onColorClick?: (color: string) => void;
}

const ColorScheme: React.FC<ColorSchemeProps> = ({ colors, onClick, title, onColorClick }) => {
  return (
    <div style={{
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.2s'
    } as CSSProperties}>
      {title && <h3 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.75rem' }}>
        {title}
      </h3>}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '0.5rem'
      } as CSSProperties}>
        {colors.map((color, index) => (
          <ColorBox 
            key={index} 
            color={color} 
            onClick={() => onColorClick ? onColorClick(color) : undefined}
          />
        ))}
      </div>
      {onClick && (
        <button
          style={{
            marginTop: '0.75rem',
            width: '100%',
            padding: '0.5rem',
            backgroundColor: '#f3f4f6',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          } as CSSProperties}
          onClick={onClick}
        >
          Generate New
        </button>
      )}
    </div>
  );
};

export default ColorScheme; 