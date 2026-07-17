/**
 * Calculates the sum of all student IDs.
 * @param {Array} students - The array of student objects.
 * @returns {number} The sum of all student IDs.
 */
export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  return students.reduce((sum, student) => sum + student.id, 0);
}
