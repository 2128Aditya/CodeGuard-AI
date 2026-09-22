
import {
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  Info,
  CheckCircle2,
  Bug,
  Lightbulb,
} from "lucide-react";

const severityConfig = {
  critical: {
    label: "Critical",
    className: "border-red-500/30 bg-red-500/10 text-red-400",
    icon: AlertCircle,
  },
  high: {
    label: "High",
    className: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    icon: AlertTriangle,
  },
  medium: {
    label: "Medium",
    className: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    icon: AlertTriangle,
  },
  low: {
    label: "Low",
    className: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    icon: Info,
  },
};

export default function ReviewResults({ result, error }) {
  if (error) {
    return (
      <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
        <div className="flex items-center gap-2 text-red-400">
          <AlertCircle size={20} />
          <h2 className="font-semibold">Review failed</h2>
        </div>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {error}
        </p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
          <ShieldCheck size={28} />
        </div>

        <h2 className="mt-4 text-lg font-semibold text-white">
          Ready for code review
        </h2>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
          Submit your code to see AI-generated findings, severity levels,
          explanations, and suggestions here.
        </p>
      </div>
    );
  }

  const findings = Array.isArray(result.findings)
    ? result.findings
    : [];

  return (
    <section className="space-y-5">
      {/* Summary */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            <ShieldCheck size={22} />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              Review Summary
            </h2>
            <p className="text-xs text-slate-500">
              Language: {result.language || "Unknown"}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-300">
          {result.summary || "No summary was provided."}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-400">
            {findings.length} finding{findings.length === 1 ? "" : "s"}
          </span>

          {findings.length === 0 && (
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
              <CheckCircle2 size={14} />
              No findings reported
            </span>
          )}
        </div>
      </div>

      {/* Findings */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <Bug size={18} className="text-violet-400" />
          <h2 className="font-semibold text-white">
            Findings
          </h2>
        </div>

        {findings.length === 0 ? (
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 text-sm text-emerald-300">
            No issues were reported by the AI review.
          </div>
        ) : (
          <div className="space-y-3">
            {findings.map((finding, index) => {
              const severity = String(
                finding.severity || "low"
              ).toLowerCase();

              const config =
                severityConfig[severity] || severityConfig.low;

              const SeverityIcon = config.icon;

              return (
                <article
                  key={`${finding.title || "finding"}-${index}`}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-400">
                        <Bug size={17} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-slate-100">
                          {finding.title || `Finding ${index + 1}`}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {finding.description || "No description provided."}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`inline-flex shrink-0 items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium ${config.className}`}
                    >
                      <SeverityIcon size={13} />
                      {config.label}
                    </span>
                  </div>

                  {finding.suggestion && (
                    <div className="mt-4 rounded-lg border border-violet-500/20 bg-violet-500/5 p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm font-medium text-violet-300">
                        <Lightbulb size={16} />
                        Suggested improvement
                      </div>

                      <p className="text-sm leading-6 text-slate-400">
                        {finding.suggestion}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
