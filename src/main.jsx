import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Inicio from './inicio.jsx';  // Asegúrate de que coincida con el nombre del archivo
import { UserProvider } from './UserContext.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <Inicio />
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
