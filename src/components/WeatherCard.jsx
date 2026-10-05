import { Droplet, MapPin, Thermometer, Wind } from "lucide-react";
import { getWeatherTheme } from "../utils/getTheme";

export default function WeatherCard({ place, weather }) {
  const theme = getWeatherTheme(weather?.icon);
  const locationName = place?.country ? `${place.name}, ${place.country}` : place?.name;

  const stats = [
    { icon: Thermometer, label: "Feels like", value: `${weather?.feelsLike ?? "—"}°C` },
    { icon: Droplet, label: "Humidity", value: `${weather?.humidity ?? "—"}%` },
    { icon: Wind, label: "Wind speed", value: `${weather?.windSpeed ?? "—"} km/h` },
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:p-8">
      <span
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full blur-3xl"
        style={{ background: theme.accent, opacity: 0.16 }}
        aria-hidden="true"
      />

      <div className="relative">
        <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-sky-700">
          Today’s weather
        </span>

        <h2 className="mt-4 flex items-center gap-2 text-2xl font-bold text-slate-800 sm:text-3xl">
          <MapPin size={22} strokeWidth={2.5} className="flex-shrink-0 text-sky-500" aria-hidden="true" />
          <span>{locationName || "Selected location"}</span>
        </h2>

        <div className="mt-6 flex items-end gap-5 pb-7">
          <span
            className="text-7xl font-extrabold leading-none tracking-tight sm:text-8xl"
            style={{ color: theme.strong }}
          >
            {weather?.temperature ?? "—"}
            <span className="align-top text-4xl sm:text-5xl">°</span>
          </span>
          <div className="pb-1">
            <span className="block text-xl font-bold text-slate-800">{weather?.conditionLabel}</span>
            <span className="block text-sm text-slate-500">{weather?.description}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-sky-200 hover:bg-sky-50">
              <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Icon size={18} strokeWidth={2.25} aria-hidden="true" />
              </span>
              <div>
                <span className="block text-xs font-semibold text-slate-500">{label}</span>
                <span className="block font-bold text-slate-800">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
