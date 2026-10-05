import { ArrowLeft, LocateFixed, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Loader from "../components/Loader";
import LocationModal from "../components/LocationModal";
import RecommandationCard from "../components/RecommandationCard";
import WeatherCard from "../components/WeatherCard";
import WeatherType from "../components/WeatherType";
import { getWeather } from "../services/get-weather";
import { getRecommandations } from "../utils/getRecommandation";

const Weather = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const place = location.state?.location;
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(Boolean(place));
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const fetchWeather = useCallback(async () => {
    if (!place) return;

    setLoading(true);
    setError("");

    try {
      const result = await getWeather(place);
      setWeather(result);
    } catch (fetchError) {
      setError(fetchError.message || "Unable to load weather right now.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }, [place]);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  if (!place) {
    return (
      <div className="flex min-h-[60vh] flex-1 items-center justify-center px-4 text-center">
        <div className="max-w-md rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100">
          <h1 className="text-2xl font-bold text-slate-800">No location selected</h1>
          <p className="mt-3 text-slate-500">
            Choose a city to see its current weather information.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 font-semibold text-white transition hover:bg-sky-600"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Choose a location
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6">
      <header className="flex flex-wrap items-center justify-between gap-4 py-5">
        <Link
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-600"
          to="/"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Home
        </Link>

        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            Current conditions
          </p>
          <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">
            NextLevel <span className="text-sky-500">Weather</span>
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={fetchWeather}
            disabled={loading}
            aria-label="Refresh weather"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RefreshCw size={17} className={loading ? "animate-spin" : ""} aria-hidden="true" />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-sky-600"
          >
            <LocateFixed size={17} aria-hidden="true" />
            <span className="hidden sm:inline">Change city</span>
          </button>
        </div>
      </header>

      {loading && <Loader />}

      {!loading && error && (
        <div className="mx-auto max-w-xl rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
          <h2 className="font-bold">We couldn’t load the weather</h2>
          <p className="mt-2 text-sm">{error}</p>
          <button
            type="button"
            onClick={fetchWeather}
            className="mt-4 rounded-full bg-red-600 px-5 py-2 font-semibold text-white transition hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      )}

      {!loading && !error && weather && (
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-5">
            <WeatherCard place={place} weather={weather} />
            <RecommandationCard recommendation={getRecommandations(weather)} />
          </div>
          <WeatherType place={place} weather={weather} />
        </div>
      )}

      {open && <LocationModal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default Weather;
