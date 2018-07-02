import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid } from 'react-bootstrap';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import ConnectedAdmin from '../containers/ConnectedAdmin';
import ConnectedWork from '../containers/ConnectedWork';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.min.css';


class App extends Component {
  render() {
    const AdminPage = () => <ConnectedAdmin />
    const IndexPage = () => (
      <Grid>
        <Navbar />
        <Header />
        <About />
        <ConnectedWork />
        <Footer />
      </Grid>
    )

    return (
      <Router>
        <div>
          <Route exact path="/" component={ IndexPage } />
          <Route path="/admin" component={ AdminPage } />
        </div>
      </Router>
    );
  }
}

export default App;
