import { describe, it, expect } from "vitest";
import { areBracketsBalanced } from "../questions/4_areBracketsBalanced";

describe("areBracketsBalanced", () => {
  it("accepts correctly nested examples", () => {
    expect(areBracketsBalanced("{[]}")).toBe(true);
    expect(areBracketsBalanced("([]{})")).toBe(true);
    expect(areBracketsBalanced("")).toBe(true);
  });

  it("rejects incorrectly nested or incomplete sequences", () => {
    expect(areBracketsBalanced("{(])}")).toBe(false);
    expect(areBracketsBalanced("{([)]}")).toBe(false);
    expect(areBracketsBalanced("][")).toBe(false);
    expect(areBracketsBalanced("(((")).toBe(false);
    expect(areBracketsBalanced("())")).toBe(false);
  });

  it("ignores non-bracket characters", () => {
    expect(areBracketsBalanced("function() { return []; }")).toBe(true);
  });
});
