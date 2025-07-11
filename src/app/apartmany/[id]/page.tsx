import Link from "next/link";
import { notFound } from "next/navigation";

// Data apartmánů - stejná jako v hlavní stránce
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
    status: "REZERVACE",
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

interface ApartmentDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ApartmentDetailPage({
  params,
}: ApartmentDetailPageProps) {
  const { id } = await params;
  const apartment = apartments.find((apt) => apt.id === id);

  if (!apartment) {
    notFound();
  }

  // Generujeme popis podle typu apartmánu
  const getDescription = (apartment: any) => {
    const typeDescription =
      apartment.type === "1+kk"
        ? "jednopokojový apartmán"
        : apartment.type === "2+kk"
        ? "dvoupokojový apartmán"
        : apartment.type === "3+kk"
        ? "třípokojový apartmán"
        : "apartmán";

    const floorText = apartment.floor === "2. podlaží" ? "druhém" : "třetím";

    return {
      intro: `Prostorný ${typeDescription} o ploše ${apartment.area} se nachází ve ${floorText} podlaží budovy Strunzovy pily. Apartmán nabízí komfortní bydlení s moderním vybavením a kvalitními materiály.`,
      parking: `K apartmánu náleží jedno vyhrazené parkovací místo přímo v objektu, což zajišťuje pohodlí zejména v zimních měsících. Apartmán je ideální pro ${
        apartment.type === "1+kk"
          ? "jednotlivce nebo páry"
          : apartment.type === "2+kk"
          ? "páry nebo menší rodiny"
          : "rodiny nebo větší skupiny"
      } hledající kvalitní ubytování v srdci Šumavy.`,
      amenities:
        apartment.type === "1+kk"
          ? "Součástí apartmánu je kompaktní, ale plně vybavený kuchyňský kout, moderní koupelna s nadstandardním sanitárním vybavením a prostorná místnost sloužící jako ložnice i obývací pokoj. Velká okna poskytují dostatek přirozeného světla a krásný výhled do okolní šumavské přírody."
          : "Součástí apartmánu je plně vybavená kuchyňka, moderní koupelna s nadstandardním sanitárním vybavením a prostorné místnosti. Velká okna poskytují dostatek přirozeného světla a krásný výhled do okolní šumavské přírody.",
    };
  };

  const description = getDescription(apartment);

  return (
    <main>
      <section className="py-16 px-4 sm:px-12 max-w-7xl mx-auto">
        {/* Breadcrumb navigace */}
        <div className="mb-8">
          <Link
            href="/apartmany"
            className="text-[#B6B12B] font-poppins text-sm hover:underline"
          >
            ← Zpět na přehled apartmánů
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Levý sloupec - text */}
          <div>
            {/* Hlavní nadpis */}
            <div className="mb-8">
              <h1
                className="text-3xl font-montserrat font-normal text-[#404040] mb-4"
                style={{ letterSpacing: "0.025em" }}
              >
                Apartmán {apartment.id}
              </h1>
              <div className="w-40 h-1 bg-[#B6B12B]"></div>
            </div>

            {/* Specifikace apartmánu */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-poppins font-semibold text-gray-600">
                    Číslo apartmánu:
                  </span>
                  <p className="font-poppins text-gray-800 text-lg">
                    {apartment.id}
                  </p>
                </div>
                <div>
                  <span className="font-poppins font-semibold text-gray-600">
                    Podlaží:
                  </span>
                  <p className="font-poppins text-gray-800 text-lg">
                    {apartment.floor}
                  </p>
                </div>
                <div>
                  <span className="font-poppins font-semibold text-gray-600">
                    Velikost apartmánu:
                  </span>
                  <p className="font-poppins text-gray-800 text-lg">
                    {apartment.type}
                  </p>
                </div>
                <div>
                  <span className="font-poppins font-semibold text-gray-600">
                    Plocha:
                  </span>
                  <p className="font-poppins text-gray-800 text-lg">
                    {apartment.area}
                  </p>
                </div>
                <div>
                  <span className="font-poppins font-semibold text-gray-600">
                    Parkovací stání:
                  </span>
                  <p className="font-poppins text-gray-800 text-lg">
                    {apartment.parking}
                  </p>
                </div>
                <div>
                  <span className="font-poppins font-semibold text-gray-600">
                    Stav:
                  </span>
                  <p className="font-poppins text-[#B6B12B] text-lg font-semibold">
                    K rezervaci
                  </p>
                </div>
              </div>
            </div>

            {/* Popis apartmánu */}
            <div className="font-poppins text-gray-700 leading-relaxed mb-8">
              <p className="mb-4">{description.intro}</p>
              <p className="mb-4">{description.parking}</p>
              <p>{description.amenities}</p>
            </div>

            {/* Tlačítka */}
            <div className="flex gap-4">
              <Link href="/rezervace">
                <button className="bg-[#B6B12B] text-white px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-[#A5A025] transition-colors duration-200">
                  Rezervovat apartmán
                </button>
              </Link>
              <Link href="/kontakt">
                <button className="border-2 border-[#B6B12B] text-[#B6B12B] px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-[#B6B12B] hover:text-white transition-colors duration-200">
                  Kontakt
                </button>
              </Link>
            </div>
          </div>

          {/* Pravý sloupec - PDF viewer */}
          <div>
            <div className="sticky top-8">
              <h3 className="text-xl font-montserrat font-normal text-[#404040] mb-4">
                Karta bytu {apartment.id}
              </h3>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <iframe
                  src="/v74f-SP_AP_3_01_karta_WEB.pdf"
                  width="100%"
                  height="600"
                  className="w-full"
                  title={`Karta apartmánu ${apartment.id}`}
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="/v74f-SP_AP_3_01_karta_WEB.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B6B12B] font-poppins text-sm hover:underline"
                >
                  Otevřít PDF v novém okně
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
