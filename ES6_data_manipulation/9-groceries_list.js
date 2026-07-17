/**
 * Returns a Map populated with a predefined list of groceries.
 * @returns {Map<string, number>} A Map containing grocery items and quantities.
 */
export default function groceriesList() {
  const list = new Map();
  
  list.set('Apples', 10);
  list.set('Tomatoes', 10);
  list.set('Pasta', 1);
  list.set('Rice', 1);
  list.set('Banana', 5);
  
  return list;
}
