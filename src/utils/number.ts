/**
 * Generates a random floating-point number within a specified range.
 *
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (exclusive).
 * @param {number} decimals - The number of decimal places to round the result to.
 * @returns {number} - A random floating-point number.
 *
 * @example
 * const randomValue = getRandomFloat(0, 1, 2);
 * console.log(randomValue); // Example output: 0.75
 */
export function getRandomFloat(min: number, max: number, decimals: number): number {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}
