import { Type, Container } from 'components/atoms/Alerts/types';

export type Notification = Readonly<{
  id?: string;
  type?: Type;
  container?: Container;
  message?: string;
  insert?: string;
  duration?: number;
  dismiss?: {
    click?: boolean;
    showIcon?: boolean;
    pauseOnHover?: boolean;
  };
  removed?: boolean;
}>;
