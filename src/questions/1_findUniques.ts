/**
 * Function that finds the duplicate items in any given array and returns them
 *
 * @template T - The type of elements in the input array
 * @param {T[]} input - The input array
 * @returns {T[]} - An array containing the duplicate items
 */
export function findDuplicates<T>(input: T[]): T[] {
  const seen = new Map();
  const duplicates = [];

  for (const value of input) {
    const count = (seen.get(value) ?? 0) + 1;
    seen.set(value, count);

    if (count === 2) {
      duplicates.push(value);
    }
  }

  return duplicates;
}
