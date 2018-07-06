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
  componentDidMount(){
    this.props.fetchBlogs();
  }

  render() {
    const BlogDashboard = () => <ConnectedAdmin page="blog_dashboard" />
    const NewBlogForm = () => <ConnectedAdmin page="new_blog_form" />
    const UpdateBlogForm = ({ match }) => <ConnectedAdmin page="update_blog_form" blogId={ match.params.id } />
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
          <Route exact path="/admin/blog" component={ BlogDashboard } />
          <Route exact path="/admin/blog/new" component={ NewBlogForm } />
          <Route exact path="/admin/blog/update/:id" component= { UpdateBlogForm } />
        </div>
      </Router>
    );
  }
}

export default App;
