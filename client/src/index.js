import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import axios from "axios";
import { store } from './mails/app/store';
import Loader from "../src/mails/views/layouts/loader/Loader.jsx";
import './styles/css/styles.css';

import AppRouter from '../src/router/AppRouter';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </React.StrictMode>
  </Suspense>

);



