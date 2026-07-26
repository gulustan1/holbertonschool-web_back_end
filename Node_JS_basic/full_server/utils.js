import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (lines.length <= 1) {
      resolve({});
      return;
    }

    const studentLines = lines.slice(1);
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

    resolve(fields);
  });
});

export default readDatabase;
export { readDatabase };
