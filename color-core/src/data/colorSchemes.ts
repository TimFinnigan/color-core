export interface CoreStyle {
  id: string;
  name: string;
  description: string;
  category: string;
  colors: {
    primary: string[];
    secondary: string[];
    accent: string[];
    background: string[];
    text: string[];
  };
}

export const coreStyles: CoreStyle[] = [
  {
    id: "blue-shades",
    name: "Blue Shades",
    description: "Rich blues from deep navy to silver lake",
    category: "Color Palettes",
    colors: {
      primary: ["#0D1B2A", "#1B263B", "#415A77", "#778DA9", "#E0E1DD"],
      secondary: ["#0D1B2A", "#1B263B", "#415A77", "#778DA9", "#E0E1DD"],
      accent: ["#0D1B2A", "#1B263B", "#415A77", "#778DA9", "#E0E1DD"],
      background: ["#E0E1DD", "#F5F5F5", "#FFFFFF", "#F0F8FF", "#F8F9FA"],
      text: ["#0D1B2A", "#1B263B", "#333333", "#555555", "#777777"]
    }
  },
  {
    id: "pastelcore",
    name: "Pastelcore",
    description: "All things soft and pastel",
    category: "Soft & Cozy Aesthetics",
    colors: {
      primary: ["#F8C8DC", "#E2F0CB", "#B5EAD7", "#C7CEEA", "#FFDAC1"],
      secondary: ["#FF9AA2", "#DAB6FC", "#FFB7B2", "#B5EAD7", "#FDFFAB"],
      accent: ["#FFC8DD", "#BDE0FE", "#A2D2FF", "#CDB4DB", "#FFC8DD"],
      background: ["#FFFFFF", "#FAFAFA", "#F5F5F5", "#FFF0F5", "#F0F8FF"],
      text: ["#5E5E5E", "#7C7C7C", "#9B9B9B", "#4A4A4A", "#6B6B6B"]
    }
  },
  {
    id: "cottagecore",
    name: "Cottagecore",
    description: "Rural life, flowers, baked goods, dreamy fields",
    category: "Soft & Cozy Aesthetics",
    colors: {
      primary: ["#DDBEA9", "#CB997E", "#A5A58D", "#B7B7A4", "#FFE8D6"],
      secondary: ["#EDDCD2", "#FFF1E6", "#F0EFEB", "#DDBEA9", "#E6CCB2"],
      accent: ["#E8C07D", "#CC7E85", "#80936D", "#A98467", "#735C40"],
      background: ["#FFF1E6", "#FAF4ED", "#F8F4E3", "#F5EFDC", "#FEFAE0"],
      text: ["#5F4842", "#7D6055", "#735F51", "#483C32", "#594A3C"]
    }
  },
  {
    id: "dark-academia",
    name: "Dark Academia",
    description: "Gothic literature, candlelit studies, rainy campuses",
    category: "Dark & Moody",
    colors: {
      primary: ["#3A3335", "#4A4238", "#594E36", "#695D46", "#7A6A4F"],
      secondary: ["#B59266", "#8C7156", "#B0A18F", "#DDCDBF", "#D8C3A5"],
      accent: ["#73503C", "#614A3C", "#8B5A2B", "#92693C", "#8D7B6C"],
      background: ["#EFE6D9", "#E5DAC9", "#DBD1BC", "#CAC2B5", "#AEA595"],
      text: ["#2D2926", "#3C3633", "#433A31", "#564E42", "#22211F"]
    }
  },
  {
    id: "vaporwave",
    name: "Vaporwave",
    description: "Glitchy 80s/90s internet nostalgia, synths, neon",
    category: "Urban & Digital",
    colors: {
      primary: ["#FF6AD5", "#8795E8", "#AD8CFF", "#C774E8", "#FF66C4"],
      secondary: ["#94D0FF", "#8AEEE0", "#60EFFF", "#70E4EF", "#55DDFF"],
      accent: ["#FF71CE", "#01CDFE", "#05FFA1", "#B967FF", "#FFFB96"],
      background: ["#16161A", "#291E3A", "#1F1F3A", "#2C1E4A", "#281B36"],
      text: ["#F0F0F0", "#DEDEDE", "#CCCCCC", "#EAEAEA", "#FFFFFF"]
    }
  },
  {
    id: "fairycore",
    name: "Fairycore",
    description: "Whimsical, glittery forests, wings, toadstools",
    category: "Nature-Based",
    colors: {
      primary: ["#D8B4E2", "#CCA7E8", "#B195CF", "#A67FC6", "#9369BD"],
      secondary: ["#CAE2BC", "#B2D8A4", "#9ACE8C", "#83C473", "#6BBA5B"],
      accent: ["#FFC8A2", "#FFAE7C", "#FE9463", "#FD7A49", "#FC6130"],
      background: ["#FEFFD6", "#FFFDEB", "#FEFAFF", "#F4FFF5", "#FCFFEB"],
      text: ["#5D4970", "#4C3D5B", "#3B3047", "#2A2332", "#19161D"]
    }
  }
];

// Helper function to get a random color scheme from a core style
export function getRandomColorScheme(coreStyleId: string): string[] {
  const style = coreStyles.find(s => s.id === coreStyleId);
  if (!style) return [];

  // Pick one random color from each category
  const scheme = [
    style.colors.primary[Math.floor(Math.random() * style.colors.primary.length)],
    style.colors.secondary[Math.floor(Math.random() * style.colors.secondary.length)],
    style.colors.accent[Math.floor(Math.random() * style.colors.accent.length)],
    style.colors.background[Math.floor(Math.random() * style.colors.background.length)],
    style.colors.text[Math.floor(Math.random() * style.colors.text.length)]
  ];
  
  return scheme;
}

// Get all categories
export function getAllCategories(): string[] {
  const categories = new Set<string>();
  coreStyles.forEach(style => categories.add(style.category));
  return Array.from(categories);
}

// Get styles by category
export function getStylesByCategory(category: string): CoreStyle[] {
  return coreStyles.filter(style => style.category === category);
} 