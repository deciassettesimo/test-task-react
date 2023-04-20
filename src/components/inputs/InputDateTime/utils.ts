import date from 'utils/date';

export const getStringFromDayJsValue = (value: string | null | undefined) => {
  if (value === null || value === undefined) return value;
  const dayjsValue = date.getValue(value);
  return dayjsValue ? dayjsValue.format('DD.MM.YYYY HH:mm') : '';
};

export const formatDateTimeValue = (value: string | null | undefined) => {
  if (value === null || value === undefined) return '';
  const dottedValue = value
    .replace(/[^\d\\.\s:]/g, '')
    .replace(/\.+/g, '.')
    .replace(/:+/g, ':')
    .replace(/\s+/g, ' ')
    .substring(0, 16);
  const preparedValue = value.replace(/\D/g, '').substring(0, 12);

  const resultValue = [];
  preparedValue.split('').forEach((symbol, index) => {
    resultValue.push(symbol);
    if (index !== preparedValue.length - 1 && [1, 3].includes(index)) resultValue.push('.');
    if (index !== preparedValue.length - 1 && index === 7) resultValue.push(' ');
    if (index !== preparedValue.length - 1 && index === 9) resultValue.push(':');
  });
  if ([3, 6].includes(dottedValue.length) && dottedValue[dottedValue.length - 1] === '.')
    resultValue.push('.');
  if ([11].includes(dottedValue.length) && dottedValue[dottedValue.length - 1] === ' ')
    resultValue.push(' ');
  if ([14].includes(dottedValue.length) && dottedValue[dottedValue.length - 1] === ':')
    resultValue.push(':');
  return resultValue.join('');
};

export const deformatDateTimeValue = (value: string, endTime: boolean) => {
  if (value.length !== 10 && value.length !== 16) return null;
  let dayjsValue;
  let isValid;
  if (value.length === 10) {
    dayjsValue = date.getValue(value, 'DD.MM.YYYY');
    isValid = /^\d{2}\.\d{2}\.\d{4}$/gi.test(value) && dayjsValue.isValid();
    return isValid
      ? date
          .checkStupidDate(dayjsValue)
          .hour(endTime ? 23 : 0)
          .minute(endTime ? 59 : 0)
          .second(endTime ? 59 : 0)
          .millisecond(endTime ? 999 : 0)
          .format()
      : null;
  }
  dayjsValue = date.getValue(value, 'DD.MM.YYYY HH:mm');
  isValid = /^\d{2}\.\d{2}\.\d{4}\s\d{2}:\d{2}$/gi.test(value) && dayjsValue.isValid();
  return isValid
    ? date
        .checkStupidDate(dayjsValue)
        .second(endTime ? 59 : 0)
        .millisecond(endTime ? 999 : 0)
        .format()
    : null;
};
