
import { useState } from "react";
import LocationModal from "../components/LocationModal";

const Home = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="flex-1 bg-linear-to-br from-sky-50 via-white to-blue-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-5xl text-center">

        {/* Weather Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl shadow-sky-100">
            <span className="text-5xl">🌤️</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight">
          NextLevel{" "}
          <span className="text-sky-500">Weather</span>
        </h1>

        {/* Description */}
        <p className="mt-5 text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Check the weather of your city quickly and easily.
          <br className="hidden sm:block" />
          Get the information you need and stay prepared.
        </p>

        {/* Button */}
        <button
          onClick={() => setClick(true)}
          className="mt-8 bg-sky-500 hover:bg-sky-600 text-white
          px-8 py-3 rounded-full font-semibold text-lg
          shadow-lg shadow-sky-200
          hover:shadow-xl hover:-translate-y-1
          active:translate-y-0
          transition-all duration-300 cursor-pointer"
        >
          🌍 Check Weather
        </button>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mt-14">

          {/* Temperature */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-sky-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">🌡️</div>

            <h3 className="text-lg font-bold text-slate-700">
              Temperature
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Know the current temperature of your city.
            </p>
          </div>

          {/* Wind */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-sky-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">💨</div>

            <h3 className="text-lg font-bold text-slate-700">
              Wind
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Check wind speed and direction easily.
            </p>
          </div>

          {/* Humidity */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-sky-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl mb-3">💧</div>

            <h3 className="text-lg font-bold text-slate-700">
              Humidity
            </h3>

            <p className="text-sm text-slate-400 mt-2">
              Get the latest humidity information.
            </p>
          </div>

        </div>

        {/* Bottom Text */}
        <p className="mt-10 text-sm text-slate-400">
          🌦️ Simple • Fast • Reliable Weather Information
        </p>

        {/* Modal */}
        {click && (
          <LocationModal onClose={() => setClick(false)} />
        )}

      </div>
    </div>
  );
};

export default Home;
