export const exportPaletteAsImage = (colors: string[]) => {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Set canvas dimensions
  const width = 1000;
  const height = 200;
  canvas.width = width;
  canvas.height = height;

  // Calculate width for each color section
  const sectionWidth = width / colors.length;

  // Draw each color
  colors.forEach((color, index) => {
    ctx.fillStyle = color;
    ctx.fillRect(index * sectionWidth, 0, sectionWidth, height);

    // Draw color code text
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const isDark = (r * 0.299 + g * 0.587 + b * 0.114) < 128;
    
    ctx.fillStyle = isDark ? '#FFFFFF' : '#000000';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(color, index * sectionWidth + sectionWidth / 2, height / 2);
  });

  // Convert canvas to image
  const dataUrl = canvas.toDataURL('image/png');
  
  // Create a link element
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'color-palette.png';
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}; 