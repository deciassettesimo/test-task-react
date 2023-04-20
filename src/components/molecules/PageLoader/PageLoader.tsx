import React from 'react';

import Modal from 'components/atoms/Modal';
import Loader from 'components/atoms/Loader';

const PageLoader: React.FC = () => {
  return (
    <Modal
      width={160}
      height={100}
      color="onBackground"
      backgroundColor="primary95"
      borderRadius="10px"
    >
      <Loader type="dots" centered />
    </Modal>
  );
};

export default PageLoader;
