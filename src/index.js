import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';
import { theme } from 'utils';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
