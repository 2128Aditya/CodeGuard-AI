
import {
  Bell,
  Search,
  ChevronDown,
  Command,
  Menu,
} from "lucide-react";

export default function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/90 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={21} />
        </button>

        <div className="hidden items-center gap-2 text-sm text-slate-500 sm:flex">
          <span>Workspace</span>
          <span>/</span>
          <span className="font-medium text-slate-200">
            Dashboard
          </span>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <Command size={17} className="text-violet-400" />
          <span className="text-sm font-semibold text-white">
            CodeGuard AI
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <button
          type="button"
          className="hidden items-center gap-3 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-500 transition hover:border-slate-700 hover:text-slate-300 md:flex"
        >
          <Search size={16} />
          <span>Search anything...</span>
          <kbd className="rounded border border-slate-700 px-1.5 py-0.5 text-xs">
            Ctrl K
          </kbd>
        </button>

        {/* Notifications */}
        <button
          type="button"
          className="relative rounded-lg border border-slate-800 p-2.5 text-slate-400 transition hover:bg-slate-900 hover:text-white"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-violet-500 ring-2 ring-slate-950" />
        </button>

        {/* Divider */}
        <div className="hidden h-8 w-px bg-slate-800 sm:block" />

        {/* User Profile */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg p-1.5 transition hover:bg-slate-900"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-bold text-white">
            A
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-white">
              Aditya Singh
            </p>
            <p className="text-xs text-slate-500">
              Developer
            </p>
          </div>

          <ChevronDown
            size={16}
            className="hidden text-slate-500 sm:block"
          />
        </button>
      </div>
    </header>
  );
}
