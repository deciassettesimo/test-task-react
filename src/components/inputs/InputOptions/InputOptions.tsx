import React, { useState, useEffect, useRef } from 'react';

import Block from 'components/atoms/Block';
import { Option } from 'components/inputs/types';

import { InputOptionsProps } from './types';
import { StyledInputOptions, StyledInputOptionsInner } from './style';

import InputOptionsItem from './InputOptionsItem';

const InputOptions: React.FC<InputOptionsProps> = (props) => {
  const {
    inputId,
    inputFocused,
    inputOpened,
    options = [],
    selected,
    optionRenderer,
    onMouseDown,
    onMouseUp,
    onChange,
    onClose,
  } = props;

  const [active, setActive] = useState(selected);

  const node = useRef(null);
  const innerNode = useRef(null);
  const itemsRef = useRef([]);

  const handleChange = (params: Option) => {
    setActive(params.value);
    if (params.value !== selected) onChange(params);
  };

  const activatePrevOption = () => {
    const current = active || selected;
    const activeOptionIndex = options.findIndex((item) => item.value === current);
    const prevOptionIndex = activeOptionIndex <= 0 ? options.length - 1 : activeOptionIndex - 1;
    const prevOptionValue = options[prevOptionIndex].value;
    setActive(prevOptionValue);
  };

  const activateNextOption = () => {
    const current = active || selected;
    const activeOptionIndex = options.findIndex((item) => item.value === current);
    const nextOptionIndex = activeOptionIndex >= options.length - 1 ? 0 : activeOptionIndex + 1;
    const nextOptionValue = options[nextOptionIndex].value;
    setActive(nextOptionValue);
  };

  const selectActiveOption = () => {
    const option = options.find((item) => item.value === active) || options[0];
    if (option) handleChange(option);
    onClose();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (inputFocused && inputOpened) {
      switch (e.which) {
        case 38: // arrow up
          e.preventDefault();
          activatePrevOption();
          break;
        case 40: // arrow down
          e.preventDefault();
          activateNextOption();
          break;
        case 13: // enter
          e.preventDefault();
          selectActiveOption();
          break;
        default:
          break;
      }
    }
  };

  const onOptionClick = (params: Option) => {
    handleChange(params);
    onClose();
  };

  const onOptionMouseEnter = (value: string) => {
    setActive(value);
  };

  const onOptionMouseLeave = () => {
    setActive(null);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputFocused, inputOpened, selected, active, options]);

  useEffect(() => {
    if (inputOpened) setActive(selected);
    else setActive(null);
  }, [inputOpened]);

  useEffect(() => {
    const getActiveItemNode = () => {
      const activeItemIndex = options.findIndex((item) => item.value === active);
      if (activeItemIndex >= 0 && itemsRef.current[activeItemIndex])
        return itemsRef.current[activeItemIndex];
      return null;
    };

    const scrollToActiveItem = () => {
      const activeItemNode = getActiveItemNode();
      if (node.current && activeItemNode) {
        const nodeBCR = node.current.getBoundingClientRect();
        const activeItemNodeBCR = activeItemNode.getBoundingClientRect();
        if (nodeBCR.top > activeItemNodeBCR.top)
          innerNode.current.scrollTop -= nodeBCR.top - activeItemNodeBCR.top;
        if (nodeBCR.bottom < activeItemNodeBCR.bottom)
          innerNode.current.scrollTop += activeItemNodeBCR.bottom - nodeBCR.bottom;
      }
    };

    scrollToActiveItem();
  }, [active, inputOpened]);

  return (
    <StyledInputOptions
      data-component="InputOptions"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      ref={node}
    >
      <StyledInputOptionsInner ref={innerNode}>
        <Block data-input-id={inputId} size="m" font="primary" color="primary">
          {options.map((item, index) => (
            <InputOptionsItem
              key={item.value}
              ref={(element: HTMLDivElement) => (itemsRef.current[index] = element)}
              {...item}
              inputId={inputId}
              selected={item.value === selected}
              active={item.value === active}
              renderer={optionRenderer}
              onClick={onOptionClick}
              onMouseEnter={onOptionMouseEnter}
              onMouseLeave={onOptionMouseLeave}
            />
          ))}
        </Block>
      </StyledInputOptionsInner>
    </StyledInputOptions>
  );
};

export default InputOptions;
