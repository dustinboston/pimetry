import { User } from '@/app/ui/user';
import LinkList, { type LinkListItem } from '@/app/ui/link-list';
import { DocumentPlusIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { getFilesByUser } from '@/app/lib/db';
import { auth } from '@/lib/auth';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const userId = session?.user?.id;
  const files = userId ? await getFilesByUser(userId) : [];

  const links = files.map((file) => {
    return { href: `/files/${file.id}`, name: file.name, key: file.id };
  });

  return (
    <main className="grid h-full w-full grid-cols-12 grid-rows-1">
      <nav className="col-span-2 flex resize-x flex-col divide-y-2 divide-yellow-800 divide-opacity-20 border-r-2 border-yellow-800 border-opacity-20 bg-yellow-800 bg-opacity-20 text-yellow-950">
        <menu aria-label="File actions" className="w-full flex-none px-2 py-4">
          <li>
            <button
              title="Add file"
              className="rounded border-2 border-teal-900 border-opacity-30 bg-teal-600 p-2 text-gray-50"
            >
              <DocumentPlusIcon className="size-6 stroke-gray-50" />
            </button>
          </li>
        </menu>
        <menu
          aria-label="Files"
          className="w-full flex-grow overflow-y-auto bg-transparent"
        >
          <LinkList links={links} />
        </menu>
        <menu
          aria-label="App actions"
          className="flex w-full flex-none gap-2 px-2 py-4"
        >
          <li>
            <User />
          </li>
          <li>
            <button
              title="Settings"
              className="rounded border-2 border-teal-900 border-opacity-30 bg-teal-600 p-2 text-gray-50"
            >
              <Cog6ToothIcon className="size-6 stroke-gray-50" />
            </button>
          </li>
        </menu>
      </nav>
      <section className="col-span-10">{children}</section>
    </main>
  );
}
