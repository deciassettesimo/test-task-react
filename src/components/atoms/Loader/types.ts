import { Size, Display } from 'components/types';

export type Type = 'circle' | 'dots';

export type LoaderProps = Readonly<{
  size?: Size;
  display?: Display;
  type?: Type;
  centered?: boolean;
}>;

export type StyledLoaderProps = Readonly<{
  sSize?: Size;
  sType?: Type;
  sDisplay?: Display;
}>;
