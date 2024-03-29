import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SupabaseProvider } from './Providers/SupabaseProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './Styled/Global.style.js';
import { ThemeProvider } from 'styled-components'
import { theme } from './Styled/Theme.style.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <SupabaseProvider>
        <ThemeProvider theme={ theme }>
          <BrowserRouter>
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </SupabaseProvider>
  </React.StrictMode>,
);
