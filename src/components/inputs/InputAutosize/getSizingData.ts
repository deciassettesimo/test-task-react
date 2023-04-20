import { pick } from './utils';

const SIZING_STYLE = [
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'boxSizing',
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'tabSize',
  'textIndent',
  'textRendering',
  'textTransform',
  'width',
  'wordBreak',
] as const;

type SizingProps = Extract<(typeof SIZING_STYLE)[number], keyof CSSStyleDeclaration>;

type SizingStyle = Pick<CSSStyleDeclaration, SizingProps>;

export type SizingData = {
  sizingStyle: SizingStyle;
  paddingSize: number;
  borderSize: number;
};

const getSizingData = (node: HTMLElement): SizingData | null => {
  const style = window.getComputedStyle(node);

  if (style === null) {
    return null;
  }

  const sizingStyle = pick(SIZING_STYLE as unknown as SizingProps[], style);
  const { boxSizing } = sizingStyle;

  if (boxSizing === '') {
    return null;
  }

  const paddingSize = parseFloat(sizingStyle.paddingBottom!) + parseFloat(sizingStyle.paddingTop!);

  const borderSize =
    parseFloat(sizingStyle.borderBottomWidth!) + parseFloat(sizingStyle.borderTopWidth!);

  return {
    sizingStyle,
    paddingSize,
    borderSize,
  };
};

export default getSizingData;
