import dayjs from 'dayjs';

import typeChecker from './typeChecker';

export const constraintsTypes = {
  required: 'required',
  enum: 'enum',
  pattern: 'pattern',
  includes: 'includes',
  equal: 'equal',
  range: 'range',
  length: 'range',
  numberCompare: 'numberCompare',
  yearRange: 'yearRange',
  dateRange: 'dateRange',
  dateCompare: 'dateCompare',
};

export default function checkConstraints(value, constraints, otherValues) {
  if (!constraints) return null;

  for (const constrain of constraints) {
    if (constrain.type === constraintsTypes.required) {
      if (typeChecker.isBoolean(value) && !value) return constrain.message;
      if (typeChecker.isEmpty(value)) return constrain.message;
    }

    if (constrain.type === constraintsTypes.enum && typeChecker.isEmpty(value))
      return constrain.message;

    if (constrain.type === constraintsTypes.pattern) {
      const regExp = new RegExp(`^${constrain.condition}$`);
      if (value && !regExp.test(value)) return constrain.message;
    }

    if (constrain.type === constraintsTypes.includes) {
      const regExp = new RegExp(`${constrain.condition}`);
      if (value && !value.match(regExp)) return constrain.message;
    }

    if (constrain.type === constraintsTypes.range) {
      const { min, max } = constrain.condition;
      if (!typeChecker.isEmpty(value) && typeChecker.isNumber(value)) {
        if (typeChecker.isNumber(min) && value < min) return constrain.message;
        if (typeChecker.isNumber(max) && value > max) return constrain.message;
      }
    }

    if (constrain.type === constraintsTypes.length) {
      const { min, max } = constrain.condition;
      if (value && typeChecker.isString(value)) {
        if (typeChecker.isNumber(min) && value.length < min) return constrain.message;
        if (typeChecker.isNumber(max) && value.length > max) return constrain.message;
      }
    }

    if (constrain.type === constraintsTypes.numberCompare) {
      const { field, isSameOrMore, isSameOrLess, isMore, isLess } = constrain.condition;
      if (!typeChecker.isEmpty(value) && typeChecker.isNumber(value)) {
        const fieldValue = typeChecker.isNumber(otherValues[field])
          ? otherValues[field]
          : parseInt(otherValues[field], 10);
        if (isSameOrMore && value < fieldValue) return constrain.message;
        if (isSameOrLess && value > fieldValue) return constrain.message;
        if (isMore && value <= fieldValue) return constrain.message;
        if (isLess && value >= fieldValue) return constrain.message;
      }
    }

    if (constrain.type === constraintsTypes.yearRange) {
      const { min, max } = constrain.condition;
      const dayjsValue = dayjs(value);
      const today = dayjs();
      const minDate = typeChecker.isNumber(min) ? today.clone().subtract(min, 'years') : null;
      const maxDate = typeChecker.isNumber(max) ? today.clone().subtract(max, 'years') : null;
      if (dayjsValue && minDate && dayjsValue.isAfter(minDate)) return constrain.message;
      if (dayjsValue && maxDate && dayjsValue.isBefore(maxDate)) return constrain.message;
    }

    if (constrain.type === constraintsTypes.equal) {
      if (value && value !== otherValues[constrain.condition]) return constrain.message;
    }

    if (constrain.type === constraintsTypes.dateRange) {
      const { min, max, format } = constrain.condition;
      const dayjsValue = dayjs(value, format);
      const minDate = typeof min === 'string' ? dayjs(min, format) : dayjs(min);
      const maxDate = typeof max === 'string' ? dayjs(max, format) : dayjs(max);

      if (!dayjsValue.isValid()) return null;

      if (
        minDate.isValid() &&
        maxDate.isValid() &&
        !dayjsValue.isBetween(minDate, maxDate, null, '[]')
      ) {
        return constrain.message;
      }

      if (minDate.isValid() && !dayjsValue.isSameOrAfter(minDate, 'minutes')) {
        return constrain.message;
      }
      if (maxDate.isValid() && !dayjsValue.isSameOrBefore(maxDate, 'minutes')) {
        return constrain.message;
      }
    }

    if (constrain.type === constraintsTypes.dateCompare) {
      const { field, units, isSameOrAfter, isSameOrBefore } = constrain.condition;
      const dayjsValue = dayjs(value);
      const dayjsCompareValue = dayjs(otherValues[field]);

      if (!dayjsValue.isValid() || !dayjsCompareValue.isValid()) return null;

      if (isSameOrAfter && !dayjsValue.isSameOrAfter(dayjsCompareValue, units || 'minutes')) {
        return constrain.message;
      }
      if (isSameOrBefore && !dayjsValue.isSameOrBefore(dayjsCompareValue, units || 'minutes')) {
        return constrain.message;
      }
    }
  }
  return null;
}
