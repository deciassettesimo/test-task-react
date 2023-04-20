import React, { useState } from 'react';

import { InputRadioGroupProps } from './types';
import InputRadioGroupContext from './context';

const InputRadioGroup: React.FC<InputRadioGroupProps> = (props) => {
  const {
    id,
    size = 'm',
    error = false,
    disabled = false,
    onFocus = () => null,
    onBlur = () => null,
    onChange = () => null,
    value,
    children,
  } = props;

  const [focused, setFocused] = useState(false);
  const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);

  const handleFocus = () => {
    if (!focused) {
      setFocused(true);
      onFocus({ id, value });
    }
  };

  const handleBlur = () => {
    if (disallowBlurFlag) return;
    setFocused(false);
    onBlur({ id, value });
  };

  const handleChange = ({ value: itemValue }: { value: string }) => {
    onChange({ id, value: itemValue });
  };

  const disallowBlur = () => {
    setDisallowBlurFlag(true);
  };

  const allowBlur = () => {
    if (disallowBlurFlag) {
      setDisallowBlurFlag(false);
    }
  };

  const sValue = React.useMemo(
    () => ({
      id,
      value,
      size,
      disabled,
      error,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onChange: handleChange,
      disallowBlur,
      allowBlur,
    }),
    [id, value, size, disabled, error],
  );

  return (
    <InputRadioGroupContext.Provider value={sValue}>{children}</InputRadioGroupContext.Provider>
  );
};

export default InputRadioGroup;
