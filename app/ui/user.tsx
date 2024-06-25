import { auth, signIn, signOut } from '@/lib/auth';

/**
 * You can show the user's avatar like this:
 *
 * import Image from 'next/image';
 * <Image
 *   className="h-8 w-8 rounded-full"
 *   src={session.user.image!}
 *   height={32}
 *   width={32}
 *   alt={`${session.user.name} avatar`}
 * />
 */

export async function User() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return (
      <form
        action={async () => {
          'use server';
          await signIn('github');
        }}
      >
        <button className="hover:color-teal-50 rounded border-2 border-teal-700 px-2 py-2.5 font-semibold text-teal-700 hover:border-opacity-30 hover:bg-teal-600 hover:text-gray-50">
          Sign In
        </button>
      </form>
    );
  }

  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button className="inline-block min-w-min rounded border-2 border-teal-700 px-2 py-1 text-lg font-semibold text-teal-700 hover:border-opacity-30 hover:bg-teal-600 hover:text-teal-50">
        Sign Out
      </button>
    </form>
  );
}
