import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <div>
        {/* Hero sekce s fotkou přes celou obrazovku */}
        <section className="relative w-full h-screen">
          <Image
            src="/Strunzova-pila-exterier.jpg"
            alt="Apartmány Strunzova Pila - exterior"
            fill
            className="object-cover"
            priority
            quality={90}
            style={{ objectFit: "cover" }}
          />

          {/* Overlay pro lepší čitelnost textu (volitelné) */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Obsah přes fotku (volitelné) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white z-10">
              {/* Zde můžete přidat text nebo tlačítka přes fotku */}
            </div>
          </div>
        </section>

        {/* Sekce o Apartmánech */}
        <section className="py-16 px-4 sm:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Levý sloupec - text */}
            <div>
              {/* Hlavní nadpis */}
              <div className="mb-8">
                <h1
                  className="text-3xl font-montserrat font-normal text-[#404040] mb-4"
                  style={{ letterSpacing: "0.025em" }}
                >
                  Apartmány Strunzova pila
                </h1>
                <div className="w-40 h-1 bg-[#B6B12B]"></div>
              </div>

              {/* První odstavec */}
              <div className="mb-12 font-poppins text-gray-700 leading-relaxed">
                <p>
                  Strunzova pila na Kvildě byla založena roku 1820 panem Petrem
                  Strunzem a zabývala se zejména zpracováním stavebního a
                  rezonančního dřeva. Byl to prosperující podnik a jeho majitelé
                  bývali váženými kvildskými občany. Letos tedy slavíme 200 let
                  ode dne jejího založení.
                </p>
                <br />
                <p>
                  Objekt Strunzovy pily se mimochodem objevuje v několika
                  filmech (např. Za trnkovým keřem). Pila přestala svému účelu
                  sloužit po Sametové revoluci a akutálně probíhá její
                  přestavba.
                </p>
              </div>

              {/* Nadpis Přestavba */}
              <div className="mb-8">
                <h2
                  className="text-2xl font-montserrat font-300 text-[#404040] mb-4"
                  style={{ letterSpacing: "0.05em", paddingTop: "2em" }}
                >
                  Přestavba
                </h2>
                <div className="w-24 h-1 bg-[#B6B12B]"></div>
              </div>

              {/* Text o přestavbě */}
              <div className="font-poppins text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Objekt Strunzovy pily se nyní přestavuje na polyfunkční dům,
                  ve kterém bude umístěno 30 apartmánů, které budou disponovat
                  jedním parkovacím místem a velkou sklepní kójí. Většina
                  apartmánů má pak příležitou terasu.
                </p>
                <p className="mb-4">
                  Na dva apartmány, které budou umístěny v I. NP bude navazovat
                  volný vstup na pozemek směřující k Vltavě. Dále bude v objektu
                  Strunzovy pily umístěna restaurace a wellness (sauna,
                  vířivka), které budou určeny k využití nejen pro obyvatele
                  apartmánů.
                </p>
                <p className="mb-4">
                  Snažíme se o citlivou přestavbu tak, aby nebyl narušen genius
                  loci a objekt Strunzovy pily sloužil dál jinému účelu.
                </p>
                <p>
                  Apartmány budou zařízeny kvalitními prvky. Koupelny
                  nadstandardním sanitárním vybavením, obklady a dlažbou. Dveře,
                  obložky i podlahy budou z prvotřídního materiálu.
                </p>
              </div>
            </div>

            {/* Pravý sloupec - obrázek a features */}
            <div
              className="space-y-8 bg-white p-8 rounded-2xl border-2 border-gray-200"
              style={{
                boxShadow:
                  "0 20px 60px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Obrázek */}
              <div className="w-full">
                <Image
                  src="/Strunzova-pila-01.jpg"
                  alt="Strunzova pila budova"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Seznam vlastností */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-0.5 bg-[#B6B12B]"></div>
                  <span className="font-poppins text-gray-700 text-lg">
                    1 budova
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-0.5 bg-[#B6B12B]"></div>
                  <span className="font-poppins text-gray-700 text-lg">
                    30 prostorných apartmánů
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-0.5 bg-[#B6B12B]"></div>
                  <span className="font-poppins text-gray-700 text-lg">
                    Dispozice 1+kk až 3+kk
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-3 h-0.5 bg-[#B6B12B] mt-3"></div>
                  <span className="font-poppins text-gray-700 text-lg">
                    Každý apartmán má vlastní koupelnu, kvalitní podlahy a mnoho
                    dalších luxusních prvků
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-0.5 bg-[#B6B12B]"></div>
                  <span className="font-poppins text-gray-700 text-lg">
                    1 parkovací místo ke každému apartmánu
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-0.5 bg-[#B6B12B]"></div>
                  <span className="font-poppins text-gray-700 text-lg">
                    Přílehlá terasa u většiny apartmánů
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-0.5 bg-[#B6B12B]"></div>
                  <span className="font-poppins text-gray-700 text-lg">
                    Restaurace a wellness v objektu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Nová sekce s citátem developera */}
        <section className="relative w-full h-96 flex">
          {/* Levá část - obrázek */}
          <div className="w-1/2 relative">
            <Image
              src="/Strunzova-pila-exterier.jpg"
              alt="Apartmány Strunzova Pila - letecký pohled"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Pravá část - text */}
          <div className="w-1/2 bg-[#f5f4f2] flex items-center justify-center p-8">
            <div className="max-w-md text-left">
              <h1
                className="text-xl font-montserrat font-normal text-[#B8A082] leading-tight mb-4"
                style={{ letterSpacing: "0.02em" }}
              >
                &ldquo;CHTĚJTE VÍC! NÁDHERNÁ ŠUMAVSKÁ PŘÍRODA VHODNÁ K LETNÍ I
                ZIMNÍ TURISTICE A SPORTU. STRATEGICKÁ POLOHA U SJEZDOVKY,
                VEŠKERÁ OBČANSKÁ VYBAVENOST NA DOSAH.
              </h1>

              <h2
                className="text-xl font-montserrat font-normal text-[#B8A082] leading-tight mb-4"
                style={{ letterSpacing: "0.02em" }}
              >
                APARTMÁNY PILA KVILDA NABÍZÍ ZKRÁTKA VŠE!&rdquo;
              </h2>

              <p className="text-sm font-poppins text-gray-600 italic">
                developer projektu
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
