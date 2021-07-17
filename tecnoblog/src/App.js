import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';

import Header from './componentes/Header';
import Submenu from './componentes/Submenu';
import Footer from './componentes/Footer';


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