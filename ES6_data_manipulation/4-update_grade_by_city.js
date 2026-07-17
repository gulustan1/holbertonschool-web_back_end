/**
 * Updates student grades for a specific city.
 * @param {Array} students - The array of student objects.
 * @param {string} city - The target city to filter by.
 * @param {Array} newGrades - An array of grade objects containing studentId and grade.
 * @returns {Array<Object>} An array of student objects with updated grade properties.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find matching grade info for the current student
      const gradeRecord = newGrades.find((g) => g.studentId === student.id);
      
      return {
        ...student,
        grade: gradeRecord ? gradeRecord.grade : 'N/A',
      };
    });
}
