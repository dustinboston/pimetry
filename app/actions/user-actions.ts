import { auth } from '@/lib/auth';

export async function getUser() {
  const session = await auth();
  const user = session?.user;
  if (!user) throw new Error('unathed');
  return user;
}
