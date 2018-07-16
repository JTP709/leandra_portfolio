import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ShowcaseNavButtons from '../ShowcaseNavButtons';

class LaboratoryMain extends Component{
	render(){
		return(
			<div>
				<ShowcaseNavButtons
					visibility={{
						blog: false,
						photography: false,
						portfolio: false,
						laboratory: true
					}}
				/>
				<Col md={12}>
					<h1>Laboratory!</h1>
				</Col>
			</div>
		)
	}
}

export default LaboratoryMain;