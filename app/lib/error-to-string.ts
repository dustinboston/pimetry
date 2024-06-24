/**
 * Convert an error into a string
 * @param error An error-like object
 * @return The error message
 */
export function errorToString(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  return JSON.stringify(error);
}
