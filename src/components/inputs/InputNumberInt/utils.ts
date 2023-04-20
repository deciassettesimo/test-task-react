import { getStringFromNumberValue } from 'components/inputs/utils';

export const formatNumberIntValue = (
  value: string | number | null | undefined,
  negative: boolean,
  formatted: boolean,
  maxLength: number,
) => {
  const stringValue = getStringFromNumberValue(value);
  if (stringValue === null || stringValue === undefined) return '';

  const minus = !negative || stringValue.indexOf('-') < 0 ? '' : '-';
  const preparedValue = stringValue
    .replace(/[^\d]/g, '')
    .replace(/^0+/, '0')
    .replace(/^0([\d]+)$/, '$1');
  const integerValue = preparedValue.substring(0, maxLength);

  let integerResultValue = integerValue;
  if (formatted) {
    const integerResultValueArray: string[] = [];
    integerValue
      .split('')
      .reverse()
      .forEach((symbol, index) => {
        if (index && !(index % 3)) integerResultValueArray.unshift(' ');
        integerResultValueArray.unshift(symbol);
      });
    integerResultValue = integerResultValueArray.join('');
  }

  if (!integerResultValue.length) return minus;
  return `${minus}${integerResultValue}`;
};

export const deformatNumberIntValue = (value: string) => {
  if (value === '' || value === '-') return null;
  return parseInt(value.replace(/[^-\d]/g, ''), 10);
};
