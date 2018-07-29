import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { getPortfolios } from 'site-redux';

class PortfolioMain extends Component{
	render(){
		const { portfolios } = this.props;
		return(
			<Row id="portfolio_section">
				<Col xs={ 12 }><hr /></Col>
				<Col md={12}>
					<h1>Portfolio!</h1>
					{ portfolios.map(portfolio => <img alt="thumnail" src={ portfolio.thumbnail } /> ) }
				</Col>
				<Col xs={ 12 }><hr /></Col>
			</Row>
		)
	}
}

const mapStateToProps = state => {
	const portfolios = getPortfolios(state);
	return {
		portfolios
	}
}

export default connect(mapStateToProps)(PortfolioMain);