import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'react-toastify/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer
      position='top-center'
      limit={2}
      autoClose={3000}
      newestOnTop
      rtl
    />
  </>
);
