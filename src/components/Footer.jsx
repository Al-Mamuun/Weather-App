function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-5">
        {/* Footer Main */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo & Description */}
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌤️</span>

            <div>
              <h2 className="text-lg font-bold">WeatherApp</h2>

              <p className="text-xs text-slate-400">
                Check the weather and stay prepared.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-500 text-center sm:text-right">
            © 2026 WeatherApp
            <span className="mx-1">•</span>
            Developed by{" "}
            <span className="text-sky-400 font-medium">Abdullah Al-Mamun</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
