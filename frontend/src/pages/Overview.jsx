
import {
  Code2,
  Bug,
  ShieldAlert,
  GitPullRequest,
  ArrowRight,
  Activity,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import StatCard from "../components/StatCard.jsx";

const recentReviews = [
  {
    name: "Authentication Service",
    language: "JavaScript",
    time: "10 minutes ago",
    status: "Completed",
    issues: 3,
  },
  {
    name: "Payment Controller",
    language: "Python",
    time: "35 minutes ago",
    status: "Completed",
    issues: 1,
  },
  {
    name: "User Dashboard",
    language: "TypeScript",
    time: "1 hour ago",
    status: "Completed",
    issues: 0,
  },
];

export default function Overview({ onNavigate }) {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-violet-400">
            WORKSPACE OVERVIEW
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
            Welcome back, Aditya!
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Review your code, find potential issues, and improve code quality
            with AI.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate?.("Code Review")}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          <Code2 size={18} />
          Start Code Review
          <ArrowRight size={16} />
        </button>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Reviews"
          value="0"
          change="Getting started"
          icon={Code2}
          description="AI code reviews"
        />

        <StatCard
          title="Bugs Detected"
          value="0"
          change="No data yet"
          icon={Bug}
          description="Potential code issues"
        />

        <StatCard
          title="Security Issues"
          value="0"
          change="No data yet"
          icon={ShieldAlert}
          description="Potential vulnerabilities"
        />

        <StatCard
          title="Repositories"
          value="0"
          change="Not connected"
          icon={GitPullRequest}
          description="GitHub repositories"
        />
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Recent Reviews */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 xl:col-span-2">
          <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
            <div>
              <h2 className="font-semibold text-white">
                Recent Reviews
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Your latest code analysis activity
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate?.("Code Review")}
              className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
            >
              View all
            </button>
          </div>

          <div className="divide-y divide-slate-800">
            {recentReviews.map((review) => (
              <div
                key={review.name}
                className="flex flex-col justify-between gap-3 px-5 py-4 sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Code2 size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-slate-200">
                      {review.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {review.language} · {review.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pl-13 sm:pl-0">
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                    <CheckCircle2 size={14} />
                    {review.status}
                  </span>

                  <span className="rounded-lg border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                    {review.issues} issues
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 px-5 py-4">
            <p className="text-xs text-slate-500">
              Sample activity — real review history will be connected later.
            </p>
          </div>
        </div>

        {/* Workspace Status */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <Activity size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Workspace Status
              </h2>
              <p className="text-xs text-slate-500">
                Project overview
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">
                Frontend
              </span>

              <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Configured
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">
                AI Review
              </span>

              <span className="inline-flex items-center gap-2 text-xs font-medium text-amber-400">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Setup required
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">
                GitHub
              </span>

              <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="h-2 w-2 rounded-full bg-slate-500" />
                Not connected
              </span>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
              <Clock3 size={16} className="text-violet-400" />
              Next steps
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Connect the backend, configure your AI API key, and run your
              first code review.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
