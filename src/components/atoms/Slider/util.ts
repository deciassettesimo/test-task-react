export function getOffset(value: number, min: number, max: number) {
  return (value - min) / (max - min);
}

export function getPositionStyle(value: number, min: number, max: number) {
  const offset = getOffset(value, min, max);

  const positionStyle: React.CSSProperties = {};

  positionStyle.left = `${offset * 100}%`;
  positionStyle.transform = 'translateX(-50%)';

  return positionStyle;
}

export function getMarkPositionStyle(value: number, min: number, max: number) {
  const offset = getOffset(value, min, max);

  const positionStyle: React.CSSProperties = {};

  positionStyle.left = `${offset * 100}%`;
  positionStyle.transform = 'translateX(-50%)';

  return positionStyle;
}
