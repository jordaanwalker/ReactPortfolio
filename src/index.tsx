import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';
import './styles/globals.css';

const container = document.getElementById('root');
const root = createRoot(container!);

const Index = () => {
  const [theme, setTheme] = React.useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
