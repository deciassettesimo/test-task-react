const types = {
  string: 'string',
  number: 'number',
  boolean: 'boolean',
  null: 'null',
  object: 'object',
  array: 'array',
  function: 'function',
  undefined: 'undefined',
};

export default function typeChecker(value) {
  if (typeChecker.isString(value)) {
    return types.string;
  }
  if (typeChecker.isNumber(value)) {
    return types.number;
  }
  if (typeChecker.isBoolean(value)) {
    return types.boolean;
  }
  if (typeChecker.isObject(value)) {
    return types.object;
  }
  if (typeChecker.isArray(value)) {
    return types.array;
  }
  if (typeChecker.isNull(value)) {
    return types.null;
  }
  if (typeChecker.isFunction(value)) {
    return types.function;
  }
  return types.undefined;
}

/**
 * @param value
 * @returns {boolean}
 */
typeChecker.isNull = (value) => value === null && typeof value === 'object';

/**
 * @param value
 * @returns {boolean}
 */
typeChecker.isArray = (value) => Array.isArray(value);

/**
 * @param value
 * @returns {boolean}
 */
typeChecker.isObject = (value) =>
  typeof value === 'object' && !typeChecker.isNull(value) && !typeChecker.isArray(value);

/**
 * Возвращает true если значение является `null`, или `undefined`, или пустыми объектом или массивом
 * @param value
 * @returns {boolean}
 */
typeChecker.isEmpty = (value) =>
  typeChecker.isNull(value) ||
  typeof value === 'undefined' ||
  (typeChecker.isArray(value) && value.length === 0) ||
  (typeChecker.isObject(value) && Object.keys(value).length === 0) ||
  (typeChecker.isString(value) && value.length === 0);

/**
 * @param value
 * @returns {boolean}
 */
typeChecker.isFunction = (value) => typeof value === 'function';

/**
 * @param value
 * @returns {boolean}
 */
typeChecker.isString = (value) => typeof value === 'string';

/**
 * @param value
 * @returns {boolean}
 */
typeChecker.isNumber = (value) => typeof value === 'number' && !Number.isNaN(value);

/**
 * @param value
 * @returns {boolean}
 */
typeChecker.isBoolean = (value) => typeof value === 'boolean';

/**
 * Возвращает истину, если значение является простым типом
 * @param value
 * @returns {boolean}
 */
typeChecker.isSimple = (value) =>
  typeChecker.isString(value) ||
  typeChecker.isNumber(value) ||
  typeChecker.isNumber(value) ||
  typeChecker.isNull(value) ||
  typeof value === 'undefined';

typeChecker.types = types;
