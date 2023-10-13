// ---------------------------------------------------------------------------------
import moment from 'moment';
// ---------------------------------------------------------------------------------
const DEFAULT_DATE = new Date();
const LOCALE_TIME_ZONE = 'es-mx';
const DEFAULT_DATE_FORMAT = 'long';
const MOMENT_LONG_DATE_FORMAT = 'L';
const DEFAULT_MOMENT_TIME_UNIT = 'days';
const DEFAULT_RELATIVE_TIME_UNIT = 'day';
// ---------------------------------------------------------------------------------
interface TTimeDifference {
  unit?: 'years' | 'months' | 'weeks' | 'days';
  firstDate: Date;
  secondDate: Date;
}
// ---------------------------------------------------------------------------------
export function timeDifference({
  firstDate = DEFAULT_DATE,
  secondDate = DEFAULT_DATE,
  unit = DEFAULT_MOMENT_TIME_UNIT,
}: TTimeDifference) {
  return moment(firstDate).diff(secondDate, unit);
}
export function toFormatedDate (
  date: Date = DEFAULT_DATE,
  dateStyle: string | any = DEFAULT_DATE_FORMAT
) {
  return Intl.DateTimeFormat(LOCALE_TIME_ZONE, {
    dateStyle,
  }).format(date);
}
export function toFullDate (date = DEFAULT_DATE) {
  return toFormatedDate(date, 'full');
}
export function toLongDate (date = DEFAULT_DATE) {
  return toFormatedDate(date, DEFAULT_DATE_FORMAT);
}
export function toShortDate (date = DEFAULT_DATE) {
  return toFormatedDate(date, 'short');
}
export function toMediumDate (date = DEFAULT_DATE) {
  return toFormatedDate(date, 'medium');
}
export function toRelativeTime (
  amount: number,
  timeUnit: string | any = DEFAULT_RELATIVE_TIME_UNIT
) {
  const relativeTime = new Intl.RelativeTimeFormat(LOCALE_TIME_ZONE, {
    style: 'long',
    numeric: 'auto',
  });
  return relativeTime.format(amount, timeUnit);
}
export function toMoment(
  date = DEFAULT_DATE,
  dateFormat = MOMENT_LONG_DATE_FORMAT
) {
  return moment(date).format(dateFormat);
}
export function fromMoment(formatedDate: string) {
  const parsedDate = moment(formatedDate).format();
  return new Date(parsedDate);
}
// ---------------------------------------------------------------------------------
export default {
  toMoment,
  fromMoment,
  toFullDate,
  toLongDate,
  toShortDate,
  toMediumDate,
  toFormatedDate,
  timeDifference,
  toRelativeTime,
};
// ---------------------------------------------------------------------------------
