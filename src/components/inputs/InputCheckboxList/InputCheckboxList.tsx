import React, { useState, useEffect } from 'react';

import Grid, { Item } from 'components/atoms/Grid';

import { InputCheckboxListProps } from './types';
import { StyledInputCheckboxList } from './style';
import InputCheckboxListItem from './InputCheckboxListItem';

const InputCheckboxList: React.FC<InputCheckboxListProps> = (props) => {
  const {
    id,
    size = 'm',
    disabled = false,
    error = false,
    onFocus = () => null,
    onBlur = () => null,
    onChange = () => null,
    value,
    options,
  } = props;

  const [focused, setFocused] = useState(false);
  const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);
  const [data, setData] = useState(value || []);

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

  const handleChange = ({ id: itemId, value: itemValue }: { id: string; value: boolean }) => {
    const newData = itemValue ? [...data, itemId] : data.filter((item) => item !== itemId);
    setData(newData);
    onChange({ id, value: newData });
  };

  const disallowBlur = () => {
    setDisallowBlurFlag(true);
  };

  const allowBlur = () => {
    if (disallowBlurFlag) {
      setDisallowBlurFlag(false);
    }
  };

  useEffect(() => {
    setData(value || []);
  }, [value]);

  return (
    <StyledInputCheckboxList data-component="InputCheckboxList" data-id={id}>
      <Grid spacing="xs">
        {options.map((item) => (
          <Item key={item.value}>
            <InputCheckboxListItem
              value={item.value}
              id={id}
              title={item.title}
              checked={data.includes(item.value)}
              size={size}
              disabled={disabled}
              error={error}
              allowBlur={allowBlur}
              disallowBlur={disallowBlur}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </Item>
        ))}
      </Grid>
    </StyledInputCheckboxList>
  );
};

export default InputCheckboxList;
