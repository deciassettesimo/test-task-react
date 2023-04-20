import React from 'react';

import { ProgressProps } from './types';
import {
  StyledProgress,
  StyledProgressSvg,
  StyledProgressRail,
  StyledProgressTrack,
  StyledProgressContent,
} from './style';

const Progress: React.FC<ProgressProps> = (props) => {
  const { size = 38, pathSize = 4, final, value, children } = props;

  return (
    <StyledProgress data-component="Progress" sSize={size} sPathSize={pathSize}>
      <StyledProgressSvg sSize={size}>
        <StyledProgressRail sSize={size} sPathSize={pathSize} />
        <StyledProgressTrack sSize={size} sPathSize={pathSize} sFinal={final} sValue={value} />
      </StyledProgressSvg>
      <StyledProgressContent sSize={size} sPathSize={pathSize}>
        {children}
      </StyledProgressContent>
    </StyledProgress>
  );
};

export default Progress;
