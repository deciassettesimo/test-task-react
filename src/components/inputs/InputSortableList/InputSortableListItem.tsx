import React, { useState, useEffect, useMemo, forwardRef } from 'react';

import Block from 'components/atoms/Block';
import Grid, { Item } from 'components/atoms/Grid';
import { InputEventParams } from 'components/inputs/types';
import InputCheckbox from 'components/inputs/InputCheckbox';
import { sortableHandle } from 'components/atoms/Sortable';

import { InputSortableListItemProps } from './types';
import { StyledInputSortableListItem, StyledInputSortableListItemInner } from './style';
import InputSortableListItemHandle from './InputSortableListItemHandle';

const InputSortableListItemHandleContainer = sortableHandle(InputSortableListItemHandle);

const InputSortableListItem = forwardRef<HTMLDivElement, InputSortableListItemProps>(
  function InputSortableListItem(props, ref): JSX.Element {
    const {
      id: parentId,
      value,
      title,
      parentValue,
      size,
      disabled,
      parentDisabled,
      error,
      onFocus,
      onBlur,
      onChange,
      disallowBlur: parentDisallowBlur,
      allowBlur: parentAllowBlur,
    } = props;

    const checked = useMemo(() => parentValue?.includes(value), [parentValue, value]);

    const [focused, setFocused] = useState(false);
    const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);

    const handleFocus = () => {
      if (!focused) {
        setFocused(true);
        onFocus();
      }
    };

    const handleBlur = () => {
      if (disallowBlurFlag) return;
      setFocused(false);
      onBlur();
    };

    const handleChange = ({ value: checkboxValue }: InputEventParams) => {
      onChange({ id: value, value: checkboxValue as boolean });
    };

    const disallowBlur = () => {
      setDisallowBlurFlag(true);
      parentDisallowBlur();
    };

    const allowBlur = () => {
      if (disallowBlurFlag) {
        setDisallowBlurFlag(false);
        parentAllowBlur();
      }
    };

    useEffect(() => {
      if (parentDisabled && focused) handleBlur();
    }, [parentDisabled]);

    return (
      <StyledInputSortableListItem
        ref={ref}
        data-component="InputSortableListItem"
        data-parent-id={parentId}
        data-value={value}
        data-checked={checked}
        onMouseDown={disallowBlur}
        onMouseUp={allowBlur}
        sChecked={checked}
      >
        <Block font="primary" size="m">
          <Grid noWrap alignItems="center" spacing="xs">
            <Item grow>
              <StyledInputSortableListItemInner>
                <InputCheckbox
                  value={checked}
                  size={size}
                  id={`${parentId}_${value}`}
                  disabled={parentDisabled}
                  error={error}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  block
                >
                  {title}
                </InputCheckbox>
              </StyledInputSortableListItemInner>
            </Item>
            <Item>
              {disabled && <InputSortableListItemHandle size={size} disabled />}
              {!disabled && (
                <InputSortableListItemHandleContainer size={size} disabled={parentDisabled} />
              )}
            </Item>
          </Grid>
        </Block>
      </StyledInputSortableListItem>
    );
  },
);

export default InputSortableListItem;
