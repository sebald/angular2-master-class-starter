export function confirmNavigationGuard(component) {
  return !component.warnOnClosing || window.confirm('Navigate away without saving?');
}
