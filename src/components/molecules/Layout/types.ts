import React from 'react';
import { Location } from 'history';

import { BreadCrumbsItem } from 'components/atoms/BreadCrumbs/types';

export type LayoutSectionWidth = 's' | 'm' | 'l';

export type LayoutNavigationItem = Readonly<{
  id: string;
  path: string;
  title: string;
  items?: LayoutNavigationItem[];
}>;

export type LayoutNavigation = Readonly<{
  home: LayoutNavigationItem;
  items: LayoutNavigationItem[];
}>;

export type LayoutUser = Readonly<{
  avatar?: string;
  name?: string;
  signOut: string;
}>;

export type LayoutProps = Readonly<{
  location: Location;
  navigation: LayoutNavigation;
  user?: LayoutUser;
  onSignOut?: () => void;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type LayoutSideProps = Readonly<{
  location: Location;
  navigation: LayoutNavigation;
  user?: LayoutUser;
  onSignOut?: () => void;
}>;

export type LayoutMainProps = Readonly<{
  children?: React.ReactNode | React.ReactNode[];
}>;

export type LayoutHeaderProps = Readonly<{
  title?: string;
  breadCrumbs?: BreadCrumbsItem[];
  children?: React.ReactNode | React.ReactNode[];
}>;

export type LayoutContentProps = Readonly<{
  width?: LayoutSectionWidth;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type LayoutErrorProps = Readonly<{
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledLayoutHeaderInnerProps = Readonly<{
  sShow?: boolean;
}>;

export type StyledLayoutSectionProps = Readonly<{
  sSide?: boolean;
  sGrow?: boolean;
  sWidth?: LayoutSectionWidth;
}>;

export type LayoutNavModalProps = Readonly<{
  location: Location;
  navigation: LayoutNavigation;
  user?: LayoutUser;
  onSignOut?: () => void;
}>;

export type LayoutNavProps = Readonly<{
  location: Location;
  navigation: LayoutNavigation;
  onItemClick?: () => void;
  side?: boolean;
}>;

export type LayoutUserProps = Readonly<{
  user?: LayoutUser;
  onSignOut?: () => void;
  side?: boolean;
}>;

export type StyledLayoutUserProps = Readonly<{
  sSide?: boolean;
}>;
