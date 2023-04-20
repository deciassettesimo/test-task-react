import React, { useState, useEffect, useRef, useMemo } from 'react';

import IconStatusSuccess from 'components/icons/IconStatusSuccess';

import { StyledInput, StyledInputLabel, StyledInputIcon } from 'components/inputs/style';
import { formatTextValue } from 'components/inputs/InputText/utils';

import { InputPreviewProps } from './types';
import { StyledInputPreview } from './style';

const InputPreview: React.FC<InputPreviewProps> = (props) => {
  const {
    id,
    value,
    label,
    size = 'm',
    width = '100%',
    success = false,
    textAlign = 'left',
    format = formatTextValue,
  } = props;

  const [prevValue, setPrevValue] = useState(null);
  const [formattedValue, setFormattedValue] = useState('');

  const inputNode = useRef(null);

  useEffect(() => {
    if (value !== prevValue) {
      setFormattedValue(format(value));
      setPrevValue(value);
    }
  }, [value]);

  const successIcon = useMemo(() => success, [success]);
  const withIcon = useMemo(() => successIcon, [successIcon]);

  return (
    <StyledInput sWidth={width}>
      <StyledInputPreview
        ref={inputNode}
        id={id}
        sSize={size}
        sTextAlign={textAlign}
        sWithLabel={!!label}
        sWithIcon={withIcon}
      >
        {formattedValue}
      </StyledInputPreview>
      {label && (
        <StyledInputLabel as="div" sSize={size} sSmall sDisabled>
          {label}
        </StyledInputLabel>
      )}
      {successIcon && (
        <StyledInputIcon sSize={size}>
          <IconStatusSuccess display="block" color="success" size={size} />
        </StyledInputIcon>
      )}
    </StyledInput>
  );
};

export default InputPreview;
