/**
 * Checks if all elements in an array exist within a given Set.
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array of elements to look for.
 * @returns {boolean} True if every element in the array is in the Set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
