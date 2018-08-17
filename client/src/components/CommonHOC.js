import React from 'react';
import { Grid } from 'react-bootstrap';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const CommonHOC = (Content, ExtraContent, BonusContent) => {
  return () => (
    <Grid>
      <Navbar />
      <Header />
      <Content />
      { ExtraContent && <ExtraContent /> }
      { BonusContent && <BonusContent /> }
      <Footer />
    </Grid>
  );
};

export default CommonHOC;
