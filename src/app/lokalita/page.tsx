import Image from "next/image";

export default function LokalitaPage() {
  return (
    <main>
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
                Lokalita
              </h1>
              <div className="w-40 h-1 bg-[#B6B12B]"></div>
            </div>

            {/* Text o lokalitě */}
            <div className="mb-12 font-poppins text-gray-700 leading-relaxed">
              <p>
                Objekt Strunzovy pily se nachází na strategickém místě přímo u
                řeky Vltavy pod kvildskou sjezdovkou kousek od vleku a zároveň u
                silnice směřující na Bučinu a prameny Vltavy, tedy těsně u
                nástupu běžkařských stop. Její umístění je téměř v centru obce,
                ale zároveň se jedná o klidné místo, neboť od silnice směrem k
                objektu Strunzovy pily není žádná jiná zástavba.
              </p>
            </div>

            {/* Nadpis Kam v okolí */}
            <div className="mb-8">
              <h2
                className="text-2xl font-montserrat font-300 text-[#404040] mb-4"
                style={{ letterSpacing: "0.05em", paddingTop: "2em" }}
              >
                Kam v okolí
              </h2>
              <div className="w-32 h-1 bg-[#B6B12B]"></div>
            </div>

            {/* Text o okolí */}
            <div className="font-poppins text-gray-700 leading-relaxed">
              <p className="mb-4">
                V Kvildě je mimo zmíněné sjezdovky a vleky pro zkušené lyžaře
                také dětský vlek a lyžařská škola pro ty méně zdatné. Dále je v
                obci obchod s potravinami a sportovním zbožím, pošta a několik
                restaurací včetně pivovaru a pekárny, dále dvě kavárny a ač je
                to k nevíře, je možné se na Kvildě také vykoupat, a to pro
                otužlejší buď ve Vltavě nebo potom v nádržích, které se nachází
                po levé straně při příjezdu do Kvildy od Horské Kvildy.
              </p>
              <p className="mb-4">
                Kvilda je ideální nejen v zimě, kdy lze pěstovat běžkařské umění
                v bílé stopě, ale zejména v létě na výlety pěšky a na kole. V
                dojezdové/dochozí vzdálenosti je pramen Vltavy, Bučina, Knížecí
                pláně, Modrava, Filipova Huť, Březník, Horská Kvilda, Černá
                hora, Borová lada, Nové hutě a přímo ve Kvildě potom výběh pro
                Jeleny. V Borové ladě jsou v okolí Soví voliéry a v Srní zase
                vlčí výběh a pivovar Zlatý srnec.
              </p>
            </div>
          </div>

          {/* Pravý sloupec - obrázky */}
          <div className="space-y-8">
            {/* První obrázek */}
            <div className="w-full">
              <Image
                src="/Strunzova-pila-04.jpg"
                alt="Kvilda okolí - dřevěná stezka"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Druhý obrázek */}
            <div className="w-full">
              <Image
                src="/Strunzova-pila-05.jpg"
                alt="Kvilda krajina - ranní mlha"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sekce s ikonami vlastností */}
      <section className="py-16 px-4 sm:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Ikona 1 - Turistika */}
            <div className="text-center">
              <Image
                src="/turistika.svg"
                alt="Turistika ikona"
                width={250}
                height={250}
                className="w-35 h-35 mx-auto mb-4"
              />
              <h3 className="font-montserrat font-semibold text-[#404040] text-sm leading-tight">
                VHODNÉ PRO
                <br />
                LETNÍ I ZIMNÍ
                <br />
                TURISTIKU
              </h3>
            </div>

            {/* Ikona 2 - Parkování */}
            <div className="text-center">
              <Image
                src="/parkovani.svg"
                alt="Parkování ikona"
                width={250}
                height={250}
                className="w-35 h-35 mx-auto mb-4"
              />
              <h3 className="font-montserrat font-semibold text-[#404040] text-sm leading-tight">
                PARKOVÁNÍ
                <br />V OBJEKTU
              </h3>
            </div>

            {/* Ikona 3 - Výhled */}
            <div className="text-center">
              <Image
                src="/vyhled.svg"
                alt="Výhled ikona"
                width={250}
                height={250}
                className="w-35 h-35 mx-auto mb-4"
              />
              <h3 className="font-montserrat font-semibold text-[#404040] text-sm leading-tight">
                PŘÍRODA
                <br />
                VÝHLED
                <br />
                SPORT
              </h3>
            </div>

            {/* Ikona 4 - Poloha */}
            <div className="text-center">
              <Image
                src="/poloha.svg"
                alt="Poloha ikona"
                width={250}
                height={250}
                className="w-35 h-35 mx-auto mb-4"
              />
              <h3 className="font-montserrat font-semibold text-[#404040] text-sm leading-tight">
                SKVĚLÁ
                <br />
                POLOHA
              </h3>
            </div>

            {/* Ikona 5 - Občanská vybavenost */}
            <div className="text-center">
              <Image
                src="/vybavenost.svg"
                alt="Vybavenost ikona"
                width={250}
                height={250}
                className="w-35 h-35 mx-auto mb-4"
              />
              <h3 className="font-montserrat font-semibold text-[#404040] text-sm leading-tight">
                VEŠKERÁ
                <br />
                OBČANSKÁ
                <br />
                VYBAVENOST
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Sekce s mapou */}
      <section className="py-16 px-4 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-montserrat font-normal text-[#404040] mb-4"
            style={{ letterSpacing: "0.025em" }}
          >
            Kde nás najdete
          </h2>
          <div className="w-32 h-1 bg-[#B6B12B] mx-auto"></div>
        </div>

        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.775220489096!2d13.574052586863314!3d49.01486121583192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4774c5276c257fb7%3A0x61bc6fed42d66ed5!2sWellness%20Apartm%C3%A1n%20Pila%20Kvilda!5e0!3m2!1scs!2scz!4v1751222446856!5m2!1scs!2scz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa - Apartmány Strunzova Pila"
          ></iframe>
        </div>

        <div className="text-center mt-6">
          <p className="font-poppins text-gray-700">
            Strunzova Pila, 384 92 Kvilda
          </p>
        </div>
      </section>
    </main>
  );
}
