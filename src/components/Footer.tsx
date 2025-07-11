import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#B67A5A] text-white">
      {/* Hlavní část footeru */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          {/* Kontakt sekce */}
          <h2 className="text-xl font-montserrat font-semibold mb-6 tracking-widest">
            KONTAKT
          </h2>

          <div className="mb-8 space-y-1 font-poppins">
            <p>Apartmány Pila Kvilda s.r.o.</p>
            <p>V koutě 630, Senec</p>
            <p>330 08 Zruč-Senec</p>
          </div>
        </div>
      </div>

      {/* Spodní část s navigací a copyrightem */}
      <div className="border-t border-white/30">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Navigační menu */}
          <nav className="mb-4">
            <ul className="flex justify-center space-x-8 font-montserrat text-sm tracking-wider">
              <li>
                <a
                  href="#projekt"
                  className="hover:opacity-80 transition-opacity"
                >
                  PROJEKT
                </a>
              </li>
              <li>
                <a
                  href="#lokalita"
                  className="hover:opacity-80 transition-opacity"
                >
                  LOKALITA
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="hover:opacity-80 transition-opacity"
                >
                  GALERIE
                </a>
              </li>
              <li>
                <a
                  href="#apartmany"
                  className="hover:opacity-80 transition-opacity"
                >
                  APARTMÁNY
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="hover:opacity-80 transition-opacity"
                >
                  KONTAKT
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-center text-sm font-poppins opacity-90">
            © 2020, Henstav s.r.o.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
