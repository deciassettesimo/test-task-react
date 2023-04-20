import { Color } from 'components/atoms/Link/types';

export type BreadCrumbsItem = Readonly<{
  id: string;
  path: string;
  title: string;
}>;

export type BreadCrumbsProps = Readonly<{
  items: BreadCrumbsItem[];
  title?: string;
  color?: Color;
}>;
