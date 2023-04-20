import React, { useState, useReducer, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { mediaBreakpoints } from 'components/constants';

import { Notification, PreparedNotification } from './types';
import store from './store';
import {
  getNotificationsForEachContainer,
  getNotificationsForMobileView,
  prepareNotification,
} from './utils';
import {
  StyledAlerts,
  StyledAlertsContainerTopCenter,
  StyledAlertsContainerBottomCenter,
  StyledAlertsContainerTopLeft,
  StyledAlertsContainerTopRight,
  StyledAlertsContainerBottomLeft,
  StyledAlertsContainerBottomRight,
  StyledAlertsContainerMobileTop,
  StyledAlertsContainerMobileBottom,
} from './style';

import AlertsItem from './AlertsItem';

type State = {
  notifications: PreparedNotification[];
};

enum ActionType {
  add = 'add',
  remove = 'remove',
}

type Action = {
  type: ActionType;
  payload: {
    notification?: PreparedNotification;
    id?: string;
  };
};

const initialState: State = {
  notifications: [],
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.add:
      return { notifications: [...state.notifications, action.payload.notification] };
    case ActionType.remove:
      return { notifications: state.notifications.filter((item) => item.id !== action.payload.id) };
    default:
      return state;
  }
}

const Alerts: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState(0);
  const [portalsNode, setPortalNode] = useState<Element | null>(null);
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(reducer, initialState);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const add = (notification: Notification) => {
    const preparedNotification = prepareNotification(notification);
    dispatch({ type: ActionType.add, payload: { notification: preparedNotification } });
    return notification.id;
  };

  const remove = (id: string) => {
    dispatch({ type: ActionType.remove, payload: { id } });
  };

  const renderNotifications = (notifications: PreparedNotification[]) => {
    return notifications.map((notification) => (
      <AlertsItem key={notification.id} notification={notification} onRemoval={remove} />
    ));
  };

  const renderMobileNotifications = () => {
    const mobileNotifications = getNotificationsForMobileView(state.notifications);
    const top = renderNotifications(mobileNotifications.top);
    const bottom = renderNotifications(mobileNotifications.bottom);

    return (
      <>
        <StyledAlertsContainerMobileTop>{top}</StyledAlertsContainerMobileTop>
        <StyledAlertsContainerMobileBottom>{bottom}</StyledAlertsContainerMobileBottom>
      </>
    );
  };

  const renderScreenNotifications = () => {
    const notificationsPerContainer = getNotificationsForEachContainer(state.notifications);
    const topLeft = renderNotifications(notificationsPerContainer.topLeft);
    const topRight = renderNotifications(notificationsPerContainer.topRight);
    const topCenter = renderNotifications(notificationsPerContainer.topCenter);
    const bottomLeft = renderNotifications(notificationsPerContainer.bottomLeft);
    const bottomRight = renderNotifications(notificationsPerContainer.bottomRight);
    const bottomCenter = renderNotifications(notificationsPerContainer.bottomCenter);

    return (
      <>
        <StyledAlertsContainerTopLeft>{topLeft}</StyledAlertsContainerTopLeft>
        <StyledAlertsContainerTopRight>{topRight}</StyledAlertsContainerTopRight>
        <StyledAlertsContainerBottomLeft>{bottomLeft}</StyledAlertsContainerBottomLeft>
        <StyledAlertsContainerBottomRight>{bottomRight}</StyledAlertsContainerBottomRight>
        <StyledAlertsContainerTopCenter>{topCenter}</StyledAlertsContainerTopCenter>
        <StyledAlertsContainerBottomCenter>{bottomCenter}</StyledAlertsContainerBottomCenter>
      </>
    );
  };

  useEffect(() => {
    if (mounted) return;
    store.register({
      addNotification: add,
      removeNotification: remove,
    });
    setMounted(true);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (portalsNode) return;
    setPortalNode(document.querySelector('#portals'));
  }, []);

  if (!mounted || !portalsNode) return null;

  return createPortal(
    <StyledAlerts data-component="Alerts">
      {width <= mediaBreakpoints.tablet ? renderMobileNotifications() : renderScreenNotifications()}
    </StyledAlerts>,
    portalsNode,
  );
};

export default Alerts;
