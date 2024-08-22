// Import necessary modules
import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot from react-dom/client
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import App from './App';
import './index.css';
import translationEN from './translatorData/en.json';
import translationES from './translatorData/es.json';
import translationPT from './translatorData/pt.json';

// Initialize i18n
i18n.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: { translation: translationEN },
    es: { translation: translationES },
    pt: { translation: translationPT },
  },
});

// Use createRoot from react-dom/client
const root = createRoot(document.getElementById('root'));

// Render the app with Router
root.render(
  <React.StrictMode>
    <Router>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Router>
  </React.StrictMode>
);
