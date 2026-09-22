
import {
  LayoutDashboard,
  Code2,
  GitBranch,
  ShieldCheck,
  Settings,
  Shield,
} from "lucide-react";

const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Code Review", icon: Code2 },
  { label: "Repositories", icon: GitBranch },
  { label: "Security", icon: ShieldCheck },
  { label: "Settings", icon: Settings },
];

export default function Sidebar({
  activePage = "Overview",
  onNavigate,
}) {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-slate-800 bg-slate-950 text-slate-300">
      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-slate-800 px-6 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
          <Shield size={23} />
        </div>

        <div>
          <h1 className="text-lg font-bold tracking-tight text-white">
            CodeGuard AI
          </h1>
          <p className="text-xs text-slate-500">
            Intelligent Code Review
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 pt-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Workspace
        </p>

        <nav className="space-y-1">
          {navItems.map(({ label, icon: Icon }) => {
            const isActive = activePage === label;

            return (
              <button
                key={label}
                type="button"
                onClick={() => onNavigate?.(label)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium transition ${
                  isActive
                    ? "bg-violet-600/15 text-violet-300 ring-1 ring-inset ring-violet-500/20"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <Icon size={19} />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Workspace Status */}
      <div className="mt-auto p-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-emerald-400">
              Workspace active
            </span>
          </div>

          <p className="text-xs leading-5 text-slate-500">
            Your AI-powered code review workspace is ready.
          </p>
        </div>

        <p className="mt-4 text-center text-xs text-slate-600">
          CodeGuard AI · v1.0
        </p>
      </div>
    </aside>
  );
}
