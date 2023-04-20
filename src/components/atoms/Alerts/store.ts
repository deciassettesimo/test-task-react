import { Notification } from './types';

class Store {
  addNotification: (notification: Notification) => string | undefined;
  removeNotification: (id: string) => void;
  register: (params: {
    addNotification: (notification: Notification) => string | undefined;
    removeNotification: (id: string) => void;
  }) => void;

  constructor() {
    this.addNotification = (notification) => {
      return notification.id;
    };

    this.removeNotification = () => {};

    this.register = ({ addNotification, removeNotification }) => {
      this.addNotification = addNotification;
      this.removeNotification = removeNotification;
    };
  }
}

const store = new Store();

export default store;
