/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * @example Usage
 * const debounceSaveFile = useCallback(
 *     debounce((newEditorState: EditorState) => {
 *         saveFileFromEditorState(newEditorState);
 *     }, SAVE_DEBOUNCE_DELAY),
 *     [saveFileFromEditorState]
 * );
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to delay.
 * @returns The new debounced function.
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | undefined;

  return function (...args: Parameters<T>) {
    const later = () => {
      timeout = undefined;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);
  };
}
