// import { files } from '@/app/lib/mock-data';
// <p>{files.map((file) => file.name)}</p>

export default function Files() {
  // TODO: if no selected page show message.

  return (
    <main>
      <div className="m-2 inline-block rounded border-2 border-sky-500 border-opacity-20 bg-sky-200 p-4 text-center font-medium text-sky-700">
        Select a page to get started.
      </div>
    </main>
  );
}
