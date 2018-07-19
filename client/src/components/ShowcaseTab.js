import React, { Component } from 'react';
import {
	Col,
	Tabs,
	Tab
} from 'react-bootstrap';
import ConnectedBlogMain from '../containers/ConnectedBlogMain';

import PhotographyMain from './Photography/PhotographyMain';
import PortfolioMain from './Portfolio/PortfolioMain';
import LaboratoryMain from './Laboratory/LaboratoryMain';


class ShowcaseTabs extends Component {
  constructor(props, context) {
    super(props, context);
		this.state = { key: 1 };
		
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    this.setState({ key });
  }

  render() {
    return (
			<Col xs={ 12 } md={ 5 } className = "blog_header">
				<Tabs
					activeKey={this.state.key}
					onSelect={this.handleSelect}
					id="showcaseTabs"
				>
					<Tab eventKey={1} title="Blogs" >
						<ConnectedBlogMain />
					</Tab>
					<Tab eventKey={2} title="Portfolio" >
						<PortfolioMain />
					</Tab>
					<Tab eventKey={3} title="Photos" >
						<PhotographyMain />
					</Tab>
					<Tab eventKey={4} title="Lab" >
						<LaboratoryMain />
					</Tab>
				</Tabs>
			</Col>
    );
  }
}

export default ShowcaseTabs