import React from 'react';
import ReactDOM from 'react-dom/client';

import Application from 'application';

function init() {
  const root = ReactDOM.createRoot(document.querySelector('#root'));

  root.render(
    <React.StrictMode>
      <Application />
    </React.StrictMode>,
  );
}

document.addEventListener('DOMContentLoaded', init);
