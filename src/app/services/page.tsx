export default function ServicesPage() {
  const services = [
    {
      title: "Home Deep Cleaning",
      desc: "Complete top-to-bottom cleaning of your home including floors, furniture, kitchen, and bathrooms.",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    },
    {
      title: "Kitchen Deep Cleaning",
      desc: "Grease removal, stove cleaning, chimney, tiles, sink and appliance sanitization.",
      img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    },
    {
      title: "Bathroom Sanitization",
      desc: "Hard water stain removal, tile scrubbing, toilet deep cleaning and odor removal.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Sofa & Upholstery Cleaning",
      desc: "Fabric-safe shampooing and stain removal for sofas, chairs and mattresses.",
      img: "https://images.unsplash.com/photo-1582582494700-0b8b8b7f3b2f",
    },
    {
      title: "Office Cleaning",
      desc: "Professional workspace cleaning for desks, cabins, meeting rooms and common areas.",
      img: "https://images.unsplash.com/photo-1581091215367-59ab6b9a1f1f",
    },
    {
      title: "Industrial Cleaning",
      desc: "Heavy-duty cleaning for warehouses, factories, and large commercial spaces.",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    },
    {
      title: "Glass & Facade Cleaning",
      desc: "High-rise glass cleaning with safety protocols for commercial buildings.",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    },
    {
      title: "Society / Residential Cleaning",
      desc: "Common areas, staircases, lifts, parking zones and society maintenance cleaning.",
      img: "https://images.unsplash.com/photo-1590725140246-20acdee442be",
    },
    {
      title: "Move-in / Move-out Cleaning",
      desc: "Deep cleaning before or after shifting to ensure spotless handover.",
      img: "https://images.unsplash.com/photo-1560184897-ae75f418493e",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Professional Cleaning Services
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From homes to industrial spaces — we deliver deep cleaning solutions
            with trained professionals and modern equipment.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>

                <button className="mt-4 text-sm font-medium text-[var(--primary)] hover:text-black transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}