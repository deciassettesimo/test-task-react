const hiddenTextareStyle = {
  'min-height': '0',
  'max-height': 'none',
  height: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  position: 'absolute',
  'z-index': '-1000',
  top: '0',
  right: '0',
} as const;

const forceHiddenStyles = (node: HTMLElement) => {
  Object.keys(hiddenTextareStyle).forEach((key) => {
    node.style.setProperty(
      key,
      hiddenTextareStyle[key as keyof typeof hiddenTextareStyle],
      'important',
    );
  });
};

export default forceHiddenStyles;
