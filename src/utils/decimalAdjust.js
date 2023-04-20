export default function decimalAdjust(type, propValue, propExp) {
  // Если степень не определена, либо равна нулю...
  if (typeof propExp === 'undefined' || +propExp === 0) {
    return Math[type](propValue);
  }

  let value = +propValue;
  const exp = +propExp;

  // Если значение не является числом, либо степень не является целым числом...
  if (Number.isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Сдвиг разрядов
  value = value.toString().split('e');
  value = Math[type](+`${value[0]}e${value[1] ? +value[1] - exp : -exp}`);
  // Обратный сдвиг
  value = value.toString().split('e');
  return +`${value[0]}e${value[1] ? +value[1] + exp : exp}`;
}

decimalAdjust.round = (value, exp) => decimalAdjust('round', value, exp);
decimalAdjust.floor = (value, exp) => decimalAdjust('floor', value, exp);
decimalAdjust.ceil = (value, exp) => decimalAdjust('ceil', value, exp);
