import keyMirrorWithPrefix from 'application/utils/keyMirrorWithPrefix';

export const refs = {
  types: keyMirrorWithPrefix({
    primary: null,
    secondary: null,
    tertiary: null,
    negative: null,
  }),
  display: keyMirrorWithPrefix({
    block: null,
    inline: null,
  }),
  sizes: keyMirrorWithPrefix({
    s: null,
    m: null,
    l: null,
  }),
};
