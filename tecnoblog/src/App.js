import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';

import Header from './components/Header';
import Submenu from './components/Submenu';
import Footer from './components/Footer';



function App() {
  return (
    <div className="page-container"> 
      <div className="content-wrap">
      <BrowserRouter>
        <Header />
        <Submenu />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;