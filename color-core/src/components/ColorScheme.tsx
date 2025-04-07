import React from 'react';
import ColorBox from './ColorBox';

interface ColorSchemeProps {
  colors: string[];
  onClick?: () => void;
  title?: string;
  onColorClick?: (color: string) => void;
}

const ColorScheme: React.FC<ColorSchemeProps> = ({ colors, onClick, title, onColorClick }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {title && <h3 className="text-lg font-medium mb-3">{title}</h3>}
      <div className="grid grid-cols-5 gap-2">
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
          className="mt-3 w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium transition-colors"
          onClick={onClick}
        >
          Generate New
        </button>
      )}
    </div>
  );
};

export default ColorScheme; 