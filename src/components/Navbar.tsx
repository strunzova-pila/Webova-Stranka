"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MENU_ITEMS, LABELS, URLS, SIZES } from "../utils/constants";
import { MenuItem } from "../types";

/**
 * Hlavní navigační komponenta
 * Obsahuje logo, menu a CTA tlačítko
 */
export default function Navbar() {
  const pathname = usePathname();

  // Map menu items to their routes
  const menuRoutes = {
    PROJEKT: "/",
    LOKALITA: "/lokalita",
    GALERIE: "/galerie",
    APARTMÁNY: "/apartmany",
    KONTAKT: "/kontakt",
    REZERVACE: "/rezervace",
  } as const;

  return (
    <nav className="w-full flex items-center justify-between py-2 px-4 sm:px-12 bg-white sticky top-0 z-50 shadow-sm">
      {/* Logo sekce */}
      <Link
        href="/"
        className="flex items-center min-w-[200px] justify-start py-2"
      >
        <Image
          src={URLS.logo}
          alt={LABELS.logoAlt}
          width={SIZES.navbar.logo.width}
          height={SIZES.navbar.logo.height}
          className="object-contain"
          priority
        />
      </Link>

      {/* Menu navigace */}
      <ul className="flex flex-1 justify-center gap-8 mx-12 relative">
        {MENU_ITEMS.map((item: MenuItem) => {
          const href = menuRoutes[item];
          const isActive =
            pathname === href ||
            (href === "/" && pathname === "/") ||
            (href !== "/" && pathname.startsWith(href));

          return (
            <li key={item} className="relative">
              <Link
                href={href}
                className={`text-xs md:text-sm font-semibold tracking-widest text-[#7B4A2D] hover:underline cursor-pointer whitespace-nowrap transition-all duration-200 ${
                  isActive ? "text-[#B6B12B]" : ""
                }`}
              >
                {item}
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#B6B12B] rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      duration: 0.4,
                    }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* CTA tlačítko */}
      <div className="min-w-[100px] flex items-center justify-end ml-4">
        <Link
          href="/rezervace"
          className="bg-[#B6B12B] text-white font-bold rounded-full px-4 py-2 text-sm shadow-none hover:brightness-95 transition-all whitespace-nowrap"
          style={{ letterSpacing: "0.05em" }}
        >
          {LABELS.cta}
        </Link>
      </div>
    </nav>
  );
}
