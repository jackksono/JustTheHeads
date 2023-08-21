import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// JavaScript to toggle dark mode class
const body = document.body;

function toggleDarkMode() {
  body.classList.toggle('dark');
}

// Add event listener to toggle dark mode
document.addEventListener('DOMContentLoaded', () => {
  const darkModeButton = document.getElementById('dark-mode-button');
  if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
