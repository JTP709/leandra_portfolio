import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Blog from './Blog';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
