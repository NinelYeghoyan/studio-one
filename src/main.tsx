import '@i18n/config';

import { store } from '@store/index.ts';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter basename="/studio-one/">
      <App />
    </BrowserRouter>
  </Provider>,
);
