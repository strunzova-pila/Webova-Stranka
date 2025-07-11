export default function RezervacePage() {
  return (
    <main>
      <div className="py-16 px-4 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-montserrat font-semibold text-[#161219] mb-4">
            Rezervace
          </h1>
          <div className="w-40 h-1 bg-[#B6B12B] mx-auto"></div>
        </div>
        <div className="font-poppins text-gray-700 leading-relaxed">
          <p>Informace o rezervaci budou doplněny...</p>
        </div>
      </div>
      {/* Sekce rezervace */}
      <section id="rezervace" className="py-16 px-4 sm:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-semibold text-[#7B4A2D] mb-4">
            Rezervace
          </h2>
          <div className="w-32 h-1 bg-[#B6B12B] mx-auto"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <iframe
              src="https://booking.previo.app/?hotId=123456"
              scrolling="no"
              frameBorder="0"
              width="100%"
              height="2000"
              name="previo-booking-iframe"
              id="previo-booking-iframe"
              className="w-full"
              style={{ minHeight: "2000px" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
