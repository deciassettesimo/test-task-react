export const mediaBreakpoints = {
  largePhone: 480,
  tablet: 768,
  smallDesktop: 992,
  desktop: 1200,
  largeDesktop: 1440,
};

export const mediaSizes = {
  s: 's', // 320 - 768      / PHONE
  m: 'm', // 768 - 1200     / TABLET
  l: 'l', // 1200 - ∞       / DESKTOP
};

export const media = {
  largePhone: `min-width: ${mediaBreakpoints.largePhone}px`,
  tablet: `min-width: ${mediaBreakpoints.tablet}px`,
  smallDesktop: `min-width: ${mediaBreakpoints.smallDesktop}px`,
  desktop: `min-width: ${mediaBreakpoints.desktop}px`,
  largeDesktop: `min-width: ${mediaBreakpoints.largeDesktop}px`,
};

export const sizes = { xs: 'xs', s: 's', m: 'm', l: 'l', xl: 'xl' };

export const fonts = {
  primary: '"Roboto", "Helvetica Neue", sans-serif',
  secondary: '"Open Sans", "Helvetica Neue", sans-serif',
};

export const textAligns = {
  left: 'left',
  center: 'center',
  right: 'right ',
};

export const fontWeights = {
  black: 900,
  extraBold: 800,
  bold: 700,
  semiBold: 600,
  medium: 500,
  regular: 400,
  light: 300,
  extraLight: 200,
  thin: 100,
};

export const fontStyles = {
  normal: 'normal',
  italic: 'italic',
};

export const display = {
  block: 'block',
  inline: 'inline-block',
};

export const palettes = {
  transparent: 'transparent',

  black10: 'rgba(0, 0, 0, 0.1)',
  black20: 'rgba(0, 0, 0, 0.2)',
  black30: 'rgba(0, 0, 0, 0.3)',
  black40: 'rgba(0, 0, 0, 0.4)',
  black50: 'rgba(0, 0, 0, 0.5)',
  black60: 'rgba(0, 0, 0, 0.6)',
  black70: 'rgba(0, 0, 0, 0.7)',
  black80: 'rgba(0, 0, 0, 0.8)',
  black90: 'rgba(0, 0, 0, 0.9)',
  black100: 'rgba(0, 0, 0, 1)',

  white10: 'rgba(255, 255, 255, 0.1)',
  white20: 'rgba(255, 255, 255, 0.2)',
  white30: 'rgba(255, 255, 255, 0.3)',
  white40: 'rgba(255, 255, 255, 0.4)',
  white50: 'rgba(255, 255, 255, 0.5)',
  white60: 'rgba(255, 255, 255, 0.6)',
  white70: 'rgba(255, 255, 255, 0.7)',
  white80: 'rgba(255, 255, 255, 0.8)',
  white90: 'rgba(255, 255, 255, 0.9)',
  white100: 'rgba(255, 255, 255, 1)',

  /* primary */
  primary0: '#000000',
  primary10: '#001f2a',
  primary20: '#003546',
  primary25: '#004154',
  primary30: '#004d64',
  primary35: '#005a73',
  primary40: '#006783',
  primary50: '#0081a5',
  primary60: '#069dc7',
  primary70: '#40b8e3',
  primary80: '#65d3ff',
  primary90: '#bde9ff',
  primary95: '#e0f4ff',
  primary98: '#f4faff',
  primary99: '#fafcff',
  primary100: '#ffffff',
  /* secondary */
  secondary0: '#000000',
  secondary10: '#380d00',
  secondary20: '#5b1b00',
  secondary25: '#6c2303',
  secondary30: '#7b2e0d',
  secondary35: '#8b3918',
  secondary40: '#9a4522',
  secondary50: '#b95d38',
  secondary60: '#d9754f',
  secondary70: '#fa8f66',
  secondary80: '#ffb59a',
  secondary90: '#ffdbcf',
  secondary95: '#ffede7',
  secondary98: '#fff8f6',
  secondary99: '#fffbff',
  secondary100: '#ffffff',
  /* tertiary */
  tertiary0: '#000000',
  tertiary10: '#2c1600',
  tertiary20: '#4a2800',
  tertiary25: '#593200',
  tertiary30: '#693c00',
  tertiary35: '#7a4600',
  tertiary40: '#8b5000',
  tertiary50: '#ae6600',
  tertiary60: '#d27c00',
  tertiary70: '#f79300',
  tertiary80: '#ffb870',
  tertiary90: '#ffdcbe',
  tertiary95: '#ffeee1',
  tertiary98: '#fff8f5',
  tertiary99: '#fffbff',
  tertiary100: '#ffffff',
  /* neutral */
  neutral0: '#000000',
  neutral10: '#1a1c1e',
  neutral20: '#2f3033',
  neutral25: '#3a3b3e',
  neutral30: '#46474a',
  neutral35: '#515256',
  neutral40: '#5d5e62',
  neutral50: '#76777a',
  neutral60: '#909094',
  neutral70: '#ababae',
  neutral80: '#c6c6ca',
  neutral90: '#e3e2e6',
  neutral95: '#f1f0f4',
  neutral98: '#faf9fd',
  neutral99: '#fdfcff',
  neutral100: '#ffffff',
  /* neutralVariant */
  neutralVariant0: '#000000',
  neutralVariant10: '#181c22',
  neutralVariant20: '#2d3138',
  neutralVariant25: '#383c43',
  neutralVariant30: '#43474e',
  neutralVariant35: '#4f525a',
  neutralVariant40: '#5b5e66',
  neutralVariant50: '#74777f',
  neutralVariant60: '#8d9199',
  neutralVariant70: '#a8abb4',
  neutralVariant80: '#c3c6cf',
  neutralVariant90: '#e0e2ec',
  neutralVariant95: '#eef0fa',
  neutralVariant98: '#f9f9ff',
  neutralVariant99: '#fdfcff',
  neutralVariant100: '#ffffff',
  /* error */
  error0: '#000000',
  error10: '#410002',
  error20: '#690005',
  error25: '#7e0007',
  error30: '#93000a',
  error35: '#a80710',
  error40: '#ba1a1a',
  error50: '#de3730',
  error60: '#ff5449',
  error70: '#ff897d',
  error80: '#ffb4ab',
  error90: '#ffdad6',
  error95: '#ffedea',
  error98: '#fff8f7',
  error99: '#fffbff',
  error100: '#ffffff',
  /* success */
  success0: '#000000',
  success10: '#002200',
  success20: '#003a01',
  success25: '#004602',
  success30: '#005302',
  success35: '#006103',
  success40: '#006e05',
  success50: '#008b08',
  success60: '#18a818',
  success70: '#3fc435',
  success80: '#5ee14f',
  success90: '#7bfe68',
  success95: '#caffb9',
  success98: '#ecffe2',
  success99: '#f7ffee',
  success100: '#ffffff',
};

const light = {
  primary: palettes.primary40,
  onPrimary: palettes.primary100,
  primaryContainer: palettes.primary90,
  onPrimaryContainer: palettes.primary10,
  secondary: palettes.secondary40,
  onSecondary: palettes.secondary100,
  secondaryContainer: palettes.secondary90,
  onSecondaryContainer: palettes.secondary10,
  tertiary: palettes.tertiary40,
  onTertiary: palettes.tertiary100,
  tertiaryContainer: palettes.tertiary90,
  onTertiaryContainer: palettes.tertiary10,
  error: palettes.error40,
  onError: palettes.error100,
  errorContainer: palettes.error90,
  onErrorContainer: palettes.error10,
  success: palettes.success40,
  onSuccess: palettes.success100,
  successContainer: palettes.success90,
  onSuccessContainer: palettes.success10,
  background: palettes.neutral99,
  onBackground: palettes.neutral10,
  surface: palettes.neutralVariant99,
  onSurface: palettes.neutralVariant10,
  surfaceVariant: palettes.neutralVariant90,
  onSurfaceVariant: palettes.neutralVariant30,
  outline: palettes.neutralVariant50,
  inverseSurface: palettes.neutral20,
  inverseOnSurface: palettes.neutralVariant95,
  inversePrimary: palettes.primary80,
  surfaceTint: palettes.primary40,
  outlineVariant: palettes.neutralVariant80,
  scrim: palettes.primary0,
};

export const colors = {
  ...palettes,
  ...light,
};

export const gradients = {};
