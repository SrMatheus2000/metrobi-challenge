type Result = { highestSafe: number; drops: number };

/**
 * Find the highest floor (0-based) an egg can be dropped from
 * without breaking, using **at most two eggs** and the
 * fewest drops possible in the worst case (14 for 100 floors).
 *
 * Got 14 bound got from https://medium.com/@khopsickle/2-eggs-and-100-floors-a032beb77aaa
 *
 * @param {number} n  Total floors in the building (≥ 1)
 * @param {(number) => boolean} breaks  Predicate: does an egg break from `floor`?
 * @returns {Result} 0-based floor & drops used
 */
export function findHighestSafeFloor(
  n: number,
  breaks: (floor: number) => boolean
): Result {
  if (n < 1) throw new Error("building must have at least one floor");

  let step = Math.ceil((Math.sqrt(1 + 8 * n) - 1) / 2);

  let drops = 0;
  let floor = 0;
  let prev = 0;

  while (floor + step <= n) {
    floor += step;
    drops++;

    if (breaks(floor)) {
      for (let f = prev + 1; f < floor; f++) {
        drops++;
        if (breaks(f)) return { highestSafe: f - 1, drops };
      }
      return { highestSafe: floor - 1, drops };
    }

    step--;
    prev = floor;
  }

  for (let f = prev + 1; f <= n; f++) {
    drops++;
    if (breaks(f)) return { highestSafe: f - 1, drops };
  }

  return { highestSafe: n, drops };
}
