import { describe, it, expect, vi } from "vitest";
import { printWithDoublingDelay } from "../questions/2_printWithDoublingDelay";

describe("printWithDoublingDelay", () => {
  it("emits each item at 1 s, 2 s, 4 s… intervals", async () => {
    vi.useFakeTimers();
    const spy = vi.fn();
    const items = ["a", "b", "c"];

    printWithDoublingDelay(items, spy);

    // 0 ms → nothing yet
    expect(spy).toHaveBeenCalledTimes(0);

    // +1 000 ms → first item
    vi.advanceTimersByTime(1_000);
    await Promise.resolve(); // flush micro-tasks
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenNthCalledWith(1, "a");

    // +1 000 ms more (total 2 000 ms) → second item
    vi.advanceTimersByTime(1_000);
    await Promise.resolve();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenNthCalledWith(2, "b");

    // +2 000 ms more (total 4 000 ms) → third item
    vi.advanceTimersByTime(2_000);
    await Promise.resolve();

    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenNthCalledWith(3, "c");

    vi.runAllTimers();
    vi.useRealTimers();
  });

  it("doesnt print anything for an empty array", async () => {
    vi.useFakeTimers();
    const spy = vi.fn();

    printWithDoublingDelay([], spy);

    expect(spy).not.toHaveBeenCalled();
    vi.useRealTimers();
  });

  it("doenst print anything if cancelled", async () => {
    vi.useFakeTimers();
    const spy = vi.fn();
    const items = ["a", "b", "c"];

    const cancel = printWithDoublingDelay(items, spy);

    // Cancel the scheduled prints
    cancel();

    // Advance time to ensure no prints happen
    vi.advanceTimersByTime(10_000);
    await Promise.resolve();

    expect(spy).not.toHaveBeenCalled();
    vi.useRealTimers();
  });
});
