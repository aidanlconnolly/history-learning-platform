import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/timeline", label: "Timeline" },
  { to: "/map", label: "Map" },
  { to: "/quizzes", label: "Quizzes" },
  { to: "/progress", label: "Progress" },
];

export default function Layout() {
  return (
    <div className="min-h-full flex flex-col">
      <header className="sticky top-0 z-20 border-b border-slate-700/60 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <NavLink to="/" className="flex items-center gap-2 font-serif text-lg font-semibold text-white">
            <img src="/globe.svg" alt="" className="h-7 w-7" />
            Chronicle
          </NavLink>
          <nav className="flex flex-wrap items-center gap-1 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `rounded-md px-3 py-1.5 transition-colors ${
                    isActive
                      ? "bg-slate-700 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">
        Chronicle · an interactive world-history explorer
      </footer>
    </div>
  );
}
