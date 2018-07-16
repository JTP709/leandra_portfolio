import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import ShowcaseNavButtons from '../ShowcaseNavButtons';

class PhotographyMain extends Component{
	render(){
		return(
			<Row id="work">

				<Col xs={ 12 }><hr /></Col>

				<ShowcaseNavButtons
					visibility={{
						blog: false,
						photography: true,
						portfolio: false,
						laboratory: false
					}}
				/>

				<Col xs={ 12 }><hr /></Col>

				<Col md={12}>
					<h1>Photos!</h1>
				</Col>
				
				<Col xs={ 12 }><hr /></Col>

			</Row>
		)
	}
}

export default PhotographyMain;