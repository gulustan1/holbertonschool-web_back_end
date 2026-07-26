const fs = require('fs');

function countStudents(path) {
  let content;

  try {
    content = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // Split lines and filter out empty or whitespace-only lines
  const lines = content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  // Header line is skipped (firstname, lastname, age, field)
  const studentLines = lines.slice(1);
  console.log(`Number of students: ${studentLines.length}`);

  const fields = {};

  for (const line of studentLines) {
    const parts = line.split(',');
    if (parts.length >= 4) {
      const firstname = parts[0].trim();
      const field = parts[3].trim();

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
  }

  for (const [field, names] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
