import { add } from "./calculator";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});
