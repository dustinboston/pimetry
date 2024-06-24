'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export type LinkListItem = {
  key: string;
  name: string;
  href: string;
  current?: boolean;
};

interface LinkListProps {
  links: LinkListItem[];
}

export default function LinkList({ links }: LinkListProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.key}>
            <Link
              href={link.href}
              className={clsx(
                'block w-full p-2 hover:bg-yellow-800 hover:bg-opacity-30',
                {
                  'bg-yellow-800 bg-opacity-20': pathname === link.href,
                },
              )}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
}
