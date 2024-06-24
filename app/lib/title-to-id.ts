import camelCase from 'camelcase';

/**
 * Convert a title into a PascalCase ID
 */
export function titleToId(pageTitle: string) {
  return camelCase(pageTitle, { pascalCase: true });
}
