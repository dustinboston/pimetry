import { pageExtension } from '../constants/app';

export function stripExtension(page: string) {
  return page.replace(pageExtension, '');
}
