import React from 'react';

import Header from './components/header';
import MainBanner from './components/mainBanner';
import FastLinks from './components/fastLinks';

import './style/base.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainBanner />
      <FastLinks />
    </React.Fragment>
  );
}

export default App;
