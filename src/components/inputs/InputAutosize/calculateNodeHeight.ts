import { SizingData } from './getSizingData';
import forceHiddenStyles from './forceHiddenStyles';

export type CalculatedNodeHeight = number;

let hiddenTextarea: HTMLTextAreaElement | null = null;

const getHeight = (node: HTMLElement, sizingData: SizingData): number => {
  const height = node.scrollHeight;

  if (sizingData.sizingStyle.boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    return height + sizingData.borderSize;
  }

  // remove padding, since height = content
  return height - sizingData.paddingSize;
};

export default function calculateNodeHeight(
  sizingData: SizingData,
  value: string,
): CalculatedNodeHeight {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tabindex', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    forceHiddenStyles(hiddenTextarea);
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }

  const { sizingStyle } = sizingData;

  Object.keys(sizingStyle).forEach((_key) => {
    const key = _key as keyof typeof sizingStyle;
    hiddenTextarea!.style[key] = sizingStyle[key];
  });

  forceHiddenStyles(hiddenTextarea);

  hiddenTextarea.value = value;
  const height = getHeight(hiddenTextarea, sizingData);

  // measure height of a textarea with a single row
  hiddenTextarea.value = 'x';

  return height;
}
