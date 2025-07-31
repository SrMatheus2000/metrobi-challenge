type Carrot = {
  kg: number;
  price: number;
};

/**
 * Gets max carrots
 *
 * @param {Carrot[]} carrotTypes - Array of carrot types with their weights and prices
 * @param {number} capacity - Maximum weight capacity to carry
 * @returns {number} - Maximum total price attainable
 */
export function getMaxCarrots(carrotTypes: Carrot[], capacity: number): number {
  if (capacity <= 0 || !carrotTypes?.length) return 0;

  const dp = new Array(capacity + 1).fill(0);

  for (let w = 1; w <= capacity; w++) {
    let best = 0;
    for (const { kg, price } of carrotTypes) {
      if (kg <= w) best = Math.max(best, price + dp[w - kg]);
    }
    dp[w] = best;
  }
  return dp[capacity];
}
