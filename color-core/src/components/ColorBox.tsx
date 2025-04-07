import React from 'react';

interface ColorBoxProps {
  color: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color, onClick, isSelected = false }) => {
  return (
    <div 
      className={`w-full aspect-square rounded-md shadow-md cursor-pointer transition-all 
                 hover:shadow-lg transform hover:-translate-y-1 ${isSelected ? 'ring-4 ring-blue-500' : ''}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <div className="p-2 text-xs font-mono absolute bottom-0 bg-white bg-opacity-70 rounded-bl-md rounded-tr-md">
        {color}
      </div>
    </div>
  );
};

export default ColorBox; 