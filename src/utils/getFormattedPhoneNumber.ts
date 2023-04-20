export default function getFormattedPhoneNumber(value?: string, masked = false) {
  if (!value) return '';
  const preparedValue = value
    .replace('+', '')
    .replace(/\D/g, '')
    .replace(/^8/, '7')
    .replace(/^([^7])/, '7$1')
    .substring(0, 11);

  const resultValue = [];
  if (preparedValue.length) resultValue.push('+');
  preparedValue.split('').forEach((symbol: string, index: number) => {
    if (masked && [1, 2, 3, 4, 5, 6].includes(index)) {
      resultValue.push('*');
    } else {
      resultValue.push(symbol);
    }
    if (index !== preparedValue.length - 1 && index === 0) resultValue.push(' (');
    if (index !== preparedValue.length - 1 && index === 3) resultValue.push(') ');
    if (index !== preparedValue.length - 1 && [6, 8].includes(index)) resultValue.push('-');
  });
  return resultValue.join('');
}
