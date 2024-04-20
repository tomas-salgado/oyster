// eslint-disable-next-line
const { db } = require('../core.server.js');

async function StudentHasGithub(githubId) {
  const result = await db
    .selectFrom('students')
    .where('schoolId', '=', githubId);

  return !!result;
}

// eslint-disable-next-line
module.exports = StudentHasGithub;
