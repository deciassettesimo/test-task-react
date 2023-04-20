export function formatDigitalValue(value: string | null | undefined, maxLength?: number) {
  if (value === null) return '';
  const result = value.replace(/\D/g, '');
  return maxLength ? result.substring(0, maxLength) : result;
}

export function deformatDigitalValue(value: string) {
  if (value === '') return null;
  return value.replace(/\D/g, '');
}
