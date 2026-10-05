import { LocateFixed, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getGeolocation } from "../services/get-geolocation";

const LocationModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const goToPage = (location) => {
    navigate("/weather", { state: { location } });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const value = city.trim();

    if (!value) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const location = await getGeolocation(value);
      goToPage(location);
    } catch (submitError) {
      setError(submitError.message || "Could not find that city.");
    } finally {
      setLoading(false);
    }
  };

  const handleGeoLocations = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        goToPage({ name: "Your location", lat: coords.latitude, lon: coords.longitude });
      },
      (geoError) => {
        setError(geoError.message || "Unable to access your location.");
        setLoading(false);
      },
      { timeout: 10000, enableHighAccuracy: true },
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="location-modal-title"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-500">Weather search</p>
            <h2 id="location-modal-title" className="mt-1 text-2xl font-bold text-slate-800">
              Where are you today?
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close location dialog"
            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <label htmlFor="city" className="sr-only">City name</label>
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              id="city"
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              autoFocus
              className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-sky-500 px-5 py-3 font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Finding location..." : "Get weather"}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3 text-sm text-slate-400">
          <span className="h-px flex-1 bg-slate-200" />
          or
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          type="button"
          onClick={handleGeoLocations}
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-sky-200 bg-sky-50 px-5 py-3 font-semibold text-sky-700 transition hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <LocateFixed size={18} aria-hidden="true" />
          Use my location
        </button>

        {error && <p className="mt-4 text-center text-sm font-medium text-red-600" role="alert">{error}</p>}
      </div>
    </div>
  );
};

export default LocationModal;
