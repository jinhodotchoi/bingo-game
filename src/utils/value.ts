export function value<T>(fn: () => T) {
  return fn();
}
