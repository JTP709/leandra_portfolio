import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router';

import CommonHOC from './CommonHOC';
import About from './About';
import Services from './Services';
import BlogMain from '../containers/ConnectedBlogMain';
import PhotographyMain from './Photography/PhotographyMain';
import PortfolioMain from './Portfolio/PortfolioMain';
import LaboratoryMain from './Laboratory/LaboratoryMain';

import ConnectedAdmin from '../containers/ConnectedAdmin';

import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.min.css';
import '../styles/App.css';

class App extends Component {
  componentDidMount(){
    const { blogs, filters, fetchBlogs, fetchFilters, fetchPortfolio } = this.props;
    blogs.length === 0 && fetchBlogs();
    filters.length === 0 && fetchFilters();
    fetchPortfolio();
  }
  
  render() {
    const AdminPageUpdateBlog = ({ match }) => <ConnectedAdmin blogId={ match.params.id } />
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          {/* INDEX */}
          <Route exact path="/" component={ CommonHOC(About, Services, PortfolioMain) } />
          <Route exact path="/blog" component={ CommonHOC(BlogMain) } />
          <Route exact path="/photography" component={ CommonHOC(PhotographyMain) } />
          <Route exact path="/laboratory" component={ CommonHOC(LaboratoryMain) } />
          {/* ADMIN */}
          <Route exact path="/admin" component={ ConnectedAdmin } />
          {/* ADMIN BLOG */}
          <Route exact path="/admin/blog" component={ ConnectedAdmin } />
          <Route exact path="/admin/blog/new" component={ ConnectedAdmin } />
          <Route exact path="/admin/blog/update/:id" component={ AdminPageUpdateBlog } />
          <Route exact path="/admin/blog/filters" component={ ConnectedAdmin } />
          {/* ADMIN PORTFOLIO */}
          <Route exact path="/admin/portfolio" component={ ConnectedAdmin } />
          {/* ADMIN PHOTOGRAPHY */}
          <Route exact path="/admin/photography" component={ ConnectedAdmin } />
          {/* ADMIN LABORATORY */}
          <Route exact path="/admin/laboratory" component={ ConnectedAdmin } />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default App;
