import { db } from '../core.server';

export async function StudentHasGithub(githubId) {
  const result = await db
    .selectFrom('students')
    .where('schoolId', '=', githubId);

  return !!result;
}

export default StudentHasGithub;
