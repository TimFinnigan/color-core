import React, { CSSProperties } from 'react';

interface ColorBoxProps {
  color: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color, onClick, isSelected = false }) => {
  // Calculate if the color is dark to determine text color
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  const isDark = (r * 0.299 + g * 0.587 + b * 0.114) < 128;

  return (
    <div 
      style={{ 
        width: '100%',
        aspectRatio: '1/1',
        backgroundColor: color,
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        position: 'relative',
        ...(isSelected && { outline: '4px solid #3b82f6' })
      } as CSSProperties}
      onClick={onClick}
    >
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '0.5rem',
        backgroundColor: isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)',
        color: isDark ? '#111827' : 'white',
        borderBottomLeftRadius: '0.5rem',
        borderTopRightRadius: '0.5rem',
        fontSize: '0.75rem',
        fontFamily: 'monospace',
        textAlign: 'center'
      } as CSSProperties}>
        {color}
      </div>
    </div>
  );
};

export default ColorBox; 