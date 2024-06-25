import { User } from '@/app/ui/user';
import FileList from '@/app/ui/files/file-list';
import { PlusIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { getFiles, insertDefaultFile } from '@/app/actions/file-actions';
import { notFound, redirect, useParams } from 'next/navigation';
import { revalidatePath } from 'next/cache';

type FileProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: FileProps) {
  const files = await getFiles();
  if (!files) return notFound();

  return (
    <main className="grid h-full w-full grid-cols-12 grid-rows-1">
      <nav className="col-span-2 flex resize-x flex-col divide-y-2 divide-yellow-800 divide-opacity-20 border-r-2 border-yellow-800 border-opacity-20 bg-yellow-800 bg-opacity-20 text-yellow-950">
        <menu
          aria-label="File actions"
          className="w-full flex-none px-2 pb-1 pt-2"
        >
          <li>
            <form
              action={async () => {
                'use server';
                const inserted = await insertDefaultFile();
                if (inserted?.length) {
                  revalidatePath('/files');
                  redirect(`/files/${inserted[0].insertedId}`);
                }
              }}
            >
              <button
                title="Add file"
                className="inline-block rounded"
                type="submit"
              >
                <PlusIcon className="size-8 rounded stroke-teal-700 py-1 text-gray-50 hover:border-opacity-30 hover:bg-teal-600 hover:stroke-teal-50" />
              </button>
            </form>
          </li>
        </menu>
        <menu
          aria-label="Files"
          className="w-full flex-grow overflow-y-auto bg-transparent"
        >
          <FileList files={files} />
        </menu>
        <menu
          aria-label="App actions"
          className="flex w-full flex-none gap-2 px-2 pb-2 pt-4 align-middle"
        >
          <li>
            <User />
          </li>
          <li>
            <button title="Open settings" className="inline-block rounded">
              <Cog6ToothIcon className="size-10 rounded stroke-teal-700 py-1 text-gray-50 hover:border-opacity-30 hover:bg-teal-600 hover:stroke-teal-50" />
            </button>
          </li>
        </menu>
      </nav>
      <section className="col-span-10">{children}</section>
    </main>
  );
}
