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
    id: "pastelcore",
    name: "Pastelcore",
    description: "Soft colors, plushies, bubble letters, dreamy sweetness",
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
    description: "Soft countryside living, baking pies, wildflowers, linen dresses",
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
    id: "grandmacore",
    name: "Grandmacore",
    description: "Tea cozies, knitting, floral prints, gentle nostalgia",
    category: "Soft & Cozy Aesthetics",
    colors: {
      primary: ["#E8C9AB", "#D4A373", "#CCD5AE", "#E9EDC9", "#FEFAE0"],
      secondary: ["#FAEDCD", "#D3C0AD", "#B99470", "#876A52", "#A98467"],
      accent: ["#D06F70", "#C3447A", "#B97A95", "#704E2E", "#8B635C"],
      background: ["#FFF8ED", "#FAF5EF", "#F7F3EE", "#FFFDF7", "#F8F7EF"],
      text: ["#4D4336", "#675342", "#5D4A3B", "#726455", "#7E6C5A"]
    }
  },
  {
    id: "sleepycore",
    name: "Sleepycore",
    description: "Pajamas, soft blankets, nightlights, eternal nap vibe",
    category: "Soft & Cozy Aesthetics",
    colors: {
      primary: ["#B8C4E5", "#BDD0E5", "#AFC0D0", "#C9CBDF", "#D3D5E3"],
      secondary: ["#E6D7D2", "#D9CCC1", "#C8B6B2", "#E0CEC7", "#F1E4DD"],
      accent: ["#A3A9CC", "#9396B8", "#6E7198", "#8788A6", "#7B7D98"],
      background: ["#F3F6FB", "#EEF2F7", "#F8F9FC", "#F0F0F5", "#F6F8FA"],
      text: ["#545871", "#636983", "#7F88A6", "#4A4E69", "#636270"]
    }
  },
  {
    id: "dark-academia",
    name: "Dark Academia",
    description: "Gothic romance, old libraries, tweed, candlelit studies",
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
    id: "gothcore",
    name: "Gothcore",
    description: "Black lace, dark lipstick, graveyards, romantic darkness",
    category: "Dark & Moody",
    colors: {
      primary: ["#1A1A1D", "#26262B", "#333136", "#43434A", "#27242C"],
      secondary: ["#571B2D", "#7A1E36", "#9D2542", "#BA3648", "#8A0F32"],
      accent: ["#9B5094", "#6D2E5B", "#4B1D42", "#330F33", "#5B1E47"],
      background: ["#13121A", "#1D1B22", "#242229", "#2A282E", "#1C1A24"],
      text: ["#EAEAEA", "#D4D4D4", "#C0C0C0", "#B1A9B4", "#D7C5D3"]
    }
  },
  {
    id: "witchcore",
    name: "Witchcore",
    description: "Potion bottles, spellbooks, black cats, full moons, cottage witch energy",
    category: "Dark & Moody",
    colors: {
      primary: ["#2F3837", "#3B4A3F", "#485A53", "#2C3A2F", "#444054"],
      secondary: ["#845D3E", "#725034", "#5E402C", "#9E7955", "#A5896A"],
      accent: ["#601E45", "#7A1F3C", "#5F2B4B", "#8F4865", "#A1567A"],
      background: ["#DACFC3", "#EBE5DD", "#D1CCC2", "#C2B8AB", "#B9B0A2"],
      text: ["#27231D", "#3A3631", "#312F33", "#432F35", "#3C2F25"]
    }
  },
  {
    id: "hellcore",
    name: "Hellcore",
    description: "Fire, demonic symbolism, unsettling visuals, intense dark themes",
    category: "Dark & Moody",
    colors: {
      primary: ["#740A0A", "#950F0F", "#B41616", "#D31B1B", "#EF2929"],
      secondary: ["#251002", "#3C1800", "#602100", "#851F00", "#A52500"],
      accent: ["#2C0703", "#520C06", "#731207", "#B11C0C", "#DB230F"],
      background: ["#0A0A0A", "#121212", "#1A1A1A", "#0F0F0F", "#161616"],
      text: ["#F5E8E8", "#F2D5D5", "#F7C3C3", "#FADADA", "#F3BBBB"]
    }
  },
  {
    id: "vaporwave",
    name: "Vaporwave",
    description: "Pink sunsets, Greek statues, lo-fi synths, glitchy retro",
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
    id: "y2kcore",
    name: "Y2Kcore",
    description: "Metallics, low-rise jeans, flip phones, 2000s futurism",
    category: "Urban & Digital",
    colors: {
      primary: ["#FD5DA8", "#FF9CE5", "#FFC6FF", "#B892FF", "#FDFFAB"],
      secondary: ["#C1ADFF", "#A8C0FF", "#85FFD0", "#91E5FF", "#ACE7FF"],
      accent: ["#FF9494", "#FFB8CD", "#FFCCF9", "#FDE599", "#BEFFC7"],
      background: ["#E2DAFF", "#F3E6FF", "#FFE6F2", "#E0FFFC", "#F2F5FF"],
      text: ["#6F2A7E", "#863A94", "#9C4DA6", "#B160B8", "#C774CA"]
    }
  },
  {
    id: "cybercore",
    name: "Cybercore",
    description: "Neon lights, futuristic tech, glitchy visuals, Blade Runner vibes",
    category: "Urban & Digital",
    colors: {
      primary: ["#00F3FF", "#00C8FF", "#00A2FF", "#007FFF", "#0059FF"],
      secondary: ["#FF2975", "#FF1F62", "#F7137A", "#D812BD", "#BB11FF"],
      accent: ["#32FF6A", "#0FE84C", "#00B832", "#009F5A", "#00867D"],
      background: ["#060614", "#0F0F1B", "#181825", "#1E1E30", "#25253A"],
      text: ["#E2F3F5", "#DBE9F4", "#D3DEF3", "#CDD4F2", "#C8C9F2"]
    }
  },
  {
    id: "kidcore",
    name: "Kidcore",
    description: "90s/2000s toys, rainbow colors, childlike wonder, nostalgia bombs",
    category: "Urban & Digital",
    colors: {
      primary: ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF"],
      secondary: ["#FF00FF", "#FF1493", "#00FFFF", "#FF4500", "#32CD32"],
      accent: ["#FFD700", "#FF69B4", "#00CED1", "#BA55D3", "#FF6347"],
      background: ["#FFFFFF", "#F0F0F0", "#FFFFC2", "#FFDFDF", "#D2F7FF"],
      text: ["#333333", "#5C5C5C", "#0046BE", "#D30000", "#007000"]
    }
  },
  {
    id: "fairycore",
    name: "Fairycore",
    description: "Glittering wings, mushrooms, magic, pastel forests, sparkly whimsy",
    category: "Nature-Based",
    colors: {
      primary: ["#D8B4E2", "#CCA7E8", "#B195CF", "#A67FC6", "#9369BD"],
      secondary: ["#CAE2BC", "#B2D8A4", "#9ACE8C", "#83C473", "#6BBA5B"],
      accent: ["#FFC8A2", "#FFAE7C", "#FE9463", "#FD7A49", "#FC6130"],
      background: ["#FEFFD6", "#FFFDEB", "#FEFAFF", "#F4FFF5", "#FCFFEB"],
      text: ["#5D4970", "#4C3D5B", "#3B3047", "#2A2332", "#19161D"]
    }
  },
  {
    id: "goblincore",
    name: "Goblincore",
    description: "Muddy boots, shiny trinkets, frogs, earth smells, organized chaos",
    category: "Nature-Based",
    colors: {
      primary: ["#5F6F52", "#425F4B", "#3A544A", "#304D4A", "#205072"],
      secondary: ["#A9B388", "#8B9D77", "#768F67", "#607D53", "#556C4D"],
      accent: ["#BE7C4D", "#A3623A", "#76492E", "#59341F", "#3C2213"],
      background: ["#DFE6C7", "#D2DCBB", "#C5D1AE", "#B7C79E", "#AAB991"],
      text: ["#2B2B28", "#3A3A38", "#4A4A47", "#595959", "#666666"]
    }
  },
  {
    id: "forestcore",
    name: "Forestcore",
    description: "Moss, pine trees, deep forest paths, quiet woodland energy",
    category: "Nature-Based",
    colors: {
      primary: ["#2C402B", "#315C2B", "#3A6A40", "#567D46", "#6E8B3D"],
      secondary: ["#8A9A5B", "#A4AE77", "#B2BD8D", "#C4CFA1", "#D8E0BC"],
      accent: ["#623412", "#744A23", "#8A6331", "#9D7A41", "#B3944E"],
      background: ["#E9EFD6", "#DDEAC8", "#CFE2B8", "#C2D9AB", "#B6CE9C"],
      text: ["#212922", "#2C3C21", "#36412E", "#404B3A", "#4A5245"]
    }
  },
  {
    id: "oceancore",
    name: "Oceancore",
    description: "Waves, seashells, salt air, aquatic creatures, dreamy blue world",
    category: "Nature-Based",
    colors: {
      primary: ["#144D65", "#1E6B89", "#277DA1", "#3A97BC", "#4CB3D7"],
      secondary: ["#90E0EF", "#ADE8F4", "#CAF0F8", "#B4E7FD", "#81D6FB"],
      accent: ["#FF9E00", "#FFBC42", "#FFD166", "#FDFFB6", "#EEFCCE"],
      background: ["#F0FDFF", "#E1F9FF", "#D1F4FF", "#C2EFFF", "#B4EBFF"],
      text: ["#03045E", "#023E8A", "#0077B6", "#104C91", "#1A5F7A"]
    }
  },
  {
    id: "mosscore",
    name: "Mosscore",
    description: "Damp woods, moss walls, fairy dens, earthy textures",
    category: "Nature-Based",
    colors: {
      primary: ["#3F5E3E", "#4B6C4A", "#588157", "#649568", "#71A277"],
      secondary: ["#97BC91", "#A6C59E", "#B6CFAC", "#C6DBC1", "#D5E6D8"],
      accent: ["#775233", "#8B6D4C", "#9D8664", "#B09E7D", "#C2B598"],
      background: ["#E7F2E5", "#DAE7D8", "#CDD9C9", "#C1CBB9", "#B5BCAB"],
      text: ["#212922", "#2C3C21", "#36412E", "#404B3A", "#4A5245"]
    }
  },
  {
    id: "dreamcore",
    name: "Dreamcore",
    description: "Hazy, floating, otherworldly dream aesthetics, comforting and eerie",
    category: "Whimsical & Surreal",
    colors: {
      primary: ["#A6D1E6", "#7FBEEB", "#5D8CAE", "#3F5E87", "#243A60"],
      secondary: ["#FFB997", "#F67E7D", "#C06C84", "#843B62", "#622569"],
      accent: ["#FFEA85", "#FFD639", "#FCB13B", "#F57C3A", "#EF4444"],
      background: ["#F2F7FF", "#E0EAFC", "#CFDEF3", "#BED5EA", "#ADCBE1"],
      text: ["#2D3748", "#3E4B62", "#4F5E7B", "#606E95", "#717DAE"]
    }
  },
  {
    id: "weirdcore",
    name: "Weirdcore",
    description: "Surreal, uncanny, dream logic, distorted imagery, liminal spaces",
    category: "Whimsical & Surreal",
    colors: {
      primary: ["#E84855", "#F9DC5C", "#3185FC", "#E4B363", "#5BBA6F"],
      secondary: ["#F26430", "#C03546", "#733D89", "#2A7B9B", "#5C9EAD"],
      accent: ["#FF6B6B", "#FFE66D", "#4ECDC4", "#6A0572", "#AB83A1"],
      background: ["#F8F9FA", "#E6ECF0", "#D4DFE6", "#C2D3DC", "#B0C6D2"],
      text: ["#212529", "#343A40", "#495057", "#6C757D", "#ADB5BD"]
    }
  },
  {
    id: "etherealcore",
    name: "Etherealcore",
    description: "Floating, soft light, dreamlike visuals, celestial calm",
    category: "Whimsical & Surreal",
    colors: {
      primary: ["#BBC2E2", "#A0AAD2", "#8692C2", "#6C7AB2", "#5262A2"],
      secondary: ["#DAEAF1", "#C8DCE6", "#B5CFDB", "#A3C1D1", "#90B3C6"],
      accent: ["#F9D5E5", "#F0B1D0", "#E88EBB", "#DE67A7", "#D54291"],
      background: ["#F3F8FF", "#E7F0FD", "#DBEAFC", "#CFE3FB", "#C3DDFA"],
      text: ["#313B72", "#3C4887", "#47569D", "#5263B2", "#5D70C7"]
    }
  },
  {
    id: "angelcore",
    name: "Angelcore",
    description: "Soft whites, halos, clouds, purity, cherub vibes",
    category: "Whimsical & Surreal",
    colors: {
      primary: ["#F8F0E3", "#F3E8D9", "#EDDFD0", "#E8D7C7", "#E3CFBD"],
      secondary: ["#D0B5A8", "#C0A294", "#B08E80", "#A07A6C", "#906759"],
      accent: ["#FAC0B1", "#F7AD9D", "#F59B89", "#F28874", "#EF7660"],
      background: ["#FFFFFF", "#FFF8F0", "#FFF0E0", "#FFE8D0", "#FFE0C0"],
      text: ["#B0926A", "#9A7E5A", "#856A4A", "#70563B", "#5A422B"]
    }
  },
  {
    id: "retrocore",
    name: "Retrocore",
    description: "60s-90s visuals, vintage tech, old-school pop culture",
    category: "Retro & Vintage",
    colors: {
      primary: ["#EC5E66", "#FBB85A", "#E7DD74", "#67AE9B", "#9068BB"],
      secondary: ["#C34153", "#FF9B42", "#E8C547", "#4F8A70", "#6E518D"],
      accent: ["#FF4B5C", "#FF9035", "#FFDD33", "#5CC5B6", "#8F60C9"],
      background: ["#FDECEF", "#FFEFD6", "#FFFADB", "#E8F6F1", "#F2EBFF"],
      text: ["#2C2543", "#39304D", "#473B57", "#554762", "#63536C"]
    }
  },
  {
    id: "dinercore",
    name: "Dinercore",
    description: "Neon signs, milkshakes, checkered floors, 1950s vibes",
    category: "Retro & Vintage",
    colors: {
      primary: ["#FF5F5D", "#3CBBB1", "#EE2E31", "#2D7D8F", "#F55951"],
      secondary: ["#F9C22E", "#91C7B1", "#A1B5D8", "#F19A3E", "#9EB25D"],
      accent: ["#E01A4F", "#53B3CB", "#F9C22E", "#15B097", "#FB836F"],
      background: ["#FFFFFF", "#F5F5F5", "#F0F0F0", "#E8E8E8", "#DEDEDE"],
      text: ["#2D2D2A", "#363636", "#474747", "#252323", "#3B3B3B"]
    }
  },
  {
    id: "light-academia",
    name: "Light Academia",
    description: "Ivory tones, classic literature, sunny cafes, soft academia vibes",
    category: "Retro & Vintage",
    colors: {
      primary: ["#E6DDC6", "#D6CDB7", "#C6BEA8", "#B6AF99", "#A69F8B"],
      secondary: ["#CCBEA3", "#BBAE94", "#AA9E85", "#998E76", "#887E67"],
      accent: ["#B8926A", "#A78258", "#957246", "#846134", "#725122"],
      background: ["#FBF8F1", "#F8F4E9", "#F5F0E1", "#F2ECD9", "#EFE8D1"],
      text: ["#433E3F", "#534D4E", "#635C5D", "#736B6C", "#837A7B"]
    }
  },
  {
    id: "royalcore",
    name: "Royalcore",
    description: "Ballgowns, castles, etiquette, monarchy elegance",
    category: "Retro & Vintage",
    colors: {
      primary: ["#4F359B", "#673AB7", "#8056D3", "#9C68E4", "#B779F4"],
      secondary: ["#C49B60", "#D4B37F", "#E3CB9E", "#F3E2BD", "#FFF9DC"],
      accent: ["#C92D2D", "#E74545", "#F45F5F", "#FF7878", "#FF9292"],
      background: ["#F6F2FF", "#EDE5FF", "#E3D7FF", "#DACAFF", "#D0BDFF"],
      text: ["#13073A", "#231357", "#341F75", "#442B92", "#5537B0"]
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

// Helper function to get a unique color scheme (no duplicates) from a core style
export function getUniqueColorScheme(coreStyleId: string): string[] {
  const style = coreStyles.find(s => s.id === coreStyleId);
  if (!style) return [];

  // Array to track already selected colors to prevent duplicates
  const selectedColors: string[] = [];
  const scheme: string[] = [];
  
  // Categories to select colors from
  const categories = ["primary", "secondary", "accent", "background", "text"] as const;
  
  // Pick one random color from each category, ensuring no duplicates
  categories.forEach(category => {
    const availableColors = style.colors[category].filter(color => !selectedColors.includes(color));
    
    // If all colors in this category have been used already, try to find a unique color from any category
    if (availableColors.length === 0) {
      const allColors = categories.flatMap(cat => style.colors[cat]);
      const uniqueColors = allColors.filter(color => !selectedColors.includes(color));
      
      // If there are any unique colors left, use one
      if (uniqueColors.length > 0) {
        const randomColor = uniqueColors[Math.floor(Math.random() * uniqueColors.length)];
        selectedColors.push(randomColor);
        scheme.push(randomColor);
      } else {
        // As a last resort, just use a color from the current category (accepting duplication)
        const fallbackColor = style.colors[category][Math.floor(Math.random() * style.colors[category].length)];
        scheme.push(fallbackColor);
      }
    } else {
      // Select a random color from available unique colors
      const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
      selectedColors.push(randomColor);
      scheme.push(randomColor);
    }
  });
  
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

// Function to test if a scheme has duplicates
export function testColorScheme(coreStyleId: string, iterations: number = 100): number {
  let duplicatesFound = 0;
  
  for (let i = 0; i < iterations; i++) {
    const scheme = getUniqueColorScheme(coreStyleId);
    const uniqueColors = new Set(scheme);
    
    if (uniqueColors.size !== scheme.length) {
      duplicatesFound++;
    }
  }
  
  return duplicatesFound;
} 