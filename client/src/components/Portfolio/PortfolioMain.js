import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import ShowcaseNav from '../ShowcaseNav';

class PortfolioMain extends Component{
	render(){
		return(
			<Row id="work">

				<Col xs={ 12 }><hr /></Col>

				<ShowcaseNav
					visibility={{
						blog: false,
						photography: false,
						portfolio: true,
						laboratory: false
					}}
				/>

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