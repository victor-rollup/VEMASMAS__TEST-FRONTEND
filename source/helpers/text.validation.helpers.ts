//---------------------------------------------------------------------------------------
import { EMPTY_STRING } from '@/helpers/constants.helpers';
//---------------------------------------------------------------------------------------
export function trim(text: string | undefined): string {
  return String(text).replace(/\s/g, '');
}
//---------------------------------------------------------------------------------------
export function compare(
  text: string = EMPTY_STRING,
  target: string = EMPTY_STRING
): boolean {
  return String(text) === String(target);
}
//---------------------------------------------------------------------------------------
export function isEmpty(text: string | undefined): boolean {
  return compare(text);
}
//---------------------------------------------------------------------------------------
export function notEmpty(text: string | undefined): boolean {
  return !isEmpty(text);
}
//---------------------------------------------------------------------------------------
export function assertRegExp(
  text: string | number,
  expression: RegExp
): boolean {
  return new RegExp(expression).test(String(text));
}
//---------------------------------------------------------------------------------------