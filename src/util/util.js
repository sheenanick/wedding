export function isActive(location, key) {
  if (location === key) {
    return 'active';
  } else {
    return 'inactive';
  }
}
