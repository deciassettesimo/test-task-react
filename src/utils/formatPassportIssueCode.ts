export default function formatPassportIssueCode(value?: string) {
  if (!value) return '';

  const preparedValue = value.replace(/\D/g, '').substring(0, 6);

  const resultValue: string[] = [];

  preparedValue.split('').forEach((symbol, index) => {
    resultValue.push(symbol);
    if (index !== preparedValue.length - 1 && index === 2) resultValue.push('-');
  });

  return resultValue.join('');
}
