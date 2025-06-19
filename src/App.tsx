import React from 'react';

import Header from './components/header';
import MainBanner from './components/mainBanner';
import FastLinks from './components/fastLinks';
import Plans from './components/plans';
import Testimonial from './components/testimonial';
import Customers from './components/customers';
import Coverage from './components/coverage';
import CallToWhatsapp from './components/callToWhatsapp';
import Footer from './components/footer';
import Whatsapp from './components/whatsapp';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainBanner />
      <FastLinks />
      <Plans/>
      <Testimonial/>
      <Customers/>
      <Coverage/>
      <CallToWhatsapp/>
      <Footer/>
      <Whatsapp/>
    </React.Fragment>
  );
}

export default App;