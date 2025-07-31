import { describe, it, expect } from "vitest";
import { findDuplicates } from "../questions/1_findUniques";

describe("findDuplicates", () => {
  it("returns an empty array when there are no duplicates", () => {
    expect(findDuplicates([1, 2, 3])).toEqual([]);
    expect(findDuplicates([])).toEqual([]);
  });

  it("returns the duplicate values once, in order of first duplicate appearance", () => {
    expect(findDuplicates([1, 2, 2, 3, 1, 4, 2])).toEqual([2, 1]);
  });

  it("works with non-primitive references (strict equality)", () => {
    const a = { id: 1 };
    const b = { id: 1 };
    expect(findDuplicates([a, b, a])).toEqual([a]);
  });

  it("handles strings and mixed types", () => {
    expect(findDuplicates(["a", "b", "a", 3, 3, "b"])).toEqual(["a", 3, "b"]);
  });
});
