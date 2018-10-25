import React from 'react';
import { Grid } from 'react-bootstrap';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const CommonHOC = (ComponentOne, ComponentTwo, ComponentThree, ComponentFour) => {
  return () => (
    <Grid>
      <Navbar />
      <div className='mainContainer'>
        <Header />
        { ComponentOne && <ComponentOne /> }
        { ComponentTwo && <ComponentTwo /> }
        { ComponentThree && <ComponentThree /> }
        { ComponentFour && <ComponentFour /> }
      </div>
      <Footer />
    </Grid>
  );
};

export default CommonHOC;
