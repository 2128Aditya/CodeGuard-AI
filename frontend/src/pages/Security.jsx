
import {
  ShieldCheck,
  ShieldAlert,
  LockKeyhole,
  ScanSearch,
  CheckCircle2,
  Clock3,
  ArrowRight,
} from "lucide-react";

const securityChecks = [
  {
    title: "Hardcoded secrets",
    description:
      "Look for API keys, passwords, and credentials accidentally included in source code.",
    icon: LockKeyhole,
    status: "Ready for analysis",
  },
  {
    title: "Input validation",
    description:
      "Identify potentially unsafe handling of user-controlled input.",
    icon: ScanSearch,
    status: "Ready for analysis",
  },
  {
    title: "Common vulnerabilities",
    description:
      "Review code for potentially unsafe patterns and common security weaknesses.",
    icon: ShieldAlert,
    status: "Ready for analysis",
  },
];

export default function Security({ onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Page Heading */}
      <div>
        <div className="mb-2 flex items-center gap-2 text-violet-400">
          <ShieldCheck size={18} />
          <span className="text-xs font-semibold uppercase tracking-wider">
            CODE SECURITY
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white">
          Security Center
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          Review your source code for potential security weaknesses and
          understand where improvements may be needed.
        </p>
      </div>

      {/* Security Overview */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Security scans</p>
            <ScanSearch size={20} className="text-violet-400" />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-white">0</h2>

          <p className="mt-2 text-xs text-slate-500">
            No completed scans yet
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Issues identified</p>
            <ShieldAlert size={20} className="text-amber-400" />
          </div>

          <h2 className="mt-4 text-3xl font-bold text-white">—</h2>

          <p className="mt-2 text-xs text-slate-500">
            Run a review to see findings
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-400">Last scan</p>
            <Clock3 size={20} className="text-slate-400" />
          </div>

          <h2 className="mt-4 text-xl font-bold text-white">
            Not available
          </h2>

          <p className="mt-2 text-xs text-slate-500">
            Scan history will be added later
          </p>
        </div>
      </section>

      {/* Security Checks */}
      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
        <div className="border-b border-slate-800 px-5 py-4">
          <h2 className="font-semibold text-white">
            Security Review Categories
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Areas the code review workflow can examine
          </p>
        </div>

        <div className="divide-y divide-slate-800">
          {securityChecks.map((check) => {
            const Icon = check.icon;

            return (
              <div
                key={check.title}
                className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">
                      {check.title}
                    </h3>

                    <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">
                      {check.description}
                    </p>
                  </div>
                </div>

                <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-400 sm:self-center">
                  <span className="h-2 w-2 rounded-full bg-slate-500" />
                  {check.status}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Start Review */}
      <section className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 p-6">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
              <ShieldCheck size={23} />
            </div>

            <h2 className="text-lg font-semibold text-white">
              Start a code security review
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Submit a code snippet to the AI review workflow and inspect
              any security-related findings it reports.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate?.("Code Review")}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            Review code
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {/* Notice */}
      <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-slate-500" />

        <p className="text-xs leading-5 text-slate-500">
          AI-generated findings are suggestions for investigation, not a
          guarantee that code is secure. Validate findings with appropriate
          testing and security review.
        </p>
      </div>
    </div>
  );
}
