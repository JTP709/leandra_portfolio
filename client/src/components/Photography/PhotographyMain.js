import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ShowcaseNavButtons from '../ShowcaseNavButtons';

class PhotographyMain extends Component{
	render(){
		return(
			<div>
				<ShowcaseNavButtons
					visibility={{
						blog: false,
						photography: true,
						portfolio: false,
						laboratory: false
					}}
				/>
				<Col md={12}>
					<h1>Photos!</h1>
				</Col>
			</div>
		)
	}
}

export default PhotographyMain;