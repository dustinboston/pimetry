import Link from 'next/link';
import type { File } from '@/app/lib/types';

interface FileListProps {
  files: File[];
}

export default async function FileList({ files }: FileListProps) {
  const currentFileId = '';

  return (
    <>
      {files.map((file) => {
        return (
          <li key={file.id}>
            <Link
              className="text-ellipsi block overflow-hidden px-5 py-3 hover:bg-yellow-800 hover:bg-opacity-30"
              href={`/files/${file.id}`}
            >
              {file.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}
