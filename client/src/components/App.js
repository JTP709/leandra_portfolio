import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import Header from './Header';
import About from './About';
import Blog from './Blog';
import Footer from './Footer';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.min.css';


class App extends Component {
  render() {
    return (
      <Grid>
        <Header />
        <Row className="about_header">
          <h1>About Me</h1>
          <hr />
        </Row>
        <About />
        <Blog />
        <Footer />
      </Grid>
    );
  }
}

export default App;
