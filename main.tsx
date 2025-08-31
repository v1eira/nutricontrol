import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './presentation/App';
import './styles.css';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App />);
}
