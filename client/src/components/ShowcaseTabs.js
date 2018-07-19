import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Col,
	Tabs,
	Tab
} from 'react-bootstrap';
import { getPathname } from '../reducers/rootReducer';
import { redirectPage } from '../actions/actionCreators';
import ConnectedBlogMain from '../containers/ConnectedBlogMain';

import PhotographyMain from './Photography/PhotographyMain';
import PortfolioMain from './Portfolio/PortfolioMain';
import LaboratoryMain from './Laboratory/LaboratoryMain';


class ShowcaseTabs extends Component {
  constructor(props, context) {
		super(props, context);
		


		// this.state = { key: 1 };
		
		this.handleSelect = this.handleSelect.bind(this);
		this.calculateKey = this.calculateKey.bind(this);
	}
	
	calculateKey(){
		const { pathname } = this.props;
		const keys = {
			'/blog': 1,
			'/portfolio': 2,
			'/photography': 3,
			'/laboratory': 4
		}
		return keys[pathname];
	}

  handleSelect(key) {
		const redirects = {
			1: "/blog",
			2: "/portfolio",
			3: "/photography",
			4: "/laboratory"
		}

		// this.setState({ key });
		redirectPage(redirects[key]);
  }

  render() {
    return (
			<Col xs={ 12 } md={ 12 } id = "work">

				<hr />

				<Tabs
					activeKey={this.calculateKey()}
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

// export default ShowcaseTabs

const mapStateToProps = (state) => {
	const pathname = getPathname(state);
	return {
		pathname
	}
}

const mapDispatchToProps = {
	redirectPage
}

const ConnectedShowcaseTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowcaseTabs)

export default ConnectedShowcaseTabs;