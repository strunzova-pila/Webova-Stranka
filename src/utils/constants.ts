// Menu konstanty
export const MENU_ITEMS = [
  "PROJEKT",
  "LOKALITA",
  "GALERIE",
  "APARTMÁNY",
  "KONTAKT",
  "REZERVACE",
] as const;

// Rozměry a breakpointy
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Rozměry komponent
export const SIZES = {
  navbar: {
    height: "80px",
    logo: {
      width: 200,
      height: 200,
    },
  },
  button: {
    small: {
      px: "px-4",
      py: "py-2",
      text: "text-sm",
    },
    medium: {
      px: "px-6",
      py: "py-3",
      text: "text-base",
    },
    large: {
      px: "px-8",
      py: "py-4",
      text: "text-lg",
    },
  },
} as const;

// Texty a labels
export const LABELS = {
  cta: "MÁM ZÁJEM",
  logoAlt: "Strunzova pila logo",
} as const;

// URL a odkazy
export const URLS = {
  logo: "/strunzova-pila-logo.png",
} as const;
