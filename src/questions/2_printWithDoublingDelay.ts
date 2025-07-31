/**
 * Prints every element of `items` at doubling intervals.
 *
 * @template T - The type of elements in the input array
 * @param {T[]} items - array of items to print
 * @param {(T)=>void} [printer] - printer function
 * @returns {() => void} - a function to cancel the scheduled prints
 */
export function printWithDoublingDelay<T>(
  items: T[],
  printer: (v: T) => void = console.log
): () => void {
  // initial delay is 1 second
  let delay = 1_000;
  const cancelList: number[] = [];
  for (const value of items) {
    const id = setTimeout(() => {
      printer(value);
    }, delay);
    // double the delay
    delay *= 2;
    cancelList.push(id);
  }
  return () => {
    cancelList.forEach(clearTimeout);
  };
}
