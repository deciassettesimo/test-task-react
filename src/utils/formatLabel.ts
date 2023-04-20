function checkValueInRange(value: number, min: number, max: number) {
  return value >= min && value <= max;
}

function plural(val: number, [one = '', few = '', many = '']: string[]) {
  if (val % 10 === 1 && val % 100 !== 11) return one;

  if (checkValueInRange(val % 10, 2, 4) && !checkValueInRange(val % 100, 12, 14)) return few;

  if (val === 0 || checkValueInRange(val % 10, 5, 9) || checkValueInRange(val % 100, 1, 14))
    return many;

  return many || few || one;
}

export default function formatLabel(label: string, params?: Record<string, any>) {
  let result = label;
  if (params) {
    Object.keys(params).forEach((key) => {
      result = result.replace(`{:${key}}`, params[key]);
      const pluralRegExp = new RegExp(`\\[:${key}.[^\\]]*]`, 'g');
      const conj = label.match(pluralRegExp);
      if (conj && conj.length) {
        conj.forEach((item) => {
          const values = item.replace(`[:${key}(`, '').replace(')]', '').split(',');
          result = result.replace(item, plural(params[key], values));
        });
      }
    });
  }
  return result;
}
