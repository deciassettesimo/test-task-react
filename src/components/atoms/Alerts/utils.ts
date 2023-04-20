import { Container, Notification, PreparedNotification } from './types';
import { containers } from './constants';

export const getRandomId = () => Math.random().toString(36).substr(2, 9);

export function isBottomContainer(container: Container) {
  return [containers.bottomLeft, containers.bottomRight, containers.bottomCenter].includes(
    container,
  );
}

export function isTopContainer(container: Container) {
  return [containers.topLeft, containers.topRight, containers.topCenter].includes(container);
}

export function getNotificationsForMobileView(notifications: PreparedNotification[]) {
  const top: PreparedNotification[] = [];
  const bottom: PreparedNotification[] = [];

  notifications.forEach((notification) => {
    const { container } = notification;
    if (isTopContainer(container)) {
      top.push(notification);
    } else if (isBottomContainer(container)) {
      bottom.push(notification);
    }
  });

  return { top, bottom };
}

export function getNotificationsForEachContainer(notifications: PreparedNotification[]) {
  const topLeft: PreparedNotification[] = [];
  const topRight: PreparedNotification[] = [];
  const topCenter: PreparedNotification[] = [];
  const bottomLeft: PreparedNotification[] = [];
  const bottomRight: PreparedNotification[] = [];
  const bottomCenter: PreparedNotification[] = [];

  notifications.forEach((notification) => {
    const { container } = notification;
    if (container === containers.topLeft) {
      topLeft.push(notification);
    } else if (container === containers.topRight) {
      topRight.push(notification);
    } else if (container === containers.topCenter) {
      topCenter.push(notification);
    } else if (container === containers.bottomLeft) {
      bottomLeft.push(notification);
    } else if (container === containers.bottomRight) {
      bottomRight.push(notification);
    } else if (container === containers.bottomCenter) {
      bottomCenter.push(notification);
    }
  });

  return {
    topLeft,
    topRight,
    topCenter,
    bottomLeft,
    bottomRight,
    bottomCenter,
  };
}

export function prepareNotification(incomeNotification: Notification): PreparedNotification {
  const { id, type, container, message, dismiss } = incomeNotification;
  return {
    id: id || getRandomId(),
    type: type || 'info',
    container: container || 'topRight',
    message: message,
    dismiss: {
      duration: dismiss?.duration || 0,
      click: typeof dismiss?.click === 'boolean' ? dismiss.click : true,
      showIcon: typeof dismiss?.showIcon === 'boolean' ? dismiss.showIcon : true,
      pauseOnHover: typeof dismiss?.pauseOnHover === 'boolean' ? dismiss.pauseOnHover : false,
    },
  };
}
