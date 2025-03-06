import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Inicio from './inicio.jsx';  // Asegúrate de que coincida con el nombre del archivo

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Inicio />
    </BrowserRouter>
  </React.StrictMode>
);
