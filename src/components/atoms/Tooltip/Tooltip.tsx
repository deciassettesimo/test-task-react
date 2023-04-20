import React, { useState } from 'react';

import Popup, { Opener, Box } from 'components/atoms/Popup';
import IconQuestion from 'components/icons/IconQuestion';
import IconClose from 'components/icons/IconClose';

import { TooltipProps } from './types';
import {
  StyledTooltip,
  StyledTooltipIcon,
  StyledTooltipBox,
  StyledTooltipContent,
  StyledTooltipClose,
} from './style';

const Tooltip: React.FC<TooltipProps> = (props) => {
  const { size = 'm', children } = props;

  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened(!opened);
  };

  const handleClose = () => {
    setOpened(false);
  };

  return (
    <StyledTooltip data-component="Tooltip">
      <Popup opened={opened} closingOnOutClick closingOnEscPress onClose={handleClose}>
        <Opener>
          <StyledTooltipIcon onClick={handleToggle}>
            <IconQuestion size={size} />
          </StyledTooltipIcon>
        </Opener>
        <Box placement="bottom" align="center">
          <StyledTooltipBox>
            <StyledTooltipContent>{children}</StyledTooltipContent>
            <StyledTooltipClose onClick={handleClose}>
              <IconClose size="s" display="block" />
            </StyledTooltipClose>
          </StyledTooltipBox>
        </Box>
      </Popup>
    </StyledTooltip>
  );
};

export default Tooltip;
