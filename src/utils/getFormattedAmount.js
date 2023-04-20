import decimalAdjust from './decimalAdjust';
import typeChecker from './typeChecker';

export default function getFormattedAmount(value, ...rest) {
  if (typeof value !== 'number') return '';
  if (value === Infinity) return '—';

  let frictionLength;
  let currency = '';
  let separator = ',';
  let sign = false;
  if (rest.length) {
    const separatorArg = rest.find((item) => item === '.' || item === ',');
    if (separatorArg) separator = separatorArg;
    const signArg = rest.find((item) => item === 'sign');
    if (signArg) sign = true;
    const frictionArg = rest.find((item) => typeChecker.isNumber(item));
    if (typeChecker.isNumber(frictionArg)) frictionLength = frictionArg;
    const currencyArg = rest.find(
      (item) => typeChecker.isString(item) && item !== 'sign' && item !== ',' && item !== '.',
    );
    if (currencyArg) currency = currencyArg;
  }

  const roundedValue = typeChecker.isNumber(frictionLength)
    ? decimalAdjust.round(value, -frictionLength)
    : value;

  const stringValue = roundedValue.toString();

  let minus = stringValue.indexOf('-') < 0 ? '' : '-';
  if (sign && value > 0) minus = '+';

  const preparedValue = stringValue
    .replace(',', '.')
    .replace(/[^\d\\.]/g, '')
    .replace(/^0+/, '0')
    .replace(/^0([\d\\.]+)$/, '$1');
  const dotIndex = preparedValue.indexOf('.');
  const integerValue = preparedValue.substring(0, dotIndex < 0 ? preparedValue.length : dotIndex);
  const decimalValue = dotIndex < 0 ? '' : preparedValue.substring(dotIndex + 1);

  const integerResultArray = [];
  integerValue
    .split('')
    .reverse()
    .forEach((symbol, index) => {
      if (index && !(index % 3)) integerResultArray.unshift(' ');
      integerResultArray.unshift(symbol);
    });
  const integerResult = integerResultArray.length ? integerResultArray.join('') : '0';

  let decimalResult = decimalValue;
  if (typeChecker.isNumber(frictionLength)) {
    const emptyDecimal = Array(frictionLength).fill('0').join('');
    decimalResult = `${decimalValue}${emptyDecimal}`.substring(0, frictionLength);
  }

  return `${minus}${integerResult}${decimalResult ? `${separator}${decimalResult}` : ''}${
    currency ? ` ${currency}` : ''
  }`;
}
