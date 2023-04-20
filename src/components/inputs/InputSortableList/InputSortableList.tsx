import React, { forwardRef, useState, useEffect } from 'react';

import { sortableContainer, sortableElement, arrayMove } from 'components/atoms/Sortable';

import { InputSortableListProps } from './types';
import { StyledInputSortableList, StyledInputSortableListContainer } from './style';
import InputSortableListItem from './InputSortableListItem';

const InputSortableListContainer = sortableContainer(
  forwardRef<HTMLDivElement, { children: React.ReactNode }>(function InputSortableListContainer(
    props,
    ref,
  ): JSX.Element {
    return (
      <StyledInputSortableListContainer
        ref={ref}
        data-component="InputSortableListContainer"
        data-checked="true"
      >
        {props.children}
      </StyledInputSortableListContainer>
    );
  }),
);

const InputSortableListItemContainer = sortableElement(InputSortableListItem);

const InputSortableList: React.FC<InputSortableListProps> = (props) => {
  const {
    id,
    size = 'm',
    error = false,
    disabled = false,
    onFocus = () => null,
    onBlur = () => null,
    onChange = () => null,
    value,
    options,
  } = props;

  const [focused, setFocused] = useState(false);
  const [disallowBlurFlag, setDisallowBlurFlag] = useState(false);

  const [checked, setChecked] = useState(value || []);
  const [unchecked, setUnchecked] = useState(
    options.map((item) => item.value).filter((item) => !value?.includes(item)),
  );

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
    const newChecked = itemValue ? [...checked, itemId] : checked.filter((item) => item !== itemId);
    const newUnchecked = itemValue
      ? unchecked.filter((item) => item !== itemId)
      : [itemId, ...unchecked];
    setChecked(newChecked);
    setUnchecked(newUnchecked);
    onChange({ id, value: newChecked });
  };

  const disallowBlur = () => {
    setDisallowBlurFlag(true);
  };

  const allowBlur = () => {
    if (disallowBlurFlag) {
      setDisallowBlurFlag(false);
    }
  };

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    const newValue = arrayMove(checked, oldIndex, newIndex);
    setChecked(newValue);
    onChange({ id, value: newValue });
  };

  useEffect(() => {
    setChecked(value || []);
    setUnchecked(options.map((item) => item.value).filter((item) => !value?.includes(item)));
  }, [options, value]);

  return (
    <StyledInputSortableList data-component="InputSortableList" data-id={id}>
      {!!checked.length && (
        <InputSortableListContainer onSortEnd={onSortEnd} useDragHandle>
          {checked.map((item, index) => (
            <InputSortableListItemContainer
              key={item}
              index={index}
              value={item}
              id={id}
              title={options.find((option) => option.value === item).title}
              parentValue={value}
              size={size}
              parentDisabled={disabled}
              disabled={disabled || !value?.includes(item)}
              error={error}
              allowBlur={allowBlur}
              disallowBlur={disallowBlur}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          ))}
        </InputSortableListContainer>
      )}
      {!!unchecked.length && (
        <StyledInputSortableListContainer
          data-component="InputSortableListContainer"
          data-checked="false"
        >
          {unchecked.map((item) => (
            <InputSortableListItem
              key={item}
              value={item}
              id={id}
              title={options.find((option) => option.value === item).title}
              parentValue={value}
              size={size}
              parentDisabled={disabled}
              disabled={!value?.includes(item)}
              error={error}
              allowBlur={allowBlur}
              disallowBlur={disallowBlur}
              onBlur={handleBlur}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          ))}
        </StyledInputSortableListContainer>
      )}
    </StyledInputSortableList>
  );
};

export default InputSortableList;
