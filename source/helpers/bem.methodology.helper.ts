/*|<=|---------------------------------------------------|=>|*/
/*************************************************************\ 
 * <=|------------------------------------------------------|=>
 *  @function Create @returns { string }
 *  @function BlockUnion @returns { string }
 *  @constant representation
 * 
 *  const representation = BlockUnion(
 *    BlockUnion(
 *      Create('Primer-Bloque'),
 *      Create('Segundo-Bloque',{
 *          status: 'ACTIVE'
 *        })
 *      ),
 *      Create('Tercer-Bloque',{
 *          status: 'INACTIVE'
 *        })
 *      );
 * <=|------------------------------------------------------|=>
\*************************************************************/
/*|<=|---------------------------------------------------|=>|*/
import { isEmpty, notEmpty } from '@/helpers/text.validation.helpers';
import { EMPTY_STRING, EMPTY_OBJECT } from '@/helpers/constants.helpers';
/*|<=|---------------------------------------------------|=>|*/
declare type BEM_CLASS = string;
declare type BEM_BLOCK = BEM_CLASS;
declare type BEM_ELEMENT = BEM_BLOCK;
declare type BEM_MODIFIER = BEM_ELEMENT;
declare interface BEM__DEFINITION {
  child?: BEM_ELEMENT;
  status?: BEM_MODIFIER;
}
/*|<=|---------------------------------------------------|=>|*/
const BLOCK = (
  BLOCK_NAME: string,
  ATTRIBUTE_NAME: string = EMPTY_STRING
): string => {
  return `${BLOCK_NAME}${ELEMENT(ATTRIBUTE_NAME)}`;
};
const ELEMENT = (NAME: string = EMPTY_STRING) => {
  return isEmpty(NAME) ? EMPTY_STRING : `__${NAME}`;
};
const MODIFIER = (BLOCK?: string, STATUS_NAME?: string): string => {
  return `${BLOCK}--${STATUS_NAME}`;
};
/*|<=|---------------------------------------------------|=>|*/
export function Create(
  name: BEM_BLOCK,
  definition: BEM__DEFINITION = EMPTY_OBJECT
): BEM_CLASS {
  const { child, status } = definition;
  const HAS_ELEMENT = notEmpty(child);
  const HAS_MODIFIER = notEmpty(status);
  enum BEM {
    BLOCK__ELEMENT_MODIFIER = Number(HAS_MODIFIER),
    BLOCK__ELEMENT_HAS_NO_MODIFIER = Number(!BLOCK__ELEMENT_MODIFIER),
    ELEMENT__EXIST = Number(HAS_ELEMENT || HAS_MODIFIER),
  }
  const END_LINE = ' | ';
  if (BEM.ELEMENT__EXIST) {
    const BLOCK__ELEMENT = `${BLOCK(name, ELEMENT(child))}`;
    if (BEM.BLOCK__ELEMENT_HAS_NO_MODIFIER) {
      return `${BLOCK__ELEMENT}${END_LINE}`.toLocaleUpperCase();
    }
    const BLOCK__ELEMENT_MODIFIER = MODIFIER(BLOCK__ELEMENT, status);
    return `${BLOCK__ELEMENT_MODIFIER}${END_LINE}`.toLocaleUpperCase();
  }
  return `${name}${END_LINE}`.toLocaleUpperCase();
}
/*|<=|---------------------------------------------------|=>|*/
export function BlockUnion(ALPHA_BLOCK: string, OMEGA_BLOCK: string): string {
  return `${ALPHA_BLOCK}${OMEGA_BLOCK}`;
}
/*|<=|---------------------------------------------------|=>|*/
export default Create;
/*|<=|---------------------------------------------------|=>|*/
