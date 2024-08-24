import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import '@style/normalize.css';
import '@style/index.css';
import '@style/adaptiveness.css';
import '@style/adaptiveness-debug.css';

// Components
import { Provider } from 'react-redux';
// import { ApiProvider } from '@reduxjs/toolkit/dist/query';
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { RouterProvider } from 'react-router-dom';
import { store } from '~/store';
// import { usersApi } from '~/store/api';
import router from '~/routes';

const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <Provider store={store}>
      {/*<ApiProvider api={usersApi}>*/}
      <RouterProvider router={router} />
      {/*</ApiProvider>*/}
    </Provider>
  );
}
