
import { useState } from "react";
import {
  Settings as SettingsIcon,
  UserRound,
  Bell,
  ShieldCheck,
  Palette,
  Save,
  Check,
} from "lucide-react";

export default function Settings() {
  const [name, setName] = useState("Aditya Singh");
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("dark");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Settings are currently stored only in this page's state.
    // Persistent storage can be connected later.
    setSaved(true);
  };

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Heading */}
      <div>
        <div className="mb-2 flex items-center gap-2 text-violet-400">
          <SettingsIcon size={18} />
          <span className="text-xs font-semibold uppercase tracking-wider">
            PREFERENCES
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white">
          Settings
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Manage your profile and CodeGuard AI preferences.
        </p>
      </div>

      {/* Profile */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60">
        <div className="flex items-center gap-3 border-b border-slate-800 px-5 py-4">
          <UserRound className="text-violet-400" size={20} />

          <div>
            <h2 className="font-semibold text-white">Profile</h2>
            <p className="mt-1 text-xs text-slate-500">
              Your basic account information
            </p>
          </div>
        </div>

        <div className="space-y-5 p-5">
          <div>
            <label
              htmlFor="settings-name"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Full name
            </label>

            <input
              id="settings-name"
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setSaved(false);
              }}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label
              htmlFor="settings-email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Email address
            </label>

            <input
              id="settings-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSaved(false);
              }}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </section>

      {/* Appearance */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60">
        <div className="flex items-center gap-3 border-b border-slate-800 px-5 py-4">
          <Palette className="text-violet-400" size={20} />

          <div>
            <h2 className="font-semibold text-white">Appearance</h2>
            <p className="mt-1 text-xs text-slate-500">
              Choose your preferred interface theme
            </p>
          </div>
        </div>

        <div className="p-5">
          <label
            htmlFor="settings-theme"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Theme
          </label>

          <select
            id="settings-theme"
            value={theme}
            onChange={(event) => {
              setTheme(event.target.value);
              setSaved(false);
            }}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
          >
            <option value="dark">Dark</option>
            <option value="light">Light (preference only)</option>
            <option value="system">System (preference only)</option>
          </select>

          <p className="mt-2 text-xs text-slate-500">
            Theme selection is a UI preference for now. It does not yet change
            the application's appearance.
          </p>
        </div>
      </section>

      {/* Notifications */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60">
        <div className="flex items-center gap-3 border-b border-slate-800 px-5 py-4">
          <Bell className="text-violet-400" size={20} />

          <div>
            <h2 className="font-semibold text-white">Notifications</h2>
            <p className="mt-1 text-xs text-slate-500">
              Choose which notifications you would like to receive
            </p>
          </div>
        </div>

        <div className="divide-y divide-slate-800 px-5">
          <label className="flex cursor-pointer items-center justify-between gap-4 py-5">
            <div>
              <p className="text-sm font-medium text-slate-200">
                Email notifications
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Receive updates about code reviews by email.
              </p>
            </div>

            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(event) => {
                setEmailNotifications(event.target.checked);
                setSaved(false);
              }}
              className="h-4 w-4 accent-violet-500"
            />
          </label>

          <label className="flex cursor-pointer items-center justify-between gap-4 py-5">
            <div>
              <p className="text-sm font-medium text-slate-200">
                Security alerts
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Show alerts for potential security-related findings.
              </p>
            </div>

            <input
              type="checkbox"
              checked={securityAlerts}
              onChange={(event) => {
                setSecurityAlerts(event.target.checked);
                setSaved(false);
              }}
              className="h-4 w-4 accent-violet-500"
            />
          </label>
        </div>
      </section>

      {/* Security Information */}
      <section className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
        <ShieldCheck size={20} className="mt-0.5 shrink-0 text-violet-400" />

        <div>
          <h2 className="text-sm font-semibold text-white">
            Account security
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            Authentication, password management, and account security controls
            can be connected when the backend authentication system is added.
          </p>
        </div>
      </section>

      {/* Save Button */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
        {saved && (
          <p className="flex items-center gap-2 text-sm text-emerald-400">
            <Check size={16} />
            Saved for this session
          </p>
        )}

        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          <Save size={17} />
          Save preferences
        </button>
      </div>
    </div>
  );
}
