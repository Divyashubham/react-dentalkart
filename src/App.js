import React from 'react';
import './style.css';

import { Home } from './routes/home/Home';

export const App = () => {
  return (
    <div className="main-container">
      <Home />
    </div>
  );
};
