import React from 'react';

import Block from 'components/atoms/Block';

export function alertMessage(data: string) {
  return (
    <Block font="primary" size="m">
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </Block>
  );
}
