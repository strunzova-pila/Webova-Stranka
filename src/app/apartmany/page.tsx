"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// Data apartmánů podle obrázku
const apartments = [
  {
    id: "2.01",
    floor: "2. podlaží",
    type: "2+kk",
    area: "49.95 m²",
    parking: "1x",
    status: "REZERVACE",
  },
  {
    id: "2.02",
    floor: "2. podlaží",
    type: "3+kk",
    area: "62.00 m²",
    parking: "1x",
    status: "REZERVACE",
  },
  {
    id: "2.03",
    floor: "2. podlaží",
    type: "2+kk",
    area: "40.50 m²",
    parking: "1x",
    status: "REZERVACE",
  },
  {
    id: "2.04",
    floor: "2. podlaží",
    type: "2+kk",
    area: "41.17 m²",
    parking: "1x",
    status: "REZERVACE",
  },
  {
    id: "2.05",
    floor: "2. podlaží",
    type: "3+kk",
    area: "61.43 m²",
    parking: "1x",
    status: "REZERVACE",
  },
  {
    id: "2.06",
    floor: "2. podlaží",
    type: "2+kk",
    area: "44.29 m²",
    parking: "1x",
    status: "REZERVACE",
  },
  {
    id: "2.07",
    floor: "2. podlaží",
    type: "2+kk",
    area: "56.68 m²",
    parking: "1x",
    status: "REZERVACE",
  },
  {
    id: "3.01",
    floor: "3. podlaží",
    type: "3+kk",
    area: "67.47 m²",
    parking: "1x",
    status: "REZERVACE",
  },
  {
    id: "3.02",
    floor: "3. podlaží",
    type: "1+kk",
    area: "30.26 m²",
    parking: "1x",
    status: "REZERVACE",
  },
  {
    id: "3.03",
    floor: "3. podlaží",
    type: "1+kk",
    area: "33.18 m²",
    parking: "1x",
    status: "REZERVACE",
  },
  {
    id: "3.04",
    floor: "3. podlaží",
    type: "3+kk",
    area: "74.13 m²",
    parking: "1x",
    status: "VOLNÉ",
  },
  {
    id: "3.05",
    floor: "3. podlaží",
    type: "2+kk",
    area: "59.59 m²",
    parking: "1x",
    status: "REZERVACE",
  },
  {
    id: "3.06",
    floor: "3. podlaží",
    type: "2+kk",
    area: "76.93 m²",
    parking: "1x",
    status: "REZERVACE",
  },
];

export default function ApartmanyPage() {
  const router = useRouter();

  const handleApartmentClick = (apartmentId: string) => {
    router.push(`/apartmany/${apartmentId}`);
  };

  return (
    <main>
      <section className="py-16 px-4 sm:px-12 max-w-7xl mx-auto">
        {/* Hlavní nadpis */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl font-montserrat font-normal text-[#404040] mb-4"
            style={{ letterSpacing: "0.025em" }}
          >
            Přehled apartmánů
          </h1>
          <div className="w-40 h-1 bg-[#B6B12B] mx-auto"></div>
        </div>

        {/* Popis */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="font-poppins text-gray-700 leading-relaxed text-lg">
            Vyberte si z našich prostorných apartmánů v historické budově
            Strunzovy pily. Každý apartmán je jedinečný a nabízí komfortní
            bydlení s moderním vybavením. Kliknutím na řádek zobrazíte detail
            apartmánu.
          </p>
        </div>

        {/* Interaktivní tabulka */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          {/* Hlavička tabulky */}
          <div className="grid grid-cols-7 bg-[#B8A082] text-white font-montserrat font-semibold text-sm">
            <div className="p-4 text-center border-r border-[#A08964]">
              ČÍSLO APARTMÁNU
            </div>
            <div className="p-4 text-center border-r border-[#A08964]">
              PODLAŽÍ
            </div>
            <div className="p-4 text-center border-r border-[#A08964]">
              VELIKOST APARTMÁNU
            </div>
            <div className="p-4 text-center border-r border-[#A08964]">
              PLOCHA
            </div>
            <div className="p-4 text-center border-r border-[#A08964]">
              PARKOVACÍ STÁNÍ
            </div>
            <div className="p-4 text-center border-r border-[#A08964]">
              STAV
            </div>
            <div className="p-4 text-center">INFO</div>
          </div>

          {/* Řádky tabulky */}
          {apartments.map((apartment, index) => (
            <div
              key={apartment.id}
              onClick={() => handleApartmentClick(apartment.id)}
              className={`grid grid-cols-7 cursor-pointer transition-colors duration-200 hover:bg-[#f8f7f5] ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } border-b border-gray-200 last:border-b-0`}
            >
              <div className="p-4 text-center font-poppins font-semibold text-gray-800 border-r border-gray-200">
                {apartment.id}
              </div>
              <div className="p-4 text-center font-poppins text-gray-700 border-r border-gray-200">
                {apartment.floor}
              </div>
              <div className="p-4 text-center font-poppins font-semibold text-gray-800 border-r border-gray-200">
                {apartment.type}
              </div>
              <div className="p-4 text-center font-poppins text-gray-700 border-r border-gray-200">
                {apartment.area}
              </div>
              <div className="p-4 text-center font-poppins text-gray-700 border-r border-gray-200">
                {apartment.parking}
              </div>
              <div className="p-4 text-center border-r border-gray-200">
                <span className="bg-[#B6B12B] text-white px-3 py-1 rounded-full text-xs font-poppins font-semibold">
                  {apartment.status === "REZERVACE" ? "REZERVACE" : "VOLNÉ"}
                </span>
              </div>
              <div className="p-4 text-center">
                <span className="text-[#B8A082] font-poppins text-sm font-semibold underline hover:text-[#A08964]">
                  KARTA BYTU
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Spodní informace */}
        <div className="mt-12 text-center">
          <div className="bg-[#f5f4f2] rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-montserrat font-normal text-[#404040] mb-4">
              Potřebujete více informací?
            </h3>
            <p className="font-poppins text-gray-700 mb-6">
              Rádi vám poskytneme podrobné informace o jakémkoliv apartmánu nebo
              vám pomůžeme s výběrem.
            </p>
            <Link href="/kontakt">
              <button className="bg-[#B6B12B] text-white px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-[#A5A025] transition-colors duration-200">
                Kontaktujte nás
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
