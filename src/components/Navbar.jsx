import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="bg-sky-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight hover:opacity-90 transition"
        >
          <span className="text-3xl">🌤️</span>
          <span>WeatherApp</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive
                  ? "bg-white text-sky-600 shadow-sm"
                  : "hover:bg-sky-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive
                  ? "bg-white text-sky-600 shadow-sm"
                  : "hover:bg-sky-500"
              }`
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
