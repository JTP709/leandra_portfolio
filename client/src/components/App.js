import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router';
import { Grid } from 'react-bootstrap';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import ConnectedAdmin from '../containers/ConnectedAdmin';
import ConnectedBlogMain from '../containers/ConnectedBlogMain';

import PhotographyMain from './Photography/PhotographyMain';
import PortfolioMain from './Portfolio/PortfolioMain';
import LaboratoryMain from './Laboratory/LaboratoryMain';

import '../styles/bootstrap.min.css';
import '../styles/bootstrap-theme.min.css';


class App extends Component {
  componentDidMount(){
    const { blogs, filters, fetchBlogs, fetchFilters } = this.props;
    if (blogs.length === 0){
      fetchBlogs();
    }
    if (filters.length === 0){
      fetchFilters();
    }
  }

  render() {
    const IndexPage = component =>
      <Grid>
        <Navbar />
        <Header />
        <About />
        { component }
        <Footer />
      </Grid>
    const BlogDashboard = () => <ConnectedAdmin page="blog_dashboard" />
    const NewBlogForm = () => <ConnectedAdmin page="new_blog_form" />
    const UpdateBlogForm = ({ match }) => <ConnectedAdmin page="update_blog_form" blogId={ match.params.id } />
    const FiltersDashboard = () => <ConnectedAdmin page="filter_dashboard" />
    const BlogPage = () => IndexPage(<ConnectedBlogMain />);
    const PhotographyPage = () => IndexPage(<PhotographyMain />);
    const PortfolioPage = () => IndexPage(<PortfolioMain />);
    const LaboratoryPage = () => IndexPage(<LaboratoryMain />);


    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route exact path="/" component={ BlogPage } />
          <Route exact path="/blog" component={ BlogPage } />
          <Route exact path="/photography" component={ PhotographyPage } />
          <Route exact path="/portfolio" component={ PortfolioPage } />
          <Route exact path="/laboratory" component={ LaboratoryPage } />
          <Route exact path="/admin/blog" component={ BlogDashboard } />
          <Route exact path="/admin/blog/new" component={ NewBlogForm } />
          <Route exact path="/admin/blog/update/:id" component={ UpdateBlogForm } />
          <Route exact path="/admin/blog/filters" component={ FiltersDashboard } />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default App;
