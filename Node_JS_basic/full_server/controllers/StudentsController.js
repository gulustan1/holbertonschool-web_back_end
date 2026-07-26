import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const dbFile = process.argv[2];

    readDatabase(dbFile)
      .then((fields) => {
        const outputLines = ['This is the list of our students'];

        const sortedFields = Object.keys(fields).sort((a, b) => (
          a.localeCompare(b, undefined, { sensitivity: 'base' })
        ));

        for (const field of sortedFields) {
          const list = fields[field].join(', ');
          outputLines.push(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
        }

        return response.status(200).send(outputLines.join('\n'));
      })
      .catch(() => {
        return response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    const dbFile = process.argv[2];

    readDatabase(dbFile)
      .then((fields) => {
        const students = fields[major] || [];
        return response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        return response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
export { StudentsController };
