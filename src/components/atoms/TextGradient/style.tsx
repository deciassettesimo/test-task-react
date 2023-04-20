import styled, { keyframes } from 'styled-components';

import { StyledTextGradientProps } from './types';
import theme from './theme';

function getGradient(props: StyledTextGradientProps) {
  if (!props.sGradient) return 'none';
  return theme.gradient[props.sGradient];
}

const aGradient = keyframes`
  0% { background-position: 100% 50%; }
  25% { background-position: 0 50%; }
  100% { background-position: 0 50%; }
`;

export const StyledTextGradient = styled.div<StyledTextGradientProps>`
  background: ${(props) => getGradient(props)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const StyledTextGradientAnimated = styled(StyledTextGradient)`
  background-size: 200% 100%;
  animation: ${aGradient} 5s linear infinite;
`;
