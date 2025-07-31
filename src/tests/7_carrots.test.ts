import { describe, it, expect } from "vitest";
import { getMaxCarrots } from "../questions/7_carrots";

describe("getMaxValue", () => {
  it("matches the example (36 kg ⇒ 840)", () => {
    const carrotTypes = [
      { kg: 5, price: 100 },
      { kg: 7, price: 150 },
      { kg: 3, price: 70 },
    ];
    expect(getMaxCarrots(carrotTypes, 36)).toBe(840);
  });

  it("returns 0 for capacity 0 or empty type list", () => {
    expect(getMaxCarrots([], 50)).toBe(0);
    expect(getMaxCarrots([{ kg: 4, price: 10 }], 0)).toBe(0);
  });

  it("handles capacity smaller than every carrot weight", () => {
    const types = [
      { kg: 5, price: 60 },
      { kg: 7, price: 80 },
    ];
    expect(getMaxCarrots(types, 3)).toBe(0);
  });

  it("works when only one carrot type is available", () => {
    const types = [{ kg: 4, price: 25 }];
    expect(getMaxCarrots(types, 24)).toBe(150);
  });

  it("beats a naive price-per-kg greedy choice", () => {
    const types = [
      { kg: 5, price: 65 },
      { kg: 4, price: 50 },
    ];
    expect(getMaxCarrots(types, 8)).toBe(100);
  });

  it("scales to larger capacities without error", () => {
    const types = [
      { kg: 2, price: 12 },
      { kg: 3, price: 17 },
      { kg: 5, price: 28 },
    ];
    expect(getMaxCarrots(types, 1_000)).toBeGreaterThan(0);
  });
});
