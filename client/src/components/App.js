import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import ConnectedWork from '../containers/ConnectedWork';
import Footer from './Footer';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.min.css';


class App extends Component {
  render() {
    return (
      <Grid>
        <Navbar />
        <Header />
        <About />
        <ConnectedWork />
        <Footer />
      </Grid>
    );
  }
}

export default App;
