import { types } from 'mobx-state-tree';

import { store as alertsStore } from 'components/atoms/Alerts';

import { Notification } from './types';
import { alertMessage } from './Message';

export const Store = types
  .model({})

  .actions(() => ({
    add: (notification: Notification) => {
      const {
        type,
        container = 'topRight',
        message = '',
        duration = 5000,
        dismiss = { click: false, showIcon: true, pauseOnHover: true },
      } = notification;

      alertsStore.addNotification({
        type,
        container,
        message: alertMessage(message),
        dismiss: { ...dismiss, duration },
      });
    },
  }));

export const store = Store.create({});

export default store;
