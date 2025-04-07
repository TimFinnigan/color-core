import React, { CSSProperties } from 'react';
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
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
        {category}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' } as CSSProperties}>
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