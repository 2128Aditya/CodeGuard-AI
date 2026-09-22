
import { Code2, Copy, RotateCcw } from "lucide-react";

const languages = [
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
  { label: "TypeScript", value: "typescript" },
  { label: "Java", value: "java" },
  { label: "C++", value: "cpp" },
  { label: "Go", value: "go" },
];

export default function CodeEditor({
  code,
  setCode,
  language,
  setLanguage,
  onReview,
  loading = false,
}) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (error) {
      console.error("Could not copy code:", error);
    }
  };

  const handleReset = () => {
    setCode("");
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
      {/* Editor Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <Code2 size={18} className="text-violet-400" />

          <h2 className="text-sm font-semibold text-white">
            Code Editor
          </h2>

          <span className="rounded-md border border-slate-700 px-2 py-0.5 text-xs text-slate-500">
            {code.length} characters
          </span>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300 outline-none focus:border-violet-500"
            aria-label="Select programming language"
          >
            {languages.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={handleCopy}
            disabled={!code}
            title="Copy code"
            className="rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Copy size={16} />
          </button>

          <button
            type="button"
            onClick={handleReset}
            disabled={!code}
            title="Clear editor"
            className="rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 flex w-12 justify-center border-r border-slate-800 bg-slate-950 pt-4 font-mono text-xs text-slate-600">
          <span>1</span>
        </div>

        <textarea
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="// Paste your code here..."
          spellCheck={false}
          className="min-h-[320px] w-full resize-y bg-transparent py-4 pl-16 pr-5 font-mono text-sm leading-6 text-slate-200 outline-none placeholder:text-slate-600 focus:ring-0"
          aria-label="Code input"
        />
      </div>

      {/* Editor Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 bg-slate-900/60 px-4 py-3">
        <p className="text-xs text-slate-500">
          Paste your code and run an AI-powered review.
        </p>

        <button
          type="button"
          onClick={onReview}
          disabled={loading || !code.trim()}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Reviewing...
            </>
          ) : (
            <>
              <Code2 size={17} />
              Review Code
            </>
          )}
        </button>
      </div>
    </section>
  );
}
