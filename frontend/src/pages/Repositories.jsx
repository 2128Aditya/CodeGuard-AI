
import {
  GitBranch,
  Github,
  Plus,
  Search,
  ExternalLink,
  LockKeyhole,
  Code2,
} from "lucide-react";

export default function Repositories() {
  return (
    <div className="space-y-6">
      {/* Page Heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
            WORKSPACE
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Repositories
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Connect your GitHub repositories and prepare them for AI-powered
            code reviews.
          </p>
        </div>

        <button
          type="button"
          disabled
          className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white opacity-60"
          title="GitHub integration will be implemented later"
        >
          <Plus size={18} />
          Connect Repository
        </button>
      </div>

      {/* GitHub Connection Card */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-700 bg-slate-950 text-white">
            <Github size={30} />
          </div>

          <div className="flex-1">
            <h2 className="text-lg font-semibold text-white">
              Connect your GitHub account
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Import your repositories, inspect pull requests, and review
              code changes without leaving your workspace.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                Repository analysis
              </span>

              <span className="rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                Pull request reviews
              </span>

              <span className="rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-400">
                Private repository support
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
          <p className="text-sm font-medium text-amber-300">
            GitHub integration is not connected yet.
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            OAuth authentication and repository permissions will be added
            in a later development step.
          </p>
        </div>
      </section>

      {/* Repository Search */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-semibold text-white">
              Your repositories
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Repositories connected to your workspace will appear here.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2.5 sm:w-64">
            <Search size={16} className="text-slate-500" />

            <input
              type="text"
              disabled
              placeholder="Search repositories..."
              className="w-full bg-transparent text-sm text-slate-300 outline-none placeholder:text-slate-600"
            />
          </div>
        </div>

        {/* Empty State */}
        <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-800 px-5 py-14 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-slate-400">
            <GitBranch size={27} />
          </div>

          <h3 className="mt-4 text-base font-semibold text-white">
            No repositories connected
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            Once GitHub integration is configured, your accessible
            repositories will be listed here.
          </p>

          <div className="mt-5 flex items-center gap-2 text-xs text-slate-600">
            <LockKeyhole size={14} />
            <span>Repository access will require authorization.</span>
          </div>
        </div>
      </section>

      {/* Planned Features */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <div className="flex items-center gap-3">
            <Code2 size={20} className="text-violet-400" />

            <h3 className="font-medium text-white">
              Repository code analysis
            </h3>
          </div>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Analyze repository code and identify potential quality and
            security issues.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <div className="flex items-center gap-3">
            <GitBranch size={20} className="text-violet-400" />

            <h3 className="font-medium text-white">
              Pull request reviews
            </h3>
          </div>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Review proposed changes and display findings alongside the
            relevant pull request.
          </p>
        </div>
      </section>

      <p className="flex items-center gap-2 text-xs text-slate-600">
        <ExternalLink size={13} />
        GitHub connection features are planned and are not active yet.
      </p>
    </div>
  );
}
