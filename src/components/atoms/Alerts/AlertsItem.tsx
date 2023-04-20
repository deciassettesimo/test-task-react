import React, { useState, useEffect, useRef } from 'react';

import IconClose from 'components/icons/IconClose';

import { AlertsItemProps } from './types';
import { containers } from './constants';
import {
  StyledAlertsItem,
  StyledAlertsItemContent,
  StyledAlertsItemMessage,
  StyledAlertsItemClose,
} from './style';
import Timer from './timer';

const AlertsItem: React.FC<AlertsItemProps> = (props) => {
  const { notification, onRemoval } = props;
  const { id, type, message, dismiss, container } = notification;

  const [height, setHeight] = useState<number | undefined>(undefined);
  const [removing, setRemoving] = useState(false);

  const elementNode = useRef<HTMLDivElement | null>(null);
  const timer = useRef<Timer | null>(null);

  useEffect(() => {
    if (!dismiss.duration) return;
    timer.current = new Timer(() => removeNotification(), dismiss.duration);

    return () => {
      if (timer.current) {
        timer.current.clear();
      }
    };
  }, []);

  const onClick = () => {
    if (dismiss.click || dismiss.showIcon) {
      removeNotification();
    }
  };

  const onMouseEnter = () => {
    if (timer.current) {
      timer.current.pause();
    }
  };

  const onMouseLeave = () => {
    if (timer.current) {
      timer.current.resume();
    }
  };

  const removeNotification = () => {
    setRemoving(true);
    if (elementNode.current) {
      setHeight(elementNode.current.getBoundingClientRect().height);
    }

    setTimeout(() => {
      onRemoval(id);
    }, 500);
  };

  const renderNotification = () => {
    const hasMouseEvents = dismiss.duration > 0 && dismiss.pauseOnHover;

    return (
      <StyledAlertsItemContent
        sType={type}
        onMouseEnter={hasMouseEvents ? onMouseEnter : undefined}
        onMouseLeave={hasMouseEvents ? onMouseLeave : undefined}
      >
        <StyledAlertsItemMessage>{message}</StyledAlertsItemMessage>
        {dismiss.showIcon && (
          <StyledAlertsItemClose onClick={onClick}>
            <IconClose size="m" display="block" />
          </StyledAlertsItemClose>
        )}
      </StyledAlertsItemContent>
    );
  };

  let className =
    container === containers.topLeft || container === containers.bottomLeft
      ? 's-alerts-item-m-left'
      : 's-alerts-item-m-right';
  if (removing) className = 's-alerts-item-s-removing';

  return (
    <StyledAlertsItem
      data-component="AlertsItem"
      ref={elementNode}
      onClick={dismiss.click ? onClick : undefined}
      className={className}
      sHeight={height}
    >
      {renderNotification()}
    </StyledAlertsItem>
  );
};

export default AlertsItem;
