export default function getUnique<T, K extends keyof T>(array: T[], key?: K) {
  if (key) {
    const keysArray = array.map((item) => item[key]);
    const uniqueKeysArray = Array.from(new Set(keysArray));
    return uniqueKeysArray.map((u) => array.find((a) => a[key] === u));
  }
  return Array.from(new Set(array));
}
