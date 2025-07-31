/** Record of matching bracket pairs */
const PAIRS: Record<string, string> = {
  ")": "(",
  "]": "[",
  "}": "{",
};

/**
 * Checks if brackets in a string are balanced.
 *
 * @param {string} input - The input string containing brackets
 * @returns {boolean} - Returns true if brackets are balanced, false otherwise
 */
export function areBracketsBalanced(input: string): boolean {
  const stack: string[] = [];

  for (const ch of input) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else if (ch === ")" || ch === "]" || ch === "}") {
      if (stack.pop() !== PAIRS[ch]) return false;
    }
  }

  return stack.length === 0;
}
