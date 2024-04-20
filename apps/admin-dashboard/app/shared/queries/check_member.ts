// eslint-disable-next-line @typescript-eslint/no-var-requires
const { db } = require('../core.server');

export async function StudentHasGithub(githubId: string): Promise<boolean> {
  const result = await db
    .selectFrom('students')
    .where('schoolId', '=', githubId);

  return !!result;
}
