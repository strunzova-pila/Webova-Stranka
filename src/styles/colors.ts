// Hlavní barvy pro Strunzova Pila design
export const colors = {
  // Primární barvy
  primary: {
    brown: "#7B4A2D", // Hnědá pro text a logo
    green: "#B6B12B", // Žlutozelená pro tlačítka
  },

  // Neutrální barvy
  neutral: {
    white: "#FFFFFF",
    black: "#000000",
    gray: {
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
  },

  // Stav barvy
  state: {
    hover: "#A1A024", // Tmavší zelená pro hover
    focus: "#8B8A21", // Ještě tmavší pro focus
    disabled: "#D4D4D4", // Šedá pro disabled
  },
} as const;

// Font family konstanty (podle originálního webu)
export const fonts = {
  primary: "var(--font-poppins)", // Poppins pro běžný text
  heading: "var(--font-montserrat)", // Montserrat pro nadpisy a navbar
  weights: {
    normal: "400",
    semibold: "600",
  },
} as const;

// Export jednotlivých barev pro snadné použití
export const { primary, neutral, state } = colors;
