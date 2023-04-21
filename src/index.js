import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tailwind.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className="flex h-screen w-screen justify-center items-center">
      <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
