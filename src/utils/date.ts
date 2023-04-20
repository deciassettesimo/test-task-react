import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import 'dayjs/locale/en';
import 'dayjs/locale/ru';

export const locales = {
  en: 'en',
  ru: 'ru',
};

dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

function setLocale(locale: string) {
  dayjs.locale(locale);
}

function getValue(date?: string | number, inputFormat: string = undefined) {
  return dayjs(date, inputFormat).isValid() ? dayjs(date, inputFormat) : null;
}

function format(
  date: string,
  outputFormat = 'DD.MM.YYYY HH:mm:ss',
  inputFormat: string = undefined,
) {
  return date && dayjs(date, inputFormat).isValid()
    ? dayjs(date, inputFormat).format(outputFormat)
    : null;
}

function getToday() {
  return dayjs().format();
}

function getStartOfDay(date: string) {
  return dayjs(date).startOf('day').format();
}

function getStartOfWeek(date: string) {
  return dayjs(date).startOf('week').format();
}

function getDatesInRange(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const date = new Date(start.getTime());

  const dates = [];

  while (date <= end) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

function isSameDay(date1: string, date2: string) {
  return dayjs(date1).isSame(date2, 'day');
}

/**
 * Сбрасывается дата на 31.03.1981 при выборе даты 01.04.1981
 * Это связано с тем, что даты 1 апреля 1981(1982,1983,1984) 00:00:00+0300 - не существует.
 * Тогда ввели летнее время и после 31 марта 23:59:59 сразу наступал час ночи 1 апреля.
 * Продолжалось это все до 1985 года - тогда отменили. и стали переводить часы не фиксированно, а в плавающую дату.
 * 1982,1983,1984 - сразу проставляется час ночи, а в 1981 - нет
 */
function checkStupidDate(date: dayjs.Dayjs) {
  const stupidDateStart = dayjs('1981-03-31T22:59:59');
  const stupidDateEnd = dayjs('1981-04-01T01:00:00');
  if (date.isAfter(stupidDateStart) && date.isBefore(stupidDateEnd)) return stupidDateEnd;
  return date;
}

setLocale(locales.ru);

export default {
  getValue,
  format,
  getToday,
  getStartOfDay,
  getStartOfWeek,
  getDatesInRange,
  isSameDay,
  checkStupidDate,
};
