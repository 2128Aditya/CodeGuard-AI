
import { useState } from "react";
import { Code2, Sparkles } from "lucide-react";
import CodeEditor from "../components/CodeEditor.jsx";
import ReviewResults from "../components/ReviewResults.jsx";
import { reviewCode } from "../services/api.js";

const starterCode = `function findLargest(numbers) {
  let largest = 0;

  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

console.log(findLargest([3, 8, 2, 10]));`;

export default function CodeReview() {
  const [code, setCode] = useState(starterCode);
  const [language, setLanguage] = useState("javascript");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReview() {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await reviewCode({ code, language });
      setResult(data);
    } catch (err) {
      setError(err.message || "Unable to review code. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-2 flex items-center gap-2 text-violet-400">
          <Sparkles size={17} />
          <span className="text-xs font-semibold uppercase tracking-wider">
            AI-powered analysis
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white">
          Code Review
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          Submit your code to identify potential bugs, security concerns,
          performance issues, and opportunities to improve code quality.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2">
        <div className="min-w-0">
          <CodeEditor
            code={code}
            setCode={setCode}
            language={language}
            setLanguage={setLanguage}
            onReview={handleReview}
            loading={loading}
          />
        </div>

        <div className="min-w-0">
          <div className="mb-3 flex items-center gap-2">
            <Code2 size={18} className="text-violet-400" />
            <h2 className="font-semibold text-white">
              Analysis Results
            </h2>
          </div>

          <ReviewResults result={result} error={error} />
        </div>
      </div>
    </div>
  );
}
