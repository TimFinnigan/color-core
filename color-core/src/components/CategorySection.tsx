import React from 'react';
import { CoreStyle } from '../data/colorSchemes';
import StyleButton from './StyleButton';

interface CategorySectionProps {
  category: string;
  styles: CoreStyle[];
  onStyleSelect: (id: string) => void;
  activeStyleId: string | null;
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  category, 
  styles, 
  onStyleSelect,
  activeStyleId
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-3">{category}</h2>
      <div className="space-y-2">
        {styles.map(style => (
          <StyleButton
            key={style.id}
            style={style}
            onClick={onStyleSelect}
            isActive={activeStyleId === style.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection; 