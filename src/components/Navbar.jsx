import { CloudSun } from "lucide-react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition ${
      isActive ? "bg-white text-sky-600 shadow-sm" : "text-white hover:bg-sky-500"
    }`;

  return (
    <nav className="bg-sky-600 text-white shadow-lg" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight transition hover:opacity-90 sm:text-2xl">
          <CloudSun size={28} strokeWidth={1.8} aria-hidden="true" />
          <span>WeatherApp</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
