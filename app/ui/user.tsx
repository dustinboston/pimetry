import { auth, signIn, signOut } from '@/lib/auth';
import Image from 'next/image';

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
        <button className="rounded border-2 border-teal-900 border-opacity-30 bg-teal-600 p-2 text-gray-50">
          Sign In
        </button>
      </form>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Image
        className="h-8 w-8 rounded-full"
        src={user.image!}
        height={32}
        width={32}
        alt={`${user.name} avatar`}
      />
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className="rounded border-2 border-teal-900 border-opacity-30 bg-teal-600 p-2 text-gray-50">
          Sign Out
        </button>
      </form>
    </div>
  );
}

// 'use client';

// import {useSession, signOut} from 'next-auth/react';

// You can show the user's avatar like this:
// import Image from 'next/image';
// <Image
//   className="h-8 w-8 rounded-full"
//   src={session.user.image!}
//   height={32}
//   width={32}
//   alt={`${session.user.name} avatar`}
// />

// const session = await getSession();

// console.log('nextAuth', nextAuth);
// const {getSession, signIn, signOut} = nextAuth;

// export default function User() {
//   const { data: session, update } = useSession()
//   // const session = await getSession();
//   // const user = session?.user;
//
//   if (!session?.user) {
//     return (
//       <button type="submit" onClick={() => update({ user: { name }})} className="bg-teal-600 text-gray-50 rounded p-2 border-2 border-teal-900 border-opacity-30">
//         Sign In
//       </button>
//     );
//   }
//
//   return (
//     <div className="flex items-center gap-4">
//       <button onClick={() => signOut()} className="bg-teal-600 text-gray-50 rounded p-2 border-2 border-teal-900 border-opacity-30">
//         Sign Out
//       </button>
//     </div>
//   );
// }
