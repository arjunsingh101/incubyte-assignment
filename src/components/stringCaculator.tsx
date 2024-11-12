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
    <div className="bg-stone-400 size-[500px] flex flex-col justify-center items-center gap-5">
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
        className="text-black rounded-lg"
      />
      <button className="px-5 py-2 bg-blue-400 rounded-lg" onClick={handleAdd}>
        Calculate
      </button>
      {error && <div className="error">{error}</div>}
      {result !== "" && <div className="result">Result: {result}</div>}
    </div>
  );
};

export default StringCalculator;
