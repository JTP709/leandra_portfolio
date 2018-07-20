import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class PortfolioMain extends Component{
	render(){
		return(
			<Row id="portfolio_section">

				<Col xs={ 12 }><hr /></Col>

				<Col md={12}>
					<h1>Portfolio!</h1>
				</Col>

				<Col xs={ 12 }><hr /></Col>
				
			</Row>
		)
	}
}

export default PortfolioMain;