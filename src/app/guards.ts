export interface hasWarnOnClosing {
  warnOnClosing:boolean;
}

export function confirmNavigationGuard(component:hasWarnOnClosing) {
  return !component.warnOnClosing || window.confirm('Navigate away without saving?');
}
