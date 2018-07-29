import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Image } from 'react-bootstrap';
import { getPortfolios } from 'site-redux';
import '../../styles/portfolio/PortfolioMain.css';

class PortfolioMain extends Component{
	render(){
		const { portfolios } = this.props;
		return(
			<Row id="portfolio_section">
					{ 
						portfolios.map(portfolio => (
							<Image 
								className="portfolio_thumbnail"
								alt="thumnail"
								src={ portfolio.thumbnail }
								responsive
							/>
						))
					}
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