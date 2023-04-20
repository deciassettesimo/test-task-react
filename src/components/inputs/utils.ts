import React from 'react';

export const getChar = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.which === null) {
    if (e.keyCode < 32) return null;
    return String.fromCharCode(e.keyCode);
  }
  if (e.which !== 0 && e.charCode !== 0) {
    if (e.which < 32) return null;
    return String.fromCharCode(e.which);
  }
  return null;
};

export const getCaretPosition = (
  value: string,
  beforeCaretPosValue: string,
  firstPosition: number,
) => {
  let pos = 0;
  let conj = 0;
  if (beforeCaretPosValue) {
    value.split('').forEach((symbol) => {
      pos += 1;
      if (symbol === beforeCaretPosValue[conj]) {
        conj += 1;
        if (conj === beforeCaretPosValue.length) return true;
      }
      return false;
    });
  }
  if (firstPosition && pos < firstPosition) return firstPosition;
  return pos;
};

export const getStringFromNumberValue = (value: string | number | null) => {
  return typeof value === 'number' ? value.toString() : value;
};

export const getNumberDisplayedValue = (value: string, units: string) => {
  if (!units || !value) return value;
  return `${value} ${units}`;
};

export const getNumberPureValue = (value: string, units: string) => {
  if (!units || !value) return value;
  return value.replace(` ${units}`, '');
};
