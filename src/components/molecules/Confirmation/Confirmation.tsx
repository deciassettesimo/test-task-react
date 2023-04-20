import React from 'react';

import Modal from 'components/atoms/Modal';
import Block from 'components/atoms/Block';
import Grid, { Item } from 'components/atoms/Grid';
import Button from 'components/atoms/Button';

import { ConfirmationProps } from './types';

const Confirmation: React.FC<ConfirmationProps> = (props) => {
  const {
    title,
    labels,
    onConfirm,
    onCancel,
    confirmType = 'primary',
    cancelType = 'outline',
    children,
  } = props;

  return (
    <Modal
      font="primary"
      size="l"
      color="onBackground"
      backgroundColor="background"
      borderRadius="10px"
      minWidth={320}
      title={title ? <Block fontWeight="bold">{title}</Block> : undefined}
      onClose={onCancel}
      closingOnEscPress
    >
      <Block>
        <Block margin="m">{children}</Block>
        <Block margin="m">
          <Grid spacing="m" size={2}>
            <Item size={1}>
              <Button display="block" type={confirmType} onClick={onConfirm}>
                {labels.confirm}
              </Button>
            </Item>
            <Item size={1}>
              <Button display="block" type={cancelType} onClick={onCancel}>
                {labels.cancel}
              </Button>
            </Item>
          </Grid>
        </Block>
      </Block>
    </Modal>
  );
};

export default Confirmation;
