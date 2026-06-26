export default function MapEmbed() {
  return (
    <div className="w-full bg-white p-2 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100">
      <div className="relative w-full h-[300px] rounded-2xl overflow-hidden group cursor-pointer">
        {/* Placeholder Map Background */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800&h=400"
            alt="Map Preview"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute bg-white/90 px-6 py-2 rounded-full font-medium text-gray-700 shadow-sm">
            Office Location
          </div>
        </div>
        
        {/* Interactive Overlay to handle the link */}
        <a 
          href="https://share.google/oykbjDU0TDGfB0eTX" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          title="Open Office Location"
        >
          <div className="bg-white px-6 py-3 rounded-full font-semibold shadow-xl text-gray-900 flex items-center gap-2">
            View on Google Maps
          </div>
        </a>

        {/* Decorative Border Overlay */}
        <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-2xl" />
      </div>
    </div>
  );
}