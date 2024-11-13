// src/components/StringCalculator.tsx
import React, { useState } from "react";
import { add } from "../calculator";

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | string>("");
  const [error, setError] = useState<string>("");

  const handleAdd = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError("");
    } catch (e: any) {
      setError(e?.message);
      setResult("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-8 bg-white rounded-lg string-calculator">
      <h1 className="mb-4 font-semibold">String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
        className="px-2 text-black rounded-lg text-md"
      />
      <button
        className="p-2 text-lg font-medium bg-blue-400 rounded-lg "
        onClick={handleAdd}
      >
        Calculate
      </button>
      {error && <div className="error">{error}</div>}
      {result !== "" && <div className="result">Result: {result}</div>}
    </div>
  );
};

export default StringCalculator;
