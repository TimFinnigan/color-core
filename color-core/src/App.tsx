import React, { useState, useEffect, CSSProperties } from 'react';
import { getAllCategories, getStylesByCategory, getRandomColorScheme, coreStyles } from './data/colorSchemes';
import { exportPaletteAsImage } from './utils/export';

const styles: Record<string, CSSProperties> = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#fff',
    padding: '1rem',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  buttonGroup: {
    display: 'flex',
    gap: '0.75rem',
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
  },
  primaryButton: {
    backgroundColor: '#6366f1',
    color: 'white',
    border: 'none',
  },
  secondaryButton: {
    backgroundColor: '#f3f4f6',
    color: '#1f2937',
    border: '1px solid #d1d5db',
  },
  mainContainer: {
    display: 'flex',
    position: 'relative',
    flex: 1,
  },
  sidebar: {
    width: '250px',
    backgroundColor: 'white',
    padding: '1rem',
    boxShadow: '1px 0 3px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
  },
  mainContent: {
    flex: 1,
    padding: '1.5rem',
  },
  colorsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '1rem',
    marginBottom: '2rem',
  },
  colorBox: {
    position: 'relative',
    aspectRatio: '1/1',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  colorLabel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '0.75rem',
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  hiddenSidebar: {
    transform: 'translateX(-100%)',
  },
  welcomeScreen: {
    maxWidth: '400px',
    margin: '5rem auto 0',
    textAlign: 'center',
  },
  notification: {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem',
    backgroundColor: 'black',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    animation: 'fadeInOut 2s ease-in-out',
  }
};

function App() {
  const [activeStyleId, setActiveStyleId] = useState<string | null>(null);
  const [colorScheme, setColorScheme] = useState<string[]>([]);
  const [lockedColors, setLockedColors] = useState<boolean[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);
  
  // Get all categories for organization
  const categories = getAllCategories();

  const generateNewScheme = () => {
    if (activeStyleId) {
      const newScheme = getRandomColorScheme(activeStyleId);
      
      // Keep locked colors, update unlocked ones
      if (lockedColors.length > 0) {
        const updatedScheme = colorScheme.map((color, index) => {
          return lockedColors[index] ? color : newScheme[index];
        });
        setColorScheme(updatedScheme);
      } else {
        setColorScheme(newScheme);
        // Initialize locked colors array with false values
        setLockedColors(new Array(newScheme.length).fill(false));
      }
    }
  };

  // Generate color scheme when style is selected
  useEffect(() => {
    if (activeStyleId) {
      // Reset locked colors when changing styles
      setLockedColors([]);
      generateNewScheme();
    }
  }, [activeStyleId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleStyleSelect = (id: string) => {
    setActiveStyleId(id);
    setShowSidebar(false);
  };

  const toggleLock = (index: number) => {
    const newLockedColors = [...lockedColors];
    newLockedColors[index] = !newLockedColors[index];
    setLockedColors(newLockedColors);
  };

  const handleColorClick = (color: string) => {
    // Copy the color to clipboard
    navigator.clipboard.writeText(color);
    setNotification(`Copied ${color} to clipboard!`);
    
    // Reset the notification after 2 seconds
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const exportPalette = () => {
    const paletteText = colorScheme.join(', ');
    navigator.clipboard.writeText(paletteText);
    setNotification('Color palette copied to clipboard!');
    
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const saveAsImage = () => {
    if (colorScheme.length > 0) {
      exportPaletteAsImage(colorScheme);
      setNotification('Saving color palette as image...');
      
      setTimeout(() => {
        setNotification(null);
      }, 2000);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>Color Core</h1>
          
          <div style={styles.buttonGroup}>
            {activeStyleId && (
              <>
                <div style={styles.buttonGroup}>
                  <button
                    onClick={exportPalette}
                    style={{...styles.button, ...styles.secondaryButton}}
                  >
                    Copy
                  </button>
                  <button
                    onClick={saveAsImage}
                    style={{...styles.button, ...styles.secondaryButton}}
                  >
                    Save as Image
                  </button>
                </div>
                <button
                  onClick={generateNewScheme}
                  style={{...styles.button, ...styles.primaryButton}}
                >
                  Generate New
                </button>
              </>
            )}

            <button
              onClick={() => setShowSidebar(!showSidebar)}
              style={{...styles.button, ...styles.secondaryButton}}
            >
              {showSidebar ? 'Hide Styles' : 'Choose Style'}
            </button>
          </div>
        </div>
      </header>

      <div style={styles.mainContainer as CSSProperties}>
        {/* Sidebar */}
        <div style={{
          ...styles.sidebar,
          ...(showSidebar ? {} : styles.hiddenSidebar),
          position: 'absolute',
          height: '100%',
          zIndex: 10,
        } as CSSProperties}>
          <h2 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem'}}>
            Choose Your Core
          </h2>
          
          {categories.map(category => (
            <div key={category} style={{marginBottom: '2rem'}}>
              <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.75rem'}}>
                {category}
              </h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                {getStylesByCategory(category).map(style => (
                  <button
                    key={style.id}
                    onClick={() => handleStyleSelect(style.id)}
                    style={{
                      padding: '0.75rem',
                      textAlign: 'left',
                      borderRadius: '0.375rem',
                      backgroundColor: activeStyleId === style.id ? '#eef2ff' : 'white',
                      border: `1px solid ${activeStyleId === style.id ? '#6366f1' : '#e5e7eb'}`,
                    } as CSSProperties}
                  >
                    <div>
                      <div style={{fontWeight: '500'}}>
                        {style.name}
                      </div>
                      <div style={{fontSize: '0.75rem', color: '#4b5563'}}>
                        {style.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={styles.mainContent}>
          {activeStyleId ? (
            <div style={{maxWidth: '1000px', margin: '0 auto'}}>
              {/* Color scheme display */}
              <div style={styles.colorsGrid}>
                {colorScheme.map((color, index) => {
                  // Calculate if the color is dark to determine text color
                  const r = parseInt(color.slice(1, 3), 16);
                  const g = parseInt(color.slice(3, 5), 16);
                  const b = parseInt(color.slice(5, 7), 16);
                  const isDark = (r * 0.299 + g * 0.587 + b * 0.114) < 128;
                  
                  return (
                    <div key={index} style={{position: 'relative'}}>
                      <div 
                        style={{
                          ...styles.colorBox,
                          backgroundColor: color,
                        }}
                        onClick={() => handleColorClick(color)}
                      >
                        <div style={{
                          ...styles.colorLabel,
                          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)',
                          color: isDark ? '#111827' : 'white',
                        } as CSSProperties}>
                          {color}
                        </div>
                        
                        {/* Lock button */}
                        <button 
                          style={{
                            position: 'absolute',
                            top: '0.5rem',
                            right: '0.5rem',
                            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)',
                            color: isDark ? 'black' : 'white',
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: 'none',
                            cursor: 'pointer',
                          } as CSSProperties}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLock(index);
                          }}
                        >
                          {lockedColors[index] ? '🔒' : '🔓'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Currently selected style */}
              <div style={{textAlign: 'center', marginBottom: '2rem'} as CSSProperties}>
                <div style={{
                  display: 'inline-block',
                  backgroundColor: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                }}>
                  <span style={{fontWeight: '500'}}>Current style: </span>
                  <span style={{color: '#4f46e5'}}>
                    {coreStyles.find(s => s.id === activeStyleId)?.name}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div style={styles.welcomeScreen as CSSProperties}>
              <h2 style={{fontSize: '1.5rem', fontWeight: '500', marginBottom: '1rem'}}>
                Welcome to Color Core
              </h2>
              <p style={{color: '#4b5563', marginBottom: '2rem'}}>
                Choose an aesthetic style to generate color schemes
              </p>
              <button
                onClick={() => setShowSidebar(true)}
                style={{...styles.button, ...styles.primaryButton, padding: '0.75rem 1.5rem'}}
              >
                Choose a Style
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Notification */}
      {notification && (
        <div style={styles.notification as CSSProperties}>
          {notification}
        </div>
      )}
    </div>
  );
}

export default App;
