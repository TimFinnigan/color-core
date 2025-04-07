import React, { CSSProperties } from 'react';
import { CoreStyle } from '../data/colorSchemes';

interface StyleButtonProps {
  style: CoreStyle;
  onClick: (id: string) => void;
  isActive: boolean;
}

const StyleButton: React.FC<StyleButtonProps> = ({ style, onClick, isActive }) => {
  const { id, name, description } = style;
  
  return (
    <button
      onClick={() => onClick(id)}
      style={{
        padding: '0.75rem',
        width: '100%',
        textAlign: 'left',
        borderRadius: '0.5rem',
        backgroundColor: isActive ? '#eef2ff' : 'white',
        border: `1px solid ${isActive ? '#6366f1' : '#e5e7eb'}`,
        transition: 'all 0.2s',
      } as CSSProperties}
    >
      <div style={{ display: 'flex', flexDirection: 'column' } as CSSProperties}>
        <span style={{ fontWeight: 500, color: '#111827' }}>
          {name}
        </span>
        <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
          {description}
        </span>
      </div>
    </button>
  );
};

export default StyleButton; 