import { db } from '../core.server';

export async function StudentHasGithub(githubId: string): Promise<boolean> {
  const result = await db
    .selectFrom('students')
    .where('schoolId', '=', githubId);

  return !!result;
}
