import React from 'react';
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
      className={`p-3 w-full text-left rounded-lg transition-all 
                 ${isActive 
                   ? 'bg-indigo-100 border-indigo-500 border-2' 
                   : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
    >
      <div className="flex flex-col">
        <span className="font-medium text-gray-900">{name}</span>
        <span className="text-xs text-gray-600">{description}</span>
      </div>
    </button>
  );
};

export default StyleButton; 