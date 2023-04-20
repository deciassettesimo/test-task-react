import { getStringFromNumberValue } from 'components/inputs/utils';

export const formatNumberDecValue = (
  value: string | number | null | undefined,
  negative: boolean,
  formatted: boolean,
  maxLength: number,
  decimals: number,
  final: boolean,
) => {
  const stringValue = getStringFromNumberValue(value);
  if (stringValue === null || stringValue === undefined) return '';

  const minus = !negative || stringValue.indexOf('-') < 0 ? '' : '-';
  const preparedValue = stringValue
    .replace(',', '.')
    .replace(/[^\d\\.]/g, '')
    .replace(/^0+/, '0')
    .replace(/^0([\d\\.]+)$/, '$1');
  const dotIndex = preparedValue.indexOf('.');
  const integerValue = preparedValue
    .substring(0, dotIndex < 0 ? preparedValue.length : dotIndex)
    .substring(0, maxLength);
  const decimalValue =
    dotIndex < 0 ? '' : preparedValue.substring(dotIndex + 1).substring(0, decimals);

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

  const emptyDecimal = Array(decimals).fill('0').join('');
  const decimalResultValue = final
    ? `${decimalValue}${emptyDecimal}`.substring(0, decimals)
    : decimalValue;

  if (final && !integerResultValue.length) return `${minus}0,${decimalResultValue}`;
  if (final) return `${minus}${integerResultValue},${decimalResultValue}`;
  if (!integerResultValue.length && dotIndex > -1) return `${minus}0,${decimalResultValue}`;
  if (!integerResultValue.length) return minus;
  if (integerResultValue.length && dotIndex > -1)
    return `${minus}${integerResultValue},${decimalResultValue}`;
  return `${minus}${integerResultValue}`;
};

export const deformatNumberDecValue = (value: string) => {
  if (value === '' || value === '-') return null;
  return parseFloat(value.replace(/[^-\d\\,]/g, '').replace(',', '.'));
};
