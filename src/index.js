import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './components/Button/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button label='Click Me' />
  </React.StrictMode>
);