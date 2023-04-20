export default function keyMirrorWithPrefix(object: object, prefix = '') {
  return Object.keys(object).reduce(
    (result, key) => ({
      ...result,
      [key]: `${prefix}${key}`,
    }),
    {},
  );
}
