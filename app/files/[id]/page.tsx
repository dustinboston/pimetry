import { notFound, redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import {
  deleteFile,
  getFile,
  type PutFile,
  updateFile,
} from '@/app/actions/file-actions';

type FileProps = {
  params: { id: string };
};

export default async function File({ params }: FileProps) {
  const file = await getFile(params.id);
  if (!file) {
    return notFound();
  }

  return (
    <>
      <form
        className="flex h-full flex-col p-4"
        action={async (formData: FormData) => {
          'use server';
          const updated: PutFile = {
            ...file,
            name: formData.get('name') as string,
            text: formData.get('text') as string,
          };
          await updateFile(updated);
        }}
      >
        <div className="mb-4 flex-none">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-900"
          >
            <span className="sr-only">Name</span>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded border-2 border-yellow-800 border-opacity-20 bg-gray-50 p-2 text-2xl text-gray-800 placeholder:text-gray-400 focus:border-yellow-800 focus:ring-1 focus:ring-yellow-800"
              placeholder="Name"
              defaultValue={file.name}
              required={true}
            />
          </label>
        </div>

        <div className="mb-4 flex-grow">
          <label htmlFor="text" className="block h-full text-gray-900">
            <span className="sr-only">Text</span>
            <textarea
              id="text"
              name="text"
              rows={3}
              className="block h-full w-full rounded border-2 border-yellow-800 border-opacity-20 bg-gray-50 p-2 text-gray-800 placeholder:text-gray-400 focus:border-yellow-800 focus:ring-1 focus:ring-yellow-800"
              defaultValue={file.text ?? ''}
            />
          </label>
        </div>

        <div className="flex flex-none justify-between">
          <button
            type="submit"
            form="delete-file"
            className="inline-block min-w-min rounded border-2 border-transparent px-2 py-1 text-lg font-medium text-rose-800 hover:border-rose-700 hover:bg-rose-600 hover:text-rose-50"
          >
            Delete File
          </button>

          <button
            type="submit"
            className="inline-block min-w-min rounded border-2 border-teal-700 bg-teal-600 px-2 py-1 text-lg font-medium text-teal-50 hover:border-opacity-30 hover:bg-teal-700"
          >
            Save File
          </button>
        </div>
      </form>
      <form
        className="hidden"
        id="delete-file"
        action={async () => {
          'use server';
          await deleteFile(file.id);
          revalidatePath('/files');
          redirect('/files?message=deleted');
        }}
      ></form>
    </>
  );
}
