import { add } from "./calculator";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number for a single number input", () => {
  expect(add("1")).toBe(1);
});

test("should return the sum for two numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("handles new lines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws an error for negative numbers", () => {
  expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});
