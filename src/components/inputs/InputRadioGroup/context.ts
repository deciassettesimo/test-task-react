import { createContext } from 'react';

const InputRadioGroupContext = createContext({
  id: null,
  value: null,
  size: null,
  disabled: false,
  error: false,
  onFocus: () => {},
  onBlur: () => {},
  onChange: (params: { value: string }) => {
    console.log(params); /* eslint-disable-line */
  },
  disallowBlur: () => {},
  allowBlur: () => {},
});

export default InputRadioGroupContext;
