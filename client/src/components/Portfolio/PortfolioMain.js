import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ShowcaseNavButtons from '../ShowcaseNavButtons';

class PortfolioMain extends Component{
	render(){
		return(
			<div>
				<ShowcaseNavButtons
					visibility={{
						blog: false,
						photography: false,
						portfolio: true,
						laboratory: false
					}}
				/>
				<Col md={12}>
					<h1>Phortfolio!</h1>
				</Col>
			</div>
		)
	}
}

export default PortfolioMain;