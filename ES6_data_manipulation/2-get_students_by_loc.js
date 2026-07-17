/**
 * Filters a list of students by a specific location.
 * @param {Array} students - The array of student objects.
 * @param {string} city - The target city to filter by.
 * @returns {Array<Object>} An array of students located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((student) => student.location === city);
}
