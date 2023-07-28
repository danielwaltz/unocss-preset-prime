import './lara-dark-indigo-theme.css';
import './lara-light-indigo-theme.css';
import 'virtual:uno.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
