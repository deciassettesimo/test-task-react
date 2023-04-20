import { Size } from 'components/types';

export type AvatarProps = Readonly<{
  size?: Size;
  src?: string;
  name?: string;
}>;

export type StyledAvatarProps = Readonly<{
  sSize?: Size;
  sEmpty?: boolean;
}>;
