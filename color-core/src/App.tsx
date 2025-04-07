import React, { useState, useEffect, CSSProperties } from 'react';
import { getAllCategories, getStylesByCategory, getRandomColorScheme, getUniqueColorScheme, coreStyles, testColorScheme } from './data/colorSchemes';
import { exportPaletteAsImage } from './utils/export';

const styles: Record<string, CSSProperties> = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#fff',
    padding: '0.75rem 0',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 20,
  },
  headerContent: {
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  appIcon: {
    fontSize: '1.8rem',
    marginRight: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  button: {
    padding: '0.5rem 0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
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
    flex: 1,
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
  },
  sidebar: {
    width: '250px',
    flexShrink: 0,
    backgroundColor: '#f8fafc',
    padding: '1.25rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
    height: 'calc(100vh - 64px)',
    position: 'sticky',
    top: '64px',
    borderRight: '1px solid #e2e8f0',
    boxSizing: 'border-box',
  },
  mainContent: {
    flex: 1,
    padding: '1.5rem 2rem',
    backgroundColor: '#ffffff',
  },
  colorsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem',
  },
  colorBox: {
    position: 'relative',
    aspectRatio: '1/1',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    overflow: 'hidden',
    minWidth: 0,
  },
  colorLabel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '0.5rem',
    textAlign: 'center',
    fontFamily: 'monospace',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    color: 'white',
    fontSize: 'clamp(10px, 2vw, 14px)',
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
  const [hoveredLockIndex, setHoveredLockIndex] = useState<number | null>(null);
  const [hoveredStyleId, setHoveredStyleId] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Get all categories for organization
  const categories = getAllCategories();

  const generateNewScheme = () => {
    if (activeStyleId) {
      const newScheme = getUniqueColorScheme(activeStyleId);
      
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
        <div style={{
          ...styles.headerContent,
          paddingLeft: 'clamp(0.75rem, 3vw, 2rem)',
          paddingRight: 'clamp(0.75rem, 3vw, 2rem)',
        }}>
          <h1 style={styles.title}>
            <span style={styles.appIcon}>🎨</span>
            Color Core
          </h1>
          
          <div style={styles.buttonGroup}>
            {activeStyleId && (
              <>
                <button
                  onClick={generateNewScheme}
                  style={{...styles.button, ...styles.primaryButton}}
                >
                  Generate New
                </button>
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
              </>
            )}
          </div>
        </div>
      </header>

      <div style={styles.mainContainer as CSSProperties}>
        {/* Sidebar - Always visible */}
        <div style={{
          ...styles.sidebar,
          width: windowWidth < 768 ? '200px' : '250px',
          padding: windowWidth < 768 ? '1rem' : '1.25rem',
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
                    onMouseEnter={() => setHoveredStyleId(style.id)}
                    onMouseLeave={() => setHoveredStyleId(null)}
                    style={{
                      padding: '0.75rem',
                      textAlign: 'left',
                      borderRadius: '0.375rem',
                      backgroundColor: activeStyleId === style.id 
                        ? '#eef2ff' 
                        : hoveredStyleId === style.id ? '#f9fafb' : 'white',
                      border: `1px solid ${activeStyleId === style.id ? '#6366f1' : '#e5e7eb'}`,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      transform: hoveredStyleId === style.id ? 'translateY(-2px)' : 'translateY(0)',
                      boxShadow: hoveredStyleId === style.id 
                        ? '0 4px 6px rgba(0,0,0,0.1)' 
                        : '0 1px 2px rgba(0,0,0,0.05)',
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
                          transform: hoveredLockIndex === index ? 'translateY(-4px)' : 'translateY(0)',
                          boxShadow: hoveredLockIndex === index 
                            ? '0 8px 16px rgba(0, 0, 0, 0.15)' 
                            : '0 4px 10px rgba(0, 0, 0, 0.1)',
                        }}
                        onClick={() => handleColorClick(color)}
                        onMouseEnter={() => setHoveredLockIndex(index)}
                        onMouseLeave={() => setHoveredLockIndex(null)}
                      >
                        <div style={{
                          ...styles.colorLabel,
                        } as CSSProperties}>
                          {color}
                        </div>
                        
                        {/* Lock button - larger and more minimalist */}
                        <button 
                          style={{
                            position: 'absolute',
                            top: '0.75rem',
                            right: '0.75rem',
                            backgroundColor: hoveredLockIndex === index ? 
                              'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '20px',
                            transition: 'all 0.2s',
                            transform: hoveredLockIndex === index ? 'scale(1.1)' : 'scale(1)',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                          } as CSSProperties}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLock(index);
                          }}
                          onMouseEnter={() => setHoveredLockIndex(index)}
                          onMouseLeave={() => setHoveredLockIndex(null)}
                          title={lockedColors[index] ? "Unlock color" : "Lock color"}
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
                Choose an aesthetic style from the left panel to generate color schemes
              </p>
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
