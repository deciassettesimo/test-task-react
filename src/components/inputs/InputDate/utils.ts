import date from 'utils/date';

export const getStringFromDayJsValue = (value: string | null | undefined) => {
  if (value === null || value === undefined) return value;
  const dayjsValue = date.getValue(value);
  return dayjsValue ? dayjsValue.format('DD.MM.YYYY') : '';
};

export const formatDateValue = (value: string | null | undefined) => {
  if (value === null || value === undefined) return '';
  const dottedValue = value
    .replace(/[^\d\\.]/g, '')
    .replace(/\.+/g, '.')
    .substring(0, 10);
  const preparedValue = value.replace(/\D/g, '').substring(0, 8);

  const resultValue = [];
  preparedValue.split('').forEach((symbol, index) => {
    resultValue.push(symbol);
    if (index !== preparedValue.length - 1 && [1, 3].includes(index)) resultValue.push('.');
  });
  if ([3, 6].includes(dottedValue.length) && dottedValue[dottedValue.length - 1] === '.')
    resultValue.push('.');
  return resultValue.join('');
};

export const deformatDateValue = (value: string) => {
  if (value.length < 10) return null;
  const dayjsValue = date.getValue(value, 'DD.MM.YYYY');
  const isValid = /^\d{2}\.\d{2}\.\d{4}$/gi.test(value) && dayjsValue.isValid();
  return isValid ? date.checkStupidDate(dayjsValue).format() : null;
};
