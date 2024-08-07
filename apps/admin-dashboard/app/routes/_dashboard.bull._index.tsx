import { json, type LoaderFunctionArgs } from '@remix-run/node';

import { ensureUserAuthenticated } from '@/shared/session.server';

export async function loader({ request }: LoaderFunctionArgs) {
  await ensureUserAuthenticated(request, {
    minimumRole: 'owner',
  });

  return json({});
}

export default function BullPage() {
  return null;
}
