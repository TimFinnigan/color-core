import React, { useState, useEffect } from 'react';
import { getAllCategories, getStylesByCategory, getRandomColorScheme } from './data/colorSchemes';
import CategorySection from './components/CategorySection';
import ColorScheme from './components/ColorScheme';

function App() {
  const [activeStyleId, setActiveStyleId] = useState<string | null>(null);
  const [colorScheme, setColorScheme] = useState<string[]>([]);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  
  // Get all categories for organization
  const categories = getAllCategories();

  // Generate color scheme when style is selected
  useEffect(() => {
    if (activeStyleId) {
      generateNewScheme();
    }
  }, [activeStyleId]);

  const handleStyleSelect = (id: string) => {
    setActiveStyleId(id);
  };

  const generateNewScheme = () => {
    if (activeStyleId) {
      const newScheme = getRandomColorScheme(activeStyleId);
      setColorScheme(newScheme);
    }
  };

  const handleColorClick = (color: string) => {
    // Copy the color to clipboard
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopiedColor(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Color Core</h1>
          <p className="text-gray-600">Generate color schemes based on aesthetics</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left sidebar - style selection */}
          <div className="md:col-span-1 space-y-6 h-fit sticky top-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-4">Choose Your Core</h2>
              
              {categories.map(category => (
                <CategorySection
                  key={category}
                  category={category}
                  styles={getStylesByCategory(category)}
                  onStyleSelect={handleStyleSelect}
                  activeStyleId={activeStyleId}
                />
              ))}
            </div>
          </div>

          {/* Right side - color schemes */}
          <div className="md:col-span-2">
            {activeStyleId ? (
              <div className="space-y-8">
                <div className="relative">
                  <ColorScheme 
                    colors={colorScheme} 
                    onClick={generateNewScheme}
                    title="Your Color Scheme"
                    onColorClick={handleColorClick}
                  />
                  
                  {copiedColor && (
                    <div className="absolute top-0 right-0 -mt-4 bg-black text-white text-sm px-4 py-2 rounded-full">
                      Copied {copiedColor} to clipboard!
                    </div>
                  )}
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-2">How to use:</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      <li>Click on any color to copy its hex code</li>
                      <li>Click "Generate New" for a different combination</li>
                      <li>Try different aesthetics from the menu</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <h2 className="text-2xl font-medium mb-4">Select a Core Style</h2>
                <p className="text-gray-600">Choose an aesthetic from the menu to generate a color scheme</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
