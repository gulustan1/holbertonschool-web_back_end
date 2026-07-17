/**
 * Updates a map by changing all items with an initial quantity of 1 to 100.
 * @param {Map} map - The map to process and update.
 * @returns {Map} The updated map.
 * @throws {Error} Throws "Cannot process" if the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
