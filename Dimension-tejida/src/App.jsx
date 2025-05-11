
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      </BrowserRouter>
  );
}

export default App;