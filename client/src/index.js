import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import axios from "axios";
import { store } from './mails/app/store';
import './styles/css/styles.css'

import MailApp from './MailApp';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MailApp />
    </Provider>
  </React.StrictMode>
);



