/**
 * Cleans a set by filtering values that start with a specific string,
 * removing that prefix, and joining the remaining parts with a hyphen.
 * @param {Set<string>} set - The set of strings to clean.
 * @param {string} startString - The prefix to look for.
 * @returns {string} A string of modified values separated by '-'.
 */
export default function cleanSet(set, startString) {
  if (!set || !(set instanceof Set) || typeof startString !== 'string' || startString === '') {
    return '';
  }

  const parts = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      parts.push(value.slice(startString.length));
    }
  }

  return parts.join('-');
}
