// Menu položky
export type MenuItem =
  | "PROJEKT"
  | "LOKALITA"
  | "GALERIE"
  | "APARTMÁNY"
  | "KONTAKT"
  | "REZERVACE";

// Apartment type
export interface Apartment {
  id: string;
  floor: string;
  type: string;
  area: string;
  parking: string;
  status: string;
}

// Komponenty props
export interface NavbarProps {
  className?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

// Obecné typy
export interface BaseComponentProps {
  children?: React.ReactNode;
  className?: string;
}
