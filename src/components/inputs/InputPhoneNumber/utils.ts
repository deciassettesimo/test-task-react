export const formatPhoneValue = (value: string | null | undefined) => {
  if (value === null || value === undefined) return '';
  const preparedValue = value
    .replace('+', '')
    .replace(/\D/g, '')
    .replace(/^8/, '7')
    .replace(/^([^7])/, '7$1')
    .substring(0, 11);

  const resultValue = [];
  if (preparedValue.length) resultValue.push('+');
  preparedValue.split('').forEach((symbol, index) => {
    resultValue.push(symbol);
    if (index !== preparedValue.length - 1 && index === 0) resultValue.push(' (');
    if (index !== preparedValue.length - 1 && index === 3) resultValue.push(') ');
    if (index !== preparedValue.length - 1 && [6, 8].includes(index)) resultValue.push('-');
  });
  return resultValue.join('');
};

export const deformatPhoneValue = (value: string) => {
  if (value === '') return null;
  return `${value.replace(/[^+\d]/g, '')}`;
};
