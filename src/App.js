import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { ThemeProvider } from 'styled-components';
import {theme} from './styles/theme';
import Header from './components/Header';
import GlobalStyle from './styles/global';

function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header/>
        <Routes/>
        <GlobalStyle/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
