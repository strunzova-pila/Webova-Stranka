import Image from "next/image";
import { MENU_ITEMS, LABELS, URLS, SIZES } from "../utils/constants";
import { MenuItem } from "../types";

/**
 * Hlavní navigační komponenta
 * Obsahuje logo, menu a CTA tlačítko
 */
export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-4 sm:px-12 bg-white">
      {/* Logo sekce */}
      <div className="flex items-center min-w-[250px] justify-start py-4">
        <Image
          src={URLS.logo}
          alt={LABELS.logoAlt}
          width={SIZES.navbar.logo.width}
          height={SIZES.navbar.logo.height}
          className="object-contain"
          priority
        />
      </div>

      {/* Menu navigace */}
      <ul className="flex flex-1 justify-center gap-8 mx-12">
        {MENU_ITEMS.map((item: MenuItem) => (
          <li
            key={item}
            className="text-xs md:text-sm font-semibold tracking-widest text-[#7B4A2D] hover:underline cursor-pointer whitespace-nowrap"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* CTA tlačítko */}
      <div className="min-w-[120px] flex items-center justify-end ml-8">
        <button
          className="bg-[#B6B12B] text-white font-bold rounded-full px-5 py-2 text-sm shadow-none hover:brightness-95 transition-all whitespace-nowrap"
          style={{ letterSpacing: "0.05em" }}
        >
          {LABELS.cta}
        </button>
      </div>
    </nav>
  );
}
