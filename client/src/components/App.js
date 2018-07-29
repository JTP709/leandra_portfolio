import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router';
import { Grid } from 'react-bootstrap';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import ConnectedAdmin from '../containers/ConnectedAdmin';
import ShowcaseTabs from './ShowcaseTabs';

import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.min.css';


class App extends Component {
  componentDidMount(){
    const { blogs, filters, fetchBlogs, fetchFilters, fetchPortfolio } = this.props;
    if (blogs.length === 0){
      fetchBlogs();
    }
    if (filters.length === 0){
      fetchFilters();
    }
    fetchPortfolio();
  }

  render() {
    const IndexPage = () =>
      <Grid>
        <Navbar />
        <Header />
        <About />
        <ShowcaseTabs />
        <Footer />
      </Grid>
    const AdminPage = () => <ConnectedAdmin />
    const AdminPageUpdateBlog = ({ match }) => <ConnectedAdmin blogId={ match.params.id } />

    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          {/* INDEX */}
          <Route exact path="/" component={ IndexPage } />
          <Route exact path="/blog" component={ IndexPage } />
          <Route exact path="/photography" component={ IndexPage } />
          <Route exact path="/portfolio" component={ IndexPage } />
          <Route exact path="/laboratory" component={ IndexPage } />
          {/* ADMIN */}
          <Route exact path="/admin" component={ AdminPage } />
          {/* ADMIN BLOG */}
          <Route exact path="/admin/blog" component={ AdminPage } />
          <Route exact path="/admin/blog/new" component={ AdminPage } />
          <Route exact path="/admin/blog/update/:id" component={ AdminPageUpdateBlog } />
          <Route exact path="/admin/blog/filters" component={ AdminPage } />
          {/* ADMIN PORTFOLIO */}
          <Route exact path="/admin/portfolio" component={ AdminPage } />
          {/* ADMIN PHOTOGRAPHY */}
          <Route exact path="/admin/photography" component={ AdminPage } />
          {/* ADMIN LABORATORY */}
          <Route exact path="/admin/laboratory" component={ AdminPage } />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default App;
