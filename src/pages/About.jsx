import { CloudSun, Search, Smartphone, Thermometer } from "lucide-react";

function About() {
  return (
    <div className="flex-1 min-h-[100vh-...] bg-sky-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
        {/* Icon */}
        <div className="flex justify-center text-sky-500 mb-6" aria-hidden="true">
          <CloudSun size={64} strokeWidth={1.6} />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-sky-700 mb-4">
          About WeatherApp
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          WeatherApp is a simple and user-friendly weather application designed
          to help you quickly check weather information for different locations.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8">
          Our goal is to provide a clean and easy-to-use interface where users
          can search for a location and get useful weather information in a
          simple way.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-sky-50 rounded-xl p-5">
            <div className="flex justify-center text-sky-500 mb-2" aria-hidden="true">
              <Thermometer size={32} strokeWidth={1.8} />
            </div>
            <h3 className="font-semibold text-sky-700">Weather Info</h3>
            <p className="text-sm text-gray-500 mt-2">
              Check current weather information.
            </p>
          </div>

          <div className="bg-sky-50 rounded-xl p-5">
            <div className="flex justify-center text-sky-500 mb-2" aria-hidden="true">
              <Search size={32} strokeWidth={1.8} />
            </div>
            <h3 className="font-semibold text-sky-700">Search</h3>
            <p className="text-sm text-gray-500 mt-2">
              Search weather by location.
            </p>
          </div>

          <div className="bg-sky-50 rounded-xl p-5">
            <div className="flex justify-center text-sky-500 mb-2" aria-hidden="true">
              <Smartphone size={32} strokeWidth={1.8} />
            </div>
            <h3 className="font-semibold text-sky-700">Responsive</h3>
            <p className="text-sm text-gray-500 mt-2">
              Works smoothly on different devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
