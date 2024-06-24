export function showNotification(
  title: string,
  options: NotificationOptions,
): Notification {
  return new window.Notification(title, options);
}

export function showErrorNotification(message: string) {
  return showNotification('Error', { body: message, icon: '✘' });
}

export function showWarningNotification(message: string) {
  return showNotification('Warning', { body: message, icon: '⚠' });
}

export function showSuccessNotification(message: string) {
  return showNotification('Success', { body: message, icon: '✔' });
}

export function showInformationNotication(message: string) {
  return showNotification('Information', { body: message, icon: '🛈' });
}
