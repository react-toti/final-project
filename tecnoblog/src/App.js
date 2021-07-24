import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';

import Header from './components/Header';
import Submenu from './components/Submenu';
import Footer from './components/Footer';


function App() {
  return (
      <BrowserRouter>
        <Header />
        <Submenu />
        <Footer />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
  );
}

export default App;