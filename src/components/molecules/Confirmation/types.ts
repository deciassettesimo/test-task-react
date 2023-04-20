import React from 'react';

import { Type } from 'components/atoms/Button/types';

export type ConfirmationProps = Readonly<{
  title?: string;
  labels: { confirm: string; cancel: string };
  onConfirm: () => void;
  onCancel: () => void;
  confirmType?: Type;
  cancelType?: Type;
  children: React.ReactNode | React.ReactNode[];
}>;
