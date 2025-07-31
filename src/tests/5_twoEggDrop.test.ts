import { describe, it, expect } from "vitest";
import { findHighestSafeFloor } from "../questions/5_twoEggDrop";

/**
 * Helper to build a `breaks` predicate for a given threshold.
 * `threshold` is the highest safe floor (0-based).
 */
const makeBreaks = (threshold: number) => (floor: number) => floor > threshold;

describe("two-egg strategy on 100-floor building", () => {
  it("finds the correct floor using ≤ 14 drops for any threshold", () => {
    const worst: number[] = [];

    for (let threshold = 0; threshold <= 100; threshold++) {
      const { highestSafe, drops } = findHighestSafeFloor(
        100,
        makeBreaks(threshold)
      );
      expect(highestSafe).toBe(threshold);
      expect(drops).toBeLessThanOrEqual(14);
      worst.push(drops);
    }

    expect(Math.max(...worst)).toBe(14);
  });
});
