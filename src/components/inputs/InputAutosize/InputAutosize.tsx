import React, { forwardRef, useRef, useEffect } from 'react';

import useComposedRef from 'utils/useComposedRef';

import calculateNodeHeight from './calculateNodeHeight';
import getSizingData from './getSizingData';
import { InputAutosizeProps } from './types';
import { StyledInputAutosize } from './style';

const InputAutosize = forwardRef<HTMLTextAreaElement, InputAutosizeProps>(function InputAutosize(
  props,
  ref,
): JSX.Element {
  const { onChange = () => {}, ...rest } = props;

  const isControlled = props.value !== undefined;
  const libRef = useRef(null);
  const composedRef = useComposedRef(libRef, ref);
  const heightRef = useRef(0);

  const resizeTextarea = () => {
    const nodeSizingData = getSizingData(libRef.current);

    if (!nodeSizingData) return;

    const height = calculateNodeHeight(
      nodeSizingData,
      libRef.current.value || libRef.current.placeholder || 'x',
    );

    if (heightRef.current !== height) {
      heightRef.current = height;
      libRef.current.style.setProperty('height', `${height}px`, 'important');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) {
      resizeTextarea();
    }
    onChange(event);
  };

  useEffect(resizeTextarea);

  useEffect(() => {
    window.addEventListener('resize', resizeTextarea);

    return () => {
      window.removeEventListener('resize', resizeTextarea);
    };
  }, []);

  return (
    <StyledInputAutosize
      as="textarea"
      {...rest}
      style={{ resize: 'none' }}
      onChange={handleChange}
      ref={composedRef}
    />
  );
});

export default InputAutosize;
