import React from 'react';
import './index.css';
import App from './App';
import {createRoot} from 'react-dom/client'
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={<App />}/>
    </Routes>
    </Router>
  </React.StrictMode>
);
