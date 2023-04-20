import React from 'react';

import { notificationType, containers } from './constants';

export type Type = keyof typeof notificationType;

export type Container = keyof typeof containers;

export type Notification = Readonly<{
  id?: string;
  type?: Type;
  container: Container;
  message: React.ReactNode | React.ReactNode[];
  dismiss?: {
    duration?: number;
    click?: boolean;
    showIcon?: boolean;
    pauseOnHover?: boolean;
  };
}>;

export type PreparedNotification = Readonly<{
  id: string;
  type: Type;
  container: Container;
  message: React.ReactNode | React.ReactNode[];
  dismiss: {
    duration: number;
    click: boolean;
    showIcon: boolean;
    pauseOnHover: boolean;
  };
}>;

export type AlertsItemProps = Readonly<{
  notification: PreparedNotification;
  onRemoval: (id: string) => void;
}>;

export type StyledAlertsItemProps = Readonly<{
  sHeight?: number;
}>;

export type StyledAlertsItemContentProps = Readonly<{
  sType: Type;
}>;
